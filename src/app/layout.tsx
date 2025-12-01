import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { Analytics } from '@vercel/analytics/react'
import { OrganizationStructuredData, WebSiteStructuredData, SoftwareApplicationStructuredData } from '@/components/seo/structured-data'

const inter = Inter({ subsets: ['latin'] })

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
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logos/GeoAlt_Logo.png',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning style={{ colorScheme: 'dark' }}>
      <body className={`${inter.className} overflow-x-hidden`}>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
        <SoftwareApplicationStructuredData />
        <ErrorBoundary>
          <Providers>
            {children}
          </Providers>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
