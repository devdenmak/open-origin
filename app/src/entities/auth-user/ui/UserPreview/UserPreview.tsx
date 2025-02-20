'use client'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { Avatar } from '@/src/shared/ui/Avatar'
import { Skeleton } from '@/src/shared/ui/Skeleton'

import { useAuthUser } from '../../hooks/useAuthUser'

export type IUserPreviewProps = {
  className?: string
}

const UserPreview = ({ className = '' }: IUserPreviewProps) => {
  const { data, isLoading } = useAuthUser()

  if (isLoading) {
    return (
      <div className={cn('flex items-center', className)}>
        <Skeleton className="relative mr-2.5 size-[55px] shrink-0 select-none overflow-hidden rounded-full" />

        <div className="mt-1 min-w-0 space-y-1 text-text-secondary">
          <Skeleton className="h-4 w-24 grow" />
          <Skeleton className="h-4 w-24 grow" />
        </div>
      </div>
    )
  }

  return (
    <section className={cn('flex items-center', className)}>
      <Avatar className="mr-2.5" src={data?.data?.avatar?.url} alt={data?.data?.name ?? ''} />

      <div className="min-w-0 space-y-0.5 text-text-secondary">
        <div className="truncate font-headings text-lg font-semibold max-md:text-base">
          {data?.data?.name}
        </div>
        {data?.data?.username && (
          <div className="truncate text-base max-md:text-xs">{data?.data?.username}</div>
        )}
      </div>
    </section>
  )
}

export default UserPreview
