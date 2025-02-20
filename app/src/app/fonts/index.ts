import { Barlow } from 'next/font/google'
import localFont from 'next/font/local'

export const HubotSansFont = localFont({
  variable: '--font-hubot-sans',
  src: [
    {
      path: '../../../../public/fonts/HubotSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export const BarlowFont = Barlow({
  variable: '--font-barlow',
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
})
