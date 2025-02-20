'use client'

import { useTranslations } from 'next-intl'
import { useFormStatus } from 'react-dom'
import { z } from 'zod'

import { useAuthUser } from '@/src/entities/auth-user/hooks/useAuthUser'
import { useActionForm } from '@/src/shared/hooks/useActionForm'
import { Button } from '@/src/shared/ui/Button'
import { FileUploader } from '@/src/shared/ui/FileUploader'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/shared/ui/Form'
import { Input } from '@/src/shared/ui/Input'
import { Textarea } from '@/src/shared/ui/Textarea'

import { updateProfile } from '../../api/updateProfile'

const ProfileForm = () => {
  const { data } = useAuthUser()
  const t = useTranslations()

  const { form, action } = useActionForm({
    action: updateProfile,

    formSchema: z.object({
      name: z.string().min(1),
      ai_interests: z.string(),
      github_username: z.string(),
      avatar: z
        .object({
          url: z.string(),
          file: z.instanceof(File).nullable(),
          uuid: z.string(),
        })
        .nullable(),
    }),

    initialValues: {
      name: data?.data?.name ?? '',
      ai_interests: data?.data?.ai_interests ?? '',
      github_username: data?.data?.github_username ?? '',
      avatar: data?.data?.avatar?.url
        ? {
            url: data?.data?.avatar?.url ?? '',
            file: null,
            uuid: data?.data.avatar?.uuid ?? '',
          }
        : null,
    },

    showToasts: true,
    firstInputFocus: false,
  })

  return (
    <Form {...form}>
      <form
        noValidate
        // @ts-ignore
        action={form.handleSubmit((values) => action(values))}
        className="space-y-6 max-lg:space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Common.fields.input.name.title.simple')}</FormLabel>
              <FormControl>
                <Input
                  inputSize="md"
                  type="text"
                  placeholder={t('Common.fields.input.name.placeholder.fullName')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="github_username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Common.fields.input.githubUserName.title.optional')}</FormLabel>
              <FormControl>
                <Input
                  inputSize="md"
                  type="text"
                  placeholder={t('Common.fields.input.githubUserName.placeholder.simple')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Common.fields.input.avatar.title.simple')}</FormLabel>
              <FormControl>
                <FileUploader
                  value={field?.value ? [field?.value] : []}
                  onChange={(val) => field.onChange(val?.length ? val?.[0] : null)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ai_interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Common.fields.input.blockchainInterest.title.simple')}</FormLabel>

              <FormControl>
                <Textarea
                  size="md"
                  placeholder={t('Common.fields.input.blockchainInterest.placeholder.simple')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton />
      </form>
    </Form>
  )
}

const SubmitButton = () => {
  const t = useTranslations()
  const { pending } = useFormStatus()

  return (
    <Button className="!mt-4" loading={pending} size="sm" variant="fourth" type="submit">
      {t('Common.actions.saveChanges')}
    </Button>
  )
}

export default ProfileForm
