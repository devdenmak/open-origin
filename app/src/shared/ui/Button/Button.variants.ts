import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'text-xs h-11 px-5 rounded-2lg focus-visible:ring-2',
  sm: 'text-2xs h-9 px-3.5 rounded-lg focus-visible:ring-2',
  lg: 'text-base h-13 px-5.5 rounded-xl focus-visible:ring',
}

export const variants = {
  default:
    'font-semibold bg-button-primary text-button-third hover:shadow-primary focus-visible:ring-supportive-fourth active:shadow-none',
  'default-inverse':
    'font-semibold bg-button-primary-inverse text-button-third-inverse hover:shadow-primary focus-visible:ring-supportive-fourth active:shadow-none',
  secondary:
    'font-semibold bg-button-secondary text-white hover:shadow-secondary focus-visible:ring-blue-300 active:shadow-none',
  third:
    'font-medium bg-button-fourth text-text-secondary hover:bg-button-fifth border-2 border-supportive-primary focus-visible:ring-blue-300 active:bg-button-fourth',
  fourth:
    'font-medium bg-button-sixth text-button-eighth hover:bg-button-seventh focus-visible:ring-accent-300 active:bg-button-sixth',
  // destructive: '',
  // outline: '',
  // ghost: '',
  // link: '',
}

// hover:-translate-x-0.25 hover:-translate-y-0.25

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-headings transition will-change-transform focus-visible:outline-none active:translate-x-0 active:translate-y-0 disabled:pointer-events-none disabled:opacity-30',
  {
    variants: {
      variant: variants,
      size: sizes,
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type buttonVariants = VariantProps<typeof buttonVariants>
