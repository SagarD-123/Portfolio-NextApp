/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['your-image-domain.com'],
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig 