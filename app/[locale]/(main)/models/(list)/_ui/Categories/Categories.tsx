import { Suspense } from 'react'

import { Skeleton } from '@/src/shared/ui/Skeleton'

import CategoriesServer from './CategoriesServer'

export type ICategoriesProps = {
  className?: string
}

const FallbackCategories = () => {
  return (
    <div className="space-y-6">
      {new Array(3).fill('').map((_, key) => (
        <div key={key}>
          <div className="px-2.5">
            <Skeleton className="mb-2.5 h-5 w-28 max-w-full" />
          </div>

          <ul className="flex flex-wrap gap-2">
            {new Array(5).fill('').map((_, key) => (
              <Skeleton className="inline-flex min-h-8 w-32 shrink-0 rounded-3xl" key={key} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

const Categories = ({ className = '' }: ICategoriesProps) => {
  return (
    <Suspense fallback={<FallbackCategories />}>
      <CategoriesServer className={className} />
    </Suspense>
  )
}

export default Categories
