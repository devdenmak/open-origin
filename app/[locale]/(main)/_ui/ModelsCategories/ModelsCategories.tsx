import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { buttonVariants } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { Title } from '@/src/shared/ui/Title'

import { features } from '../../_config'

export type IModelsCategoriesProps = {
  className?: string
}

const ModelsCategories = ({ className }: IModelsCategoriesProps) => {
  const t = useTranslations('MainPage.modelsCategories')

  return (
    <div className="container">
      <section className={cn(className)}>
        <header className="px-8 max-2xl:px-4 max-md:px-0">
          <LocalizedLink
            className="mb-5 inline-flex rounded-3xl border border-button-fifth bg-surface-third px-3.5 py-2 text-xs font-medium text-text-primary shadow-third transition-colors hover:bg-surface-fourth active:bg-surface-third"
            href="/models"
          >
            <Icon className="mr-1.5 shrink-0" name="filled/wand-magic-sparkles" />

            <span>{t('marketPlace')}</span>
          </LocalizedLink>

          <div className="mb-14 grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-5 max-md:mb-7 max-md:gap-3">
            <Title className="max-w-lg" tag="h2">
              {t('title')}
            </Title>

            <p className="font-main text-xl text-text-third max-md:text-lg">{t('description')}</p>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-2">
          {features.map(
            ({ title, description, icon, iconDark, iconHovered, iconDarkHovered }, key) => (
              <LocalizedLink
                href="/models"
                className="group relative z-0 flex min-h-72 flex-col justify-between rounded-2xl bg-gradient-solid-to-b p-6 max-md:min-h-48"
                key={key}
              >
                <div className="relative z-1">
                  <div className="mb-3 empty:!hidden group-last:!block dark:hidden">
                    {icon && (
                      <div className="opacity-100 transition-opacity group-last:!opacity-100 group-hover:opacity-0">
                        {icon}
                      </div>
                    )}

                    {iconHovered && (
                      <div className="absolute left-0 top-0 opacity-0 transition-opacity group-last:!opacity-0 group-hover:opacity-100">
                        {iconHovered}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 hidden empty:!hidden group-last:!hidden dark:block">
                    {iconDark && (
                      <div className="opacity-100 transition-opacity group-hover:opacity-0">
                        {iconDark}
                      </div>
                    )}

                    {iconDarkHovered && (
                      <div className="absolute left-0 top-0 opacity-0 transition-opacity group-hover:opacity-100">
                        {iconDarkHovered}
                      </div>
                    )}
                  </div>

                  <Title size="sm" tag="h3">
                    {t(`categories.title.${title}`)}
                  </Title>
                </div>
                <p className="z-1 mt-3 font-main text-lg text-text-third group-last:z-0 max-md:text-base">
                  {t(`categories.description.${description}`)}
                </p>

                <div className="absolute inset-0 flex items-end rounded-2xl bg-surface-fifth p-6 opacity-0 transition-opacity group-last:opacity-100 group-hover:opacity-100">
                  <div
                    className={cn(
                      buttonVariants({ size: 'lg', variant: 'secondary' }),
                      'hidden group-last:inline-flex',
                    )}
                  >
                    {t('categories.seeButton')}
                    <Icon className="ml-2" name="outlined/chevron-right" />
                  </div>
                </div>
              </LocalizedLink>
            ),
          )}
        </div>
      </section>
    </div>
  )
}

export default ModelsCategories
