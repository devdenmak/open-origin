import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'min-h-[80px] rounded-xl border px-5.5 py-3 text-base font-medium',
  md: 'min-h-[80px] rounded-2lg border px-3.5 py-3 text-xs font-medium',
}

export const textareaVariants = cva(
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

export type textareaVariants = VariantProps<typeof textareaVariants>
export type sizes = keyof typeof sizes
