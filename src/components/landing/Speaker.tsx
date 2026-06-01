import SpeakerPhoto from './SpeakerPhoto'
import FadeIn from '@/components/FadeIn'

export default function Speaker() {
  return (
    <section
      className="cw-section-pad"
      id="speaker"
      style={{ background: 'var(--surface)' }}
      aria-labelledby="speaker-heading"
    >
      <div className="cw-container">
        <div
          className="cw-speaker-stack"
          style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '80px', alignItems: 'center' }}
        >
          {/* Photo */}
          <FadeIn>
            <SpeakerPhoto />
          </FadeIn>

          {/* Bio */}
          <FadeIn>
            {/* Tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(11,59,145,0.2)', border: '1px solid rgba(11,59,145,0.3)',
              color: '#93C5FD', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.8px', textTransform: 'uppercase',
              padding: '5px 14px', borderRadius: '100px', marginBottom: '24px',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Workshop Facilitator
            </div>

            <h2 id="speaker-heading" style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-1px', color: 'var(--text)', marginBottom: '8px' }}>
              Siddhartha Pathak
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', fontWeight: 400, marginBottom: '28px' }}>
              Founder, Leafclutch Technologies Pvt. Ltd.
            </p>

            {/* Role tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {['AI Engineer', 'ML Engineer', 'Product Builder'].map((role) => (
                <span key={role} style={{
                  fontSize: '13px', fontWeight: 500, color: 'var(--muted)',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
                  borderRadius: '6px', padding: '5px 12px',
                }}>
                  {role}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '28px' }}>
              Siddhartha has spent years at the intersection of{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>
                machine learning, artificial intelligence, and product development
              </strong>
              . He founded Leafclutch Technologies to address a problem he saw
              clearly: students finishing school with no practical understanding
              of what technology careers involve or how to enter them.
            </p>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '28px' }}>
              This workshop is the starting point he wished had existed when he
              began his own journey. It is built on direct industry experience,
              not on theory, not on recycled advice.
            </p>

            {/* Credentials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Founder of Leafclutch Technologies Pvt. Ltd., a technology education and career guidance company',
                'Working experience across AI/ML engineering and product development',
                'Has guided students across multiple disciplines in understanding modern technology careers',
              ].map((cred) => (
                <div key={cred} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.5 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {cred}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
