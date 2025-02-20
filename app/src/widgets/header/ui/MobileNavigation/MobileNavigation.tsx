import { usePreventScroll } from '@react-aria/overlays'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { useKey } from 'react-use'

import { usePathname } from '@/src/app/config/i18n'
import { AnyIconName } from '@/src/app/icons'
import { useAuthUser } from '@/src/entities/auth-user/hooks/useAuthUser'
import { UserPreview } from '@/src/entities/auth-user/ui/UserPreview'
import { LogoutButtonProfile } from '@/src/features/auth/logout/ui/LogoutButtonProfile'
import { downloadWhitepaperLink, navigation } from '@/src/shared/config/navigation'
import { socials } from '@/src/shared/config/socials'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Button, buttonVariants } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { ThemeToggle } from '@/src/shared/ui/ThemeToggle'

export type IMobileNavigationProps = {
  className?: string
  isOpen: boolean
  onChange: (isOpen: boolean) => void
}

const MobileNavigation = ({ className, isOpen = false, onChange }: IMobileNavigationProps) => {
  const { isAuth } = useAuthUser()
  const t = useTranslations()
  const scrollableRef = useRef<HTMLElement>(null)
  const localizedPathname = usePathname()

  useKey('Escape', () => handleClose())
  usePreventScroll({ isDisabled: !isOpen })

  const handleClose = () => {
    onChange(false)
  }

  return (
    <section
      ref={scrollableRef}
      style={{
        overscrollBehavior: 'contain',
        overflowY: 'auto',
        transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
        transition: 'transform 0.25s ease',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      className={cn(
        'fixed z-10 inset-0 bg-surface-third will-change-transform pt-24 pb-10 flex flex-col grow',
        className,
      )}
    >
      <div className="container flex grow flex-col justify-between">
        <div className="pb-5">
          {isAuth ? (
            <div className="flex min-w-0 max-w-full items-center justify-between">
              <UserPreview className="min-w-0 max-w-full" />

              <div className="ml-6 flex shrink-0 flex-wrap gap-3">
                <LocalizedLink
                  className="flex size-9 items-center justify-center text-supportive-third"
                  href="/profile"
                >
                  <Icon name="filled/settings" />
                </LocalizedLink>

                <LogoutButtonProfile />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-2.5">
              <LocalizedLink
                className={cn(buttonVariants({ size: 'lg', variant: 'default' }), 'w-full')}
                href="/sign-in"
              >
                {t('Common.actions.logIn')}
              </LocalizedLink>

              <LocalizedLink
                className={cn(buttonVariants({ size: 'lg', variant: 'default-inverse' }), 'w-full')}
                href="/sign-up"
              >
                {t('Common.actions.signUp')}
              </LocalizedLink>
            </div>
          )}

          <div className="px-3.5 py-7 pt-9">
            <nav className="w-full">
              <ol className="flex flex-col flex-nowrap items-center gap-9">
                {navigation.map(({ href, key, icon }) => (
                  <li key={key} className="w-full">
                    <LocalizedLink
                      href={href}
                      className={cn(
                        'group -m-2 p-2 text-lg font-headings font-semibold text-text-primary transition-colors flex items-center',
                        {
                          'is-active text-button-eighth': localizedPathname.startsWith(href),
                        },
                      )}
                    >
                      <Icon
                        className={cn(
                          'mt-0.5 mr-2 text-supportive-third transition-colors group-hover:text-button-eighth group-active:text-supportive-third group-[.is-active]:text-button-eighth',
                        )}
                        name={icon}
                      />
                      <span>{t(`Common.navigation.${key}`)}</span>
                    </LocalizedLink>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        <div className="pt-5">
          <ThemeToggle className="mb-8" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button asChild variant="third" className="mr-5 shrink-0">
              <a href={downloadWhitepaperLink} target="_blank">
                {t('Common.actions.downloadWhitepaper')}
              </a>
            </Button>

            <ul className="-m-2 flex shrink-0">
              {socials.map(({ key, link }, idx) => (
                <li key={idx}>
                  <a
                    className="inline-flex p-2 text-text-secondary transition-colors"
                    href={link}
                    target="_blank"
                  >
                    <Icon className="text-4xl" name={`filled/${key}` as AnyIconName} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 -z-1 size-72 bg-gradient-blur-to-r opacity-40 blur-8xl"></div>
    </section>
  )
}

export default MobileNavigation
