import { HeroSection } from '@/components/homepage/hero-section'
import { Navbar } from '@/components/layout/navbar'
import { DashboardImageSection } from '@/components/homepage/dashboard-image-section'
import { EmpoweringBusinessesSection } from '@/components/homepage/empowering-section'
import { TrustedBySection } from '@/components/homepage/trusted-by-section'
import { FaqWrapper } from '@/components/homepage/faq-wrapper'
import { ClientScrollRestoration } from '@/components/shared/client-scroll-restoration'
import {
  CTASection,
  Footer,
  AISearchMetricsSection,
  PricingSection,
  GeoReportSection,
  FeatureTabsSection,
  CitationSection,
  SovSection,
  PromptSection,
  CreateContentSection,
} from './dynamic-sections'

export function HomePage() {
  return (
    <div className="min-h-screen bg-page-background" style={{ overflowX: 'clip' }}>
      <ClientScrollRestoration />
      <Navbar />

      {/* Unified gradient zone: Hero → DashboardImage → TrustedBy → GeoReport */}
      {/* SSR Components - Statically rendered on server for optimal performance */}
      <div className="bg-hero-gradient">
        <HeroSection />
        <DashboardImageSection />
        <TrustedBySection />
        <GeoReportSection />
      </div>
      {/* End gradient zone */}

      <FeatureTabsSection />

      <div className="brand-presence-section transition-colors duration-300">
        <CitationSection />
        <SovSection />
        <PromptSection />
        <CreateContentSection />
      </div>

      <AISearchMetricsSection />

      {/* SSR Component - Statically rendered on server */}
      <EmpoweringBusinessesSection />

      <PricingSection />

      <FaqWrapper />

      <CTASection />

      <Footer />
    </div>
  )
}
