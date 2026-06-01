# Admin Panel Design — Career Workshop 2026

**Date:** 2026-06-01
**Status:** Approved

## Goal

Build a full admin panel at `/admin` so the site owner can control every section of the landing page, manage multiple workshop editions over time, view registrations, and upload images — without ever touching code again.

## Decisions Made

| Question | Answer |
|---|---|
| Auth method | Supabase Auth — email + password |
| Show registrations in admin? | Yes — table view + CSV export |
| Single or multi-workshop? | Multi — one active at a time, reuse for future years |

---

## Architecture

### Three layers

**1. Auth layer**
Supabase Auth (email + password). Admin account created once in Supabase dashboard. A Next.js `src/middleware.ts` guards every `/admin/*` route — unauthenticated requests redirect to `/admin/login` before the page renders.

**2. Content layer**
All landing page content moves from hardcoded TSX into Supabase tables. The landing page becomes fully server-rendered, fetching the active workshop's content on each request. Every section falls back to its current hardcoded text if no DB record exists yet, so nothing breaks during rollout.

**3. Admin panel**
Lives at `/admin`. Sidebar navigation. Uses the same CSS variable system as the landing page (light/dark toggle included).

### Routes

```
/admin/login           ← login page (public)
/admin                 ← dashboard: registration count, active workshop name
/admin/content         ← content editor, tabbed by section
/admin/workshops       ← create & manage workshop editions, set active
/admin/registrations   ← table of signups + CSV export
```

### Workshop model

A `workshops` table holds each edition (2026, 2027, etc.). Exactly one row has `is_active = true` — that is what the landing page renders. When ready for a new event: create a new workshop record, fill in its content, flip it active. Old registrations stay linked to their workshop via FK.

---

## Data Model

### New tables

```sql
workshops
  id           uuid PK
  title        text        -- "Technology Career Workshop 2026"
  slug         text unique -- "2026"
  is_active    boolean default false
  created_at   timestamptz default now()

workshop_hero                    -- 1 row per workshop
  id, workshop_id FK
  badge_text, headline, sub_headline
  duration, format, audience     -- trust-row items

workshop_outcomes                -- list, ordered
  id, workshop_id FK
  number, title, body, display_order

workshop_sessions                -- agenda, ordered
  id, workshop_id FK
  idx, title, description, display_order

workshop_speaker                 -- 1 row per workshop
  id, workshop_id FK
  name, role, company
  bio_1, bio_2                   -- two bio paragraphs (text)
  photo_url                      -- Supabase Storage public URL
  credentials                    -- text[] array

workshop_testimonials            -- list, ordered
  id, workshop_id FK
  quote, author_name, author_info
  avatar_url                     -- optional, Supabase Storage

workshop_reg_bullets             -- registration section bullets, ordered
  id, workshop_id FK
  text, display_order
```

### Modified table

```sql
-- Add to existing workshop_registrations:
ALTER TABLE workshop_registrations
  ADD COLUMN workshop_id uuid REFERENCES workshops(id);
```

New registrations automatically receive the currently active workshop's ID via the server action.

### RLS policies

- All content tables: `SELECT` allowed for `anon` role (public landing page reads work)
- All content tables: `INSERT / UPDATE / DELETE` allowed only for `authenticated` role (admin)
- `workshop_registrations`: `INSERT` for `anon` (public signup), `SELECT` for `authenticated` only

### Supabase Storage

- Bucket: `workshop-assets` (public)
- Path pattern: `/{workshop_id}/speaker.{ext}` and `/{workshop_id}/testimonials/{testimonial_id}.{ext}`
- Max file size: 5 MB
- Accepted types: JPG, PNG, WebP

---

## Admin Panel UI

### Layout

Sticky sidebar on the left, content area on the right. Same font and CSS variables as the landing page.

```
┌─────────────────────────────────────────────────────┐
│  Leafclutch Admin                  [theme] [logout] │
├──────────────┬──────────────────────────────────────┤
│  Dashboard   │  <page content>                       │
│  Content  ▼  │                                       │
│    Hero      │                                       │
│    Outcomes  │                                       │
│    Agenda    │                                       │
│    Speaker   │                                       │
│    Testim.   │                                       │
│    Reg. Sec. │                                       │
│  Registrat.  │                                       │
│  Workshops   │                                       │
└──────────────┴──────────────────────────────────────┘
```

### Dashboard

- Active workshop name + slug
- Total registrations for active workshop
- Quick links to content editor and registrations

### Content Editor (`/admin/content`)

Tab per section. Each tab is a form with a single **Save Changes** button. No auto-save.

| Tab | Fields |
|---|---|
| Hero | badge_text, headline, sub_headline, duration, format, audience |
| Outcomes | List of cards: number, title, body. Add / delete / drag-to-reorder. |
| Agenda | List of sessions: idx, title, description. Add / delete / drag-to-reorder. |
| Speaker | name, role, company, bio_1, bio_2, credentials (one per line), photo upload |
| Testimonials | List of cards: quote, author_name, author_info, optional avatar upload |
| Registration | headline, sub_headline, bullet points list |

**Image upload UI (Speaker & Testimonials):**
- Current image preview shown
- Drag-and-drop zone or click-to-browse
- Accepted: JPG, PNG, WebP, max 5 MB
- On select: uploads to Supabase Storage → URL saved to DB → preview updates immediately

### Workshops (`/admin/workshops`)

- Table: title, slug, status badge (Active / Draft), created date
- "New Workshop" button → modal with title + slug fields → creates row in DB
- "Set Active" button per row → sets `is_active = true` on that row, `false` on all others
- Edit title/slug inline

### Registrations (`/admin/registrations`)

- Workshop selector dropdown (default: active workshop)
- Table columns: full_name, email, phone, college, created_at
- Sort by any column
- **Export CSV** button at top right — downloads all registrations for selected workshop

---

## Landing Page Changes

Every section component gains a server-side data fetch for the active workshop. Content flows:

```
workshops (is_active=true)
  → fetch section rows
  → pass as props to section component
  → render (falls back to hardcoded defaults if DB row missing)
```

Components affected: `Hero`, `Outcomes`, `Agenda`, `Speaker`, `Testimonials`, `RegistrationSection`.

No visible change for visitors. Page still renders as fast server-side HTML. Supabase queries are fast (indexed on `workshop_id`).

---

## File Structure (new files)

```
src/
  middleware.ts                        ← auth guard
  app/
    admin/
      layout.tsx                       ← sidebar shell + auth check
      page.tsx                         ← dashboard
      login/
        page.tsx                       ← login form
      content/
        page.tsx                       ← content editor (tabbed)
      workshops/
        page.tsx                       ← workshop management
      registrations/
        page.tsx                       ← registrations table
  actions/
    admin/
      auth.ts                          ← login / logout server actions
      content.ts                       ← save section content server actions
      workshops.ts                     ← create / activate workshop actions
      registrations.ts                 ← fetch / export registrations
      images.ts                        ← upload to Supabase Storage
  lib/
    admin/
      queries.ts                       ← typed DB fetch functions (active workshop, sections)
  components/
    admin/
      Sidebar.tsx
      ContentTabs.tsx
      sections/
        HeroEditor.tsx
        OutcomesEditor.tsx
        AgendaEditor.tsx
        SpeakerEditor.tsx
        TestimonialsEditor.tsx
        RegistrationEditor.tsx
      ImageUpload.tsx
      SortableList.tsx                 ← drag-to-reorder wrapper
      RegistrationsTable.tsx
      WorkshopsTable.tsx
supabase/
  migrations/
    0002_admin_content_tables.sql      ← all new tables + RLS
    0003_registrations_workshop_fk.sql ← add workshop_id to existing table
```

---

## Out of Scope

- Email sending / notification system (handled separately if needed)
- Multi-admin user management (one admin account is sufficient)
- Image cropping or resizing in the browser
- Undo / revision history for content changes
