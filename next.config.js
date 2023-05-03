/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    domains: ['https://cahyaaji.github.io/mtj-landing-pages/']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
