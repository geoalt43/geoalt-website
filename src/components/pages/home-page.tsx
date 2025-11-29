'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { HeroSection } from '@/components/marketing/hero-section'
import { FeaturesSection } from '@/components/marketing/features-section'
import { FAQSection } from '@/components/marketing/faq-section'
import { CTASection } from '@/components/marketing/cta-section'
import { TestimonialsCarousel } from '@/components/marketing/testimonials-carousel'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import OpenAI from '@lobehub/icons/es/OpenAI'
import { Gemini } from '@lobehub/icons'
import { AISearchMetricsSection } from '@/components/marketing/ai-search-metrics'
import { DashboardSection } from '@/components/marketing/dashboard-section'
import { PricingSection } from '@/components/marketing/pricing-section'

const trustedBrands = [
  { label: 'Flow', initials: 'F', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'Flux', initials: 'Fx', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'Nex', initials: 'N', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'dabble', initials: 'd', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'SuperPen', initials: 'S', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'Modo', initials: 'M', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
]

const CheckIcon = () => (
  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40 text-white text-xs font-semibold">
    ✓
  </span>
)

export function HomePage() {
  const [isTextLoaded, setIsTextLoaded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextLoaded(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

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

      <HeroSection isTextLoaded={isTextLoaded} />

     

      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-[2px] border-white/10 p-4 sm:p-6 lg:p-8 relative overflow-hidden dashboard-container">
            <div className="absolute inset-0 dashboard-animation-bg pointer-events-none"></div>
            <Image
              src="/images/img-2.jpeg"
              alt="GEOAlt analytics dashboard"
              width={1280}
              height={720}
              priority
              sizes="(max-width: 1024px) 100vw, 1280px"
              className="w-[98.5%] sm:w-[99.5%] mx-auto h-auto object-contain relative z-10"
            />
          </div>
        </div>
      </section>

      <DashboardSection />

      <AISearchMetricsSection />

      <FeaturesSection />

      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 pb-8 text-center">
            <h2 className="text-5xl font-normal text-white mb-4 tracking-tight">Empowering businesses of all sizes</h2>
            <p className="text-lg text-[#9b9b9b]">
              GEOAlt caters to a wide range of businesses, from startups to enterprises, seeking to
              enhance their AI visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 00-3-3.87"/>
                    <path d="M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <h3 className="text-[1.3rem] font-semibold text-white">Marketing Teams</h3>
              </div>
              <p className="text-base text-[#9b9b9b]">
                Track campaign performance and optimize content for AI-driven search across priority markets.  
                Identify which campaigns influence AI-generated answers and reallocate spend toward the highest-impact initiatives.  
              </p>
            </div>

            <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/>
                  </svg>
                </div>
                <h3 className="text-[1.3rem] font-semibold text-white">Content Creators</h3>
              </div>
              <p className="text-base text-[#9b9b9b]">
                Create content that resonates with AI algorithms and drives qualified, organic pipeline.  
                See which formats, topics, and angles AI prefers so every article, playbook, or landing page is built for discovery.  
              </p>
            </div>

            <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.3-4.3"/>
                  </svg>
                </div>
                <h3 className="text-[1.3rem] font-semibold text-white">SEO Specialists</h3>
              </div>
              <p className="text-base text-[#9b9b9b]">
                Adapt SEO strategies to the evolving landscape of AI-powered search for complex B2B journeys.  
                Understand which entities, sources, and citations AI trusts most in your category and markets.  
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <PricingSection />

      <section className="py-46">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[0px] border-y border-white/10 bg-transparent px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-32 h-32 bg-white/0 rounded-full blur-3xl -top-10 -left-6" />
              <div className="absolute w-40 h-40 bg-white/0 rounded-full blur-3xl -bottom-16 right-6" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(25,250,255,0.1),_transparent_55%)]" />
            </div>
            <div className="relative flex flex-col items-center gap-6 sm:gap-10">
              <p className="text-lg font-base tracking-wide text-white -mt-4">Trusted by</p>
              <div className="w-full overflow-hidden mask-fade-horizontal">
                <div className="trusted-marquee flex items-center gap-19 sm:gap-20">
                  {[...trustedBrands, ...trustedBrands].map((brand, index) => (
                    <span
                      key={`${brand.label}-${index}`}
                      className={`${brand.className} whitespace-nowrap`}
                    >
                      {brand.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <FAQSection openFaq={openFaq} toggleFaq={toggleFaq} faqRef={faqRef} />

      <Footer />
    </div>
  )
}
