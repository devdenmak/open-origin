import { passwordForgot, passwordReset } from '@/src/shared/api/fetch'
import {
  PasswordForgot200,
  PasswordForgotBody,
  PasswordReset200,
  PasswordResetBody,
} from '@/src/shared/api/model'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'
import { IBaseAction, IFormResponseErrors } from '@/src/shared/model'

export async function forgotPassword(prevState: IBaseAction, body: PasswordForgotBody) {
  try {
    const response = (await passwordForgot(body)) as PasswordForgot200 & IFormResponseErrors

    if (response?.status !== 400) {
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
      errors: { email: [response.message] },
    }
  } catch (e) {
    logger.error(handleError(e))

    return prevState
  }
}

export async function resetPassword(prevState: IBaseAction, body: PasswordResetBody) {
  try {
    const response = (await passwordReset(body)) as PasswordReset200 & IFormResponseErrors

    if (!response?.errors && response?.status !== 400) {
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
      errors: response?.errors ?? { token: [response?.message] },
    }
  } catch (e) {
    logger.error(handleError(e))

    return prevState
  }
}
