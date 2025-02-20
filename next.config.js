/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */

const isAnalyzer = process.env.NODE_ENV === 'analyze'

const webpackConfig = require('./webpack.shared')
const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin('./app/src/app/config/i18n.ts')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: isAnalyzer,
})

const images = require('./app/src/app/config/images')

const nextConfig = {
  experimental: {
    // typedRoutes: true,
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: images,

  webpack: (config, options) => webpackConfig(config, options),
}

module.exports = withBundleAnalyzer(withNextIntl(nextConfig))
