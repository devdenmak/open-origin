import { mutate } from 'swr'

import { profileDelete } from '@/src/shared/api/fetch'
import { deleteSessionToken } from '@/src/shared/api/store'
import { handleError } from '@/src/shared/lib/handleError'
import { logger } from '@/src/shared/lib/logger'

export async function deleteAccount() {
  mutate(() => true, undefined, false)

  try {
    await profileDelete()

    deleteSessionToken()
  } catch (e) {
    deleteSessionToken()

    logger.error(handleError(e))
  }
}
