'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { containerVariants, headerVariants, cardVariantsSmooth, iconVariantsSmooth } from '@/lib/animations/variants'
import { colorClasses } from '@/constants/colors'
import { useScrollRestoration } from '@/app/hooks/use-scroll-restoration'

// Critical path - load immediately
import { HeroSection } from '@/components/homepage/hero-section'
import { Navbar } from '@/components/layout/navbar'

// Below-fold sections - lazy load for faster initial render
// const FeaturesSection = dynamic(() => import('@/components/homepage/features-section').then(m => ({ default: m.FeaturesSection })))
const FAQSection = dynamic(() => import('@/components/homepage/faq-section').then(m => ({ default: m.FAQSection })))
const CTASection = dynamic(() => import('@/components/homepage/cta-section').then(m => ({ default: m.CTASection })))
// const TestimonialsCarousel = dynamic(() => import('@/components/homepage/testimonials-carousel').then(m => ({ default: m.TestimonialsCarousel })))
const Footer = dynamic(() => import('@/components/layout/footer').then(m => ({ default: m.Footer })))
const AISearchMetricsSection = dynamic(() => import('@/components/homepage/ai-search-metrics').then(m => ({ default: m.AISearchMetricsSection })))
const PricingSection = dynamic(() => import('@/components/homepage/pricing-section').then(m => ({ default: m.PricingSection })))
const GeoReportSection = dynamic(() => import('@/components/homepage/geo-report-section').then(m => ({ default: m.GeoReportSection })))
const FeatureTabsSection = dynamic(() => import('@/components/homepage/feature-tabs-section').then(m => ({ default: m.FeatureTabsSection })))
const VisibilitySection = dynamic(() => import('@/components/homepage/overview-sec').then(m => ({ default: m.VisibilitySection })))
const CitationSection = dynamic(() => import('@/components/homepage/citation-sec').then(m => ({ default: m.CitationSection })))
const SovSection = dynamic(() => import('@/components/homepage/sov-sec').then(m => ({ default: m.SovSection })))
const PromptSection = dynamic(() => import('@/components/homepage/prompt-sec').then(m => ({ default: m.PromptSection })))
const CreateContentSection = dynamic(() => import('@/components/homepage/create-content-section').then(m => ({ default: m.CreateContentSection })))

interface TrustedBrand {
  label: string;
  logo: string;
  displayLabel?: string;
  textImage?: string;
  preserveDetail?: boolean;
  lightWeight?: boolean;
  boldPart?: string;
  normalPart?: string;
  smallText?: boolean;
  mediumText?: boolean;
  fullImage?: boolean;
}

const trustedBrands: TrustedBrand[] = [
  {
    label: 'dabble',
    logo: '/logos/dabble.png',
    textImage: '/images/dabble-text.png',
    preserveDetail: true,
  },
  {
    label: 'Modo',
    displayLabel: 'MODO',
    logo: '/logos/modo.png',
    lightWeight: true,
    preserveDetail: true,
  },
  {
    label: 'SuperPen',
    logo: '/logos/Superpen.png',
    boldPart: 'Super',
    normalPart: 'Pen',
  },
  {
    label: 'NimbleDesk',
    logo: '/logos/nimbledesk.png',
  },
  {
    label: 'TreeTech Digi',
    logo: '/logos/treetechdigi.png',
    preserveDetail: true,
    lightWeight: true,
    // smallText: true,
    mediumText: true,
  },
  {
    label: 'Oktaa',
    logo: '/images/oktaa.png',
    fullImage: true,
  },
]

function EmpoweringBusinessesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: 'Marketing Teams',
      subtitle: 'Track brand visibility across AI platforms',
      features: [
        { label: 'Brand Tracking', desc: 'Monitor appearances across priority markets' },
        { label: 'Campaign Analytics', desc: 'Measure AI-driven discovery impact' },
        { label: 'Competitive Insights', desc: 'Benchmark against competitors' },
        { label: 'Market Intelligence', desc: 'Identify trends in AI recommendations' },
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      ),
      title: 'Content Creators',
      subtitle: 'Create AI-discoverable content',
      features: [
        { label: 'Content Optimization', desc: 'Format for AI platform surfacing' },
        { label: 'Topic Analysis', desc: 'Identify high-performing narratives' },
        { label: 'Asset Longevity', desc: 'Build long-term visibility sources' },
        { label: 'Format Insights', desc: 'Discover content types AI prefers' },
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      ),
      title: 'SEO Specialists',
      subtitle: 'Evolve beyond traditional rankings',
      features: [
        { label: 'AI Search Visibility', desc: 'Track citations in AI responses' },
        { label: 'Citation Monitoring', desc: 'See where your brand appears' },
        { label: 'Trust Signals', desc: 'Learn what AI values in your space' },
        { label: 'Source Analysis', desc: 'Identify trusted reference sources' },
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="empowering-section pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 sm:pb-24 md:pb-32 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 md:pb-16 text-center"
        >
          <motion.h2
            variants={headerVariants}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-[2.6rem] font-light sm:font-normal md:font-normal tracking-tight text-text-heading mb-4"
          >
            Built for every team
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-base sm:text-lg md:text-xl text-text-description max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Geoalt empowers marketing, content, and SEO<br /> teams to dominate AI-driven discovery
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:gap-8 pt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariantsSmooth}
              className="empowering-card relative bg-[var(--color-card-bg)] dark:bg-[var(--color-ref-043)] border border-[var(--color-card-border)] rounded-lg p-6 sm:p-8 overflow-hidden shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)]"
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    variants={iconVariantsSmooth}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-text-primary/10 flex items-center justify-center text-text-primary"
                  >
                    {card.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-text-heading mb-1 tracking-tight">{card.title}</h3>
                    <p className="text-sm text-text-description">{card.subtitle}</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="space-y-3">
                  {card.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-ref-035)]/30"
                    >
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-text-heading/90 tracking-tight">{feature.label}</p>
                        <p className="text-xs text-text-description mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


function DashboardImageSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dashboardImage = mounted && resolvedTheme === 'light'
    ? '/images/Dashboard-light-theme.png'
    : '/images/Dasboard-dark-theme.png'

  return (
    <section ref={sectionRef} className="mt-0 sm:mt-0 md:mt-0 lg:mt-0 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="p-4 sm:p-6 md:p-7 lg:p-8 xl:p-12 relative overflow-hidden rounded-lg"
        >
          {/* Background Image */}
          <div className="absolute inset-x-[4%] inset-y-0 z-0">
            <Image
              src="/images/dash-BGimg.jpeg"
              alt=""
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Dashboard Image */}
          <Image
            src={dashboardImage}
            alt="Geoalt analytics dashboard"
            width={1280}
            height={720}
            priority
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 88vw"
            className="w-full sm:w-[94%] md:w-[94%] lg:w-[94%] mx-auto h-auto object-contain relative z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useScrollRestoration()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenFaq(null)
      }
    }

    if (openFaq !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openFaq])


  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-page-background">
      <Navbar />

      {/* Unified gradient zone: Hero → DashboardImage → TrustedBy → GeoReport */}
      <div className="bg-hero-gradient">
        <HeroSection />

        <DashboardImageSection />

        <section className="pt-[45.6px] sm:pt-[60.8px] md:pt-[65px] lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-18 lg:pb-[4vh] xl:pb-[6vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
            <div className="relative overflow-hidden bg-transparent px-4 pt-5 pb-5 sm:px-6 sm:pt-9 sm:pb-9 md:px-8 md:pt-10 md:pb-10 lg:px-10 lg:pt-12 lg:pb-12">
              <div className="relative flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
                <p className="text-xl sm:text-2xl md:text-3xl font-light sm:font-normal md:font-normal tracking-wide -mt-6 sm:-mt-8 md:-mt-9 lg:-mt-11 trusted-by-text">
                  Trusted by
                </p>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-0">
                  {trustedBrands.map((brand, index) => (
                    <div
                      key={`${brand.label}-${index}`}
                      className={`flex items-center justify-center gap-3 sm:gap-4 py-8 sm:py-10 md:py-12 px-6 sm:px-12 md:px-20 lg:px-48 border border-[var(--color-card-border)] transition-colors duration-200 ${index >= 3 ? 'border-t-0' : ''
                        } ${isLightTheme
                          ? 'bg-[var(--color-card-bg)]'
                          : 'bg-[#060606]'
                        }`}
                    >
                      {brand.fullImage ? (
                        <div className="relative h-10 sm:h-12 md:h-14 w-28 sm:w-32 md:w-40 flex-shrink-0">
                          <Image
                            src={brand.logo}
                            alt={brand.label}
                            fill
                            className={`object-contain grayscale ${brand.preserveDetail
                              ? (isLightTheme ? '' : 'invert')
                              : (isLightTheme ? 'brightness-0' : 'brightness-0 invert')
                              }`}
                            quality={90}
                            sizes="(max-width: 640px) 7rem, (max-width: 768px) 8rem, 10rem"
                          />
                        </div>
                      ) : (
                        <>
                          <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0">
                            <Image
                              src={brand.logo}
                              alt={`${brand.label} logo`}
                              fill
                              className={`object-contain grayscale ${brand.preserveDetail
                                ? (isLightTheme ? '' : 'invert')
                                : (isLightTheme ? 'brightness-0' : 'brightness-0 invert')
                                }`}
                              quality={90}
                              sizes="(max-width: 640px) 2rem, (max-width: 768px) 2.5rem, 3rem"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          </div>
                          {brand.textImage ? (
                            <div className="relative h-6 sm:h-8 md:h-10 w-20 sm:w-24 md:w-32 flex-shrink-0">
                              <Image
                                src={brand.textImage}
                                alt={brand.label}
                                fill
                                className={`object-contain grayscale ${isLightTheme ? 'brightness-0' : 'brightness-0 invert'}`}
                                quality={90}
                                sizes="(max-width: 640px) 5rem, (max-width: 768px) 6rem, 8rem"
                              />
                            </div>
                          ) : brand.boldPart && brand.normalPart ? (
                            <span className={`text-2xl sm:text-3xl md:text-4xl ${isLightTheme ? 'text-black' : 'text-white'
                              }`}>
                              <span className="font-bold">{brand.boldPart}</span>
                              <span className="font-normal">{brand.normalPart}</span>
                            </span>
                          ) : brand.lightWeight ? (
                            <span className={`${brand.smallText ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl sm:text-2xl md:text-3xl'
                              } font-light tracking-wide ${isLightTheme ? 'text-black' : 'text-white'
                              }`}>
                              {brand.displayLabel || brand.label}
                            </span>
                          ) : (
                            <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${isLightTheme ? 'text-black' : 'text-white'
                              }`}>
                              {brand.displayLabel || brand.label}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GeoReportSection />
      </div>
      {/* End gradient zone */}

      <FeatureTabsSection />

      <VisibilitySection />

      <CitationSection />

      <SovSection />

      <PromptSection />

      <CreateContentSection />

      <AISearchMetricsSection />

      {/* <FeaturesSection /> */}

      <EmpoweringBusinessesSection />

      {/* <TestimonialsCarousel /> */}

      <PricingSection />



      <FAQSection openFaq={openFaq} toggleFaq={toggleFaq} faqRef={faqRef} />

      <CTASection />

      <Footer />
    </div>
  )
}
