import { mutate } from 'swr'

import { MODELS_TAG } from '@/src/entities/model/config'
import { modelsFavoriteAdd, modelsFavoriteRemove } from '@/src/shared/api/fetch'
import {
  ModelsFavoriteAdd200,
  ModelsFavoriteRemove200,
  ModelsListParams,
} from '@/src/shared/api/model'
import { nextRevalidateTag, nextRevalidateTagByUrl } from '@/src/shared/api/revalidate'
import { getModelsFavoritesKey, getModelsListKey, getModelsMyKey } from '@/src/shared/api/swr'
import { getModelsUpdateMutationKey } from '@/src/shared/api/swr'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'
import { IFormResponseErrors } from '@/src/shared/model'

type IFavoriteAdd = ModelsFavoriteAdd200 & IFormResponseErrors
type IFavoriteRemove = ModelsFavoriteRemove200 & IFormResponseErrors

export async function favoriteToggle(
  _: unknown,
  body: { id: string; query?: ModelsListParams; type: 'like' | 'unlike' },
) {
  try {
    const isLike = body.type === 'like'

    const response = isLike
      ? ((await modelsFavoriteAdd(body.id)) as IFavoriteAdd)
      : ((await modelsFavoriteRemove(body.id)) as IFavoriteRemove)

    if (!response.errors) {
      const modelKey = getModelsUpdateMutationKey(body.id)
      const authUserModelsKey = getModelsMyKey()
      const authUserFavoriteKey = getModelsFavoritesKey()

      nextRevalidateTag(MODELS_TAG) // Server revalidate public list models
      mutate(getModelsListKey(body.query)) // SWR revalidate public list models

      nextRevalidateTagByUrl(modelKey[0]) // Server revalidate ONE public model
      mutate(modelKey) // SWR revalidate ONE puplic model

      mutate(authUserModelsKey) // SWR revalidate user list models
      mutate(authUserFavoriteKey) // SWR revalidate user favorite models
    } else {
      logger.error(handleError(response))
    }
  } catch (e) {
    logger.error(handleError(e))
  }
}
