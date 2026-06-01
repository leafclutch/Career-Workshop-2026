import FadeIn from '@/components/FadeIn'

const testimonials = [
  {
    text: 'Add a real testimonial from a previous workshop or guidance session attendee here. Include their honest feedback about the value they received.',
    name: 'Student Name',
    info: 'B.Tech Student, University Name',
  },
  {
    text: 'Add a second real testimonial here. A specific outcome or realisation the student had during or after the session works particularly well.',
    name: 'Student Name',
    info: '12th Graduate, City, State',
  },
  {
    text: 'Add a third real testimonial here. Focus on the career direction clarity they gained, or the specific question they had answered during the Q&A.',
    name: 'Student Name',
    info: 'Engineering Student, University Name',
  },
]

export default function Testimonials() {
  return (
    <section className="cw-section-pad" aria-labelledby="testimonials-heading">
      <div className="cw-container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="cw-eyebrow">Previous Attendees</span>
            <h2 id="testimonials-heading" style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, letterSpacing: '-0.7px', color: 'var(--text)', lineHeight: 1.2, marginBottom: '14px' }}>
              What students say
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65 }}>
              From students who attended previous guidance sessions at Leafclutch.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            className="cw-mobile-stack"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}
          >
            {testimonials.map(({ text, name, info }) => (
              <article key={name + info} className="cw-testimonial-card">
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>
                  <span style={{ color: 'var(--primary-h)', fontSize: '26px', lineHeight: 1, display: 'block', marginBottom: '10px', fontFamily: 'Georgia, serif' }}>
                    &#8220;
                  </span>
                  {text}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{name}</span>
                  <span style={{ fontSize: '12.5px', color: 'var(--muted-2)' }}>{info}</span>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
