'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Plus } from 'lucide-react'
import { ImageModal } from '@/components/ui/image-modal'

const smoothEase = [0.22, 1, 0.36, 1] as const

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const textItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: smoothEase }
  }
}

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 60 },
  visible: {
    opacity: 1, scale: 1, x: 0,
    transition: { duration: 0.8, ease: smoothEase, delay: 0.2 }
  }
}

export function PromptSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px -10% 0px' })
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which images to show based on theme
  // Default to dark theme images to prevent hydration mismatch or flash
  const isLight = mounted && (theme === 'light' || resolvedTheme === 'light')
  
  const bgImage = isLight ? '/images/dash-BGimg.jpeg' : '/images/BG-dark-green.jpeg'
  const innerImage = isLight ? '/images/PromptsLight.png' : '/images/PromptsDark.png'

  return (
    <section
      ref={sectionRef}
      className="pt-4"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Column - Text Content */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-2 lg:order-1 lg:col-span-2 "
          >
            {/* Step Label */}
            <motion.div
              variants={textItemVariants}
              className="flex items-center gap-2 mb-4"
            >
              {/* <span className="w-3 h-3 rounded-sm bg-orange-500" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-text-description">
                STEP X
              </span> */}
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={textItemVariants}
              className="text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-[400] tracking-tight mb-4 sm:mb-6 text-text-heading"
            >
             Monitor visibility Across User Queries
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={textItemVariants}
              className="text-sm sm:text-base md:text-lg text-text-description max-w-md leading-relaxed"
            >
              Track how your brand performs in answers to real user queries across AI platforms.
            </motion.p>
          </motion.div>

          {/* Right Column - Painting Image Container */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2 lg:col-span-3 relative w-full lg:w-[85%] ml-auto aspect-video overflow-hidden border border-[var(--color-card-border)] bg-[#080808] dark:bg-[#080808]/50 rounded-tl-lg rounded-tr-lg rounded-bl-lg"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                key={bgImage} // Re-render when image changes
                src={bgImage}
                alt=""
                fill
                className={`object-cover transition-opacity duration-500 ${isLight ? 'opacity-100' : 'opacity-80'}`}
                priority={false}
              />
              {/* Dark mode overlays - hide in light mode */}
              {!isLight && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-black/20" />
                </>
              )}
              {/* Light mode overlays (optional, for readability if needed) */}
              {isLight && (
                 <div className="absolute inset-0 bg-white/10" />
              )}
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 pl-[3%] pt-[3%] pb-0 pr-0 flex flex-col justify-end">
              {/* Main Image */}
              <div
                className="relative w-full h-full group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  key={innerImage} // Re-render when image changes
                  src={innerImage}
                  alt="Prompt analytics"
                  fill
                  className="object-cover object-left-bottom rounded-tl-lg transition-opacity duration-500"
                  quality={100}
                  priority
                />
                
                {/* Permanent Overlay */}
                <div className="absolute inset-0 bg-black/5 rounded-tl-lg" />
                {/* Plus Icon - hover only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg">
                  <div className="bg-black/30 backdrop-blur-md p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <ImageModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                src={innerImage}
                alt="Prompt analytics"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
