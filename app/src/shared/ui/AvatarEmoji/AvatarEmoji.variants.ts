import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'size-10 rounded-md text-lg',
  lg: 'size-12 rounded-md text-xl',
  xl: 'size-24 rounded-2xl text-5xl max-md:size-[74px] max-md:text-2xl max-md:rounded-xl',
}

export const emojiVariants = cva('flex items-center justify-center', {
  variants: {
    size: sizes,
  },
  defaultVariants: {
    size: 'default',
  },
})

export type emojiVariants = VariantProps<typeof emojiVariants>
