'use client'

import { useModels } from '@/src/entities/model/hooks/useModels'
import { ModelCard } from '@/src/entities/model/ui/ModelCard'
import { LikeButton } from '@/src/features/model/like-model/ui/LikeButton'
import { ModelsList200, ModelsListParams } from '@/src/shared/api/model'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'

type IModelsGridClient = {
  models: ModelsList200
  query?: ModelsListParams
}

export const ModelsGridClient = ({ models, query }: IModelsGridClient) => {
  const { data } = useModels(query, models)

  return (
    <>
      {data?.data?.map((model) => (
        <ModelCard
          idx={model.id}
          key={model.uuid}
          model={model}
          slotDetails={
            <LocalizedLink
              className="absolute inset-0 z-1"
              href={{ pathname: '/models/[id]', params: { id: model.uuid } }}
            />
          }
          slotLike={
            <LikeButton
              id={model.uuid}
              query={query}
              isFavorite={model.is_favorite}
              count={model.favorite_count}
            />
          }
        />
      ))}
    </>
  )
}
