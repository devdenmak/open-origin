const images = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'imgproxy.by.dev.family',
    },
    {
      protocol: 'https',
      hostname: 's3.by.dev.family',
    },
  ],
}

module.exports = images
