export const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL ?? ''
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''
export const GTAG = process.env.NEXT_PUBLIC_GTAG ?? ''
export const NODE_ENV = process.env.NODE_ENV ?? ''
export const STORYBOOK = process.env.STORYBOOK ?? ''

export const isDevEnv = NODE_ENV === 'development'
export const isProdEnv = NODE_ENV === 'production'
export const isStorybook = STORYBOOK || false

export const isAnalyticsEnabled = (GTAG && !isStorybook) || false
export const isAnalyticsDisabled = !isAnalyticsEnabled
