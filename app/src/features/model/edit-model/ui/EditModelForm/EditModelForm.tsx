'use client'

import { useTranslations } from 'next-intl'
import { useFormStatus } from 'react-dom'
import { z } from 'zod'

import { useModel } from '@/src/entities/model/hooks/useModel'
import { createModel } from '@/src/features/model/edit-model/api/createModel'
import { editModel } from '@/src/features/model/edit-model/api/editModel'
import { ModelsCreateBodyAvailability, ModelsShow200 } from '@/src/shared/api/model'
import { useModelTagsList } from '@/src/shared/api/swr'
import { useActionForm } from '@/src/shared/hooks/useActionForm'
import { cn } from '@/src/shared/lib/tailwindUtils'
import { Button, buttonVariants } from '@/src/shared/ui/Button'
import { Card, CardContent, CardFooter } from '@/src/shared/ui/Card'
import { FileUploader } from '@/src/shared/ui/FileUploader'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/shared/ui/Form'
import { Icon } from '@/src/shared/ui/Icon'
import { Input } from '@/src/shared/ui/Input'
import { InputEmoji } from '@/src/shared/ui/InputEmoji'
import { InputMarkdown } from '@/src/shared/ui/InputMarkdown'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { RadioGroup, RadioGroupItem } from '@/src/shared/ui/RadioGroup'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/shared/ui/Select'

export type IEditModelFormProps = {
  className?: string
  model?: ModelsShow200
}

const gallerySchema = z.object({
  url: z.string(),
  file: z.instanceof(File).optional(),
  uuid: z.string(),
})

const formSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  type: z.string().min(1),
  license: z.string().min(1),
  finetuned_from: z.string(),
  languages: z.string().min(1),
  category_id: z.string().min(1),
  tag_id: z.string().min(1),
  availability: z.enum(['public', 'private', 'premium']),
  link: z.string().min(1),
  emoji: z.string(),
  description: z.string().min(1),
  gallery: z.array(gallerySchema),
})

const EditModelForm = ({ className, model }: IEditModelFormProps) => {
  const t = useTranslations()
  const { data: initialValues, isMyModel } = useModel(model)
  const { data: tags } = useModelTagsList()

  const optionsCategories = tags?.data ?? []
  const initialCategory =
    optionsCategories
      .find((category) => category.tags.find((tag) => tag.id === initialValues?.data?.tag?.id))
      ?.id?.toString() ?? ''

  const isEditMode = !!initialValues
  const isCreateMode = !isEditMode

  const { form, action } = useActionForm({
    action: isEditMode ? editModel : createModel,
    formSchema,

    redirectTo: '/profile/models',

    initialValues: {
      id: initialValues?.data?.uuid ?? '',
      name: initialValues?.data?.name ?? '',
      type: initialValues?.data?.type ?? '',
      license: initialValues?.data?.license ?? '',
      finetuned_from: initialValues?.data?.finetuned_from ?? '',
      languages: initialValues?.data?.languages ?? '',
      category_id: initialCategory ?? '',
      tag_id: initialValues?.data?.tag?.id?.toString() ?? '',
      availability: (initialValues?.data?.availability ?? 'public') as ModelsCreateBodyAvailability,
      link: initialValues?.data?.link ?? '',
      emoji: initialValues?.data?.emoji ?? '',
      description: initialValues?.data?.description ?? '',
      gallery: initialValues?.data?.gallery ?? [],
    },

    firstInputFocus: isEditMode,
    showToasts: isEditMode,
  })

  const availabiltyOptions = [
    {
      value: ModelsCreateBodyAvailability.public,
      name: t('Common.fields.input.avalability.title.public'),
      label: t('Common.fields.input.avalability.placeholder.public'),
    },
    // {
    //   value: ModelsCreateBodyAvailability.private,
    //   name: t('Common.fields.input.avalability.title.private'),
    //   label: t('Common.fields.input.avalability.placeholder.private'),
    // },

    // {
    //   value: ModelsCreateBodyAvailability.premium,
    //   name: t('Common.fields.input.avalability.title.premium'),
    //   label: t('Common.fields.input.avalability.placeholder.premium'),
    // },
  ]

  const selectedCategoryId = form.watch('category_id')
  const optionsTags =
    optionsCategories.find((category) => category.id.toString() === selectedCategoryId)?.tags ?? []

  return (
    <Form {...form}>
      <form
        noValidate
        // @ts-ignore
        action={form.handleSubmit((values) => action(values))}
        className={className}
      >
        <Card>
          <CardContent className="space-y-7 pt-7 max-lg:space-y-4 max-lg:pt-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Common.fields.input.modelName.title.simple')}</FormLabel>
                  <FormControl>
                    <Input
                      inputSize="md"
                      type="text"
                      placeholder={t('Common.fields.input.modelName.placeholder.enter')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Common.fields.input.modelType.title.simple')}</FormLabel>
                  <FormControl>
                    <Input
                      inputSize="md"
                      type="text"
                      placeholder={t('Common.fields.input.modelType.placeholder.enter')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-6 max-lg:gap-4 max-md:flex-col">
              <FormField
                control={form.control}
                name="license"
                render={({ field }) => (
                  <FormItem className="w-1/2 max-md:w-full">
                    <FormLabel>{t('Common.fields.input.license.title.simple')}</FormLabel>
                    <FormControl>
                      <Input
                        inputSize="md"
                        type="text"
                        placeholder={t('Common.fields.input.license.placeholder.enter')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="finetuned_from"
                render={({ field }) => (
                  <FormItem className="w-1/2 max-md:w-full">
                    <FormLabel>{t('Common.fields.input.finetuned.title.optional')}</FormLabel>
                    <FormControl>
                      <Input
                        inputSize="md"
                        type="text"
                        placeholder={t('Common.fields.input.finetuned.placeholder.enter')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="languages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Common.fields.input.languages.title.simple')}</FormLabel>
                  <FormControl>
                    <Input
                      inputSize="md"
                      type="text"
                      placeholder={t('Common.fields.input.languages.placeholder.enter')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-6 max-lg:gap-4 max-md:flex-col">
              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem className="w-1/2 max-md:w-full">
                    <FormLabel>{t('Common.fields.input.category.title.simple')}</FormLabel>

                    <Select
                      onValueChange={(val) => {
                        field.onChange(val)
                        form.setValue('tag_id', '')
                      }}
                      value={field.value}
                    >
                      <SelectTrigger size="md">
                        <SelectValue
                          placeholder={t('Common.fields.input.category.placeholder.select')}
                        />
                      </SelectTrigger>

                      <SelectContent>
                        {optionsCategories.map(({ id, name }) => (
                          <SelectItem key={id} value={id.toString()}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tag_id"
                render={({ field }) => (
                  <FormItem className="w-1/2 max-md:w-full">
                    <FormLabel>{t('Common.fields.input.useCase.title.simple')}</FormLabel>

                    <Select
                      disabled={!form.getValues('category_id')}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger size="md">
                        <SelectValue
                          placeholder={t('Common.fields.input.useCase.placeholder.select')}
                        />
                      </SelectTrigger>

                      <SelectContent>
                        {optionsTags.map(({ id, name }) => (
                          <SelectItem key={id} value={id.toString()}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem className="space-y-3 px-3">
                  <FormLabel className="mb-2 px-0 text-base max-lg:mb-3 max-lg:text-base">
                    {t('Common.fields.input.avalability.title.self')}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                      {availabiltyOptions.map(({ value, name, label }, key) => (
                        <FormItem key={key} className="flex items-start space-x-3 space-y-0">
                          <FormControl className="mt-0.5">
                            <RadioGroupItem value={value} />
                          </FormControl>
                          <FormLabel
                            className={cn(
                              'flex flex-col px-0 font-main text-base font-medium text-text-primary max-lg:text-base max-lg:!mt-0',
                              // value === 'private' && 'text-button-eighth',
                            )}
                          >
                            <div className="inline-flex flex-nowrap">
                              <span>{name}</span>

                              {/* {value === 'private' && (
                                <Icon className="ml-1.5 mt-0.75 text-sm" name="filled/crown"></Icon>
                              )} */}
                            </div>

                            <span className="mt-0.75 font-main text-xs font-normal text-text-third">
                              {label}
                            </span>
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Common.fields.input.linkToDownload.title.simple')}</FormLabel>
                  <FormControl>
                    <Input
                      inputSize="md"
                      type="text"
                      placeholder={t('Common.fields.input.linkToDownload.placeholder.enter')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emoji"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Common.fields.input.emoji.title.pick')}</FormLabel>
                  <FormControl>
                    <InputEmoji
                      // placeholder={t('Common.fields.input.emoji.placeholder.pick')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gallery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Common.fields.input.gallery.title.simple')}</FormLabel>
                  <FormControl>
                    <FileUploader
                      maxFiles={10}
                      value={field.value}
                      onChange={(val) => field.onChange(val)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Common.fields.input.description.title.simple')}</FormLabel>
                  <FormControl>
                    <InputMarkdown
                      size="md"
                      className="min-h-60"
                      placeholder={t('Common.fields.input.description.placeholder.hello')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          {(isMyModel || isCreateMode) && (
            <CardFooter>
              <SubmitButton
                isEditMode={isEditMode}
                isPrivate={form.getValues('availability') === 'private'}
              />
            </CardFooter>
          )}
        </Card>
      </form>
    </Form>
  )
}

const SubmitButton = ({ isEditMode, isPrivate }: { isEditMode: boolean; isPrivate: boolean }) => {
  const t = useTranslations()
  const { pending } = useFormStatus()

  const label = isEditMode ? 'Common.actions.updateModel' : 'Common.actions.createModel'

  return (
    <>
      {isPrivate ? (
        <LocalizedLink
          target="_blank"
          href="/go-premium"
          className={cn(buttonVariants({ variant: 'secondary' }), 'max-lg:w-full')}
        >
          {t(label)}
          <Icon className="ml-2" name="filled/flash" />
        </LocalizedLink>
      ) : (
        <Button className="max-lg:w-full" loading={pending} variant="secondary" type="submit">
          {t(label)}
          <Icon className="ml-2" name="filled/flash" />
        </Button>
      )}
    </>
  )
}

export default EditModelForm
