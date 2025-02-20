/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { GTAG, isAnalyticsDisabled } from '@/src/app/config/env'
import { isLightHouse } from '@/src/shared/lib/detectDevice'

import { initGtagScript } from '../scripts'

export const useGtag = ({ gtagId = GTAG } = {}) => {
  const [loadedGtag, setStateLoaded] = useState(false)

  const loadGtag = () => {
    if (loadedGtag) return

    initGtagScript(gtagId)
    setStateLoaded(true)
  }

  useEffect(() => {
    if (isLightHouse || isAnalyticsDisabled) return

    loadGtag()
  }, [])

  return { gtagId, isInitGtag: loadedGtag }
}
