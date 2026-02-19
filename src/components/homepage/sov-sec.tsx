'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Plus } from 'lucide-react'
import { ImageModal } from '@/components/ui/image-modal'

export function SovSection() {
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

  const imageSrc = mounted && resolvedTheme === 'dark'
    ? '/images/share-of-voice-1dark.png'
    : '/images/sov-light.png'

  const bgSrc = mounted && resolvedTheme === 'dark'
    ? '/images/BG-Greens.jpeg'
    : '/images/dash-BGimg.jpeg'

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <section
      ref={sectionRef}
      className="pt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Column - Painting Image Container */}
          <div
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
            <div
              className="absolute z-10 top-[5%] right-[3%] bottom-0 left-0 cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative w-full h-full">
                <Image
                  key={imageSrc}
                  src={imageSrc}
                  alt="Share of Voice analytics"
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
            </div>
            
            <ImageModal 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              src={imageSrc}
              alt="Share of Voice analytics"
            />

          
          </div>

          {/* Right Column - Text Content */}
          <div
            className="order-1 lg:order-2 lg:pl-16 pt-5 lg:pt-0"
          >
            {/* Heading */}
            <h2
              className={`text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-light tracking-tight mb-2 text-text-heading transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30px]'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              Benchmark Your AI Visibility 
            </h2>

            {/* Subheading */}
            <p
              className={`text-sm sm:text-base md:text-lg text-text-description max-w-md leading-relaxed font-light transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30px]'}`}
              style={{ transitionDelay: '0.25s' }}
            >
              Gain clear insights into your AI market share and competitive standing over time.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
