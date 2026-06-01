export interface Registration {
  id: string
  full_name: string
  email: string
  phone: string
  college: string | null
  current_status: string | null
  created_at: string
  email_status: 'pending' | 'sent' | 'failed'
}

export interface RegistrationInput {
  full_name: string
  email: string
  phone: string
  college?: string
}

export type ActionResult<T = void> =
  | { success: true; data?: T }
  | { success: false; error: string }
