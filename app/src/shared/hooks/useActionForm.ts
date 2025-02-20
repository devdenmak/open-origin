/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import type { DefaultValues, Mode, Path } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { TypeOf, z } from 'zod'

import { useRouter } from '@/src/app/config/i18n'
import { pathnames } from '@/src/app/config/pathnames'
import { IBaseAction, IErrors } from '@/src/shared/model'

export const useActionForm = <TSchema extends z.ZodSchema, TForm>({
  mode = 'onSubmit',
  formSchema,
  initialValues,
  action,
  redirectTo = null,
  onSuccess,
  onError,
  showToasts = false,
  firstInputFocus = true,
  resetFormAfterSuccess = false,
}: {
  mode?: Mode
  formSchema: TSchema
  initialValues: DefaultValues<z.TypeOf<TSchema>>
  redirectTo?: keyof typeof pathnames | null
  action: (prevState: IBaseAction, body: TForm) => Promise<IBaseAction>
  onSuccess?: () => void
  onError?: (errors: IErrors) => void
  showToasts?: boolean
  firstInputFocus?: boolean
  resetFormAfterSuccess?: boolean
}) => {
  const t = useTranslations('Common.toaster')
  const router = useRouter()

  const [{ errors, isError, isSuccess, data }, formAction] = useFormState(action, {
    isError: false,
    isSuccess: false,
    data: null,
    errors: null,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: initialValues,
    mode,
  })

  const { setFocus, setError, reset } = form

  useEffect(() => {
    if (!firstInputFocus) return

    setTimeout(() => {
      setFocus(Object.keys(initialValues)[0] as Path<TypeOf<TSchema>>)
    }, 100)
  }, [])

  useEffect(() => {
    if (!errors) return

    Object.keys(errors).forEach((field) => {
      setError(field as Path<TypeOf<TSchema>>, {
        type: 'manual',
        message: errors[field].join(', '),
      })
    })

    const firstError = Object.keys(errors).reduce((field, a) => {
      return errors[field] ? field : a
    }, '')

    if (firstError) {
      setTimeout(() => {
        setFocus(firstError as Path<TypeOf<TSchema>>)
      }, 100)
    }
  }, [errors, setFocus, setError])

  useEffect(() => {
    if (isSuccess) {
      onSuccess?.()

      if (showToasts) toast.success(t('successfully'))
      if (resetFormAfterSuccess) reset()
    }

    if (isError) {
      onError?.(errors)

      if (showToasts) toast.error(t('error'))
    }

    if (isSuccess && redirectTo) {
      return router.push({
        pathname: redirectTo,
        params: { id: data?.data?.uuid },
      })
    }
  }, [isSuccess, isError, data])

  return { form, action: formAction }
}
