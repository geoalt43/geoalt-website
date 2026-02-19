'use client'

import dynamic from 'next/dynamic'
import { SectionSkeleton } from './section-skeleton'

// Client-only dynamic imports (ssr: false not allowed in Server Components)

export const CTASection = dynamic(
  () => import('@/components/homepage/cta-section').then(m => ({ default: m.CTASection })), 
  { 
    loading: () => <SectionSkeleton height="h-64" />,
    ssr: false // CTA has mixpanel tracking events
  }
)

export const Footer = dynamic(
  () => import('@/components/layout/footer').then(m => ({ default: m.Footer })), 
  { 
    loading: () => <SectionSkeleton height="h-48" />
  }
)

export const AISearchMetricsSection = dynamic(
  () => import('@/components/homepage/ai-search-metrics').then(m => ({ default: m.AISearchMetricsSection })), 
  { 
    loading: () => <SectionSkeleton height="h-[600px]" />
  }
)

export const PricingSection = dynamic(
  () => import('@/components/homepage/pricing-section').then(m => ({ default: m.PricingSection })), 
  { 
    loading: () => <SectionSkeleton height="h-[700px]" />
  }
)

export const GeoReportSection = dynamic(
  () => import('@/components/homepage/geo-report-section').then(m => ({ default: m.GeoReportSection })), 
  { 
    loading: () => <SectionSkeleton height="h-96" />
  }
)

export const FeatureTabsSection = dynamic(
  () => import('@/components/homepage/feature-tabs-section').then(m => ({ default: m.FeatureTabsSection })), 
  { 
    loading: () => <SectionSkeleton height="h-[800px]" />
  }
)

export const VisibilitySection = dynamic(
  () => import('@/components/homepage/overview-sec').then(m => ({ default: m.VisibilitySection })), 
  { 
    loading: () => <SectionSkeleton height="h-96" />
  }
)

export const CitationSection = dynamic(
  () => import('@/components/homepage/citation-sec').then(m => ({ default: m.CitationSection })), 
  { 
    loading: () => <SectionSkeleton height="h-96" />
  }
)

export const SovSection = dynamic(
  () => import('@/components/homepage/sov-sec').then(m => ({ default: m.SovSection })), 
  { 
    loading: () => <SectionSkeleton height="h-96" />
  }
)

export const PromptSection = dynamic(
  () => import('@/components/homepage/prompt-sec').then(m => ({ default: m.PromptSection })), 
  { 
    loading: () => <SectionSkeleton height="h-96" />
  }
)

export const CreateContentSection = dynamic(
  () => import('@/components/homepage/create-content-section').then(m => ({ default: m.CreateContentSection })), 
  { 
    loading: () => <SectionSkeleton height="h-96" />
  }
)
