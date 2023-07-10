/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'page.tsx',
    'page.ts',
  ],
  images: {
    domains: ['lorempixel.com.br', 'ssl-static.libsyn.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
