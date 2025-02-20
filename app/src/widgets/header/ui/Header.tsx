/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useToggle, useWindowSize } from 'react-use'

import { Viewer } from '@/src/entities/auth-user/ui/Viewer'
import { LogoutButton } from '@/src/features/auth/logout/ui/LogoutButton'
import { downloadWhitepaperLink, navigation } from '@/src/shared/config/navigation'
import { isClient } from '@/src/shared/lib/isServerOrClient'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Icon } from '@/src/shared/ui/Icon'
import { Logo } from '@/src/shared/ui/Logo'
import { Navigation } from '@/src/shared/ui/Navigation'
import { ThemeToggle } from '@/src/shared/ui/ThemeToggle'
import { MobileNavigation } from '@/src/widgets/header/ui/MobileNavigation'

import { FancyButton } from './FancyButton'

const getScrollingState = () => isClient && window.scrollY > 1

const Header = () => {
  const t = useTranslations('Common')
  const pathname = usePathname()
  const { width } = useWindowSize()

  const [isOpenMobileMenu, toggleMobileMenu] = useToggle(false)
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    toggleMobileMenu(false)
  }, [pathname, width])

  useEffect(() => {
    setScrolled(getScrollingState())

    const fn = () => {
      setScrolled(getScrollingState())
    }

    window.addEventListener('scroll', fn)

    return () => {
      window.removeEventListener('scroll', fn)
    }
  }, [])

  return (
    <>
      <header
        className={cn(
          'container flex h-24 flex-nowrap items-center justify-between py-5 max-lg:fixed max-lg:inset-x-0 max-lg:top-0 max-lg:z-20 max-lg:h-16 max-lg:py-3 max-lg:transition-all',
          (isScrolled || isOpenMobileMenu) &&
            'max-lg:bg-surface-secondary/90 max-lg:shadow-fifth max-lg:rounded-b-lg max-lg:backdrop-blur',
        )}
      >
        <div className="flex flex-nowrap items-center gap-8">
          <Logo className="z-20" />

          <Navigation
            className="hidden lg:block"
            navigation={navigation.map(({ key, href, icon }) => ({
              icon,
              key,
              title: t(`navigation.${key}`),
              href,
            }))}
          />
        </div>

        <div className="ml-10 flex items-center gap-8 max-lg:gap-2">
          <ThemeToggle className="hidden lg:block" />

          <div className="hidden xl:block">
            <a
              className="-m-2 flex items-center p-2 font-main text-base font-medium text-text-third transition-colors hover:text-button-eighth active:text-text-third"
              href={downloadWhitepaperLink}
              target="_blank"
            >
              {t('actions.downloadWhitepaper')}
            </a>
          </div>

          <Viewer
            className={cn(
              isOpenMobileMenu &&
                'max-lg:opacity-0 max-lg:transition-opacity max-lg:pointer-events-none',
            )}
            slotToLogin={<FancyButton className="max-lg:hidden" />}
            slotLogoutButton={<LogoutButton />}
          />

          <button
            onClick={toggleMobileMenu}
            style={{
              transformStyle: 'preserve-3d',
              transform: isOpenMobileMenu ? 'rotateY(180deg)' : 'rotateY(0)',
              transition: 'transform .25s',
            }}
            className={cn(
              'relative size-10 select-none appearance-none will-change-transform hidden max-lg:block z-20',
            )}
          >
            <div
              style={{ backfaceVisibility: 'hidden' }}
              className="absolute inset-0 z-1 flex items-center justify-center rounded-lg bg-accent-100 text-accent-400 dark:bg-accent-300 dark:text-white"
            >
              <Icon className="text-sm" name="outlined/burger" />
            </div>

            <div
              style={{ transform: 'rotateY(180deg)' }}
              className="absolute inset-[0.5px] flex items-center justify-center rounded-lg bg-accent-400 text-accent-100"
            >
              <Icon className="text-sm" name="outlined/cross" />
            </div>
          </button>
        </div>
      </header>

      <MobileNavigation isOpen={isOpenMobileMenu} onChange={toggleMobileMenu} />
    </>
  )
}

export default Header
