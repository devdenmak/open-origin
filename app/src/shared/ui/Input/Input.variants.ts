import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'h-13 rounded-xl border px-5.5 py-2 text-base font-medium',
  md: 'h-11 rounded-2lg border px-3.5 py-1 text-xs font-medium',
}

export const inputVariants = cva(
  'flex w-full border-supportive-primary bg-surface-secondary text-text-primary transition placeholder:text-text-fourth hover:shadow-third focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 disabled:cursor-not-allowed disabled:opacity-30 disabled:!shadow-none',
  {
    variants: {
      size: sizes,
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export type inputVariants = VariantProps<typeof inputVariants>
export type sizes = keyof typeof sizes
