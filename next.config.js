/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  // Disable any Vercel-specific optimizations
  poweredByHeader: false,
}

module.exports = nextConfig
