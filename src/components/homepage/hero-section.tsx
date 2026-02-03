'use client'

import { AIPlatformRotator } from '@/components/shared/ai-platform-rotator'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { containerVariantsFast, wordVariants, headingContainerVariants, rotatorVariants, textVariants } from '@/lib/animations/variants'
import { colorClasses } from '@/constants/colors'
import { triggerBookDemoEvent, triggerSignUpInitiatedEvent } from '@/lib/mixpanel'
import { useTheme } from 'next-themes'

const splitText = (text: string) => text.split(' ')

export function HeroSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })
  const controls = useAnimation()
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const headingText = 'Get Your Brand Recommended by'
  const words = splitText(headingText)
  return (
    <section ref={sectionRef} id="home" className="pt-16 sm:pt-20 md:pt-22 lg:pt-24 relative overflow-hidden bg-clip-text text-transparent ">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 z-0 bg-dot-grid mask-fade-out pointer-events-none" aria-hidden="true" />
      <motion.div
        variants={containerVariantsFast}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 relative z-10"
      >
        <div className="flex flex-col items-center text-center mt-4 sm:mt-8 md:mt-8">
          <div className="max-w-4xl">
            <motion.h1
              id="navbar-trigger"
              variants={headingContainerVariants}
              initial="hidden"
              animate={controls}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-normal mt-4 sm:mt-0 md:mt-0 leading-tight tracking-tight ${
                isLightTheme 
                  ? 'text-[#525252]' 
                  : 'bg-gradient-to-r from-[var(--color-ref-011)] via-[var(--color-ref-021)] to-[var(--color-ref-025)] bg-clip-text text-transparent'
              }`}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-2 sm:mr-3 md:mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              variants={rotatorVariants}
              initial="hidden"
              animate={controls}
              className="flex justify-center w-full"
            >
              <AIPlatformRotator size="large" centered={true} />
            </motion.div>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className={`text-xs sm:text-base md:text-lg text-center ${isLightTheme ? 'text-[var(--color-text-feature)]' : colorClasses.textDescription} px-4 sm:px-0 md:px-0 flex items-center justify-center gap-2 flex-wrap mt-[-20px] sm:mt-[-40px] md:mt-[-60px] lg:mt-[-84px]`}
            >
              <span>Geoalt</span>
              <span>helps your business stand out across AI platforms</span>
            </motion.p>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className={`text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-8 pb-2 sm:pb-4 md:pb-4 text-center ${isLightTheme ? 'text-[var(--color-text-feature)]' : colorClasses.textDescription} px-4 sm:px-0 md:px-0`}
            >
              <em>— Turning AI visibility into traffic</em>
            </motion.p>

            {/* AEO (Answer Engine Optimization) Definition Block */}
            <div className="sr-only">
                <h2>What is Geoalt?</h2>
                <p>
                    Geoalt is a Generative Engine Optimization (GEO) platform that helps businesses optimize their brand visibility across AI platforms like ChatGPT, Perplexity, Claude, and Gemini. 
                    It analyzes how AI recommends brands and provides actionable insights to increase mentions, traffic, and citation share in AI-driven search results.
                </p>
            </div>

            <div className="flex flex-row gap-2.5 sm:gap-4 md:gap-4 items-center justify-center px-4 sm:px-0 md:px-0">
              <a
                href="https://app.geoalt.in/register"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSignUpInitiatedEvent('hero-section')}
                className={`group inline-flex items-center justify-center pl-3.5 pr-2.5 py-2.5 sm:pl-4.5 sm:pr-3.5 sm:py-3 rounded-full text-[14px] sm:text-[16px] font-bold tracking-wide transition-all duration-300 ease-in-out text-center cursor-pointer border border-border ${isLightTheme ? 'bg-[#080808] text-white' : 'bg-white text-black'}`}
              >
                <span className={isLightTheme ? 'text-white' : 'text-black'}>Start Free Trial</span>
                <div className={`relative flex items-center justify-center w-5 h-5 ml-1.5 overflow-hidden ${isLightTheme ? 'text-white' : 'text-black'}`}>
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
              <a
                href="https://calendly.com/geoalt43/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerBookDemoEvent('hero-section')}
                className="group inline-flex items-center justify-center bg-button-bg border border-[#6E6E6E] pl-3.5 pr-3.5 py-2.5 sm:pl-4.5 sm:pr-4.5 sm:py-3 rounded-full text-[14px] sm:text-[16px] font-bold tracking-wide transition-all duration-300 ease-in-out hover:opacity-90 text-center cursor-pointer"
              >
                <span className={isLightTheme ? 'text-text-heading' : 'text-black'}>Book a Demo</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
