import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'
import { RegisterForm } from '@/src/features/auth/register/ui'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('SignUpPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function SignUpPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  return (
    <div className="container flex grow flex-col items-center py-40 max-md:py-28">
      <div className="w-full">
        <NextIntlProvider messagesCategories={['SignUpPage']}>
          <RegisterForm />
        </NextIntlProvider>
      </div>
    </div>
  )
}
