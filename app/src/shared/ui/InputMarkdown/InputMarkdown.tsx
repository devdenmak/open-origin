'use client'

import { useTranslations } from 'next-intl'
import { forwardRef } from 'react'

import { Textarea } from '@/src/shared/ui/Textarea'
import { TextareaProps } from '@/src/shared/ui/Textarea/Textarea'

const InputMarkdown = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const t = useTranslations()

    return (
      <Textarea
        size="md"
        className={className}
        placeholder={t('Common.fields.input.description.placeholder.hello')}
        ref={ref}
        {...props}
      />
    )
  },
)

InputMarkdown.displayName = 'InputMarkdown'

export default InputMarkdown
