'use client'

import { useTranslations } from 'next-intl'

import { useAuthUser } from '@/src/entities/auth-user/hooks/useAuthUser'
import { downloadWhitepaperLink } from '@/src/shared/config/navigation'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Button, buttonVariants } from '@/src/shared/ui/Button'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'

export type IFooterButtonsProps = {
  className?: string
}

const FooterButtons = ({ className = '' }: IFooterButtonsProps) => {
  const t = useTranslations()
  const { isAuth, isLoading } = useAuthUser()

  return (
    <div
      className={cn(
        className,
        'flex gap-3 max-xl:order-2 max-xl:ml-auto max-md:ml-0 max-md:flex-col max-md:gap-2 max-sm:w-full',
      )}
    >
      <Button asChild size="sm" variant="third">
        <a href={downloadWhitepaperLink} target="_blank">
          {t('Common.actions.downloadWhitepaper')}
        </a>
      </Button>

      {!isAuth && (
        <LocalizedLink
          className={cn(
            buttonVariants({ size: 'sm', variant: 'secondary' }),
            isLoading && 'animate-pulse bg-supportive-primary pointer-events-none',
          )}
          href="/sign-in"
        >
          {t('Common.actions.getStarted')}
        </LocalizedLink>
      )}
    </div>
  )
}

export default FooterButtons
