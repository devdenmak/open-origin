import { unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { AuthWrapper } from '@/src/entities/auth-user/ui/AuthWrapper'

type Props = {
  children: React.ReactNode
  params: { locale: ILang }
}

export default function LayoutAuth({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return (
    <AuthWrapper>
      <main className="flex w-full grow flex-col" role="main">
        <div className="absolute left-2/4 -z-1 size-150 max-w-full -translate-x-2/4 bg-gradient-blur-to-r opacity-40 blur-10xl" />
        {children}
      </main>
    </AuthWrapper>
  )
}
