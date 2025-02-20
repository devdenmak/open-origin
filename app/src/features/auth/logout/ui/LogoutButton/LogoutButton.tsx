'use client'

import { useTranslations } from 'next-intl'
import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'

import { useLogout } from '@/src/features/auth/logout/hooks'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Icon } from '@/src/shared/ui/Icon'

export type ILogoutButtonProps = {
  className?: string
}

const LogoutButton = forwardRef<HTMLFormElement, ILogoutButtonProps>(({ className }, ref) => {
  const { handleLogout } = useLogout()

  return (
    <form action={() => handleLogout()} ref={ref}>
      <SubmitLogout className={className} />
    </form>
  )
})

const SubmitLogout = ({ className }: ILogoutButtonProps) => {
  const t = useTranslations()
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} className={cn(className)}>
      <span>{t('Common.actions.logout')}</span>

      <Icon className="ml-2" name="outlined/log-out"></Icon>
    </button>
  )
}

LogoutButton.displayName = 'LogoutButton'

export default LogoutButton
