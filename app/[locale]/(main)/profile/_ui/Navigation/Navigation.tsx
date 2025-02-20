'use client'

import { useTranslations } from 'next-intl'

import { usePathname } from '@/src/app/config/i18n'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'

export type INavigationProps = {
  className?: string
}

const Navigation = ({ className = '' }: INavigationProps) => {
  const localizedPathname = usePathname()
  const t = useTranslations('Common.navigation')

  const linkCn =
    'flex py-2.5 px-0.5 font-main text-base font-medium text-text-fourth border-b-3 border-b-transparent transition-colors hover:text-text-primary active:text-text-fourth -mb-px'

  const linkCnActive = 'border-b-supportive-fourth text-text-primary'

  return (
    <ul className={cn(className, 'flex gap-6 max-md:gap-4')}>
      <li>
        <LocalizedLink
          className={cn(linkCn, localizedPathname === '/profile' && linkCnActive)}
          href="/profile"
        >
          {t('myProfile')}
        </LocalizedLink>
      </li>

      <li>
        <LocalizedLink
          className={cn(linkCn, localizedPathname.startsWith('/profile/models') && linkCnActive)}
          href="/profile/models"
        >
          {t('myModels')}
        </LocalizedLink>
      </li>

      <li>
        <LocalizedLink
          className={cn(linkCn, localizedPathname.startsWith('/profile/favorites') && linkCnActive)}
          href="/profile/favorites"
        >
          {t('favorites')}
        </LocalizedLink>
      </li>

      {/* <li>
        <LocalizedLink
          className={cn(linkCn, localizedPathname.startsWith('/profile/comments') && linkCnActive)}
          href="/profile/comments"
        >
          {t('comments')}
        </LocalizedLink>
      </li> */}
    </ul>
  )
}

export default Navigation
