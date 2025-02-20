import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { AuthWrapper } from '@/src/entities/auth-user/ui/AuthWrapper'
import { UserPreview } from '@/src/entities/auth-user/ui/UserPreview'
import { LogoutButtonProfile } from '@/src/features/auth/logout/ui/LogoutButtonProfile'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { buttonVariants } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'

import { Navigation } from './_ui'

type IProps = {
  children: React.ReactNode
  params: { locale: ILang }
}

export default function ProfileLayout({ children, params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Common')

  return (
    <AuthWrapper>
      <section className="container flex grow flex-col py-5 pb-7">
        <div className="mx-auto w-full max-w-screen-2xl max-3xl:max-w-screen-xl">
          <div className="mb-8 flex items-center justify-between max-md:mb-6">
            <UserPreview className="min-w-0 max-w-full" />

            <div className="ml-6 flex shrink-0 flex-wrap gap-3">
              <LocalizedLink
                href="/settings"
                className={cn(buttonVariants({ size: 'sm', variant: 'third' }))}
              >
                {t('actions.editProfile')}
                <Icon className="ml-2" name="outlined/edit" />
              </LocalizedLink>

              <LogoutButtonProfile className="max-sm:hidden" />
            </div>
          </div>

          <div className="flex flex-nowrap border-b-2 border-b-supportive-primary max-md:flex-col-reverse">
            <Navigation className="mr-5 shrink-0 max-md:mr-0" />

            <LocalizedLink
              className="-m-2 ml-auto shrink-0 self-center p-2 font-headings text-2xs font-semibold text-button-eighth transition-colors hover:text-supportive-fourth active:text-button-eighth max-md:-ml-2 max-md:mb-2 max-md:self-start"
              href="/go-premium"
            >
              {t('navigation.goPremium')} <Icon className="ml-1" name="filled/crown"></Icon>
            </LocalizedLink>
          </div>

          <div className="mt-6 max-md:mt-5">{children}</div>
        </div>
      </section>
    </AuthWrapper>
  )
}
