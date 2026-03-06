import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GEOAlt - AI Visibility Optimization Platform',
    short_name: 'GEOAlt',
    description: 'Get your brand recommended by AI. Optimize your visibility across AI platforms like ChatGPT, Perplexity, and Claude.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logos/Favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['business', 'productivity', 'marketing'],
    screenshots: [
      {
        src: '/images/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
        label: 'GEOAlt Dashboard',
      },
    ],
  }
}

