import { mutate } from 'swr'

import { MODELS_TAG } from '@/src/entities/model/config'
import { modelsDelete } from '@/src/shared/api/fetch'
import { nextRevalidateTag, nextRevalidateTagByUrl } from '@/src/shared/api/revalidate'
import {
  getModelsFavoritesKey,
  getModelsMyKey,
  getModelsUpdateMutationKey,
} from '@/src/shared/api/swr'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'

const clearCache = (id: string) => {
  const mutationKey = getModelsUpdateMutationKey(id)
  const authUserFavoriteKey = getModelsFavoritesKey()

  nextRevalidateTag(MODELS_TAG) // Server revalidate public list models
  nextRevalidateTagByUrl(mutationKey[0]) // Server revalidate ONE public model

  mutate(mutationKey, null) // SWR revalidate ONE puplic model
  mutate(getModelsMyKey()) // SWR revalidate user modelS
  mutate(authUserFavoriteKey) // SWR revalidate user favorite models
}

export async function deleteModel(_: unknown, body: { id: string }) {
  try {
    await modelsDelete(body.id)

    clearCache(body.id)
  } catch (e) {
    clearCache(body.id)

    logger.error(handleError(e))
  }
}
