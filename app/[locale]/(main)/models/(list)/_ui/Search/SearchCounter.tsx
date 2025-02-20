import { useTranslations } from 'next-intl'

import { modelsTotal } from '@/src/shared/api/fetch'
import { cn } from '@/src/shared/lib/tailwindUtils'

export type ISearchCounterProps = {
  className?: string
}

const SearchCounter = async ({ className = '' }: ISearchCounterProps) => {
  const t = useTranslations('ModelsPage')
  const { total } = await modelsTotal()

  return (
    <h3 className={cn('font-headings text-base font-semibold text-text-fourth', className)}>
      {t('available', { total })}
    </h3>
  )
}

export default SearchCounter
