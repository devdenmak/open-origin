import './src/app/css/globals.css'

import { Metadata, Viewport } from 'next'

import {
  AUTHOR,
  COMPANY_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
} from '@/src/app/config/constants'
import { FRONTEND_URL } from '@/src/app/config/env'

export const metadata: Metadata = {
  metadataBase: new URL(`${FRONTEND_URL}`),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${DEFAULT_TITLE}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR, url: `${FRONTEND_URL}/humans.txt` }],
  generator: 'Next.js',
  creator: AUTHOR,
  appleWebApp: {
    capable: true,
    title: COMPANY_NAME,
    statusBarStyle: 'black-translucent',
  },
  formatDetection: { telephone: false, date: false, address: false, email: false },
  other: {
    google: 'notranslate',
  },
}

export const viewport: Viewport = {
  themeColor: '#161A20',
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
