import { Suspense } from 'react'
import { Metadata } from 'next'
import { HomePage } from '@/components/pages/home-page'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const metadata: Metadata = {
  title: 'GEOAlt - Get Your Brand Recommended by AI | AI Visibility Optimization',
  description: 'Optimize your brand visibility across AI platforms like ChatGPT, Perplexity, and Claude. GEOAlt helps businesses get recommended by AI, turning AI mentions into traffic and customers. Start your free trial today.',
  keywords: [
    'AI visibility',
    'Generative Engine Optimization',
    'GEO',
    'AI SEO',
    'ChatGPT optimization',
    'Perplexity optimization',
    'Claude optimization',
    'AI search optimization',
    'brand visibility',
    'AI recommendations',
    'AI marketing',
    'AI search engine optimization',
  ],
  openGraph: {
    title: 'GEOAlt - Get Your Brand Recommended by AI',
    description: 'Optimize your brand visibility across AI platforms. Turn AI mentions into traffic and customers with GEOAlt.',
    url: 'https://geoalt.com',
    siteName: 'GEOAlt',
    images: [
      {
        url: '/images/img-2.jpeg',
        width: 1200,
        height: 630,
        alt: 'GEOAlt - AI Visibility Optimization Platform Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEOAlt - Get Your Brand Recommended by AI',
    description: 'Optimize your brand visibility across AI platforms. Turn AI mentions into traffic and customers.',
    images: ['/images/img-2.jpeg'],
  },
  alternates: {
    canonical: 'https://geoalt.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePage />
    </Suspense>
  )
}

