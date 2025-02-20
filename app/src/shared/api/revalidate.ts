'use server'

import { revalidateTag } from 'next/cache'

import { getFullUrl } from './base'

export const nextRevalidateTagByUrl = (url: string, query?: Record<string, string>) => {
  const fullUrl = getFullUrl(url, query)

  revalidateTag(fullUrl)
}

export const nextRevalidateTag = (tag: string) => {
  revalidateTag(tag)
}
