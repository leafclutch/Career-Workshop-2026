import RegistrationForm from './RegistrationForm'
import FadeIn from '@/components/FadeIn'

const points = [
  '100% free. No credit card, no payment.',
  'Seats are limited to keep the session interactive.',
  'Confirmation email sent immediately after registering.',
  'Open to all students. No prior tech knowledge required.',
]

export default function RegistrationSection() {
  return (
    <section
      className="cw-section-pad"
      id="register"
      style={{ background: 'var(--surface)' }}
      aria-labelledby="register-heading"
    >
      <div className="cw-container">
        <div
          className="cw-reg-stack"
          style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: '80px', alignItems: 'start' }}
        >
          {/* Left */}
          <FadeIn>
            <span className="cw-eyebrow">Free Registration</span>
            <h2 id="register-heading" style={{ fontSize: 'clamp(26px,3vw,36px)', fontWeight: 700, letterSpacing: '-0.7px', lineHeight: 1.25, marginBottom: '16px', color: 'var(--text)' }}>
              Reserve your seat.<br />No cost. No commitment.
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '36px' }}>
              Registration takes under a minute. You&apos;ll receive a confirmation
              with session details immediately after.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {points.map((pt) => (
                <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.5 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right */}
          <FadeIn>
            <RegistrationForm />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
