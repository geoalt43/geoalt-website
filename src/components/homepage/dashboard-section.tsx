'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { CARD_BASE } from '@/lib/styles/constants'

const visibilitySlides = [
  { id: 1, image: '/images/ShareOfVoice_.jpeg' },
]

function AIVisibilityCarousel({ isInView }: { isInView: boolean }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'
  const slide = visibilitySlides[0] // Only show the ShareOfVoice slide

  return (
    <div 
      className={`${CARD_BASE} p-2 sm:p-0 md:p-0 overflow-hidden relative min-h-[320px] sm:min-h-[330px] md:min-h-[365px] lg:min-h-[400px] max-w-[90%] sm:max-w-none mx-auto sm:mx-0 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="relative w-full h-full min-h-[320px] sm:min-h-[330px] md:min-h-[365px] lg:min-h-[400px] rounded-lg overflow-hidden">
        <div
          className="relative w-full h-full flex flex-col transition-opacity duration-800 ease-in-out"
        >
          <div 
            className="pt-2 sm:pt-6 md:pt-6 px-2 sm:px-6 md:px-6 mb-2 sm:mb-4 md:mb-4 flex-shrink-0"
          >
            <h3 className={`text-base sm:text-xl md:text-xl font-light sm:font-normal md:font-normal ${isLightTheme ? 'text-[var(--color-ref-001)]' : 'text-text-heading'} dark:text-text-muted`}>
              Add your brand
            </h3>
            <p className="text-xs sm:text-xs md:text-sm text-text-description mb-2 sm:mb-4 md:mb-4">
              Track brand presence in AI answers and monitor visibility
            </p>
          </div>

          <div className="flex-1 min-h-0" />

          <div className="w-full overflow-hidden flex items-end flex-shrink-0">
            <div className="w-full h-full relative">
              <Image
                src={isLightTheme ? '/images/add-your-brand.png' : slide.image}
                alt="AI visibility interface"
                width={800}
                height={1900}
                quality={100}
                className="w-full h-full object-contain object-bottom"
                sizes="(max-width: 375px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 90vw, (max-width: 1280px) 50vw, 800px"
                priority={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DashboardSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Use Intersection Observer for inView detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  return (
    <section id="features" ref={sectionRef} className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh] bg-page-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div
          className={`pt-[5%] mb-8 sm:mb-12 md:mb-12 text-left sm:text-center md:text-center transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0 ${isLightTheme ? 'text-[var(--color-ref-001)]' : 'text-text-heading'}`}>
            {/* Mobile version */}
            <span className="block sm:hidden">
              <span className="block text-center">Unlock AI-powered search insights</span>
              <span className="block text-center">
                that bring the right customers to Geoalt
              </span>
            </span>
            {/* Desktop version */}
            <span className="hidden sm:block">
              <span>Unlock AI-powered search insights that bring</span>
              <br />
              <span className="block">
                the right customers to Geoalt
              </span>
            </span>
          </h2>
        </div>

        {/* First Row */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 md:gap-5 lg:gap-2 mb-5 sm:mb-8 md:mb-8 lg:mb-6 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Container 1: Customize Your Prompts */}
          {/* Container 1: Customize Your Prompts (Swapped with AI Visibility) */}
          <AIVisibilityCarousel isInView={isInView} />

          {/* Container 2: Add Business Competitors */}
          <div 
            className={`${CARD_BASE} p-2 sm:p-5 md:p-5 overflow-hidden relative min-h-[320px] sm:min-h-[330px] md:min-h-[400px] lg:min-h-[400px] max-w-[90%] sm:max-w-none mx-auto sm:mx-0 transition-all duration-500 ease-out`}
            style={{ transitionDelay: '200ms' }}
          >
            <div 
              className="mb-2 relative z-10"
            >
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-normal md:font-normal text-text-heading dark:text-white/80">Add Business Competitors</h3>
            <p className="text-xs sm:text-xs md:text-sm text-text-description mb-3 sm:mb-4">
                <span>Add competitors so Geoalt can map landscape for growth</span>
              </p>
            </div>
            
            {/* Flat image (3D tilt removed) */}
            <div className="absolute bottom-0 left-0 right-0 rounded-lg overflow-hidden h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[330px] pointer-events-none flex justify-center items-end">
              <div className="w-[99%] h-full relative z-20">
                <Image
                  src={isLightTheme ? '/images/add-competitor.png' : '/images/Competitor-.png'}
                  alt="Add competitors interface"
                  width={800}
                  height={600}
                  className={`w-full h-full object-contain object-bottom rounded-lg ${!isLightTheme ? 'dark:drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]' : ''}`}
                  sizes="(max-width: 375px) 99vw, (max-width: 640px) 99vw, (max-width: 768px) 43vw, (max-width: 1024px) 43vw, (max-width: 1280px) 48vw, 576px"
                  priority={false}
                  loading="lazy"
                />
                    {/* Fade effect at top border */}
                    <div className={`absolute top-0 left-0 right-0 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none dark-mode-gradient ${isLightTheme ? 'hidden' : ''}`}></div>
                    {/* Fade effect at left border */}
                    <div className={`absolute top-0 bottom-0 left-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none dark-mode-gradient ${isLightTheme ? 'hidden' : ''}`}></div>
                    {/* Fade effect at right border */}
                    <div className={`absolute top-0 bottom-0 right-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-black/30 via-black/10 to-transparent pointer-events-none dark-mode-gradient ${isLightTheme ? 'hidden' : ''}`}></div>
                  </div>
                </div>
          </div>
        </div>

        {/* Second Row */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 md:gap-5 lg:gap-2 mb-5 sm:mb-8 md:mb-8 lg:mb-6 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Container 3: Pick Model and Region */}
          <div 
            className={`${CARD_BASE} p-2 sm:p-5 md:p-5 overflow-hidden relative min-h-[320px] sm:min-h-[330px] md:min-h-[400px] lg:min-h-[400px] max-w-[90%] sm:max-w-none mx-auto sm:mx-0`}
            style={{ transitionDelay: '400ms' }}
          >
            <div 
              className="mb-2 relative z-10"
            >
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-normal md:font-normal text-text-heading dark:text-white/80">Pick Model and Region</h3>
            <p className="text-xs sm:text-xs md:text-sm text-text-description mb-3 sm:mb-4">
              Pick model and region to get AI insights for growth...
            </p>
            </div>
            
            {/* Flat image (3D tilt removed) */}
            <div 
              className="absolute bottom-0 left-0 right-0 rounded-lg overflow-hidden h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[330px] pointer-events-none flex justify-center items-end"
            >
              <div className="w-[99%] h-full relative">
                <Image
                  src={isLightTheme ? '/images/choose-ai-model.png' : '/images/Region_Selector-1.png'}
                  alt="Region Selector interface"
                  width={800}
                  height={600}
                  quality={100}
                  className={`w-full h-full object-contain object-bottom rounded-lg ${!isLightTheme ? 'dark:drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]' : ''}`}
                  sizes="(max-width: 375px) 98vw, (max-width: 640px) 98vw, (max-width: 768px) 43vw, (max-width: 1024px) 43vw, (max-width: 1280px) 48vw, 588px"
                  priority={false}
                  loading="lazy"
                />
                <div className={`absolute top-0 left-0 right-0 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none z-10 ${isLightTheme ? 'hidden' : ''}`}></div>
              </div>
            </div>
          </div>

          {/* Container 4: AI visibility carousel */}
          {/* Container 4: AI visibility carousel (Swapped with Customize Your Prompts) */}
          <div className={`${CARD_BASE} p-2 sm:p-5 md:p-5 overflow-hidden relative min-h-[320px] sm:min-h-[330px] md:min-h-[380px] lg:min-h-[400px] max-w-[90%] sm:max-w-none mx-auto sm:mx-0`}>
            <div className="mb-2 relative z-10">
              <h3 className="text-base sm:text-xl font-light sm:font-normal text-text-heading dark:text-white/80">Customize Your Prompts</h3>
            <p className="text-xs sm:text-xs md:text-sm text-text-description mb-1.5 pb-3 sm:pb-4">
                Prompts are the foundation of your AI search strategy 
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 rounded-lg overflow-hidden h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[330px] pointer-events-none flex justify-center items-end">
              <div className="w-[98%] h-full relative">
                <Image
                  src={isLightTheme ? '/prompt-studio-n.png' : '/images/Prompts_.jpg'}
                  alt="Prompt Studio interface"
                  width={900}
                  height={600}
                  className="w-full h-full object-contain object-bottom rounded-lg"
                  sizes="(max-width: 375px) 98vw, (max-width: 640px) 98vw, (max-width: 768px) 43vw, (max-width: 1024px) 43vw, (max-width: 1280px) 48vw, 588px"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
