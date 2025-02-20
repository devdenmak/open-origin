import { unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { Footer } from '@/src/widgets/footer'

type Props = {
  children: React.ReactNode
  params: { locale: ILang }
}

export default function LayoutMain({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return (
    <div className="relative flex grow flex-col overflow-hidden">
      <main className="flex grow flex-col" role="main">
        {children}
      </main>

      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  )
}
