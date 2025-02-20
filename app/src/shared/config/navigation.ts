import { FRONTEND_URL } from '@/src/app/config/env'

import { INavigation } from '../model/navigation'

export const navigation: INavigation[] = [
  {
    icon: 'filled/models',
    key: 'models',
    href: '/models',
  },
  // {
  //   icon: 'filled/platform',
  //   key: 'platform',
  //   href: '/platform',
  // },
  // {
  //   icon: 'filled/sheets',
  //   key: 'docs',
  //   href: '/docs',
  // },
  {
    icon: 'filled/token',
    key: 'token',
    href: '/token',
  },
  {
    icon: 'filled/map',
    key: 'roadmap',
    href: '/roadmap',
  },
  {
    icon: 'filled/users',
    key: 'about',
    href: '/about',
  },
]

export const downloadWhitepaperLink = `${FRONTEND_URL}/whitepaper.pdf`
