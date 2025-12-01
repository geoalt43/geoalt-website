'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'SoftwareApplication'
  data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = `structured-data-${type.toLowerCase()}`
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    }
    
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)
    
    return () => {
      const existingScript = document.getElementById(`structured-data-${type.toLowerCase()}`)
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [type, data])
  
  return null
}

// Pre-configured structured data components
export function OrganizationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://geoalt.com'
  
  return (
    <StructuredData
      type="Organization"
      data={{
        name: 'GEOAlt',
        url: baseUrl,
        logo: `${baseUrl}/logos/GeoAlt_Logo.png`,
        description: 'GEOAlt helps your business stand out across AI platforms. Turning AI visibility into traffic and customers.',
        sameAs: [
          'https://www.linkedin.com/company/geoalt',
          'https://twitter.com/geoalt',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          availableLanguage: 'English',
        },
        foundingDate: '2024',
        areaServed: 'Worldwide',
      }}
    />
  )
}

export function WebSiteStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://geoalt.com'
  
  return (
    <StructuredData
      type="WebSite"
      data={{
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
      }}
    />
  )
}

export function SoftwareApplicationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://geoalt.com'
  
  return (
    <StructuredData
      type="SoftwareApplication"
      data={{
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
      }}
    />
  )
}

