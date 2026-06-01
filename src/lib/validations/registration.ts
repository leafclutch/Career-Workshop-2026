import { z } from 'zod'

export const registrationSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  college: z.string().optional(),
})

export type RegistrationSchema = z.infer<typeof registrationSchema>
