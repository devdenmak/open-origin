import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { Icon } from '@/src/shared/ui/Icon'
import { Title } from '@/src/shared/ui/Title'
import { Team } from '@/src/widgets/team/ui/Team'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('AboutPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function AboutPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('AboutPage')

  return (
    <div className="container pb-28 pt-24 max-lg:pb-10 max-lg:pt-14 max-md:pt-10">
      <div className="flex flex-col items-center">
        <div className="mb-7 flex size-16 items-center justify-center rounded-lg bg-accent-300">
          <Icon className="text-2xl" name="filled/snake"></Icon>
        </div>

        <Title className="mb-3" tag="h1">
          {t('pageTitle')}
        </Title>

        <p className="text-center font-main text-base text-text-third">{t('pageDecription')}</p>
      </div>

      <div className="relative">
        <div className="absolute right-0 top-0 -z-1 size-96 -translate-y-1/4 translate-x-1/4 bg-gradient-blur-to-r opacity-20 blur-8xl" />
        <Team className="mt-24 max-md:mt-10" />
      </div>
    </div>
  )
}
