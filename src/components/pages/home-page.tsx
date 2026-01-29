import { HeroSection } from '@/components/homepage/hero-section'
import { FeaturesSection } from '@/components/homepage/features-section'
import { FAQSection } from '@/components/homepage/faq-section'
import { CTASection } from '@/components/homepage/cta-section'
import { TestimonialsCarousel } from '@/components/homepage/testimonials-carousel'
import { AISearchMetricsSection } from '@/components/homepage/ai-search-metrics'
import { DashboardSection } from '@/components/homepage/dashboard-section'
import { PricingSection } from '@/components/homepage/pricing-section'
import { EmpoweringBusinessesSection } from '@/components/homepage/empowering-businesses-section'
import { DashboardImageSection } from '@/components/homepage/dashboard-image-section'
import { TrustedMarquee } from '@/components/homepage/trusted-marquee'

export function HomePage() {
  return (
    <div className="bg-brand-black">
      <HeroSection />
      <DashboardImageSection />
      <DashboardSection />
      <AISearchMetricsSection />
      <FeaturesSection />
      <TrustedMarquee />
      <EmpoweringBusinessesSection />
      <TestimonialsCarousel />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </div>
  )
}
