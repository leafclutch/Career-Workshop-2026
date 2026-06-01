'use server'

import { registrationSchema } from '@/lib/validations/registration'
import { createServiceClient } from '@/lib/supabase/server'
import type { ActionResult } from '@/types'

export async function registerForWorkshop(data: unknown): Promise<ActionResult> {
  const parsed = registrationSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Please check your information and try again.' }
  }

  const supabase = createServiceClient()

  const { error: dbError } = await supabase
    .from('workshop_registrations')
    .insert({
      full_name: parsed.data.full_name,
      email:     parsed.data.email,
      phone:     parsed.data.phone,
      college:   parsed.data.college ?? null,
    })

  if (dbError) {
    console.error('[register] DB error:', dbError)
    return { success: false, error: 'Registration failed. Please try again.' }
  }

  return { success: true }
}
