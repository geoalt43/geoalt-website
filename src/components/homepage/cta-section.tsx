'use client'

import { DemoCTA } from '@/components/shared/demo-cta'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AIPlatformRotator } from '@/components/shared/ai-platform-rotator'
import { colorClasses } from '@/constants/colors'

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

  return (
    <section ref={sectionRef} className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-6 sm:pb-8 md:pb-8 lg:pb-[4vh] xl:pb-[6vh] bg-transparent-text bg-clip-text">
      <motion.div
        variants={containerVariantsSimple}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
          className={`max-w-6xl mx-auto px-4 sm:px-6 md:px-7 pt-3 pb-3 md:pt-3 md:pb-3 lg:px-8 border ${colorClasses.borderDark} rounded-lg ${colorClasses.surfaceDarker}`}
      >
        <div className={`${colorClasses.surfaceDarker} rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col lg:flex-row items-center lg:items-center gap-6 md:gap-6 lg:gap-0`}>
          {/* Left Section - Text Content */}
          <div className="w-full max-w-[320px] sm:flex-1 sm:max-w-none md:flex-1 md:max-w-none lg:pr-8 lg:w-auto text-center lg:text-left mb-4 sm:mb-6 md:mb-6 lg:mb-0 mx-auto sm:mx-0">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal text-white mb-3 sm:mb-4 md:mb-4 leading-tight tracking-wide px-2 sm:px-0 md:px-0">
              <span className="pb-2 inline-block">
                Start Growing Your
              </span>
              <br className="hidden sm:block" />
              <span>
                AI Visibility Today
              </span>
            </h2>
            <p className={`text-sm sm:text-lg md:text-lg ${colorClasses.textSecondary} px-4 sm:px-0 md:px-0 text-center lg:text-left mb-4 sm:mb-6 md:mb-6 lg:mb-8`}>
              <span className="block sm:inline">GeoAlt helps you lead in AI search</span>
              <span className="block sm:inline">and scale your brand faster.</span>
            </p>
            {/* Buttons - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:flex flex-row gap-2 sm:gap-4 md:gap-4 justify-center lg:justify-start items-center">
              <a
                href="https://forms.gle/wLMpHeTqQogumFMK8"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white text-black px-4 sm:px-6 md:px-6 py-2 sm:py-3 md:py-3 rounded-full text-[11px] sm:text-base md:text-base font-semibold whitespace-nowrap ${colorClasses.hoverGrayLight} transition-all duration-200 ease-in-out inline-block text-center flex-shrink-0 sm:min-w-[140px] md:min-w-[140px]`}
              >
                Start Free Trial
              </a>
              <div className="flex-shrink-0">
                <DemoCTA 
                  text="Contact Us" 
                  variant="outline" 
                  size="md"
                  showModal={false}
                />
              </div>
            </div>
          </div>
          
          {/* Right Section - AI Platform Rotator with Buttons on Mobile */}
          <div className="flex-shrink-0 w-full sm:w-auto sm:min-w-[240px] md:min-w-[280px] lg:w-[380px] flex flex-col items-center gap-4 md:gap-4 lg:gap-0">
            <div className="h-[180px] sm:h-[215px] md:h-[245px] lg:h-[300px] w-full flex items-center justify-center lg:justify-end relative overflow-hidden">
              <div className="relative w-full h-full max-w-full">
                <div className="relative w-full h-full">
                  {/* Card Container */}
                  <div 
                    className={`relative w-full h-full ${colorClasses.surfaceDarker} rounded-lg pt-2 pb-2 pl-3 sm:pl-4 md:pl-6 lg:pl-10 pr-2 sm:pr-4 md:pr-4 lg:pr-0 overflow-hidden flex items-center justify-center backdrop-blur-[10px]`}
                  >
                    <div className="scale-100 sm:scale-[0.9] md:scale-[1.0] lg:scale-[1.1] xl:scale-[1.2] origin-center overflow-hidden w-full h-full flex items-center justify-center">
                      <AIPlatformRotator variant="muted" size="default" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons - Shown on mobile only, below AI Platform Rotator */}
            <div className="flex sm:hidden flex-row gap-2 justify-center items-center w-full">
              <a
                href="https://forms.gle/wLMpHeTqQogumFMK8"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white text-black px-4 py-2 rounded-full text-[11px] font-semibold whitespace-nowrap ${colorClasses.hoverGrayLight} transition-all duration-200 ease-in-out inline-block text-center flex-shrink-0`}
              >
                Start Free Trial
              </a>
              <div className="flex-shrink-0">
                <DemoCTA 
                  text="Contact Us" 
                  variant="outline" 
                  size="md"
                  showModal={false}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

