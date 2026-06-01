import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 0' }}>
      <div className="cw-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/" aria-label="Leafclutch Technologies" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/logo.png"
              alt="Leafclutch Technologies Pvt. Ltd."
              height={32}
              width={130}
              style={{ height: '32px', width: 'auto', opacity: 0.75 }}
            />
          </Link>
          <p style={{ fontSize: '13px', color: 'var(--muted-2)' }}>
            &copy; 2026 Leafclutch Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
