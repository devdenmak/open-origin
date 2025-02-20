import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'
import { SubscribeForm } from '@/src/features/premium-subscribe/ui/SubscribeForm'
import { Icon } from '@/src/shared/ui/Icon'
import { Title } from '@/src/shared/ui/Title'

import { list } from './_config'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('GoPremiumPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function GoPremiumPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('GoPremiumPage')

  return (
    <NextIntlProvider messagesCategories={['GoPremiumPage']}>
      <div className="container flex grow flex-col justify-center pb-14 pt-10 max-md:pb-10 max-md:pt-5">
        <div className="relative">
          <div className="absolute left-1/3 top-1/2 -z-1 size-60 -translate-x-1/4 -translate-y-1/4 bg-gradient-blur-to-r opacity-40 blur-8xl" />

          <div className="mx-auto max-w-[700px]">
            <Title className="mb-10 flex justify-center max-md:mb-6" tag="h1">
              <span className="text-text-primary">{t('pageTitle')}</span>

              <Icon
                className="-mt-0.5 ml-2 shrink-0 text-5xl text-supportive-fourth max-md:text-3xl"
                name="filled/crown"
              />
            </Title>

            <ul className="mx-auto mb-10 grid max-w-[600px] grid-cols-2 gap-x-7 gap-y-2 max-md:mb-7 max-md:gap-x-7">
              {list.map((key) => (
                <li className="flex justify-center max-md:justify-start" key={key}>
                  <Icon
                    className="mr-2.5 mt-0.5 shrink-0 text-lg text-supportive-fourth max-md:text-base"
                    name="filled/check-round"
                  />
                  <span className="font-main text-base font-medium text-text-secondary max-md:text-sm">
                    {t(`cells.${key}`)}
                  </span>
                </li>
              ))}
            </ul>

            <SubscribeForm />
          </div>
        </div>
      </div>
    </NextIntlProvider>
  )
}
