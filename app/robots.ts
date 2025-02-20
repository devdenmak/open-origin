import { MetadataRoute } from 'next'

import { FRONTEND_URL } from '@/src/app/config/env'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['*.pdf', '/*?', '/storybook', '/sprite'],
    },
    sitemap: `${FRONTEND_URL}/sitemap.xml`,
    host: `${FRONTEND_URL}`,
  }
}
