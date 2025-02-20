import '../app/src/app/css/globals.css'
import './preview.css'
import './font.css'

import type { Preview } from '@storybook/react'
import { formats } from '../app/src/app/config/formats'
import React from 'react'
import messages from '../app/src/app/translation/en.json'
import { NextIntlClientProvider } from 'next-intl'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider formats={formats} messages={messages} locale="en">
        <Story />
      </NextIntlClientProvider>
    ),
    withThemeByClassName({
      themes: {
        light:
          'light bg-surface-secondary font-main text-text-primary break-words text-base selection:bg-accent-300 selection:text-white',
        dark: 'dark bg-surface-secondary font-main text-text-primary break-words text-base selection:bg-accent-300 selection:text-white',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
