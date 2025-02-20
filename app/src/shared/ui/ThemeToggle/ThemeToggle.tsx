'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { ITheme } from '@/src/app/model'
import { Icon } from '@/src/shared/ui/Icon'
import { NoSSSR } from '@/src/shared/ui/NoSSSR'

export type IThemeToggleProps = {
  className?: string
}

function ThemeToggle({ className = '' }: IThemeToggleProps) {
  const t = useTranslations()
  const { setTheme, resolvedTheme: theme } = useTheme()

  const currentTheme = theme as ITheme

  const buttonClasses =
    'group -m-2 p-2 font-main text-base font-medium text-text-third transition-colors hover:text-button-eighth active:text-text-third flex items-center'
  const iconClasses =
    'icon ml-1.5 text-supportive-third transition-colors group-hover:text-button-eighth group-active:text-supportive-third mt-0.75'

  return (
    <NoSSSR>
      <div className={className}>
        {currentTheme === 'dark' && (
          <button className={buttonClasses} onClick={() => setTheme('light')}>
            <span>{t('Common.actions.lightTheme')}</span>

            <Icon className={iconClasses} name={`filled/${theme as ITheme}`} />
          </button>
        )}

        {currentTheme === 'light' && (
          <button className={buttonClasses} onClick={() => setTheme('dark')}>
            {t('Common.actions.darkTheme')}
            <Icon className={iconClasses} name={`filled/${theme as ITheme}`} />
          </button>
        )}
      </div>
    </NoSSSR>
  )
}

export default ThemeToggle
