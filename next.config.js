/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cahyaaji.github.io',
        port: '',
        pathname: '/mtj-landing-pages/*'
      }
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
