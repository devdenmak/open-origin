import { getTranslations } from 'next-intl/server'

import { widgetsCommunityStats } from '@/src/shared/api/fetch'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Image } from '@/src/shared/ui/Image'
import { Title } from '@/src/shared/ui/Title'

export type ICommunityProps = {
  className?: string
}

const Community = async ({ className }: ICommunityProps) => {
  const { data } = await widgetsCommunityStats()
  const t = await getTranslations()

  if (!data.length) return

  const latestDate = data.reduce((a, b) => (a.updated_at > b.updated_at ? a : b)).updated_at
  const dateTime = new Date(latestDate)

  return (
    <div className="container">
      <section
        className={cn('rounded-3xl p-16 bg-surface-third max-md:py-8 max-md:px-5', className)}
      >
        <header className="mb-14 space-y-4 text-center max-md:mb-5 max-md:space-y-3.5">
          <Title tag="h2">{t('MainPage.community.title')}</Title>

          <p className="font-main text-lg text-text-third max-md:text-base">
            {t('MainPage.community.description')}
          </p>
          <div className="font-main text-xs text-text-fourth">
            {t('Common.date.lastUpdated', {
              updatedDate: dateTime,
            })}
          </div>
        </header>

        <div className="-mx-2.5 -mb-5 flex flex-wrap justify-center">
          {data.map(({ id, image, text, amount }) => (
            <div
              className="min-w-[373px] max-w-[484px] grow px-2.5 pb-5 max-md:w-full max-md:min-w-0 max-md:pb-3"
              key={id}
            >
              <div className="flex min-h-28 items-center justify-center rounded-2xl bg-surface-fourth p-5 max-md:min-h-0 max-md:p-3">
                <div className="mr-4 flex size-16 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Image disableLoader src={image?.url} alt={text} width={32} height={32} />
                </div>

                <div className="grow">
                  <Title size="xs" tag="h3">
                    {amount}
                  </Title>

                  <p className="font-main text-lg text-text-primary max-md:text-base">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Community
