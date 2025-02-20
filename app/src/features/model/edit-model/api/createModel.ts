import { mutate } from 'swr'

import { MODELS_TAG } from '@/src/entities/model/config'
import { modelsCreate } from '@/src/shared/api/fetch'
import { ModelsCreate200, ModelsCreateBody } from '@/src/shared/api/model'
import { nextRevalidateTag } from '@/src/shared/api/revalidate'
import { getModelsMyKey, getModelsShowKey } from '@/src/shared/api/swr'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'
import { IBaseAction, IFormResponseErrors } from '@/src/shared/model'

export async function createModel(prevState: IBaseAction, body: ModelsCreateBody) {
  try {
    const response = (await modelsCreate(body)) as ModelsCreate200 & IFormResponseErrors

    if (!response?.errors) {
      nextRevalidateTag(MODELS_TAG) // Server revalidate public list models

      mutate(getModelsShowKey(response.data.uuid), response) // SWR revalidate ONE puplic model
      mutate(getModelsMyKey()) // SWR revalidate user modelS

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
