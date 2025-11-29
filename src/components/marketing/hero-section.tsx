'use client'

import Link from 'next/link'
import { AIPlatformRotator } from './ai-platform-rotator'
import { DemoCTA } from './demo-cta'
import OpenAI from '@lobehub/icons/es/OpenAI'
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
      type: 'spring',
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
      type: 'spring',
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
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.5,
    },
  },
}

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.0,
    },
  },
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
      mass: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.95,
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
    <section ref={sectionRef} id="home" className="pt-22 pb-20 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="flex flex-col items-center text-center mt-8">
          <div className="max-w-4xl">
            {/* Word-by-word animated heading */}
            <motion.h1 
              variants={headingContainerVariants}
              initial="hidden"
              animate={controls}
              className="text-4xl lg:text-[3.3rem] font-normal -mt-6 mb-4 leading-tight tracking-tighter bg-gradient-to-r from-[#4285f4] via-[#9c27b0] to-[#ea4335] text-transparent bg-clip-text"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-2"
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
              className="-mt-11 flex justify-center"
            >
              <AIPlatformRotator size="large" />
            </motion.div>

            {/* Description text with clip-path reveal */}
            <motion.p 
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className="text-xl -mt-8 leading-relaxed flex items-center justify-center text-[#878787]"
            >
              GE<OpenAI size={20} className="mx-0.5" />Alt helps your business stand out across AI platforms
            </motion.p>
            <motion.p 
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className="text-xl mb-8 pb-4 leading-relaxed flex items-center justify-center text-[#878787]"
            >
              <em>— Turning AI visibility into traffic</em>
            </motion.p>
          
            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/register" className="text-black px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ease-in-out bg-white hover:bg-[#d4d4d4] block">
                Get Started
              </Link>
              <DemoCTA 
                text="Contact Us" 
                variant="outline" 
                size="md"
                showModal={false}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
