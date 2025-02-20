import deepmerge from 'deepmerge'
import { notFound } from 'next/navigation'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { getRequestConfig } from 'next-intl/server'

import { ILang } from '../model'
import { formats } from './formats'
import { localePrefix, locales, pathnames } from './pathnames'

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
})

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as ILang)) notFound()

  const userMessages = (await import(`../translation/${locale}.json`)).default
  const defaultMessages = (await import(`../translation/en.json`)).default

  return {
    messages: deepmerge(defaultMessages, userMessages),
    formats,
  }
})
