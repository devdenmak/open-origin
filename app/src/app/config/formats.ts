import { Formats } from 'next-intl'

export const formats: Partial<Formats> = {
  number: {
    currency: {
      style: 'currency',
      currency: 'USD',
    },
    nubmerWithSpaces: {
      style: 'decimal',
    },
    percent: {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
}
