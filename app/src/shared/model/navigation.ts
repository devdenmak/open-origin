import { pathnames } from '@/src/app/config/pathnames'
import { AnyIconName } from '@/src/app/icons'

export type INavigationKey = 'models' | 'platform' | 'docs' | 'token' | 'roadmap' | 'about'

export type INavigation = {
  icon: AnyIconName
  key: INavigationKey
  href: keyof typeof pathnames
}
