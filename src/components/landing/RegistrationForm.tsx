'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { registrationSchema, type RegistrationSchema } from '@/lib/validations/registration'
import { registerForWorkshop } from '@/actions/register'

export default function RegistrationForm() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  })

  async function onSubmit(data: RegistrationSchema) {
    setServerError(null)
    const result = await registerForWorkshop(data)
    if (!result.success) {
      setServerError(result.error)
      return
    }
    router.push('/success')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{
        background: 'var(--bg)', border: '1px solid var(--border)',
        borderRadius: '16px', padding: '36px 32px',
      }}
    >
      <div style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
        Register for the Workshop
      </div>
      <div style={{ fontSize: '13.5px', color: 'var(--muted)', marginBottom: '28px' }}>
        Fill in your details to secure your spot.
      </div>

      {/* Full Name */}
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="full_name" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '7px' }}>
          Full Name
        </label>
        <input
          id="full_name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          className={`cw-input${errors.full_name ? ' error' : ''}`}
          {...register('full_name')}
        />
        {errors.full_name && (
          <p style={{ fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{errors.full_name.message}</p>
        )}
      </div>

      {/* Email */}
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="email" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '7px' }}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          className={`cw-input${errors.email ? ' error' : ''}`}
          {...register('email')}
        />
        {errors.email && (
          <p style={{ fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="phone" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '7px' }}>
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+977 00000 00000"
          className={`cw-input${errors.phone ? ' error' : ''}`}
          {...register('phone')}
        />
        {errors.phone && (
          <p style={{ fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{errors.phone.message}</p>
        )}
      </div>

      {/* College */}
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="college" style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '7px' }}>
          College / University
        </label>
        <input
          id="college"
          type="text"
          autoComplete="organization"
          placeholder="Name of your institution"
          className="cw-input"
          {...register('college')}
        />
      </div>

      {/* Server error */}
      {serverError && (
        <p style={{ fontSize: '13px', color: '#f87171', marginBottom: '12px', padding: '10px 14px', background: 'rgba(248,113,113,0.08)', borderRadius: '8px', border: '1px solid rgba(248,113,113,0.2)' }}>
          {serverError}
        </p>
      )}

      {/* Submit */}
      <button type="submit" className="cw-btn-submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}>
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Registering&hellip;
          </>
        ) : (
          <>
            Reserve My Seat
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p style={{ marginTop: '14px', fontSize: '12px', color: 'var(--muted-2)', textAlign: 'center', lineHeight: 1.5 }}>
        Your information is private. We do not share or sell your data.
      </p>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </form>
  )
}
