'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SpeakerPhoto() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div style={{
        width: '100%', aspectRatio: '4/5', borderRadius: '16px',
        background: 'var(--surface-2)', border: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: '12px', color: 'var(--muted-2)',
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span style={{ fontSize: '13px', fontWeight: 500, textAlign: 'center', padding: '0 16px', color: 'var(--muted-2)' }}>
          Add speaker.jpg to the public folder
        </span>
      </div>
    )
  }

  return (
    <Image
      src="/speaker.jpg"
      alt="Siddhartha Pathak — Founder, Leafclutch Technologies"
      width={340}
      height={425}
      onError={() => setHasError(true)}
      style={{
        width: '100%', aspectRatio: '4/5', objectFit: 'cover',
        borderRadius: '16px', display: 'block',
        background: 'var(--surface-2)', border: '1px solid var(--border)',
      }}
    />
  )
}
