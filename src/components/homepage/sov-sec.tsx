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

export function SovSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px -10% 0px' })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const imageSrc = mounted && resolvedTheme === 'dark'
    ? '/images/sov-dark.png'
    : '/images/sov-light.png'

  const bgSrc = mounted && resolvedTheme === 'dark'
    ? '/images/BG-blue.jpeg'
    : '/images/dash-BGimg.jpeg'

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <section
      ref={sectionRef}
      className="pt-4"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Column - Painting Image Container */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`order-2 lg:order-1 lg:col-span-3 relative w-full lg:w-[85%] aspect-video overflow-hidden border border-[var(--color-card-border)] rounded-tl-lg rounded-tr-lg rounded-bl-lg ${isDark ? 'bg-[#080808]/50' : 'bg-white'}`}
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
                  alt="Share of Voice analytics"
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
              alt="Share of Voice analytics"
            />

            {/* Floating Citations Rank card — bottom-left overlay */}
            {/* <motion.div
              initial={{ opacity: 0, y: 40, x: -20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 40, x: -20 }}
              transition={{ duration: 0.7, delay: 0.7, ease: smoothEase }}
              className="absolute z-20 bottom-[-2%] left-[0%] w-[35%] max-w-[260px] rounded-lg overflow-hidden border border-white/1"
              style={{ boxShadow: '-1px -1px 16px rgba(255,255,255,0.08), -6px 6px 15px rgba(255,255,255,0.08)' }}
            >
              <Image
                src="/images/sov-ranks.png"
                alt="Citations rank table"
                width={640}
                height={540}
                className="w-full h-auto block"
                quality={100}
              />
            </motion.div> */}
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2 lg:col-span-2 lg:pl-29"
          >
            {/* Heading */}
            <motion.h2
              variants={textItemVariants}
              className="text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-[400] tracking-tight mb-2 text-text-heading "
            >
              Benchmark Your AI Visibility 
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={textItemVariants}
              className="text-sm sm:text-base md:text-lg text-text-description max-w-md leading-relaxed"
            >
              Gain clear insights into your AI market share and competitive standing over time.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
