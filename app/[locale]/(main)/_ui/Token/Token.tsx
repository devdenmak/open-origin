import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { buttonVariants } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { Title } from '@/src/shared/ui/Title'

import { TokenBg } from './TokenBg'
import { TokenImage } from './TokenImage'

export type ITokenProps = {
  className?: string
}

const Token = ({ className }: ITokenProps) => {
  const t = useTranslations('MainPage.token')

  const labelClasses =
    'absolute rounded-lg border bg-white px-4 py-2 font-headings text-sm font-semibold text-text-primary shadow-fourth dark:border-[#3C4550] dark:bg-[#2C323A] max-md:relative text-nowrap max-md:text-4xs max-md:inline-flex max-md:rounded max-md:px-2 max-md:py-1 max-md:before:content-[""] max-md:before:block max-md:before:size-[7px] max-md:before:absolute max-md:before:bg-accent-300 max-md:before:rounded-full max-md:before:-left-[5px] max-md:before:top-1/2 max-md:before:-translate-y-1/2 max-md:left-auto max-md:right-auto max-md:top-auto max-md:bottom-auto'

  return (
    <section className={cn('overflow-hidden', className)}>
      <div className="relative min-h-[540px] py-20 max-md:py-10">
        <TokenBg />

        <div className="container">
          <div className="flex items-center gap-8 px-10 max-xl:block max-md:px-0">
            <div className="grow max-xl:mb-32 max-xl:text-center max-md:mb-0">
              <LocalizedLink
                className="mb-5 inline-flex rounded-3xl border border-button-fifth bg-surface-third px-4 py-2 text-xs font-medium text-text-primary shadow-third transition-colors hover:bg-surface-fourth active:bg-surface-third"
                href="/token"
              >
                <Icon className="mr-1.5 shrink-0" name="filled/wand-magic-sparkles" />

                <span>{t('buttonToken')}</span>
              </LocalizedLink>

              <Title className="mb-4 max-md:mb-3">{t('title')}</Title>

              <p className="mb-8 font-main text-lg font-normal text-text-third max-md:mb-4">
                {t('text')}
              </p>

              <LocalizedLink className={cn(buttonVariants({ size: 'sm' }), 'mt-0.5')} href="/token">
                {t('buttonExplore')}
                <Icon className="ml-2" name="outlined/chevron-right" />
              </LocalizedLink>
            </div>

            <div className="relative flex h-[310px] w-[730px] shrink-0 justify-end max-lg:w-[590px] max-md:flex max-md:h-[300px] max-md:w-full max-md:flex-row-reverse">
              <div className="max-md:absolute max-md:right-0 max-md:top-1/2 max-md:flex max-md:-translate-y-1/2 max-md:flex-col max-md:items-start max-md:space-y-3">
                <div className={cn(labelClasses, '-top-[38px] left-[409px] max-lg:left-[270px]')}>
                  {t('categoreis.first')}
                </div>

                <div className={cn(labelClasses, 'top-[110px] left-[620px] max-lg:left-[495px]')}>
                  {t('categoreis.second')}
                </div>

                <div
                  className={cn(labelClasses, '-bottom-[11px] left-[516px] max-lg:left-[376px]')}
                >
                  {t('categoreis.third')}
                </div>

                <div className={cn(labelClasses, 'bottom-[50px] right-[410px]')}>
                  {t('categoreis.fourth')}
                </div>

                <div className={cn(labelClasses, 'bottom-[204px] right-[450px]')}>
                  {t('categoreis.fifth')}
                </div>
              </div>

              <TokenImage className="max-md:-my-10 max-md:-ml-20 max-md:size-[380px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Token
