import { mutate } from 'swr'

import { authLogout } from '@/src/shared/api/fetch'
import { deleteSessionToken } from '@/src/shared/api/store'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'

export async function logout() {
  mutate(() => true, undefined, false)

  try {
    await authLogout()

    deleteSessionToken()
  } catch (e) {
    deleteSessionToken()

    logger.error(handleError(e))
  }
}
