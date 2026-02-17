'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import { containerVariants, headerVariants } from '@/lib/animations/variants'
import { Plus } from 'lucide-react'
import { ImageModal } from '@/components/ui/image-modal'

export function VisibilitySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px -10% 0px' })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const imageSrc = mounted && resolvedTheme === 'dark' 
    ? "/images/visibility-dark_.png" 
    : "/images/Overview-visibility-light.png"

  const bgSrc = mounted && resolvedTheme === 'dark'
    ? '/images/bg-green.jpeg'
    : '/images/dash-BGimg.jpeg'

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <section 
      ref={sectionRef} 
      className="py-12 sm:py-16 md:py-20 lg:py-[6vh]"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        
         {/* Text Outside - Above the Image Container */}
         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center mb-8 sm:mb-12 md:mb-16"
         >
              {/* Heading */}
              <motion.h2 
                variants={headerVariants}
                className="text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal tracking-tight mb-1 sm:mb-2 text-text-heading max-w-4xl mx-auto"
              >
                Track Your Brand&apos;s Visibility Across<br className="hidden sm:block" /> the AI Landscape
              </motion.h2>

              {/* Subheading - constrained width for natural taper */}
              <motion.p 
                variants={headerVariants}
                className="text-sm sm:text-base md:text-lg text-text-description max-w-md mx-auto leading-relaxed"
              >
                Measure visibility, benchmark competitors, <br className="hidden max-[435px]:block" /> and identify competitive gaps.
              </motion.p>
         </motion.div>

        {/* Painting Container - Just for the Image */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate={isInView ? 'visible' : 'hidden'}
           className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[var(--color-card-border)]"
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

          <div className="relative z-10 flex flex-col items-center text-center px-[3%] pt-[3%] pb-0">
             
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full relative group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <Image 
                  key={imageSrc}
                  src={imageSrc}
                  alt="Overview visibility dashboard"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-t-lg"
                  quality={100}
                  priority
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 rounded-t-lg">
                  <div className="bg-black/30 backdrop-blur-md p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
           </div>
           
           <ImageModal 
             isOpen={isModalOpen}
             onClose={() => setIsModalOpen(false)}
             src={imageSrc}
             alt="Overview visibility dashboard"
           />
        </motion.div>
      </div>
    </section>
  )
}
