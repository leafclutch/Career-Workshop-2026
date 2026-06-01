-- Enable pgcrypto for UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Workshop registrations table
CREATE TABLE IF NOT EXISTS workshop_registrations (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name      TEXT        NOT NULL,
  email          TEXT        NOT NULL,
  phone          TEXT        NOT NULL,
  college        TEXT,
  current_status TEXT,
  created_at     TIMESTAMP   DEFAULT NOW(),
  email_status   TEXT        DEFAULT 'pending'
);

CREATE INDEX IF NOT EXISTS idx_workshop_reg_email
  ON workshop_registrations(email);

CREATE INDEX IF NOT EXISTS idx_workshop_reg_created
  ON workshop_registrations(created_at DESC);
