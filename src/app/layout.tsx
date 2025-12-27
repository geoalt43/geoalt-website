import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { Analytics } from '@vercel/analytics/react'
import { ScrollRestorationScript } from '@/components/scroll-restoration-script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'GEOAlt - Get Your Brand Recommended by AI',
    template: '%s | GEOAlt',
  },
  description: 'GEOAlt helps your business stand out across AI platforms. Optimize your brand visibility on ChatGPT, Perplexity, Claude, and other AI platforms. Turn AI mentions into traffic and customers with Generative Engine Optimization (GEO).',
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
    'GEOAlt',
    'AI platform optimization',
  ],
  authors: [{ name: 'GEOAlt Team' }],
  creator: 'GEOAlt',
  publisher: 'GEOAlt',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://geoalt.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://geoalt.com',
    title: 'GEOAlt - Get Your Brand Recommended by AI',
    description: 'GEOAlt helps your business stand out across AI platforms. Turning AI visibility into traffic.',
    siteName: 'GEOAlt',
    images: [
      {
        url: '/images/img-2.jpeg',
        width: 1200,
        height: 630,
        alt: 'GEOAlt - AI Visibility Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEOAlt - Get Your Brand Recommended by AI',
    description: 'GEOAlt helps your business stand out across AI platforms. Turning AI visibility into traffic.',
    images: ['/images/img-2.jpeg'],
    creator: '@geoalt',
    site: '@geoalt',
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
  icons: {
    icon: [
      { url: '/logos/Favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/Favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/logos/Favicon.png', sizes: '96x96', type: 'image/png' },
      { url: '/logos/Favicon.png', sizes: '128x128', type: 'image/png' },
      { url: '/logos/Favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/logos/Favicon.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [
      { url: '/logos/Favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logos/Favicon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'GEOAlt',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://geoalt.com'

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GEOAlt',
    url: baseUrl,
    logo: `${baseUrl}/logos/GeoAlt_Logo.png`,
    description: 'GEOAlt helps your business stand out across AI platforms. Turning AI visibility into traffic and customers.',
    sameAs: [
      'https://www.linkedin.com/company/geo-alt',
      'https://twitter.com/geoalt',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    foundingDate: '2024',
    areaServed: 'Worldwide',
  }

  const webSiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GEOAlt',
    url: baseUrl,
    description: 'Get your brand recommended by AI. GEOAlt helps businesses optimize their visibility across AI platforms like ChatGPT, Perplexity, and Claude.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareApplicationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GEOAlt',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    description: 'AI visibility optimization platform that helps businesses get recommended by AI platforms like ChatGPT, Perplexity, and Claude.',
    featureList: [
      'AI Visibility Tracking',
      'Generative Engine Optimization',
      'Competitor Analysis',
      'Real-time Insights',
      'Multi-platform Support',
    ],
  }

  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationStructuredData) }}
        />
        <ScrollRestorationScript />
        <div className='h-full w-full overflow-hidden fixed z-0'>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>
        <ErrorBoundary>
          <Providers>
            <div className='z-10'>
              {children}
            </div>
          </Providers>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
