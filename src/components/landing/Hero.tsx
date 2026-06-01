import FadeIn from '@/components/FadeIn'

export default function Hero() {
  return (
    <section style={{ padding: '110px 0 90px', textAlign: 'center' }} aria-labelledby="hero-heading">
      <div className="cw-container">
        <FadeIn>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(11,59,145,0.15)', border: '1px solid rgba(11,59,145,0.35)',
            borderRadius: '100px', padding: '6px 16px',
            fontSize: '12.5px', fontWeight: 600, color: '#93C5FD',
            letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '36px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            Technology Career Workshop 2026
          </div>

          {/* Heading */}
          <h1 id="hero-heading" style={{
            fontSize: 'clamp(36px,5vw,58px)', fontWeight: 700,
            lineHeight: 1.1, letterSpacing: '-1.2px', color: 'var(--text)',
            marginBottom: '22px', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto',
          }}>
            Build Your Future<br />
            <em style={{ fontStyle: 'normal', color: '#93C5FD' }}>In Technology</em>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '17px', color: 'var(--muted)', maxWidth: '540px',
            margin: '0 auto 44px', lineHeight: 1.7, fontWeight: 400,
          }}>
            A focused 90-minute session for students and recent graduates
            who want clarity on technology careers, led by working engineers
            and industry mentors.
          </p>

          {/* CTA buttons */}
          <div className="cw-hero-actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '60px', flexWrap: 'wrap' }}>
            <a href="#register" className="cw-btn-primary">
              Reserve Your Seat
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#agenda" className="cw-btn-secondary">
              View Agenda
            </a>
          </div>

          {/* Trust row */}
          <div className="cw-trust-row" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0,
            border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
            maxWidth: '680px', margin: '0 auto', background: 'var(--surface)',
          }} role="list">
            {[
              {
                icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
                label: 'Live Session',
              },
              {
                icon: <path d="M20 6L9 17l-5-5" />,
                label: '90 Minutes',
              },
              {
                icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
                label: 'Industry Mentors',
              },
              {
                icon: <><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></>,
                label: 'Free Registration',
              },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="cw-trust-item"
                role="listitem"
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '9px', padding: '18px 20px',
                  borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                  fontSize: '13.5px', fontWeight: 500, color: 'var(--muted)',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  {item.icon}
                </svg>
                {item.label}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
