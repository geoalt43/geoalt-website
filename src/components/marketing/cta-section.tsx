'use client'

import { DemoCTA } from './demo-cta'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { AIPlatformRotator } from './ai-platform-rotator'

export function CTASection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-3 lg:px-8 border border-[#1d1d1d] rounded-lg bg-[#0a0a0a]"
      >
        <div className="bg-[#0a0a0a] rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-0">
          {/* Left Section - Text Content */}
          <div className="flex-1 lg:pr-8 w-full lg:w-auto text-center lg:text-left mb-4 sm:mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-3 sm:mb-4 leading-tight tracking-wide px-2 sm:px-0">
              <span className="pb-2 inline-block">
                Start Growing Your
              </span>
              <br className="hidden sm:block" />
              <span>
                AI Visibility Today
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#9b9b9b] px-4 sm:px-0 text-center lg:text-left mb-4 sm:mb-6 lg:mb-8">
              GE<Image src="/ai-icons/openai.webp" alt="" width={18} height={18} className="mx-0.5 sm:w-5 sm:h-5 inline-block align-middle" />Alt helps you lead in AI search and scale your brand faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <a 
                href="https://forms.google.com/YOUR_FORM_ID_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#a0a0a0] transition-all duration-200 ease-in-out inline-block text-center w-full sm:w-auto min-w-[140px] sm:min-w-auto"
              >
                Start Free Trial
              </a>
              <div className="w-full sm:w-auto">
                <DemoCTA 
                  text="Contact Us" 
                  variant="outline" 
                  size="md"
                  showModal={false}
                />
              </div>
            </div>
          </div>
          
          {/* Right Section - AI Platform Rotator */}
          <div className="flex-shrink-0 w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px] lg:w-[450px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[350px] flex items-center justify-center lg:justify-end relative overflow-hidden">
            <div className="relative w-full h-full max-w-full">
              <div className="relative w-full h-full">
                {/* Card Container */}
                <div 
                  className="relative w-full h-full bg-[#0a0a0a] rounded-lg pt-2 pb-2 pl-3 sm:pl-4 md:pl-6 lg:pl-10 pr-2 sm:pr-4 lg:pr-0 overflow-hidden flex items-center justify-center"
                  style={{
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="scale-[0.85] sm:scale-[1.1] md:scale-[1.3] lg:scale-[1.7] xl:scale-[2] origin-center  overflow-hidden w-full h-full flex items-center justify-center" style={{ height: '100%', width: '100%' }}>
                    <AIPlatformRotator variant="muted" size="default" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

