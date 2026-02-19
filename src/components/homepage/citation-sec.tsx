'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Plus } from 'lucide-react'
import { ImageModal } from '@/components/ui/image-modal'

export function CitationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-10% 0px -10% 0px' }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const bgSrc = mounted && resolvedTheme === 'dark'
    ? '/images/bg-green.jpeg'
    : '/images/dash-BGimg.jpeg'

  const isDark = mounted && resolvedTheme === 'dark'

  const innerImageSrc = isDark
    ? '/images/1st-citation-dark-.png'
    : '/images/citations_light.png'

  return (
    <section
      ref={sectionRef}
      className="pt-12 sm:pt-16 md:pt-20 lg:pt-[6vh] pb-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        
        {/* Centered Heading */}
        <div
          className={`mb-8 sm:mb-12 md:mb-14 lg:mb-16 text-center max-w-3xl mx-auto transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2
            className={`text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal tracking-tight text-text-heading mb-4 transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
           Track Your Brand&apos;s Visibility Across <br className="hidden sm:block" />the AI Landscape
          </h2>

          {/* <motion.p
            variants={textItemVariants}
            className="hidden sm:block text-sm sm:text-base md:text-lg text-text-description max-w-2xl mx-auto leading-relaxed"
          >
            Track mentions, benchmark competitors, monitor prompts, and <br className="hidden sm:block" />create content that earns citations in AI recommendations.
          </motion.p> */}
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Column - Text Content */}
          <div
            className="order-1 lg:order-1"
          >

            {/* Heading */}
            <h2
              className={`text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-light tracking-tight mb-2 text-text-heading transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[30px]'}`}
              style={{ transitionDelay: '200ms' }}
            >
             Track Your Brand's Presence
            </h2>

            {/* Subheading */}
            <p
              className={`text-sm sm:text-base md:text-lg text-text-description max-w-md leading-relaxed font-light transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[30px]'}`}
              style={{ transitionDelay: '350ms' }}
            >
              Track how your brand performs in answers to real user queries across AI platforms.
            </p>
            

          </div>

          {/* Right Column - Painting Image Container */}
          <div
            className={`order-2 lg:order-2 relative w-full aspect-video overflow-hidden rounded-lg ${isDark ? 'bg-[#080808]/50' : 'bg-white'}`}
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
              <div
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
              </div>
            </div>
            
            <ImageModal 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              src={innerImageSrc}
              alt="Citation analytics"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
