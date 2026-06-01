import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration Confirmed | Technology Career Workshop',
}

export default function SuccessPage() {
  return (
    <main
      style={{
        minHeight: '100vh', background: 'var(--bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', textAlign: 'center', padding: '60px 32px',
      }}
      role="main"
    >
      {/* Check icon */}
      <div
        className="cw-scale-in"
        aria-hidden="true"
        style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'rgba(52,211,153,0.1)', border: '1.5px solid rgba(52,211,153,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '32px', color: 'var(--accent)',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <h1 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, letterSpacing: '-1px', marginBottom: '14px', color: 'var(--text)' }}>
        You&apos;re registered.
      </h1>

      <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '420px', lineHeight: 1.7, marginBottom: '36px' }}>
        Check your inbox for a confirmation email with session details.
        We will see you at the workshop.
      </p>

      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: '12px', padding: '20px 28px',
        fontSize: '14px', color: 'var(--muted)', marginBottom: '28px',
      }}>
        Workshop details have been sent to your email address.
      </div>

      <Link
        href="/"
        style={{
          background: 'transparent', border: '1px solid var(--border)',
          color: 'var(--muted)', borderRadius: '8px', padding: '10px 24px',
          fontSize: '14px', fontWeight: 500, textDecoration: 'none',
          transition: 'color 0.2s, border-color 0.2s',
          display: 'inline-block',
        }}
      >
        &#8592; Return to page
      </Link>
    </main>
  )
}
