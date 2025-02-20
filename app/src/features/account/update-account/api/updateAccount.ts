import { mutate } from 'swr'

import { profileUpdateAccount } from '@/src/shared/api/fetch'
import { ProfileUpdateAccount200, ProfileUpdateAccountBody } from '@/src/shared/api/model'
import { getProfileKey } from '@/src/shared/api/swr'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'
import { IBaseAction, IFormResponseErrors } from '@/src/shared/model'

export async function updateProfileAccount(prevState: IBaseAction, body: ProfileUpdateAccountBody) {
  try {
    const response = (await profileUpdateAccount(body)) as ProfileUpdateAccount200 &
      IFormResponseErrors

    if (!response?.errors) {
      mutate(getProfileKey(), { data: response.data })

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
