import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GEOAlt - Get Your Brand Recommended by AI',
    template: '%s | GEOAlt',
  },
  description: 'GEOAlt helps your business stand out across AI platforms. Turning AI visibility into traffic.',
  keywords: ['AI', 'SEO', 'GEO', 'Generative Engine Optimization', 'ChatGPT', 'Perplexity', 'Claude'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning style={{ colorScheme: 'dark' }}>
      <body className={`${inter.className} overflow-x-hidden`}>
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
