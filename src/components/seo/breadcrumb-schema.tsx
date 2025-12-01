'use client'

import { useEffect } from 'react'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'breadcrumb-structured-data'
    
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://geoalt.com'
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
      })),
    }
    
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)
    
    return () => {
      const existingScript = document.getElementById('breadcrumb-structured-data')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [items])
  
  return null
}

