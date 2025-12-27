const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    // Silence Prisma/OpenTelemetry 'Critical dependency: the request of a dependency is an expression'
    config.ignoreWarnings = config.ignoreWarnings || []
    config.ignoreWarnings.push({
      module:
        /@opentelemetry\/instrumentation\/build\/esm\/platform\/node\/instrumentation\.js/,
      message:
        /Critical dependency: the request of a dependency is an expression/,
    })
    return config
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85, 90, 100],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'geoalt-website.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'geoalt.in',
      },
      {
        protocol: 'https',
        hostname: '*.geoalt.in',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.brandfetch.io',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; script-src 'self' 'unsafe-inline' https://vercel.live https://vitals.vercel-insights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' ${process.env.NODE_ENV === 'development' ? 'http://localhost:5000 ws://localhost:5000 ws://localhost:3000' : 'https://your-api-domain.com'} https://api.sentry.io https://vitals.vercel-insights.com https://*.vercel-insights.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;`,
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/demo-requests',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/health',
        destination: '/api/health',
      },
    ]
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  reactStrictMode: true,
  trailingSlash: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
