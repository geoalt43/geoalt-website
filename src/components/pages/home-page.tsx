'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariants, headerVariants, cardVariantsSmooth, iconVariantsSmooth } from '@/lib/animations/variants'
import { colorClasses } from '@/constants/colors'
import { HeroSection } from '@/components/homepage/hero-section'
import { FeaturesSection } from '@/components/homepage/features-section'
import { FAQSection } from '@/components/homepage/faq-section'
import { CTASection } from '@/components/homepage/cta-section'
import { TestimonialsCarousel } from '@/components/homepage/testimonials-carousel'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { AISearchMetricsSection } from '@/components/homepage/ai-search-metrics'
import { DashboardSection } from '@/components/homepage/dashboard-section'
import { PricingSection } from '@/components/homepage/pricing-section'
import { useScrollRestoration } from '@/app/hooks/use-scroll-restoration'

const trustedBrands = [
  { 
    label: 'dabble', 
    logo: '/logos/dabble.png',
  },
  { 
    label: 'Modo', 
    logo: '/logos/modo.png',
  },
  { 
    label: 'SuperPen', 
    logo: '/logos/Superpen.png',
  },
  { 
    label: 'NimbleDesk', 
    logo: '/logos/nimbledesk.png',
  },
  { 
    label: 'TreeTech Digi', 
    logo: '/logos/treetechdigi.png',
  },
]

function EmpoweringBusinessesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })
  const [isBelow1088, setIsBelow1088] = useState(false)
  const [isBelow680, setIsBelow680] = useState(false)

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
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 bg-white/5 blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
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
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal text-white mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0"
          >
            Empowering businesses of all sizes
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className={`text-base sm:text-lg md:text-lg ${colorClasses.textSecondary} px-4 sm:px-0 md:px-0 leading-tight`}
          >
            GEOAlt caters to a wide range of businesses, from startups to<br className="leading-none" />
            <span className="block -mt-0.5">enterprises, seeking to enhance their AI visibility.</span>
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
            className={`bg-black/60 border border-white/10 rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-white/25 transition-colors duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-[calc(50%-0.5rem)] max-w-none mx-auto' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-4 mb-3 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-white">Marketing Teams</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textMuted} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Track campaign performance and optimize content for AI-driven search across priority markets.  
              Identify which campaigns influence AI-generated answers and reallocate spend toward the highest-impact initiatives.  
            </p>
          </motion.div>

          {/* Wrapper for Content Creators and SEO Specialists - 2 columns below 1088px but above 680px */}
          <div className={isBelow680 ? 'contents' : isBelow1088 ? 'grid grid-cols-2 gap-4 col-span-1 w-full max-w-full mx-auto' : 'contents'}>
          {/* Content Creators Card */}
          <motion.div
            variants={cardVariantsSmooth}
            className={`bg-black/60 border border-white/10 rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-white/25 transition-colors duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-full' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-4 mb-3 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/>
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-white">Content Creators</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textMuted} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Create content that resonates with AI algorithms and drives qualified, organic pipeline.  
              See which formats, topics, and angles AI prefers so every article, playbook, or landing page is built for discovery.  
            </p>
          </motion.div>

          {/* SEO Specialists Card */}
          <motion.div
            variants={cardVariantsSmooth}
            className={`bg-black/60 border border-white/10 rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-white/25 transition-colors duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-full' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-4 mb-3 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.3-4.3"/>
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-white">SEO Specialists</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textMuted} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
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

function AnimatedGridBackground() {
  const gridSize = 40
  const lineThickness = 1 // Thickness of grid lines
  const lineOpacity = 0.35 // Same opacity for both horizontal and vertical lines
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static Grid Lines - Horizontal lines have increased height, vertical lines unchanged */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, ${lineOpacity}) ${lineThickness}px, transparent ${lineThickness}px),
            linear-gradient(90deg, rgba(255, 255, 255, ${lineOpacity}) ${lineThickness}px, transparent ${lineThickness}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
      
      {/* Additional static grid overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, ${lineOpacity * 0.58}) ${lineThickness}px, transparent ${lineThickness}px),
            linear-gradient(90deg, rgba(255, 255, 255, ${lineOpacity * 0.48}) ${lineThickness}px, transparent ${lineThickness}px)
          `,
          backgroundSize: `${gridSize * 10}px ${gridSize * 10}px`,
        }}
      />
      
      {/* Fade effect overlays on edges - positioned above grid but below image */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-48 md:h-56 lg:h-64 xl:h-80 bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 md:h-56 lg:h-64 xl:h-80 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 md:w-36 lg:w-40 bg-gradient-to-r from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 md:w-36 lg:w-40 bg-gradient-to-l from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      
      {/* Animated gradient overlay for depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-purple-500/8"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Subtle corner glows */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

function DashboardImageSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  return (
    <section ref={sectionRef} className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="p-4 sm:p-6 md:p-7 lg:p-8 xl:p-12 relative overflow-hidden bg-black rounded-lg"
        >
          {/* Animated Grid Background */}
          <AnimatedGridBackground />
          
          {/* Image */}
          <Image
            src="/images/img-2.jpeg"
            alt="GEOAlt analytics dashboard"
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
  
  useScrollRestoration()

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
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      <HeroSection />

      <DashboardImageSection />

      <DashboardSection />

      <AISearchMetricsSection />

      <FeaturesSection />

      <section className="pt-[45.6px] sm:pt-[60.8px] md:pt-[65px] lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-18 lg:pb-[4vh] xl:pb-[6vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
          <div className="relative overflow-hidden rounded-[0px] border-b border-white/10 bg-transparent px-4 pt-5 pb-5 sm:px-6 sm:pt-9 sm:pb-9 md:px-8 md:pt-10 md:pb-10 lg:px-10 lg:pt-12 lg:pb-12">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-32 h-32 bg-white/0 rounded-full blur-3xl -top-10 -left-6" />
              <div className="absolute w-40 h-40 bg-white/0 rounded-full blur-3xl -bottom-16 right-6" />
            </div>
            <div className="relative flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <p className="text-base sm:text-lg md:text-lg font-base tracking-wide -mt-6 sm:-mt-8 md:-mt-9 lg:-mt-11 trusted-by-text">
                Trusted by
              </p>
              <div className="w-full overflow-hidden mask-fade-horizontal">
                <div className="trusted-marquee flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20">
                  {[...trustedBrands, ...trustedBrands].map((brand, index) => (
                    <div
                      key={`${brand.label}-${index}`}
                      className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 whitespace-nowrap flex-shrink-0"
                    >
                      <div className="relative h-[1rem] w-[1rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem] lg:h-[2.5rem] lg:w-[2.5rem] flex-shrink-0">
                        <Image
                          src={brand.logo}
                          alt={`${brand.label} logo`}
                          fill
                          className="object-contain"
                          quality={90}
                          sizes="(max-width: 640px) 1rem, (max-width: 768px) 1.5rem, (max-width: 1024px) 2rem, 2.5rem"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                      <span className="text-sm sm:text-xl md:text-2xl lg:text-[2.1rem] font-normal text-white">
                        {brand.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmpoweringBusinessesSection />

      <TestimonialsCarousel />

      <PricingSection />

      <CTASection />

      <FAQSection openFaq={openFaq} toggleFaq={toggleFaq} faqRef={faqRef} />

      <Footer />
    </div>
  )
}
