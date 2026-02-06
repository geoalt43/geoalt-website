'use client'

import { DemoCTA } from '@/components/shared/demo-cta'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { AIPlatformRotator } from '@/components/shared/ai-platform-rotator'
import { colorClasses } from '@/constants/colors'
import { triggerBookDemoEvent, triggerStartTrialEvent } from '@/lib/mixpanel'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const containerVariantsSimple = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

export function CTASection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  return (
    <section ref={sectionRef} className="pt-4 sm:pt-5 md:pt-6 lg:pt-[4vh] xl:pt-[6vh] pb-4 sm:pb-5 md:pb-6 lg:pb-[4vh] xl:pb-[6vh] mb-8 sm:mb-12 md:mb-16 lg:mb-20 bg-transparent-text bg-clip-text">
      <motion.div
        variants={containerVariantsSimple}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={`relative overflow-hidden max-w-6xl max-[1250px]:mx-4 min-[1251px]:mx-auto px-4 sm:px-6 md:px-7 pt-3 pb-3 md:pt-3 md:pb-3 lg:px-8 border border-[var(--color-card-border)] rounded-lg ${
          isLightTheme ? 'bg-[#080808]' : 'bg-[var(--color-ref-043)]'
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/right_side dark.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 rounded-lg p-3 sm:p-4 md:p-5 lg:p-7 flex flex-col lg:flex-row items-center lg:items-center gap-4 sm:gap-5 md:gap-5 lg:gap-0">
          {/* Left Section - Text Content */}
          <div className="w-full max-w-[320px] sm:flex-1 sm:max-w-none md:flex-1 md:max-w-none lg:pr-8 lg:w-auto text-center lg:text-left mb-2 sm:mb-3 md:mb-4 lg:mb-0 mx-auto sm:mx-0">
            <h2 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal ${colorClasses.textDescription} mb-2 sm:mb-3 md:mb-4 leading-tight tracking-wide px-2 sm:px-0 md:px-0`}>
              <span className="pb-2 inline-block">
                Start Growing Your
              </span>
              <br className="hidden sm:block" />
              <span>
                AI Visibility Today
              </span>
            </h2>
            <p className={`text-xs sm:text-sm md:text-base text-[#555555] px-4 sm:px-0 md:px-0 text-center lg:text-left mb-3 sm:mb-4 md:mb-5 lg:mb-8`}>
              <span className="block sm:inline">Geoalt helps you lead in AI search</span>
              <span className="block sm:inline">and scale your brand faster.</span>
            </p>
            {/* Buttons - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:flex flex-row gap-2 sm:gap-4 md:gap-4 justify-center lg:justify-start items-center">
              <a
                href="https://app.geoalt.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerStartTrialEvent('cta-section')}
                className={`group bg-white text-text-button dark:text-black px-4 sm:pl-6 sm:pr-4 md:pl-6 md:pr-4 py-2 sm:py-3 md:py-3 rounded-full text-[11px] sm:text-base md:text-base font-semibold whitespace-nowrap ${colorClasses.hoverGrayLight} transition-all duration-200 ease-in-out inline-flex items-center justify-center text-center flex-shrink-0 sm:min-w-[160px] md:min-w-[160px] cursor-pointer border border-border`}
              >
                <span className="text-black">Start Free Trial</span>
                <div className="relative flex items-center justify-center w-5 h-5 ml-1 sm:ml-1.5 md:ml-1.5 overflow-hidden">
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
          <div className="flex-shrink-0 w-full sm:w-auto sm:min-w-[240px] md:min-w-[280px] lg:w-[380px] flex flex-col items-center gap-3 sm:gap-3 md:gap-4 lg:gap-0">
            <div className="h-[140px] sm:h-[170px] md:h-[200px] lg:h-[300px] w-full flex items-center justify-center lg:justify-end relative overflow-hidden">
              <div className="relative w-full h-full max-w-full">
                <div className="relative w-full h-full">
                  {/* Card Container */}
                  <div
                    className={`relative w-full h-full bg-transparent rounded-lg pt-2 pb-2 pl-3 sm:pl-4 md:pl-6 lg:pl-10 pr-2 sm:pr-4 md:pr-4 lg:pr-0 overflow-hidden flex items-center justify-center`}
                  >
                    <div className="scale-100 sm:scale-[0.9] md:scale-[1.0] lg:scale-[1.1] xl:scale-[1.2] origin-center overflow-hidden w-full h-full flex items-center justify-center">
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
                className={`group bg-white text-text-button dark:text-black pl-3.5 pr-2.5 py-2 rounded-full text-[11px] font-semibold whitespace-nowrap ${colorClasses.hoverGrayLight} transition-all duration-200 ease-in-out inline-flex items-center justify-center text-center flex-shrink-0 cursor-pointer border border-border`}
              >
                <span className="text-black">Start Free Trial</span>
                <div className="relative flex items-center justify-center w-4 h-4 ml-1 overflow-hidden">
                  {/* Chevron Icon - Default */}
                  <svg 
                    className="absolute transition-all duration-300 transform opacity-100 group-hover:opacity-0 group-hover:translate-x-4" 
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {/* Arrow Icon - Hover */}
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
      </motion.div>
    </section>
  )
}

