'use client'

import { usePathname } from '@/src/app/config/i18n'
import { INavigation } from '@/src/shared/model'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'

import { cn } from '../../lib/tailwindUtils'

type INavigationProps = {
  navigation: (INavigation & { title: string })[]
  className?: string
}

const Navigation = ({ navigation, className }: INavigationProps) => {
  const localizedPathname = usePathname()

  return (
    <nav className={cn(className, 'max-md:w-full')}>
      <ol className="flex flex-nowrap items-center gap-6 max-md:flex-col">
        {navigation.map(({ title, href, key, icon }) => (
          <li key={key} className="max-md:w-full">
            <LocalizedLink
              className={cn(
                'group -m-2 p-2 text-base font-medium text-text-primary transition-colors hover:text-button-eighth active:text-text-primary flex items-center max-md:justify-center',
                {
                  'is-active text-button-eighth': localizedPathname.startsWith(href),
                },
              )}
              href={href}
            >
              <Icon
                className={cn(
                  'mt-0.75 mr-1.5 text-supportive-third transition-colors group-hover:text-button-eighth group-active:text-supportive-third group-[.is-active]:text-button-eighth',
                )}
                name={icon}
              />
              <span>{title}</span>
            </LocalizedLink>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Navigation
