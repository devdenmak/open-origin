'use client'

import { useQueryState } from 'nuqs'

import { ModelsList200Meta } from '@/src/shared/api/model'
import { scrollToId } from '@/src/shared/lib/scrollTo'
import { Pagination } from '@/src/shared/ui/Pagination'

import { MODELS_LAYOUT_ID } from '../../config'

type ModelsGridPaginationProps = {
  className?: string
  meta: ModelsList200Meta | null
}

export const ModelsGridPagination = ({ meta, className }: ModelsGridPaginationProps) => {
  const [, setPage] = useQueryState('page', {
    shallow: false,
    defaultValue: '1',
    clearOnDefault: true,
    history: 'push',
    scroll: false,
  })

  if (!meta) return

  const handleChange = (page: number) => {
    scrollToId(MODELS_LAYOUT_ID)
    setPage(page.toString())
  }

  return (
    <Pagination
      className={className}
      currentPage={meta.current_page}
      lastPage={meta.last_page}
      onChange={handleChange}
    />
  )
}
