import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import type { ImageLoaderProps } from 'next/image'
import { useMemo } from 'react'

import { isDevEnv, isStorybook } from '@/src/app/config/env'

import { checkAbsoluteUrl } from '../../lib/checkAbsoluteUrl'

const defaultLoader = undefined

const imgProxyLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `/imgproxy?url=${encodeURIComponent(src)}&width=${width}&quality=${quality}`
}

export const useImageLoader = (
  loader: 'next' | 'imgproxy' | 'auto',
  src: string | StaticImport,
) => {
  const imageLoader = useMemo(() => {
    if (isStorybook || loader === 'next') return defaultLoader

    if (loader === 'imgproxy') return imgProxyLoader

    if (isDevEnv) {
      return checkAbsoluteUrl(src as string) ? imgProxyLoader : defaultLoader
    }

    return imgProxyLoader
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loader])

  return imageLoader
}
