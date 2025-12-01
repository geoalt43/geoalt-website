'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HeroSection } from '@/components/marketing/hero-section'
import { FeaturesSection } from '@/components/marketing/features-section'
import { FAQSection } from '@/components/marketing/faq-section'
import { CTASection } from '@/components/marketing/cta-section'
import { TestimonialsCarousel } from '@/components/marketing/testimonials-carousel'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { AISearchMetricsSection } from '@/components/marketing/ai-search-metrics'
import { DashboardSection } from '@/components/marketing/dashboard-section'
import { PricingSection } from '@/components/marketing/pricing-section'

const trustedBrands = [
  { 
    label: 'dabble', 
    logo: '/logos/dabble.png',
    className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' 
  },
  { 
    label: 'Modo', 
    logo: '/logos/modo.png',
    className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' 
  },
  { 
    label: 'SuperPen', 
    logo: '/logos/Superpen.png',
    className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' 
  },
  { 
    label: 'NimbleDesk', 
    logo: '/logos/nimbledesk.png',
    className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' 
  },
  { 
    label: 'TreeTech Digi', 
    logo: '/logos/treetechdigi.png',
    className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' 
  },
]

function EmpoweringBusinessesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -10,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/5 blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-8 sm:mb-12 pb-6 sm:pb-8 text-center"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-3 sm:mb-4 px-2 sm:px-0"
          >
            Empowering businesses of all sizes
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-base sm:text-lg text-[#9b9b9b] px-4 sm:px-0"
          >
            GEOAlt caters to a wide range of businesses, from startups to<br />
            enterprises, seeking to enhance their AI visibility.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-4"
        >
          {/* Marketing Teams Card */}
          <motion.div
            variants={cardVariants}
            className="bg-black/60 border border-white/10 rounded-lg p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:border-white/25 transition-colors duration-300"
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl lg:text-[1.3rem] font-semibold text-white">Marketing Teams</h3>
            </div>
            <p className="text-sm sm:text-base text-[#9b9b9b] relative z-10 pt-2">
              Track campaign performance and optimize content for AI-driven search across priority markets.  
              Identify which campaigns influence AI-generated answers and reallocate spend toward the highest-impact initiatives.  
            </p>
          </motion.div>

          {/* Content Creators Card */}
          <motion.div
            variants={cardVariants}
            className="bg-black/60 border border-white/10 rounded-lg p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:border-white/25 transition-colors duration-300"
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl lg:text-[1.3rem] font-semibold text-white">Content Creators</h3>
            </div>
            <p className="text-sm sm:text-base text-[#9b9b9b] relative z-10 pt-2">
              Create content that resonates with AI algorithms and drives qualified, organic pipeline.  
              See which formats, topics, and angles AI prefers so every article, playbook, or landing page is built for discovery.  
            </p>
          </motion.div>

          {/* SEO Specialists Card */}
          <motion.div
            variants={cardVariants}
            className="bg-black/60 border border-white/10 rounded-lg p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:border-white/25 transition-colors duration-300"
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.3-4.3"/>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl lg:text-[1.3rem] font-semibold text-white">SEO Specialists</h3>
            </div>
            <p className="text-sm sm:text-base text-[#9b9b9b] relative z-10 pt-2">
              Adapt SEO strategies to the evolving landscape of AI-powered search for complex B2B journeys.  
              Understand which entities, sources, and citations AI trusts most in your category and markets.  
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Static Grid Background Component for Dashboard Image Section
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
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-48 lg:h-64 xl:h-80 bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 lg:h-64 xl:h-80 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 lg:w-40 bg-gradient-to-r from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 lg:w-40 bg-gradient-to-l from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="p-4 sm:p-6 lg:p-8 xl:p-12 relative overflow-hidden bg-black rounded-lg"
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 88vw"
            className="w-full sm:w-[90%] lg:w-[88%] mx-auto h-auto object-contain relative z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqRef = useRef<HTMLDivElement>(null)

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

      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[0px] border-b border-white/10 bg-transparent px-4 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-32 h-32 bg-white/0 rounded-full blur-3xl -top-10 -left-6" />
              <div className="absolute w-40 h-40 bg-white/0 rounded-full blur-3xl -bottom-16 right-6" />
            </div>
            <div className="relative flex flex-col items-center gap-4 sm:gap-6 lg:gap-10">
              <p 
                className="text-base sm:text-lg font-base tracking-wide -mt-6 sm:-mt-8 lg:-mt-11 trusted-by-text"
                style={{
                  color: 'rgba(255, 255, 255, 1)',
                  background: 'none',
                  backgroundImage: 'none',
                  WebkitBackgroundClip: 'unset',
                  backgroundClip: 'unset',
                  WebkitTextFillColor: 'rgba(255, 255, 255, 1)',
                } as React.CSSProperties}
              >
                Trusted by
              </p>
              <div className="w-full overflow-hidden mask-fade-horizontal">
                <div className="trusted-marquee flex items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
                  {[...trustedBrands, ...trustedBrands].map((brand, index) => (
                    <div
                      key={`${brand.label}-${index}`}
                      className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 whitespace-nowrap flex-shrink-0"
                    >
                      <div className="relative h-[1rem] w-[1rem] sm:h-[1.5rem] sm:w-[1.5rem] lg:h-[2.5rem] lg:w-[2.5rem] flex-shrink-0">
                        <Image
                          src={brand.logo}
                          alt={`${brand.label} logo`}
                          fill
                          className="object-contain"
                          unoptimized
                          onError={(e) => {
                            // Fallback: hide image if logo not found
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                      <span className="text-sm sm:text-xl lg:text-[2.1rem] font-normal text-white">
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
