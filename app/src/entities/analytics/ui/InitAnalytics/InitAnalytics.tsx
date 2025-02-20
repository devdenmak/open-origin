/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

import { analyticsApi } from '../../api'
import { useGtag } from '../../hooks'

const InitAnalytics = () => {
  const { isInitGtag, gtagId } = useGtag()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams ? searchParams.toString() : ''}`

    if (isInitGtag) {
      analyticsApi.pageview(url)
    }
  }, [pathname, searchParams, isInitGtag, gtagId])

  return (
    <>
      <Script
        id="_next-ga-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}

            gtag('js', new Date());
            gtag('config', "${gtagId}");
          `,
        }}
      />
    </>
  )
}

export default InitAnalytics
