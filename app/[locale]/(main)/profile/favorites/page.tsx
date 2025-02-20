import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'
import { Title } from '@/src/shared/ui/Title'
import { FavoritesModels } from '@/src/widgets/auth-models/ui/FavoriteModels'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('FavoritesPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function FavoritesPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations()

  return (
    <NextIntlProvider messagesCategories={['MyModelsPage']}>
      <div className="mb-7 flex min-h-9 items-center justify-between max-md:mb-4">
        <Title className="mr-5" size="sm">
          {t('FavoritesPage.pageTitle')}
        </Title>
      </div>

      <FavoritesModels />
    </NextIntlProvider>
  )
}
