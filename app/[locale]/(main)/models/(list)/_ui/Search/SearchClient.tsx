'use client'

import { useTranslations } from 'next-intl'

import { useModelsQuery } from '@/src/entities/model/hooks/useModelsQuery'
import { scrollToId } from '@/src/shared/lib/scrollTo'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Button } from '@/src/shared/ui/Button'
import { Icon } from '@/src/shared/ui/Icon'
import { Input } from '@/src/shared/ui/Input'
import { MODELS_LAYOUT_ID } from '@/src/widgets/models'

export type ISearchProps = {
  className?: string
}

const SearchClient = ({ className }: ISearchProps) => {
  const t = useTranslations('Common')

  const { query, setQuery } = useModelsQuery()

  const handleSearch = (val: string) => {
    setQuery({
      page: '',
      q: val,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    scrollToId(MODELS_LAYOUT_ID)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex w-full gap-5 max-lg:gap-2.5 max-md:block', className)}
    >
      <Input
        className="shadow-fourth"
        type="search"
        placeholder={t('fields.input.search.placeholder.simple')}
        value={query.q}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <Button
        type="submit"
        className="shrink-0 max-md:mt-2.5 max-md:w-full"
        variant="secondary"
        size="lg"
      >
        {t('actions.search')}
        <Icon className="-mr-1 ml-2" name="outlined/chevron-right" />
      </Button>
    </form>
  )
}

export default SearchClient
