/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: { unoptimized: true },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000', // localhost
        'vigilant-waddle-w6pxpj5vcwwp-3000.app.github.dev', // Codespaces
      ],
    },
  },
}

module.exports = nextConfig
