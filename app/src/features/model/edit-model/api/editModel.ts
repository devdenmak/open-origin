import { mutate } from 'swr'

import { MODELS_TAG } from '@/src/entities/model/config'
import { modelsUpdate } from '@/src/shared/api/fetch'
import { ModelsUpdate200, ModelsUpdateBody } from '@/src/shared/api/model'
import { nextRevalidateTag, nextRevalidateTagByUrl } from '@/src/shared/api/revalidate'
import {
  getModelsFavoritesKey,
  getModelsMyKey,
  getModelsUpdateMutationKey,
} from '@/src/shared/api/swr'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'
import { IBaseAction, IFormResponseErrors } from '@/src/shared/model'

export async function editModel(prevState: IBaseAction, body: ModelsUpdateBody & { id: string }) {
  try {
    const response = (await modelsUpdate(body.id, body)) as ModelsUpdate200 & IFormResponseErrors

    if (!response?.errors) {
      const modelKey = getModelsUpdateMutationKey(response.data.uuid)
      const authUserModelsKey = getModelsMyKey()
      const authUserFavoriteKey = getModelsFavoritesKey()

      nextRevalidateTag(MODELS_TAG) // Server revalidate public list models
      nextRevalidateTagByUrl(modelKey[0]) // Server revalidate ONE public model

      mutate(modelKey, response) // SWR revalidate ONE puplic model
      mutate(authUserModelsKey) // SWR revalidate user list models
      mutate(authUserFavoriteKey) // SWR revalidate user favorite models

      return {
        isError: false,
        isSuccess: true,
        data: response,
        errors: null,
      }
    } else {
      logger.error(handleError(response))
    }

    return {
      isError: true,
      isSuccess: false,
      data: response,
      errors: response?.errors,
    }
  } catch (e) {
    logger.error(handleError(e))

    return prevState
  }
}
