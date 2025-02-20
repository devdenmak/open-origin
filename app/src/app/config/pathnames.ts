import { LocalePrefix, Pathnames } from 'next-intl/routing'

import { ILang } from '../model'

export const defaultLocale: ILang = 'en'
export const locales: ILang[] = [defaultLocale, 'es']
export const localePrefix: LocalePrefix<typeof locales> = 'always'

export const pathnames = {
  '/': '/',

  '/about': {
    en: '/about',
    es: '/about',
  },

  '/docs': {
    en: '/docs',
    es: '/docs',
  },

  '/models': {
    en: '/models',
    es: '/models',
  },

  '/models/create': {
    en: '/models/create',
    es: '/models/create',
  },

  '/models/[id]': {
    en: '/models/[id]',
    es: '/models/[id]',
  },

  '/models/[id]/edit': {
    en: '/models/[id]/edit',
    es: '/models/[id]/edit',
  },

  '/platform': {
    en: '/platform',
    es: '/platform',
  },

  '/roadmap': {
    en: '/roadmap',
    es: '/roadmap',
  },

  '/token': {
    en: '/token',
    es: '/token',
  },

  '/reset-password': {
    en: '/reset-password',
    es: '/reset-password',
  },

  '/sign-in': {
    en: '/sign-in',
    es: '/sign-in',
  },

  '/sign-up': {
    en: '/sign-up',
    es: '/sign-up',
  },

  '/go-premium': {
    en: '/go-premium',
    es: '/go-premium',
  },

  '/settings': {
    en: '/settings',
    es: '/settings',
  },

  '/settings/account': {
    en: '/settings/account',
    es: '/settings/account',
  },

  '/settings/theme': {
    en: '/settings/theme',
    es: '/settings/theme',
  },

  '/profile': {
    en: '/profile',
    es: '/profile',
  },

  '/profile/models': {
    en: '/profile/models',
    es: '/profile/models',
  },

  '/profile/favorites': {
    en: '/profile/favorites',
    es: '/profile/favorites',
  },

  '/profile/comments': {
    en: '/profile/comments',
    es: '/profile/comments',
  },
} satisfies Pathnames<typeof locales>
