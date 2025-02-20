import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { Icon } from '@/src/shared/ui/Icon'
import { Title } from '@/src/shared/ui/Title'

import { cells } from './_config'
import { Diagram } from './_ui/Diagram'
import { Table } from './_ui/Table'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('TokenPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function TokenPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('TokenPage')

  return (
    <div className="pb-20 pt-10 max-md:pb-10">
      <div className="container">
        <div className="mb-16 flex items-center max-md:mb-8">
          <div className="mr-3.5 flex size-9 items-center justify-center rounded-lg bg-accent-300 text-lg text-white">
            <Icon name="filled/token" />
          </div>

          <h1 className="font-headings text-6xl font-semibold max-md:text-5xl">{t('pageTitle')}</h1>
        </div>

        <section className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-1.5">
          {cells.map((key) => (
            <article
              className="min-h-28 rounded-xl border-l-4 border-accent-300 bg-gradient-solid-to-r px-6 py-4 max-md:px-4"
              key={key}
            >
              <Title tag="h3" size="xs" className="mb-0.5 text-text-primary max-md:mb-1">
                {t(`cells.${key}.title`)}
              </Title>

              <p className="font-main text-base text-text-secondary max-md:text-sm">
                {t(`cells.${key}.text`)}
              </p>
            </article>
          ))}
        </section>
      </div>

      <div className="mt-24 empty:hidden max-md:mt-10">
        <div className="container">
          <Diagram />
        </div>

        <Table />
      </div>
    </div>
  )
}
