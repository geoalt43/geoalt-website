import { Suspense } from 'react'
import { Metadata } from 'next'
import { HomePage } from '@/components/pages/home-page'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const metadata: Metadata = {
  title: 'Geoalt - Get Your Brand Recommended by AI | AI Visibility Optimization',
  description: 'Optimize your brand visibility across AI platforms like ChatGPT, Perplexity, and Claude. Geoalt helps businesses get recommended by AI, turning AI mentions into traffic and customers. Start your free trial today.',
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
    title: 'Geoalt - Get Your Brand Recommended by AI',
    description: 'Optimize your brand visibility across AI platforms. Turn AI mentions into traffic and customers with Geoalt.',
    url: 'https://geoalt.com',
    siteName: 'Geoalt',
    images: [
      {
        url: '/images/img-2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Geoalt - AI Visibility Optimization Platform Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geoalt - Get Your Brand Recommended by AI',
    description: 'Optimize your brand visibility across AI platforms. Turn AI mentions into traffic and customers.',
    images: ['/images/img-2.jpeg'],
  },
  alternates: {
    canonical: 'https://www.geoalt.in',
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
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Geoalt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Geoalt is a Generative Engine Optimization (GEO) platform that helps businesses optimize their brand visibility across AI search engines like ChatGPT, Perplexity, and Claude.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Generative Engine Optimization work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GEO involves technical and semantic adjustments to content to improve how AI models understand, cite, and recommend your brand in generated answers.',
        },
      },
    ],
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <HomePage />
    </Suspense>
  )
}

