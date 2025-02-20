import { premiumSubscriptionSubscribe } from '@/src/shared/api/fetch'
import { PremiumSubscriptionSubscribeBody } from '@/src/shared/api/model'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'
import { IBaseAction, IFormResponseErrors } from '@/src/shared/model'

export async function subscribePremium(_: IBaseAction, body: PremiumSubscriptionSubscribeBody) {
  try {
    const response = (await premiumSubscriptionSubscribe(body)) as unknown as IFormResponseErrors

    if (!response?.errors) {
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

    return {
      isError: false,
      isSuccess: true,
      data: null,
      errors: null,
    }
  }
}
