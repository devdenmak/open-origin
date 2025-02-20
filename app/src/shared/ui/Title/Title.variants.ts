import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'text-5xl max-md:text-3xl',
  '3xs': 'text-base',
  xs: 'text-xl max-md:text-lg',
  sm: 'text-2xl max-md:text-xl',
  md: 'text-4xl max-md:text-3xl',
  xl: 'text-6xl max-md:text-5xl',
}

export const titleVariants = cva('font-headings text-xl font-semibold', {
  variants: {
    size: sizes,
  },
  defaultVariants: {
    size: 'default',
  },
})

export type titleVariants = VariantProps<typeof titleVariants>
