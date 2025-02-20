import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { buttonVariants } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { Title } from '@/src/shared/ui/Title'

export type IGetStartedProps = {
  className?: string
}

const GetStarted = ({ className }: IGetStartedProps) => {
  const t = useTranslations('MainPage.getStarted')

  return (
    <div className="container">
      <section
        className={cn(
          'min-h-[410px] rounded-3xl bg-gradient-blur-to-r py-14 px-12 text-center max-md:p-8 max-md:min-h-0 max-md:rounded-xl',
          className,
        )}
      >
        <Title className="mx-auto mb-5 max-w-[1020px] text-6xl text-white max-md:mb-3.5" tag="h2">
          {t('title')}
        </Title>

        <p className="mx-auto mb-8 max-w-[470px] font-main text-xl font-normal text-accent-100 max-md:mb-7 max-md:text-lg">
          {t('text')}
        </p>

        <LocalizedLink
          href="/sign-in"
          className={cn(
            buttonVariants({ size: 'lg', variant: 'default-inverse' }),
            'max-md:w-full',
          )}
        >
          {t('getStartedButton')}
          <Icon className="ml-2" name="filled/flash" />
        </LocalizedLink>
      </section>
    </div>
  )
}

export default GetStarted
