'use client'

import { useTranslations } from 'next-intl'

import { useAuthModels } from '@/src/entities/auth-model/hooks/useAuthModels'
import { ModelCard } from '@/src/entities/auth-model/ui/ModelCard'
import { DeleteModelDialog } from '@/src/features/model/delete-model/ui'
import { EditModelLink } from '@/src/features/model/edit-model/ui/EditModelLink'
import { LikeButton } from '@/src/features/model/like-model/ui/LikeButton'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Skeleton } from '@/src/shared/ui/Skeleton'

export type IAuthModelsProps = {
  className?: string
}

const AuthModels = ({ className }: IAuthModelsProps) => {
  const t = useTranslations('Common')
  const { data, isLoading } = useAuthModels()

  const models = data?.data ?? []

  if (isLoading) {
    return (
      <section className={cn('space-y-2', className)}>
        <Skeleton className="min-h-16 max-md:min-h-24" />
        <Skeleton className="min-h-16 max-md:min-h-24" />
        <Skeleton className="min-h-16 max-md:min-h-24" />
        <Skeleton className="min-h-16 max-md:min-h-24" />
        <Skeleton className="min-h-16 max-md:min-h-24" />
      </section>
    )
  }

  return (
    <section className={cn('space-y-2', className)}>
      {models.length ? (
        <>
          {models.map((model) => (
            <ModelCard
              idx={model.id}
              key={model.uuid}
              model={model}
              slotEdit={<EditModelLink id={model.uuid} />}
              slotDelete={<DeleteModelDialog id={model.uuid} />}
              slotLike={
                <LikeButton
                  id={model.uuid}
                  isFavorite={model.is_favorite}
                  count={model.favorite_count}
                />
              }
            />
          ))}
        </>
      ) : (
        <>{t('noData')}</>
      )}
    </section>
  )
}

export default AuthModels
