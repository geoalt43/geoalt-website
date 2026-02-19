'use client'

import { useRef, useState } from 'react'
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
  const { resolvedTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const innerImageLight = '/images/PromptsLight.png'
  const innerImageDark = '/images/Prompt-dark.png'
  const modalImage = resolvedTheme === 'light' ? innerImageLight : innerImageDark

  return (
    <section
      ref={sectionRef}
      className="pt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Column - Text Content */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-1"
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
              className="text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-light tracking-tight mb-2 text-text-heading"
            >
             Track Visibility Across Queries
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={textItemVariants}
              className="text-sm sm:text-base md:text-lg text-text-description max-w-md leading-relaxed font-light"
            >
              Track how your brand performs in answers to real user queries across AI platforms.
            </motion.p>
            

          </motion.div>

          {/* Right Column - Painting Image Container */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-2 lg:order-2 relative w-full aspect-video overflow-hidden bg-[#080808] dark:bg-[#080808]/50 rounded-lg"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/dash-BGimg.jpeg"
                alt=""
                fill
                className="object-cover opacity-80 transition-opacity duration-500 block dark:hidden"
                priority={false}
              />
              <Image
                src="/images/bg-green.jpeg"
                alt=""
                fill
                className="object-cover opacity-80 transition-opacity duration-500 hidden dark:block"
                priority={false}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-40 hidden dark:block" />
              <div className="absolute inset-0 bg-black/20 hidden dark:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-90 block dark:hidden" />
              <div className="absolute inset-0 bg-white/10 block dark:hidden" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 pl-[3%] pt-[3%] pb-0 pr-0 flex flex-col justify-end">
              {/* Main Image */}
              <div
                className="relative w-full h-full group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                {/* Light Theme Inner Image */}
                <Image
                  src="/images/PromptsLight.png"
                  alt="Prompt analytics"
                  fill
                  className="object-cover object-left-bottom rounded-tl-lg transition-opacity duration-500 block dark:hidden"
                  quality={100}
                  priority
                />
                {/* Dark Theme Inner Image */}
                <Image
                  src="/images/Prompt-dark.png"
                  alt="Prompt analytics"
                  fill
                  className="object-cover object-left-bottom rounded-tl-lg transition-opacity duration-500 hidden dark:block"
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
                src={modalImage}
                alt="Prompt analytics"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
