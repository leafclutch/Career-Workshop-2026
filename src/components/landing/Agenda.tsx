import FadeIn from '@/components/FadeIn'

const sessions = [
  {
    idx: '01',
    title: 'Understanding Technology Careers',
    desc: 'A complete overview of every major role in the technology industry and what each one actually involves day to day.',
  },
  {
    idx: '02',
    title: 'Industry Trends and Opportunities',
    desc: 'Where the industry is heading over the next five years and which skills are becoming more or less valuable.',
  },
  {
    idx: '03',
    title: 'Choosing The Right Path',
    desc: 'A structured framework for deciding which career direction fits your strengths, interests, and goals.',
  },
  {
    idx: '04',
    title: 'Skills Employers Actually Value',
    desc: 'What hiring managers look for that no curriculum covers. How to stand out as a candidate who has never worked before.',
  },
  {
    idx: '05',
    title: 'Live Q&A',
    desc: 'Open floor. Ask anything about your specific situation: career choices, courses, college decisions, or anything else.',
  },
]

export default function Agenda() {
  return (
    <section className="cw-section-pad" id="agenda" aria-labelledby="agenda-heading">
      <div className="cw-container">
        <div
          className="cw-mobile-gap"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
        >
          {/* Left */}
          <FadeIn>
            <span className="cw-eyebrow">Workshop Structure</span>
            <h2 id="agenda-heading" style={{ fontSize: 'clamp(26px,3vw,36px)', fontWeight: 700, letterSpacing: '-0.7px', lineHeight: 1.25, marginBottom: '18px', color: 'var(--text)' }}>
              90 Minutes.<br />Five Focused Sessions.
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}>
              Every minute is structured to give you maximum value.
              No filler. No sales pitches. A direct conversation about
              building a career in technology.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, text: 'Duration: 90 minutes' },
                { icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>, text: 'Format: Live, online' },
                { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></>, text: 'Open to: All students and graduates' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--muted)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-h)" strokeWidth="2" style={{ flexShrink: 0 }}>
                    {icon}
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn>
            <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }} role="list">
              {sessions.map(({ idx, title, desc }) => (
                <li key={idx} className="cw-agenda-item">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--muted-2)', letterSpacing: '0.5px', paddingTop: '3px', flexShrink: 0, width: '24px' }}>{idx}</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{title}</strong>
                    <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>{desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
