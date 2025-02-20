import { useTranslations } from 'next-intl'

import { AnyIconName } from '@/src/app/icons'
import { navigation } from '@/src/shared/config/navigation'
import { socials } from '@/src/shared/config/socials'
import { Icon } from '@/src/shared/ui/Icon'
import { Logo } from '@/src/shared/ui/Logo'
import { Navigation } from '@/src/shared/ui/Navigation'

import { FooterButtons } from './FooterButtons'

const Footer = () => {
  const t = useTranslations()

  return (
    <footer className="container flex pb-10 max-md:pb-4">
      <div className="flex min-h-20 w-full items-center gap-8 rounded-2.5xl bg-surface-third p-5 max-2xl:gap-3 max-xl:flex-wrap max-xl:gap-4 max-md:flex-col max-md:gap-2.5">
        <div className="flex items-center gap-8 max-xl:order-1">
          <Logo />
          <div className="font-main text-xs font-medium text-text-fifth max-md:hidden">
            {t('Footer.copyright', { year: new Date().getFullYear() })}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-7 max-2xl:gap-3 max-xl:order-3 max-xl:ml-0 max-xl:w-full max-md:flex-col">
          <Navigation
            className="max-md:order-2"
            navigation={navigation.map(({ key, href, icon }) => ({
              icon,
              key,
              title: t(`Common.navigation.${key}`),
              href,
            }))}
          />

          <ul className="flex max-xl:ml-auto max-md:order-1 max-md:ml-0">
            {socials.map(({ key, link }, idx) => (
              <li key={idx}>
                <a
                  className="inline-flex p-2 text-lg text-text-secondary transition-colors hover:text-supportive-fourth active:text-text-secondary max-md:text-2xl"
                  href={link}
                  target="_blank"
                >
                  <Icon name={`filled/${key}` as AnyIconName} width="24" height="24" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterButtons />

        <div className="order-4 mt-3 font-main text-xs font-medium text-text-fifth md:hidden">
          {t('Footer.copyright', { year: new Date().getFullYear() })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 -z-1 size-80 translate-y-2/4 bg-gradient-blur-to-r opacity-40 blur-8xl"></div>
    </footer>
  )
}

export default Footer
