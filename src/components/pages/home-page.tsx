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
const FeaturesSection = dynamic(() => import('@/components/homepage/features-section').then(m => ({ default: m.FeaturesSection })))
const FAQSection = dynamic(() => import('@/components/homepage/faq-section').then(m => ({ default: m.FAQSection })))
const CTASection = dynamic(() => import('@/components/homepage/cta-section').then(m => ({ default: m.CTASection })))
const TestimonialsCarousel = dynamic(() => import('@/components/homepage/testimonials-carousel').then(m => ({ default: m.TestimonialsCarousel })))
const Footer = dynamic(() => import('@/components/layout/footer').then(m => ({ default: m.Footer })))
const AISearchMetricsSection = dynamic(() => import('@/components/homepage/ai-search-metrics').then(m => ({ default: m.AISearchMetricsSection })))
const PricingSection = dynamic(() => import('@/components/homepage/pricing-section').then(m => ({ default: m.PricingSection })))
const GeoReportSection = dynamic(() => import('@/components/homepage/geo-report-section').then(m => ({ default: m.GeoReportSection })))
const FeatureTabsSection = dynamic(() => import('@/components/homepage/feature-tabs-section').then(m => ({ default: m.FeatureTabsSection })))

const trustedBrands = [
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
  const [isBelow1088, setIsBelow1088] = useState(false)
  const [isBelow680, setIsBelow680] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  useEffect(() => {
    const checkWidth = () => {
      setIsBelow1088(window.innerWidth < 1088)
      setIsBelow680(window.innerWidth < 680)
    }
    
    checkWidth()
    window.addEventListener('resize', checkWidth)
    
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <section ref={sectionRef} className="pt-[36.54px] sm:pt-[48.72px] md:pt-[52px] lg:pt-[4vh] xl:pt-[6vh] pb-16 sm:pb-20 md:pb-20 lg:pb-[4vh] xl:pb-[6vh] relative overflow-hidden bg-transparent-text bg-clip-text">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 bg-black/5 dark:bg-white/5 blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="pt-6 sm:pt-8 md:pt-8 lg:pt-10 pb-6 sm:pb-8 md:pb-8 text-center"
        >
          <motion.h2 
            variants={headerVariants}
            className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0 ${isLightTheme ? 'text-[var(--color-ref-001)]' : 'text-text-heading'}`}
          >
            Empowering businesses of all sizes
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} px-4 sm:px-0 md:px-0 leading-tight`}
          >
            Geoalt caters to a wide range of businesses,<br className="leading-none" />
            <span className="block -mt-0.5">from startups to enterprises, seeking<br className="leading-none" /></span>
            <span className="block -mt-0.5">to enhance their AI visibility.</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`grid gap-4 sm:gap-6 md:gap-[1.625rem] lg:gap-8 pt-4 ${isBelow680 ? 'grid-cols-1' : isBelow1088 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
        >
          {/* Marketing Teams Card */}
          <motion.div
            variants={cardVariantsSmooth}
            className={`bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-[calc(50%-0.5rem)] max-w-none mx-auto' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-4 mb-3 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-text-heading">Marketing Teams</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Track campaign performance and optimize content for AI-driven search across priority markets.  
              Identify which campaigns influence AI-generated answers and reallocate spend toward the highest-impact initiatives.  
            </p>
          </motion.div>

          {/* Wrapper for Content Creators and SEO Specialists - 2 columns below 1088px but above 680px */}
          <div className={isBelow680 ? 'contents' : isBelow1088 ? 'grid grid-cols-2 gap-4 col-span-1 w-full max-w-full mx-auto' : 'contents'}>
          {/* Content Creators Card */}
          <motion.div
            variants={cardVariantsSmooth}
            className={`bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-full' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-4 mb-3 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/>
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-text-heading">Content Creators</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Create content that resonates with AI algorithms and drives qualified, organic pipeline.  
              See which formats, topics, and angles AI prefers so every article, playbook, or landing page is built for discovery.  
            </p>
          </motion.div>

          {/* SEO Specialists Card */}
          <motion.div
            variants={cardVariantsSmooth}
            className={`bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-full' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-4 mb-3 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.3-4.3"/>
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-text-heading">SEO Specialists</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Adapt SEO strategies to the evolving landscape of AI-powered search for complex B2B journeys.  
              Understand which entities, sources, and citations AI trusts most in your category and markets.  
            </p>
          </motion.div>
          </div>
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
          <div className="absolute inset-x-[2%] inset-y-0 z-0">
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
            className="w-full sm:w-[90%] md:w-[89%] lg:w-[88%] mx-auto h-auto object-contain relative z-10"
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
                    className={`flex items-center justify-center gap-3 sm:gap-4 py-8 sm:py-10 md:py-12 px-24 sm:px-32 md:px-40 lg:px-48 border border-[var(--color-card-border)] transition-colors duration-200 ${
                      index >= 3 ? 'border-t-0' : ''
                    } ${
                      isLightTheme 
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
                          className={`object-contain grayscale ${
                            // @ts-ignore
                            brand.preserveDetail 
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
                            className={`object-contain grayscale ${
                              // @ts-ignore
                              brand.preserveDetail 
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
                          <span className={`text-2xl sm:text-3xl md:text-4xl ${
                            isLightTheme ? 'text-black' : 'text-white'
                          }`}>
                            <span className="font-bold">{brand.boldPart}</span>
                            <span className="font-normal">{brand.normalPart}</span>
                          </span>
                        ) : brand.lightWeight ? (
                          <span className={`${
                            // @ts-ignore
                            brand.smallText ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl sm:text-2xl md:text-3xl'
                          } font-light tracking-wide ${
                            isLightTheme ? 'text-black' : 'text-white'
                          }`}>
                            {brand.displayLabel || brand.label}
                          </span>
                        ) : (
                          <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                            isLightTheme ? 'text-black' : 'text-white'
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

      <AISearchMetricsSection />

      <FeaturesSection />

      <EmpoweringBusinessesSection />

      <TestimonialsCarousel />

      <PricingSection />



      <FAQSection openFaq={openFaq} toggleFaq={toggleFaq} faqRef={faqRef} />

      <CTASection />

      <Footer />
    </div>
  )
}
