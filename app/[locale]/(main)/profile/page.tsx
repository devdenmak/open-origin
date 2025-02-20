import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'

import { Profile } from './_ui'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('ProfilePage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function ProfilePage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  return (
    <NextIntlProvider messagesCategories={['ProfilePage']}>
      <Profile />
    </NextIntlProvider>
  )
}
