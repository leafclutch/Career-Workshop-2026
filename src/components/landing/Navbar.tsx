'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(7,11,20,0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="cw-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <Link href="/" aria-label="Leafclutch Technologies" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/logo.png"
              alt="Leafclutch Technologies Pvt. Ltd."
              height={38}
              width={160}
              style={{ height: '38px', width: 'auto', display: 'block' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="cw-nav-links">
            <li>
              <Link href="#agenda" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' }}>
                Agenda
              </Link>
            </li>
            <li>
              <Link href="#speaker" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' }}>
                About
              </Link>
            </li>
            <li>
              <Link href="#register" className="cw-nav-cta">
                Reserve Your Seat
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="cw-nav-toggle"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', padding: '4px' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '68px', left: 0, right: 0,
          background: 'var(--bg)', borderBottom: '1px solid var(--border)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px',
          zIndex: 99,
        }}>
          <Link href="#agenda" onClick={() => setOpen(false)} style={{ fontSize: '14px', fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' }}>Agenda</Link>
          <Link href="#speaker" onClick={() => setOpen(false)} style={{ fontSize: '14px', fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' }}>About</Link>
          <Link href="#register" onClick={() => setOpen(false)} style={{
            background: 'var(--primary)', color: 'var(--text)', fontSize: '14px', fontWeight: 600,
            padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', marginTop: '4px',
          }}>
            Reserve Your Seat
          </Link>
        </div>
      )}
    </nav>
  )
}
