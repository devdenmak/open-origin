'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import { useTranslations } from 'next-intl'
import { createContext, forwardRef, useContext, useId } from 'react'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form'

import { Icon } from '@/src/shared/ui/Icon'

import { cn } from '../../lib/tailwindUtils'
import { Label } from '../Label'

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('space-y-2 max-lg:space-y-1', className)} {...props} />
      </FormItemContext.Provider>
    )
  },
)

FormItem.displayName = 'FormItem'

const FormLabel = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { formItemId } = useFormField()

  return <Label ref={ref} className={cn('px-3', className)} htmlFor={formItemId} {...props} />
})

FormLabel.displayName = 'FormLabel'

const FormControl = forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      className={cn(error && 'focus-visible:ring-red-strong')}
      {...props}
    />
  )
})

FormControl.displayName = 'FormControl'

const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
      {...props}
    />
  )
})

FormDescription.displayName = 'FormDescription'

const FormMessage = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error?.message) : children

    if (!body) {
      return null
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn('text-xs font-medium text-red-strong px-3 max-lg:text-2xs', className)}
        {...props}
      >
        {body}
      </p>
    )
  },
)

FormMessage.displayName = 'FormMessage'

export type IProps = {
  runtimeValidation: {
    minLenghtValidate: boolean
    digitValidate: boolean
    specialValidate: boolean
    uppercaseValidate: boolean
  }
}

const FormValidationPasswordMessage = forwardRef<HTMLUListElement, IProps>(
  ({ runtimeValidation, ...props }, ref) => {
    const t = useTranslations('Common.fields.validation')
    const { formMessageId } = useFormField()

    const liClasses = 'flex items-center font-main text-xs font-medium text-text-secondary'
    const iconClasses = 'mr-1.5 mt-0.75 text-text-fifth transition-colors'

    const { minLenghtValidate, digitValidate, specialValidate, uppercaseValidate } =
      runtimeValidation

    return (
      <>
        <ul className="!mt-3 space-y-2 px-2" ref={ref} id={formMessageId} {...props}>
          <li className={cn(liClasses)}>
            <Icon
              className={cn(iconClasses, minLenghtValidate && 'text-green-strong')}
              name="filled/check-round"
            />
            <span>{t('leastCharacters')}</span>
          </li>

          <li className={cn(liClasses)}>
            <Icon
              className={cn(iconClasses, digitValidate && 'text-green-strong')}
              name="filled/check-round"
            />
            <span>{t('leastDigit')}</span>
          </li>

          <li className={cn(liClasses)}>
            <Icon
              className={cn(iconClasses, specialValidate && 'text-green-strong')}
              name="filled/check-round"
            />
            <span>{t('leastSpecialSymbols')}</span>
          </li>

          <li className={cn(liClasses)}>
            <Icon
              className={cn(iconClasses, uppercaseValidate && 'text-green-strong')}
              name="filled/check-round"
            />
            <span>{t('leastUppercase')}</span>
          </li>
        </ul>
        <FormMessage />
      </>
    )
  },
)

FormValidationPasswordMessage.displayName = 'FormValidationPasswordMessage'

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormValidationPasswordMessage,
  useFormField,
}
