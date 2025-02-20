import { generateImageUrl } from '@imgproxy/imgproxy-node'
import { NextRequest, NextResponse } from 'next/server'

import { default as images } from '@/src/app/config/images'
import { checkAbsoluteUrl } from '@/src/shared/lib/checkAbsoluteUrl'
import { handleError } from '@/src/shared/lib/handleError'

const generateImageProxyUrl = (src: string, width: number, quality: number) => {
  const isAbsolute = checkAbsoluteUrl(src)
  const url = isAbsolute ? src : `${process.env.NEXT_PUBLIC_FRONTEND_URL}${src}`
  const extension = /[.]/.exec(url) ? /[^.]+$/.exec(url) : undefined
  const isSVG = extension?.[0] === 'svg'

  const imgProxyUrl = generateImageUrl({
    endpoint: `${process.env.IMGPROXY_URL}/`,
    url,

    options: {
      format: isSVG ? 'svg' : 'webp',
      quality: quality,
      width: width,
      // height: 1000,
      resizing_type: 'fill',
    },

    salt: process.env.IMGPROXY_SALT,
    key: process.env.IMGPROXY_KEY,
  })

  return imgProxyUrl
}

const validateParams = (width: number, quality: number, url: string) => {
  const sizes = [...images.deviceSizes, ...images.imageSizes]

  if (!url) {
    throw new Error(`"url" parameter is required`)
  }

  const isValidSize = sizes.includes(width)

  if (!isValidSize) {
    throw new Error(`"width" parameter of ${width} is not allowed`)
  }

  if (quality < 1 || quality > 100) {
    throw new Error(`"quality" parameter must be a number between 1 and 100`)
  }
}

export async function GET(nextRequest: NextRequest) {
  try {
    const { searchParams } = new URL(nextRequest.url)

    const url = searchParams.get('url') ?? ''
    const quality = Number(searchParams.get('quality'))
    const width = Number(searchParams.get('width'))

    validateParams(width, quality, url)

    const imgProxyUrl = generateImageProxyUrl(url, width, quality)
    const response = await fetch(imgProxyUrl)

    if (!response.ok) {
      throw new Error(`Imgproxy Error: ${response.statusText}`)
    }

    const { body, headers } = response

    return new NextResponse(body, { headers: headers })
  } catch (err) {
    return new NextResponse(handleError(err), {
      status: 500,
    })
  }
}
