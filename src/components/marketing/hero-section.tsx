'use client'

import Link from 'next/link'
import { AIPlatformRotator } from './ai-platform-rotator'
import { DemoCTA } from './demo-cta'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

// Industry-standard animation variants with spring physics
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

// Word-by-word animation for heading
const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
      mass: 0.5,
    },
  },
}

const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const rotatorVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
      mass: 0.8,
      delay: 0.6,
    },
  },
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.5,
    },
  },
}

// Split text into words for animation
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
    <section ref={sectionRef} id="home" className="pt-16 sm:pt-20 lg:pt-24 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="flex flex-col items-center text-center mt-4 sm:mt-8">
          <div className="max-w-4xl">
            {/* Word-by-word animated heading */}
            <motion.h1 
              variants={headingContainerVariants}
              initial="hidden"
              animate={controls}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-normal mt-4 sm:mt-0 mb-3 sm:mb-4 leading-tight tracking-normal sm:tracking-tight bg-gradient-to-r from-[#4285f4] via-[#9c27b0] to-[#ea4335] text-transparent bg-clip-text px-2 sm:px-0"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-2 sm:mr-3"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* AI Platform Rotator with blur reveal */}
            <motion.div 
              variants={rotatorVariants}
              initial="hidden"
              animate={controls}
              className="-mt-6 sm:-mt-8 lg:-mt-11 flex justify-center"
            >
              <AIPlatformRotator size="large" />
            </motion.div>

            {/* Description text with clip-path reveal */}
            <motion.p 
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className="text-xs sm:text-base md:text-lg text-center text-[#9b9b9b] px-4 sm:px-0 flex items-center justify-center gap-2 flex-wrap"
            >
              <Image
                src="/logos/GeoAlt_Logo.png"
                alt="GEOAlt logo"
                width={100}
                height={24}
                className="h-[1em] sm:h-[1.05em] w-auto align-middle"
                priority
              />
              <span>helps your business stand out across AI platforms</span>
            </motion.p>
            <motion.p 
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 pb-2 sm:pb-4 text-center text-[#9b9b9b] px-4 sm:px-0"
            >
              <em>— Turning AI visibility into traffic</em>
            </motion.p>
          
            {/* Hero CTA Buttons */}
            <div className="flex flex-row gap-2.5 sm:gap-4 items-center justify-center px-4 sm:px-0">
              <Link
                href="/register"
                className="inline-flex items-center justify-center text-black px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base font-semibold tracking-wide transition-all duration-200 ease-in-out bg-white hover:bg-[#d4d4d4] text-center min-w-[100px] sm:min-w-[120px]"
              >
                Get Started
              </Link>
              <DemoCTA 
                text="Contact Us" 
                variant="outline" 
                size="md"
                showModal={false}
                className="min-w-[100px] sm:min-w-[120px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
