import { isProdEnv } from '@/src/app/config/env'

export const logger = {
  info: (url?: string) => {
    if (isProdEnv) return

    if (url) console.info(`Request to: ${url}`)
  },
  error: (error?: string, url?: string) => {
    if (isProdEnv) return

    if (url) console.error(`Request to: ${url}`)
    if (error) console.error(error)
  },
}
