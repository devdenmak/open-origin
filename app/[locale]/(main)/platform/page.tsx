import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('PlatformPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function PlatformPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  return <div className="container">Platform page</div>
}
