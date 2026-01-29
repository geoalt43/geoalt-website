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

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Geoalt do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geoalt shows how your website appears in AI search, delivering insights and recommendations to improve visibility, credibility, and performance across generative engines effectively.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Geoalt help my brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geoalt analyzes your content\'s presence in AI answers, highlights missing visibility opportunities, and provides clear guidance to strengthen trust, authority, and competitive advantage across generative platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should use Geoalt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brands, marketers, founders, and SEO teams wanting stronger AI search presence benefit from Geoalt\'s insights, optimization recommendations, competitive analysis, and structured visibility reporting across generative engines.',
      },
    },
    {
      '@type': 'Question',
      name: 'What data does Geoalt analyze?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geoalt scans website content, competitor pages, AI-generated answers, semantic patterns, and topic coverage to identify gaps, strengths, weaknesses, and actionable optimization steps for improved AI search visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Geoalt different from SEO tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geoalt focuses specifically on generative engines, evaluating AI summary visibility rather than traditional keyword rankings, offering intent-driven recommendations tailored for modern answer-engine ecosystems and behaviors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Geoalt work for any website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Geoalt supports nearly all websites by analyzing content structure, clarity, authority, and relevance, offering optimization suggestions designed to improve AI search performance and generative visibility.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <HomePage />
      </Suspense>
    </>
  )
}

