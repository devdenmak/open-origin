import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { ModelsListParams } from '@/src/shared/api/model'
import { ModelsGrid } from '@/src/widgets/models/ui/ModelsGrid'

type IProps = {
  params: { locale: ILang }
  searchParams: ModelsListParams
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('ModelsPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function ModelsPage({ params: { locale }, searchParams }: IProps) {
  unstable_setRequestLocale(locale)

  return <ModelsGrid className="flex grow flex-col justify-between" query={searchParams} />
}
