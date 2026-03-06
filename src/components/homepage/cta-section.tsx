'use client'

import { DemoCTA } from '@/components/shared/demo-cta'
import { useRef, useState, useEffect } from 'react'
import { AIPlatformRotator } from '@/components/shared/ai-platform-rotator'
import { colorClasses } from '@/constants/colors'
import { triggerBookDemoEvent, triggerStartTrialEvent } from '@/lib/mixpanel'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function CTASection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-150px' }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  return (
    <section ref={sectionRef} className="pt-4 sm:pt-5 md:pt-6 pb-4 sm:pb-5 md:pb-6 mb-8 sm:mb-12 md:mb-16 lg:mb-20 bg-transparent-text bg-clip-text">
      <div
        className={`relative overflow-hidden max-w-6xl mx-4 xl:mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-4 border border-[var(--color-card-border)] rounded-lg ${
          isLightTheme ? 'bg-[#080808]' : 'bg-[var(--color-ref-043)]'
        } transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/right_side dark.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 rounded-lg p-4 sm:p-5 lg:p-7 flex flex-col lg:flex-row items-center lg:items-center gap-4 sm:gap-5 lg:gap-8">
          {/* Left Section - Text Content */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:flex-1 text-center lg:text-left mb-2 sm:mb-3 lg:mb-0 mx-auto lg:mx-0">
            <h2 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal ${colorClasses.textDescription} mb-3 sm:mb-4 leading-tight tracking-wide`}>
              <span className="pb-2 inline-block">
                Start Growing Your
              </span>
              <br className="hidden sm:block" />
              <span>
                AI Visibility Today
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#555555] text-center lg:text-left mb-4 sm:mb-5 lg:mb-8">
              <span className="block sm:inline">GEOAlt helps you lead in AI search</span>
              <span className="block sm:inline"> and scale your brand faster.</span>
            </p>
            {/* Buttons - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
              <a
                href="https://app.geoalt.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerStartTrialEvent('cta-section')}
                className={`group bg-white text-text-button dark:text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${colorClasses.hoverGrayLight} transition-all duration-200 ease-in-out inline-flex items-center justify-center text-center flex-shrink-0 cursor-pointer border border-border`}
              >
                <span className="text-black">Start Free Trial</span>
                <div className="relative flex items-center justify-center w-5 h-5 ml-1.5 overflow-hidden">
                  {/* Chevron Icon - Default */}
                  <svg 
                    className="absolute transition-all duration-300 transform opacity-100 group-hover:opacity-0 group-hover:translate-x-4" 
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {/* Arrow Icon - Hover */}
                  <svg 
                    className="absolute transition-all duration-300 transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5" 
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
              <div className="flex-shrink-0">
                <DemoCTA
                  text="Book a Demo"
                  variant="outline"
                  onClick={() => triggerBookDemoEvent('cta-section')}
                  size="md"
                  showModal={false}
                  href="https://calendly.com/geoalt43/30min"
                  className="text-white border-[#6E6E6E]"
                />
              </div>
            </div>
          </div>

          {/* Right Section - AI Platform Rotator with Buttons on Mobile */}
          <div className="flex-shrink-0 w-full sm:w-auto sm:min-w-[240px] lg:w-[380px] flex flex-col items-center gap-3 sm:gap-4">
            <div className="h-36 sm:h-44 md:h-52 lg:h-72 w-full flex items-center justify-center lg:justify-end relative overflow-hidden">
              <div className="relative w-full h-full max-w-full">
                <div className="relative w-full h-full">
                  {/* Card Container */}
                  <div
                    className="relative w-full h-full bg-transparent rounded-lg pt-2 pb-2 pl-3 sm:pl-4 lg:pl-10 pr-2 sm:pr-4 overflow-hidden flex items-center justify-center"
                  >
                    <div className="scale-90 sm:scale-95 lg:scale-110 origin-center overflow-hidden w-full h-full flex items-center justify-center">
                      <AIPlatformRotator variant="muted" size="default" copilotNameOverride="Copilot" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons - Shown on mobile only, below AI Platform Rotator */}
            <div className="flex sm:hidden flex-row gap-2 justify-center items-center w-full">
              <a
                href="https://app.geoalt.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerStartTrialEvent('cta-section')}
                className={`group bg-white text-text-button dark:text-black pl-3 pr-2 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${colorClasses.hoverGrayLight} transition-all duration-200 ease-in-out inline-flex items-center justify-center text-center flex-shrink-0 cursor-pointer border border-border`}
              >
                <span className="text-black">Start Free Trial</span>
                <div className="relative flex items-center justify-center w-4 h-4 ml-1 overflow-hidden">
                  <svg 
                    className="absolute transition-all duration-300 transform opacity-100 group-hover:opacity-0 group-hover:translate-x-4" 
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <svg 
                    className="absolute transition-all duration-300 transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5" 
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
              <div className="flex-shrink-0">
                <DemoCTA
                  text="Book a Demo"
                  variant="outline"
                  onClick={() => triggerBookDemoEvent('cta-section')}
                  size="md"
                  showModal={false}
                  href="https://calendly.com/geoalt43/30min"
                  className="text-white border-[#6E6E6E]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
