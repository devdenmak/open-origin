import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { buttonVariants } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'

const FancyButton = ({ className }: { className?: string }) => {
  const t = useTranslations('Common.actions')

  return (
    <LocalizedLink
      className={cn(
        buttonVariants({ size: 'default', variant: 'default' }),
        'rounded-xl hover:!shadow-none hover:bg-button-secondary hover:text-white group hover:focus-visible:ring-accent-400 active:bg-button-primary active:text-button-third',
        className,
      )}
      href="/sign-in"
    >
      {t('getStarted')}

      <div className="-mr-2.5 ml-2.5 flex h-6.5 w-6.5 items-center justify-center rounded-lg bg-accent-300 text-white transition-colors group-hover:bg-white group-hover:text-accent-300 group-active:bg-accent-300 group-active:text-white">
        <Icon className="!size-[1em]" name="filled/flash" />
      </div>
    </LocalizedLink>
  )
}

export default FancyButton
