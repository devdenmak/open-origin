/* eslint-disable @typescript-eslint/no-empty-object-type */
import en from 'app/src/app/translation/en.json'
import type { SwiperProps, SwiperSlideProps } from 'swiper/react'

type Messages = typeof en

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}

  interface Window {
    dataLayer: Record<string, unknown>[]
  }
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >
    }
  }
}
