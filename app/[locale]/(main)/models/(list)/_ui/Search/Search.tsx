import { Suspense } from 'react'

import { Skeleton } from '@/src/shared/ui/Skeleton'

import SearchClient from './SearchClient'
import SearchCounter from './SearchCounter'

export type ISearchProps = {
  className?: string
}

const FallbackCounter = () => {
  return <Skeleton className="h-5.5 w-36" />
}

const Search = ({ className }: ISearchProps) => {
  return (
    <section className={className}>
      <div className="mb-4 px-4 max-md:mb-4">
        <Suspense fallback={<FallbackCounter />}>
          <SearchCounter />
        </Suspense>
      </div>

      <Suspense fallback={<SearchClient />}>
        <SearchClient />
      </Suspense>
    </section>
  )
}

export default Search
