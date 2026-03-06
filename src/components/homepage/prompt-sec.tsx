'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Plus } from 'lucide-react'
import { ImageModal } from '@/components/ui/image-modal'

export function PromptSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const { resolvedTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
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
          <div
            className="order-1 lg:order-1"
          >
            {/* Step Label */}
            <div
              className="flex items-center gap-2 mb-4"
            >
              {/* <span className="w-3 h-3 rounded-sm bg-orange-500" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-text-description">
                STEP X
              </span> */}
            </div>

            {/* Heading */}
            <h2
              className={`text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-[450] tracking-tight mb-2 text-[#4682B4] dark:text-[#525252] transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[30px]'}`}
              style={{ transitionDelay: '0.1s' }}
            >
             Track Visibility Across Queries
            </h2>

            {/* Subheading */}
            <p
              className={`text-sm sm:text-base md:text-lg text-[#525252] max-w-md leading-relaxed font-light transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[30px]'}`}
              style={{ transitionDelay: '0.25s' }}
            >
              Track how your brand performs in answers to real user queries across AI platforms.
            </p>
            

          </div>

          {/* Right Column - Painting Image Container */}
          <div
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
          </div>

        </div>
      </div>
    </section>
  )
}
