import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'
import { LoginForm } from '@/src/features/auth/login/ui'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('SignInPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function SignInPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  return (
    <div className="container flex grow flex-col items-center py-40 max-md:py-28">
      <div className="w-full max-w-sm">
        <NextIntlProvider messagesCategories={['SignInPage']}>
          <LoginForm />
        </NextIntlProvider>
      </div>
    </div>
  )
}
