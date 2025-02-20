import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { buttonVariants } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { Title } from '@/src/shared/ui/Title'

import { subscription } from '../../_config'

export type ISubscriptionProps = {
  className?: string
}

const Subscription = ({ className }: ISubscriptionProps) => {
  const t = useTranslations('MainPage.subscription')

  return (
    <div className="container">
      <section
        className={cn(
          'rounded-3xl bg-[#DFEDFA] dark:bg-[#283E58] p-12 pb-5 max-lg:p-7 max-md:p-5 max-md:rounded-2xl',
          className,
        )}
      >
        <header className="mb-16 flex items-end justify-between max-lg:mb-8">
          <Title tag="h2" size="xl" className="mr-10 max-md:mr-0">
            {t('title')}
          </Title>

          <LocalizedLink
            className={cn(
              buttonVariants({ size: 'lg', variant: 'secondary' }),
              'mt-0.5 max-md:hidden',
            )}
            href="/go-premium"
          >
            {t('requestButton')}
            <Icon className="ml-2" name="outlined/chevron-right" />
          </LocalizedLink>
        </header>

        <div className="grid grid-cols-3 max-md:block max-md:space-y-8">
          {subscription.map(({ title, description, icon }, key) => (
            <div className="p-6 max-lg:p-4 max-md:p-0" key={key}>
              <div className="mb-3.5 text-5xl max-md:mb-2 max-md:text-xl">{icon}</div>

              <div>
                <Title className="mb-2 max-md:mb-1" size="xs">
                  {t(`categories.title.${title}`)}
                </Title>
                <p className="font-main text-base text-button-eighth max-md:text-sm">
                  {t(`categories.description.${description}`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 hidden max-md:block">
          <LocalizedLink
            className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), 'w-full')}
            href="/go-premium"
          >
            {t('requestButton')}
            <Icon className="ml-2" name="outlined/chevron-right" />
          </LocalizedLink>
        </div>
      </section>
    </div>
  )
}

export default Subscription
