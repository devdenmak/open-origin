import type { StorybookConfig } from '@storybook/nextjs'
import * as path from 'path'

const webpackConfig = require('../webpack.shared')

const config: StorybookConfig = {
  stories: ['../app/**/*.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      builder: { useSWC: true },
    },
  },
  docs: {
    autodocs: 'tag', 
  },
  staticDirs: ['../public'],
  features: {
    experimentalRSC: true,
  },
  webpackFinal: async (config, options) => webpackConfig(config, options),
  env: (config) => {
    return {
      STORYBOOK: config?.STORYBOOK ?? '',
      NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL ?? '',
      NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL ?? '',
    }
  },
}

export default config
