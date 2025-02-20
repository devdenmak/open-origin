import { unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { AuthWrapper } from '@/src/entities/auth-user/ui/AuthWrapper'
import { UserPreview } from '@/src/entities/auth-user/ui/UserPreview'
import { Card } from '@/src/shared/ui/Card'

import { Navigation } from './_ui'

type IProps = {
  children: React.ReactNode
  params: { locale: ILang }
}

export default function SettingsLayout({ children, params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  return (
    <AuthWrapper>
      <section className="container flex grow flex-col py-5">
        <div className="mx-auto flex w-full max-w-screen-2xl grow gap-5 max-3xl:max-w-screen-xl max-lg:block">
          <div className="w-52 min-w-0 max-w-full shrink-0 max-lg:w-full">
            <UserPreview className="mb-6" />
            <Navigation />
          </div>

          <Card className="flex grow flex-col">{children}</Card>
        </div>
      </section>
    </AuthWrapper>
  )
}
