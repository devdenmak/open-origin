'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'
import { useState } from 'react'

import ImageNoImage from '@/src/shared/images/fancy.svg'

import { cn } from '../../lib/tailwindUtils'
import { useImageLoader } from './model'

export type IImageProps = {
  className?: string
  src?: string | StaticImport | null
  width: number
  height: number
  alt: string | null
  quality?: number
  priority?: boolean
  fillParent?: boolean
  loader?: 'next' | 'imgproxy' | 'auto'
  sizes?: string
  unoptimized?: boolean
  loading?: boolean
  disableLoader?: boolean
}

const Image = ({
  className,
  src = ImageNoImage,
  width,
  height,
  quality = 75,
  alt,
  priority = false,
  fillParent = false,
  // loader = 'auto',
  sizes,
  unoptimized = false,
  loading = false,
  disableLoader = false,
}: IImageProps) => {
  const [loaded, setLoadedState] = useState(false)
  const _src = src || ImageNoImage

  const imageLoader = useImageLoader('next', _src)

  return (
    <div
      className={cn(
        'group flex text-0',
        {
          'fill-parent block': fillParent,
          loading: loading,
          loaded: loaded,
          noLoader: disableLoader,
        },
        className,
      )}
    >
      <div
        style={fillParent ? { aspectRatio: `${width} / ${height}` } : undefined}
        className="inline-flex animate-pulse overflow-hidden bg-supportive-primary group-[.fill-parent]:relative group-[.fill-parent]:block group-[.loaded]:animate-none group-[.loading]:!animate-pulse group-[.noLoader]:!animate-none group-[.fill-parent]:overflow-hidden group-[.loaded]:bg-transparent group-[.loading]:!bg-supportive-primary group-[.noLoader]:!bg-transparent"
      >
        <NextImage
          className="group-[.fill-parent]:absolute group-[.fill-parent]:inset-0 group-[.fill-parent]:size-full group-[.fill-parent]:object-cover group-[.fill-parent]:opacity-0 group-[.loaded]:opacity-100 group-[.loading]:opacity-0 group-[.noLoader]:!opacity-100 group-[.fill-parent]:transition-opacity"
          onLoad={() => setLoadedState(true)}
          loader={imageLoader}
          sizes={sizes}
          quality={quality}
          src={_src}
          width={width}
          height={height}
          alt={alt ?? ''}
          priority={priority}
          unoptimized={unoptimized}
        />
      </div>
    </div>
  )
}

export default Image
