import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { buttonVariants } from '@/src/shared/ui/Button'
import { Image } from '@/src/shared/ui/Image'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { Title } from '@/src/shared/ui/Title'

import Preview from '../../_images/preview.svg'

export type IIntroProps = {
  className?: string
}

const Intro = ({ className }: IIntroProps) => {
  const t = useTranslations('MainPage.intro')

  return (
    <div className="container">
      <section
        className={cn(
          'bg-accent-300 text-white rounded-3xl px-16 flex gap-20 items-end overflow-hidden -mx-6 max-xl:px-10 max-xl:gap-12 max-md:block max-md:px-5 max-md:py-5 max-md:rounded-2xl max-3xl:mx-0',
          className,
        )}
      >
        <div className="grow pb-16 max-xl:pb-10 max-md:pb-6">
          <div className="mb-24 max-md:mb-6">
            <Title className="mb-6 max-md:mb-4" size="xl" tag="h1">
              {t('title')}
            </Title>

            <p className="max-w-md font-main text-xl font-normal text-[#F1F4F8] max-md:text-lg">
              {t('description')}
            </p>
          </div>

          <div className="flex gap-3.5 max-md:flex-wrap">
            <LocalizedLink
              href="/sign-in"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'default-inverse' }),
                'max-md:w-full',
              )}
            >
              {t('getButton')}
            </LocalizedLink>

            <LocalizedLink
              href="/models"
              className={cn(buttonVariants({ size: 'lg' }), 'max-md:w-full')}
            >
              {t('exploreButton')}
            </LocalizedLink>
          </div>
        </div>

        <div className="relative -my-24 w-[575px] shrink-0 max-xl:-mr-64 max-md:mx-auto max-md:my-0 max-md:-mb-52 max-md:w-[290px]">
          <Image
            disableLoader
            fillParent
            priority
            src={Preview}
            width={575}
            height={780}
            alt="Intro-preview"
          />
        </div>
      </section>
    </div>
  )
}

export default Intro
