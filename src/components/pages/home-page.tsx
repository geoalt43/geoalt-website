import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/homepage/hero-section'
import { Navbar } from '@/components/layout/navbar'
import { DashboardImageSection } from '@/components/homepage/dashboard-image-section'
import { EmpoweringBusinessesSection } from '@/components/homepage/empowering-section'
import { TrustedBySection } from '@/components/homepage/trusted-by-section'
import { FaqWrapper } from '@/components/homepage/faq-wrapper'
import { ClientScrollRestoration } from '@/components/shared/client-scroll-restoration'

// Loading skeleton for dynamic sections
const SectionSkeleton = ({ height = 'h-96' }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse bg-page-background`} />
)

// Dynamic imports for below-fold sections
const CTASection = dynamic(() => import('@/components/homepage/cta-section').then(m => ({ default: m.CTASection })), { loading: () => <SectionSkeleton height="h-64" /> })
const Footer = dynamic(() => import('@/components/layout/footer').then(m => ({ default: m.Footer })), { loading: () => <SectionSkeleton height="h-48" /> })
const AISearchMetricsSection = dynamic(() => import('@/components/homepage/ai-search-metrics').then(m => ({ default: m.AISearchMetricsSection })), { loading: () => <SectionSkeleton height="h-[600px]" /> })
const PricingSection = dynamic(() => import('@/components/homepage/pricing-section').then(m => ({ default: m.PricingSection })), { loading: () => <SectionSkeleton height="h-[700px]" /> })
const GeoReportSection = dynamic(() => import('@/components/homepage/geo-report-section').then(m => ({ default: m.GeoReportSection })), { loading: () => <SectionSkeleton height="h-96" /> })
const FeatureTabsSection = dynamic(() => import('@/components/homepage/feature-tabs-section').then(m => ({ default: m.FeatureTabsSection })), { loading: () => <SectionSkeleton height="h-[800px]" /> })
const VisibilitySection = dynamic(() => import('@/components/homepage/overview-sec').then(m => ({ default: m.VisibilitySection })), { loading: () => <SectionSkeleton height="h-96" /> })
const CitationSection = dynamic(() => import('@/components/homepage/citation-sec').then(m => ({ default: m.CitationSection })), { loading: () => <SectionSkeleton height="h-96" /> })
const SovSection = dynamic(() => import('@/components/homepage/sov-sec').then(m => ({ default: m.SovSection })), { loading: () => <SectionSkeleton height="h-96" /> })
const PromptSection = dynamic(() => import('@/components/homepage/prompt-sec').then(m => ({ default: m.PromptSection })), { loading: () => <SectionSkeleton height="h-96" /> })
const CreateContentSection = dynamic(() => import('@/components/homepage/create-content-section').then(m => ({ default: m.CreateContentSection })), { loading: () => <SectionSkeleton height="h-96" /> })

export function HomePage() {
  return (
    <div className="min-h-screen bg-page-background" style={{ overflowX: 'clip' }}>
      <ClientScrollRestoration />
      <Navbar />

      {/* Unified gradient zone: Hero → DashboardImage → TrustedBy → GeoReport */}
      <div className="bg-hero-gradient">
        <HeroSection />

        <DashboardImageSection />

        <TrustedBySection />

        <GeoReportSection />
      </div>
      {/* End gradient zone */}

      <FeatureTabsSection />

      {/* <VisibilitySection /> */}

      <div className="brand-presence-section transition-colors duration-300">
        <CitationSection />

        <SovSection />

        <PromptSection />

        <CreateContentSection />
      </div>

      <AISearchMetricsSection />

      <EmpoweringBusinessesSection />

      <PricingSection />

      <FaqWrapper />

      <CTASection />

      <Footer />
    </div>
  )
}
