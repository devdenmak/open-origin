import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

import { SESSION_TOKEN_KEY_NAME } from '@/src/app/config/constants'

let listeners: (() => void)[] = []

const emitChange = () => {
  for (const listener of listeners) {
    listener()
  }
}

export const subscribe = (listener: () => void) => {
  listeners = [...listeners, listener]

  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

export const getSessionToken = (cookies?: () => ReadonlyRequestCookies): string | null => {
  if (cookies) {
    return getCookie(SESSION_TOKEN_KEY_NAME, { cookies }) ?? null
  }

  return getCookie(SESSION_TOKEN_KEY_NAME) ?? null
}

export const setSessionToken = (token: string | null): string | null => {
  setCookie(SESSION_TOKEN_KEY_NAME, token, {
    maxAge: 60 * 60 * 24 * 365,
  })

  emitChange()

  return token
}

export const deleteSessionToken = () => {
  deleteCookie(SESSION_TOKEN_KEY_NAME)

  emitChange()
}
