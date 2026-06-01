import FadeIn from '@/components/FadeIn'

const outcomes = [
  {
    num: '01',
    title: 'Career Clarity',
    body: 'Understand the full landscape of technology careers, from software engineering to product management to data science. Know which roles exist, what they pay, and what they demand.',
  },
  {
    num: '02',
    title: 'Technology Roadmap',
    body: 'Walk away with a concrete learning path tailored to where you are today. No vague advice. A specific sequence of skills, courses, and milestones to follow.',
  },
  {
    num: '03',
    title: 'Industry Insights',
    body: 'Hear directly from engineers and builders about what the industry actually values. What gets people hired. What colleges do not teach. What separates good candidates from great ones.',
  },
  {
    num: '04',
    title: 'Live Mentorship',
    body: 'Ask your specific questions to working professionals in a live setting. This is not a recorded lecture. The session is interactive and your questions shape the conversation.',
  },
]

export default function Outcomes() {
  return (
    <section
      className="cw-section-pad"
      style={{ background: 'var(--surface)' }}
      aria-labelledby="outcomes-heading"
    >
      <div className="cw-container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="cw-eyebrow">What You&apos;ll Gain</span>
            <h2 id="outcomes-heading" style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, letterSpacing: '-0.7px', color: 'var(--text)', lineHeight: 1.2, marginBottom: '14px' }}>
              Leave with more than information.<br />Leave with a direction.
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65 }}>
              Most students finish school with no clear picture of what technology
              careers actually look like. This workshop changes that.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            className="cw-mobile-stack"
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(2,1fr)',
              gap: '2px', background: 'var(--border-s)',
              border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden',
            }}
          >
            {outcomes.map(({ num, title, body }) => (
              <div key={num} className="cw-outcome-card">
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--muted-2)', letterSpacing: '1.2px', marginBottom: '18px', display: 'block' }}>{num}</span>
                <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px', letterSpacing: '-0.3px' }}>{title}</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
