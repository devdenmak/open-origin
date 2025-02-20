import { isAnalyticsDisabled } from '@/src/app/config/env'

export const analyticsApi = {
  pageview: (url: string) => {
    if (isAnalyticsDisabled) return

    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  },
}
