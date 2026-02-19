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
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: smoothEase }
  }
}

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.95, x: -60 },
  visible: {
    opacity: 1, scale: 1, x: 0,
    transition: { duration: 0.8, ease: smoothEase, delay: 0.2 }
  }
}

export function CreateContentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px -10% 0px' })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const imageSrc = mounted && resolvedTheme === 'dark'
    ? '/images/content-img.png'
    : '/images/content-img-2.png'

  const bgSrc = mounted && resolvedTheme === 'dark'
    ? '/images/BG-Greens.jpeg'
    : '/images/dash-BGimg.jpeg'

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <section
      ref={sectionRef}
      className="pt-4 pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Column - Painting Image Container */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`order-2 lg:order-1 relative w-full aspect-video overflow-hidden rounded-lg ${isDark ? 'bg-[#080808]/50' : 'bg-white'}`}
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
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#080808]' : 'from-white/60'} via-transparent to-transparent opacity-40`} />
              <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/10'}`} />
            </div>

            {/* Content Layer - touches left and bottom borders */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -20, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0.95, x: -20, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4, ease: smoothEase }}
              className="absolute z-10 top-[5%] right-[3%] bottom-0 left-0 cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative w-full h-full">
                <Image
                  key={imageSrc}
                  src={imageSrc}
                  alt="Create Content analytics"
                  // fill
                  className="object-contain object-left-bottom rounded-tr-lg"
                  quality={100}
                  width={2220}
                  height={280}
                  priority
                />
                
                {/* Permanent Overlay */}
                <div className="absolute inset-0 bg-black/5 rounded-tr-lg" />
                {/* Plus Icon - hover only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg">
                  <div className="bg-black/30 backdrop-blur-md p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <ImageModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                src={imageSrc}
                alt="Create Content analytics"
            />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2 lg:pl-16"
          >
            {/* Step Label */}
            <motion.div
              variants={textItemVariants}
              className="flex items-center gap-2 mb-4"
            >
              {/* <span className="w-3 h-3 rounded-sm bg-orange-500" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-text-description">
                STEP 2
              </span> */}
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={textItemVariants}
              className="text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-light tracking-tight mb-2 text-text-heading"
            >
              Create AI-optimized content
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={textItemVariants}
              className="text-sm sm:text-base md:text-lg text-text-description max-w-md leading-relaxed font-light"
            >
              We create AI-optimized content that positions your brand as a trusted source in answers.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
