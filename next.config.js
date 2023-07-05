/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'page.tsx',
    'page.ts',
  ],
  images: {
    domains: ['lorempixel.com.br', 'ssl-static.libsyn.com'],
  },
}

module.exports = nextConfig
