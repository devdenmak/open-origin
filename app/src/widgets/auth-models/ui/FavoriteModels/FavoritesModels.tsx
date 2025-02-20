'use client'

import { useTranslations } from 'next-intl'

import { useFavoritesModels } from '@/src/entities/auth-model/hooks/useFavoritesModels'
import { ModelFavorite } from '@/src/entities/auth-model/ui/ModelFavorite'
import { DeleteModelDialog } from '@/src/features/model/delete-model/ui'
import { EditModelLink } from '@/src/features/model/edit-model/ui/EditModelLink'
import { LikeButton } from '@/src/features/model/like-model/ui/LikeButton'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Skeleton } from '@/src/shared/ui/Skeleton'

export type IAuthModelsProps = {
  className?: string
}

const FavoritesModels = ({ className }: IAuthModelsProps) => {
  const t = useTranslations('Common')
  const { data, isLoading } = useFavoritesModels()

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
            <ModelFavorite
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

export default FavoritesModels
