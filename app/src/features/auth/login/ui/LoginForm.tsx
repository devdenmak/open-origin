'use client'

import { useTranslations } from 'next-intl'
import { useFormStatus } from 'react-dom'
import { z } from 'zod'

import { afterLoginRedirectTo } from '@/src/entities/auth-user/config'
import { useActionForm } from '@/src/shared/hooks/useActionForm'
import { Button } from '@/src/shared/ui/Button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/src/shared/ui/Form'
import { Input } from '@/src/shared/ui/Input'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { Title } from '@/src/shared/ui/Title'

import { login } from '../api'

export function LoginForm() {
  const t = useTranslations()

  const { form, action } = useActionForm({
    action: login,
    redirectTo: afterLoginRedirectTo,

    formSchema: z.object({
      email: z.string(),
      password: z.string(),
    }),

    initialValues: {
      email: '',
      password: '',
    },
  })

  return (
    <section>
      <Title tag="h1" className="pb-5 text-center" size="sm">
        {t('SignInPage.welcome')}
      </Title>

      <Form {...form}>
        <form
          noValidate
          // @ts-ignore
          action={form.handleSubmit((values) => action(values))}
          className="space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t('Common.fields.input.email.placeholder.withUsername')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t('Common.fields.input.password.placeholder.simple')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="!mb-3 mt-2 flex justify-end px-2">
            <LocalizedLink
              className="-m-1 p-1 text-xs font-medium text-text-third transition-colors hover:text-accent-300 active:text-text-third"
              href="/reset-password"
            >
              {t('SignInPage.forgotPassword')}
            </LocalizedLink>
          </div>

          <SubmitButton />
        </form>

        <div className="mt-3 justify-center text-center font-main text-base font-medium text-text-secondary">
          {t('SignInPage.notHaveAccount')}

          <LocalizedLink
            className="-mt-2 inline-flex px-2 font-headings text-base font-semibold text-button-eighth transition-colors hover:text-accent-300 active:text-button-eighth"
            href="/sign-up"
          >
            {t('Common.actions.signUp')}
          </LocalizedLink>
        </div>
      </Form>
    </section>
  )
}

const SubmitButton = () => {
  const t = useTranslations()
  const { pending } = useFormStatus()

  return (
    <Button loading={pending} className="w-full" size="lg" variant="secondary" type="submit">
      {t('Common.actions.logIn')}
    </Button>
  )
}
