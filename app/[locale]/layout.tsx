import { unstable_setRequestLocale } from 'next-intl/server'
import { Suspense } from 'react'

import { locales } from '@/src/app/config/pathnames'
import { BarlowFont, HubotSansFont } from '@/src/app/fonts'
import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'
import { ThemeProvider } from '@/src/app/providers/themeProvider'
import { InitAnalytics } from '@/src/entities/analytics/ui/InitAnalytics'
import { Toaster } from '@/src/shared/ui/Toaster'
import { Header } from '@/src/widgets/header'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: { locale: ILang }
}

export default function Layout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={`${HubotSansFont.variable} ${BarlowFont.variable}`}
      suppressHydrationWarning
    >
      <body id="main">
        <div className="absolute left-0 top-0 -z-1 size-72 -translate-x-1/4 -translate-y-1/4 bg-gradient-blur-to-r opacity-40 blur-8xl" />

        <ThemeProvider>
          <NextIntlProvider>
            <div className="flex min-h-screen flex-col max-lg:pt-16">
              <div className="flex grow flex-col">
                <Header />

                {children}
              </div>
            </div>
          </NextIntlProvider>
        </ThemeProvider>

        <Toaster position="top-center" richColors />

        <Suspense>
          <InitAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
