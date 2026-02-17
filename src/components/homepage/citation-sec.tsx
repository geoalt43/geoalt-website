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

export function CitationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px -10% 0px' })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const bgSrc = mounted && resolvedTheme === 'dark'
    ? '/images/BG-dark-green.jpeg'
    : '/images/dash-BGimg.jpeg'

  const isDark = mounted && resolvedTheme === 'dark'

  const innerImageSrc = isDark
    ? '/images/citations-darks.png'
    : '/images/citations_light.png'

  return (
    <section
      ref={sectionRef}
      className="pt-12 sm:pt-16 md:pt-20 lg:pt-[6vh] pb-0"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        
        {/* Centered Heading */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-8 sm:mb-12 md:mb-14 lg:mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={textItemVariants}
            className="text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal tracking-tight text-text-heading mb-4"
          >
           Own Your Brand&apos;s Presence Across <br className="hidden sm:block" />AI Platforms
          </motion.h2>

          <motion.p
            variants={textItemVariants}
            className="hidden sm:block text-sm sm:text-base md:text-lg text-text-description max-w-2xl mx-auto leading-relaxed"
          >
            Track mentions, benchmark competitors, monitor prompts, and <br className="hidden sm:block" />create content that earns citations in AI recommendations.
          </motion.p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Column - Text Content */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-1 lg:col-span-2"
          >

            {/* Heading */}
            <motion.h2
              variants={textItemVariants}
              className="text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-[400] tracking-tight mb-2 text-text-heading"
            >
             Track Your Brand’s Presence
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={textItemVariants}
              className="text-sm sm:text-base md:text-lg text-text-description max-w-md leading-relaxed"
            >
              We show how your product is increasingly mentioned by AI.
            </motion.p>
          </motion.div>

          {/* Right Column - Painting Image Container */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`order-2 lg:order-2 lg:col-span-3 relative w-full lg:w-[85%] ml-auto aspect-video overflow-hidden border border-[var(--color-card-border)] rounded-tl-lg rounded-tr-lg rounded-bl-lg ${isDark ? 'bg-[#080808]/50' : 'bg-white'}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                key={bgSrc}
                src={bgSrc}
                alt=""
                fill
                className="object-cover opacity-80"
                quality={100}
                priority={false}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#080808]' : 'from-white/60'} via-transparent to-transparent opacity-90`} />
              <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/10'}`} />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 pl-[3%] pt-[0%] pb-0 pr-0 h-full flex flex-col justify-end">
              {/* Main Image (prompts.png) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.4, ease: smoothEase }}
                className="w-full relative group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  key={innerImageSrc}
                  src={innerImageSrc}
                  alt="Citation analytics"
                  width={1200}
                  height={700}
                  className="w-full h-auto object-contain rounded-tl-lg rounded-bl-lg"
                  quality={100}
                  priority
                />

                {/* Permanent Overlay */}
                <div className="absolute inset-0 bg-black/5 rounded-tl-lg rounded-bl-lg" />
                {/* Plus Icon - hover only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg rounded-bl-lg">
                  <div className="bg-black/30 backdrop-blur-md p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
            
            <ImageModal 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              src={innerImageSrc}
              alt="Citation analytics"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
