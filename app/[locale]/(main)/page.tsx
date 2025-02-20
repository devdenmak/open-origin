import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { Community } from '@/src/widgets/community/ui/Community'

import { Collaboration } from './_ui/Collaboration'
import { FAQ } from './_ui/FAQ'
import { GetStarted } from './_ui/GetStarted'
import { Intro } from './_ui/Intro'
import { ModelsCategories } from './_ui/ModelsCategories'
import { Partners } from './_ui/Partners'
import { Subscription } from './_ui/Subscription'
import { Token } from './_ui/Token'
import { WhereUsed } from './_ui/WhereUsed'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('MainPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function MainPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  return (
    <div className="pb-14 max-md:pb-6">
      <Intro className="mb-4" />
      <Partners />
      <ModelsCategories className="py-20 max-md:py-10" />
      <Community className="mb-12 max-md:mb-9" />
      <Collaboration className="mb-20 max-md:mb-16" />
      <Subscription className="mb-10 max-md:mb-0" />
      <Token className="mb-20 max-md:mb-12" />
      <FAQ className="mb-20 px-10 max-md:mb-6 max-md:px-0" />
      <GetStarted className="mb-20 max-md:mb-10" />
      <WhereUsed />
    </div>
  )
}
