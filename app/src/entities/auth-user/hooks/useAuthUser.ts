/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { preload } from 'swr'

import { PREVIEW_MODE_USER_NAME } from '@/src/app/config/constants'
import { getSessionToken, subscribe } from '@/src/shared/api/store'
import { getProfileKey, profile, useProfile } from '@/src/shared/api/swr'
import { isClient } from '@/src/shared/lib/isServerOrClient'

if (isClient) {
  const hasToken = getSessionToken()

  if (hasToken) {
    preload(getProfileKey(), profile)
  }
}

export const useAuthUser = () => {
  const token = useSyncExternalStore(subscribe, getSessionToken, () => undefined)

  const tokenInit = token !== undefined
  const [enabled, setEnabled] = useState(true)

  const { data, mutate, isLoading, isValidating } = useProfile({
    swr: { enabled: enabled && tokenInit && token !== null },
  })

  useEffect(() => {
    if (tokenInit) setEnabled(!!token)
  }, [token])

  useEffect(() => {
    if (tokenInit) setEnabled(!!data?.data)
  }, [data])

  const _isLoading = !tokenInit || isLoading

  return {
    isPreviewMode: data?.data.username === PREVIEW_MODE_USER_NAME,
    data,
    mutate,
    isAuth: !!token && !!data?.data,
    isLoading: _isLoading,
    isValidating,
    isLoadingOrValidating: _isLoading || isValidating,
  }
}
