import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { buttonVariants } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { Title } from '@/src/shared/ui/Title'
import { AuthModels } from '@/src/widgets/auth-models/ui/AuthModels'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('MyModelsPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function MyModelsPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations()

  return (
    <NextIntlProvider messagesCategories={['MyModelsPage']}>
      <div className="mb-7 flex items-center justify-between max-md:mb-4">
        <Title className="mr-5" size="sm">
          {t('MyModelsPage.pageTitle')}
        </Title>

        <LocalizedLink
          href="/models/create"
          className={cn(buttonVariants({ size: 'sm', variant: 'secondary' }))}
        >
          {t('Common.actions.addModel')} <Icon className="ml-2" name="outlined/add" />
        </LocalizedLink>
      </div>

      <AuthModels />
    </NextIntlProvider>
  )
}
