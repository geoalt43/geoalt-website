import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.geoalt.in'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/css/',
          '/_next/static/chunks/',
          '/_next/static/media/',
        ],
        disallow: [
          '/api/*',
          '/_next/data/*',
          '/admin/*',
          '/dashboard/*',
          '/privacy/*',
          '*.json',
        ],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Applebot'],
        allow: '/',
        disallow: [
          '/api/*',
          '/admin/*',
          '/dashboard/*',
        ],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap/core.xml`,
      `${baseUrl}/sitemap/content.xml`,
      `${baseUrl}/sitemap/legal.xml`,
    ],
    host: baseUrl,
  }
}

