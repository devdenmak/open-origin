'use client'

import { useTranslations } from 'next-intl'
import { useFormStatus } from 'react-dom'

import { Button } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'

import { useLogout } from '../../hooks'

export type ILogoutButtonProfileProps = {
  className?: string
}

const LogoutButtonProfile = ({ className }: ILogoutButtonProfileProps) => {
  const { handleLogout } = useLogout()

  return (
    <form className={className} action={() => handleLogout()}>
      <SubmitLogout />
    </form>
  )
}

const SubmitLogout = ({ className }: ILogoutButtonProfileProps) => {
  const t = useTranslations()
  const { pending } = useFormStatus()

  return (
    <Button className={className} variant="fourth" size="sm" disabled={pending} type="submit">
      {t('Common.actions.logout')}

      <Icon className="ml-2" name="outlined/log-out"></Icon>
    </Button>
  )
}

export default LogoutButtonProfile
