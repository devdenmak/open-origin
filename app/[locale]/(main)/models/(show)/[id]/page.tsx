import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'
import { modelsList, modelsShow } from '@/src/shared/api/fetch'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/src/shared/ui/Breadcrumb'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'

import { ModelPage } from './_ui'

type IProps = {
  params: { locale: ILang; id: string }
}

export async function generateStaticParams({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const { data: models } = await modelsList()

  return models.map(({ uuid }) => ({
    id: uuid,
  }))
}

export async function generateMetadata({ params: { locale, id } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const { data: model } = await modelsShow(id)

  return {
    title: model?.name,
    description: model?.name,
  }
}

export default async function ModelPageId({ params: { locale, id } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = await getTranslations()

  const model = await modelsShow(id)

  return (
    <NextIntlProvider messagesCategories={['ModelPage']}>
      <div className="container flex grow flex-col py-5">
        <div className="mx-auto flex w-full max-w-screen-2xl grow flex-col max-3xl:max-w-screen-xl">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <LocalizedLink href="/models">{t('Common.navigation.models')}</LocalizedLink>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{model?.data?.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <ModelPage model={model} />
        </div>
      </div>
    </NextIntlProvider>
  )
}
