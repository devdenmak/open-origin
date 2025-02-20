import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Icon } from '@/src/shared/ui/Icon'
import { Title } from '@/src/shared/ui/Title'

import { roadmap } from './_config/roadmap'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('RoadmapPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function RoadmapPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('RoadmapPage')

  return (
    <div className="py-10">
      <div className="container">
        <div className="mb-20 flex items-center max-md:mb-14">
          <div className="mr-3.5 flex size-9 items-center justify-center rounded-lg bg-accent-300 text-lg text-white">
            <Icon name="filled/map" />
          </div>

          <h1 className="font-headings text-6xl font-semibold max-md:text-5xl">{t('pageTitle')}</h1>
        </div>
      </div>

      <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="overflow-x-auto">
        <div className="container">
          <div className="-mr-12 flex flex-nowrap max-md:-mr-5">
            {roadmap.map(({ title, list, isFuture }, key) => (
              <div
                className="group relative w-[402px] shrink-0 pr-12 max-md:w-[330px] max-md:pr-5"
                key={key}
              >
                <div className="absolute inset-x-0 top-6 -z-1 border-b border-b-button-fifth group-first:left-8 group-last:hidden"></div>

                <div
                  className={cn(
                    'bg-gradient-accent-to-b relative mb-3.5 flex size-12 items-center justify-center rounded-full',
                    isFuture && 'bg-gradient-green-to-b',
                  )}
                >
                  <div
                    className={cn(
                      'size-4 rounded-full bg-supportive-fourth',
                      isFuture && 'bg-[#136F5F] dark:bg-[#36C1A8]',
                    )}
                  ></div>
                </div>

                <Title className="mb-8 uppercase max-md:mb-7" tag="h2">
                  {t(`roadmap.title.${title}`)}
                </Title>

                <ul className="space-y-5 max-md:space-y-3.5">
                  {list.map((item) => (
                    <li
                      className="relative pl-5 text-xl text-text-secondary before:absolute before:left-0 before:top-1/2 before:block before:size-3 before:-translate-y-1/2 before:rounded-full before:bg-accent-300 before:content-[''] after:absolute after:left-1 after:top-1/2 after:block after:size-1 after:-translate-y-1/2 after:rounded-full after:bg-surface-secondary after:content-[''] max-md:text-lg"
                      key={item}
                    >
                      {t(`roadmap.list.${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt-14 flex items-center">
          <div className="mr-5 flex size-9 items-center justify-center rounded-lg bg-button-sixth text-lg text-white max-md:mr-4 max-md:shrink-0">
            <span>🐳</span>
          </div>

          <p className="font-main text-xs font-medium text-text-third">{t('label')}</p>
        </div>
      </div>
    </div>
  )
}
