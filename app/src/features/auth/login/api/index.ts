import { mutate } from 'swr'

import { authLogin } from '@/src/shared/api/fetch'
import { AuthLogin200, AuthLoginBody } from '@/src/shared/api/model'
import { setSessionToken } from '@/src/shared/api/store'
import { getProfileKey } from '@/src/shared/api/swr'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'
import { IBaseAction, IFormResponseErrors } from '@/src/shared/model'

export async function login(prevState: IBaseAction, body: AuthLoginBody) {
  try {
    const response = (await authLogin(body)) as AuthLogin200 & IFormResponseErrors

    if (!response?.errors) {
      setSessionToken(response.token)

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
