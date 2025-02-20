import pick from 'lodash.pick'
import { type IntlProvider, NextIntlClientProvider, useMessages } from 'next-intl'
import { ComponentProps } from 'react'

import { formats } from '../config/formats'
import { ILang } from '../model'

type IProps = Omit<ComponentProps<typeof IntlProvider>, 'locale'> & {
  locale?: ILang
  messagesCategories?: (keyof IntlMessages)[]
}

export function NextIntlProvider({ children, messagesCategories = [] }: IProps) {
  const messages = useMessages()
  const pickedMessages = messagesCategories.length
    ? pick(messages, ['Common', ...messagesCategories])
    : pick(messages, ['Common'])

  return (
    <NextIntlClientProvider formats={formats} messages={pickedMessages}>
      {children}
    </NextIntlClientProvider>
  )
}
