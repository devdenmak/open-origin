'use client'

import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { Icon } from '@/src/shared/ui/Icon'

import { cn } from '../../lib/tailwindUtils'
import { buttonVariants } from './Button.variants'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, buttonVariants {
  asChild?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      children,
      variant,
      size,
      disabled,
      loading,
      type = 'button',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    const renderLoading = (
      <>
        <Icon name="filled/settings" className="mr-2 animate-spin" />
        {children}
      </>
    )

    return (
      <Comp
        type={type}
        disabled={loading || disabled}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading && !asChild ? renderLoading : children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
