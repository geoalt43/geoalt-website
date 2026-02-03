import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Geoalt - AI Visibility Optimization Platform',
    short_name: 'Geoalt',
    description: 'Get your brand recommended by AI. Optimize your visibility across AI platforms like ChatGPT, Perplexity, and Claude.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['business', 'productivity', 'marketing'],
    screenshots: [
      {
        src: '/images/img-2.jpeg',
        sizes: '1280x720',
        type: 'image/jpeg',
        label: 'Geoalt Dashboard',
      },
    ],
  }
}

