'use client'

import { useFormState } from 'react-dom'

import { useRouter } from '@/src/app/config/i18n'

import { logout } from '../api'

export const useLogout = () => {
  const router = useRouter()
  const [, actionLogout] = useFormState(logout, null)

  const handleLogout = () => {
    actionLogout()
    router.push('/sign-in')
  }

  return { handleLogout }
}
