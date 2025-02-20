import createMiddleware from 'next-intl/middleware'

import { defaultLocale, localePrefix, locales, pathnames } from '@/src/app/config/pathnames'

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  localeDetection: true,
  alternateLinks: true,
  pathnames,
})

export const config = {
  matcher: [
    '/',
    `/((?!api|_next/static|_next/image|assets|whitepaper.pdf|fonts|imgproxy|storybook|favicon.ico|sw.js|sitemap.xml|scripts|manifest.webmanifest|humans.txt|sprites|apple-icon.png|icon-192.png|icon-512.png|icon.svg|maskable-icon.png|opengraph-image.png|twitter-image.png|robots.txt|workbox|cmsmagazine).*)`,
  ],
}
