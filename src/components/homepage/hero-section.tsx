'use client'

import { AIPlatformRotator } from '@/components/shared/ai-platform-rotator'
import { DemoCTA } from '@/components/shared/demo-cta'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { containerVariantsFast, wordVariants, headingContainerVariants, rotatorVariants, textVariants } from '@/lib/animations/variants'
import { colorClasses } from '@/constants/colors'

const splitText = (text: string) => text.split(' ')

export function HeroSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const headingText = 'Get Your Brand Recommended by'
  const words = splitText(headingText)
  return (
    <section ref={sectionRef} id="home" className="pt-16 sm:pt-20 md:pt-22 lg:pt-24 relative overflow-hidden bg-clip-text text-transparent ">
      <motion.div
        variants={containerVariantsFast}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 relative z-10"
      >
        <div className="flex flex-col items-center text-center mt-4 sm:mt-8 md:mt-8">
          <div className="max-w-4xl">
            <motion.h1
              variants={headingContainerVariants}
              initial="hidden"
              animate={controls}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-normal mt-4 sm:mt-0 md:mt-0 leading-tight tracking-tight bg-gradient-to-r from-[#4285f4] via-[#9c27b0] to-[#ea4335] bg-clip-text text-transparent"
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
              className="flex justify-center"
            >
              <AIPlatformRotator size="large" />
            </motion.div>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className={`text-xs sm:text-base md:text-lg text-center ${colorClasses.textSecondary} px-4 sm:px-0 md:px-0 flex items-center justify-center gap-2 flex-wrap mt-0`}
            >
              <Image
                src="/logos/GeoAlt_Logo.png"
                alt="GEOAlt logo"
                width={100}
                height={24}
                quality={90}
                className="h-[0.75em] sm:h-[0.8em] md:h-[0.8em] w-auto align-middle"
                priority
                sizes="(max-width: 640px) 100px, 100px"
              />
              <span>helps your business stand out across AI platforms</span>
            </motion.p>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className={`text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-8 pb-2 sm:pb-4 md:pb-4 text-center ${colorClasses.textSecondary} px-4 sm:px-0 md:px-0`}
            >
              <em>— Turning AI visibility into traffic</em>
            </motion.p>

            <div className="flex flex-row gap-2.5 sm:gap-4 md:gap-4 items-center justify-center px-4 sm:px-0 md:px-0">
              <span
                className="inline-flex items-center justify-center text-black px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 rounded-lg text-xs sm:text-sm md:text-base font-semibold tracking-wide transition-all duration-200 ease-in-out bg-white hover:bg-[#d4d4d4] text-center min-w-[100px] sm:min-w-[120px] md:min-w-[120px] cursor-default"
              >
                Get Started
              </span>
              <DemoCTA
                text="Contact Us"
                variant="outline"
                size="md"
                showModal={false}
                href="mailto:Contact@geoalt.in"
                className="min-w-[100px] sm:min-w-[120px] md:min-w-[120px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
