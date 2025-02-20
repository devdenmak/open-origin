'use client'

import { useTranslations } from 'next-intl'
import { forwardRef, InputHTMLAttributes, useState } from 'react'

import { cn } from '../../lib/tailwindUtils'
import { Icon } from '../Icon'
import { inputVariants, sizes } from './Input.variants'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: sizes
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize, type, ...props }, ref) => {
    const t = useTranslations('Common.actions')
    const inputTypeIsPassword = type === 'password'
    const inputTypeIsSearch = type === 'search'

    const [showPassword, setShowPassword] = useState(false)

    const getType = () => {
      if (inputTypeIsSearch) {
        return 'text'
      }
      return inputTypeIsPassword ? (showPassword ? 'text' : 'password') : type
    }

    return (
      <div className={cn('relative w-full max-w-full', className)}>
        {inputTypeIsSearch && (
          <div className="absolute left-0 top-0 flex h-full items-center justify-center px-4 py-2 text-text-fourth">
            <Icon name="outlined/search" />
          </div>
        )}

        <input
          type={getType()}
          className={cn('group-[.custom-input]:text-center', inputVariants({ size: inputSize }), {
            'pr-12': inputTypeIsPassword,
            'pl-12': inputTypeIsSearch,
          })}
          ref={ref}
          {...props}
        />

        {inputTypeIsPassword && (
          <button
            disabled={props.disabled}
            type="button"
            className="absolute right-0 top-0 flex h-full items-center justify-center px-4 py-2 text-text-fourth transition-colors hover:text-text-primary active:text-text-fourth disabled:pointer-events-none disabled:opacity-30"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <Icon name={showPassword ? 'filled/eye-on' : 'filled/eye-off'} />
            <span className="sr-only">{showPassword ? t('hidePassword') : t('showPassword')}</span>
          </button>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
