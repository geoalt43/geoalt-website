'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Plus } from 'lucide-react'
import { ImageModal } from '@/components/ui/image-modal'

export function VisibilitySection() {
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
    ? "/images/visibilitys_dark.png" 
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
         <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
         >
              {/* Heading */}
              <h2 
                className={`text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal tracking-tight mb-1 sm:mb-2 text-text-heading max-w-4xl mx-auto transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '100ms' }}
              >
                Track Your Brand&apos;s Visibility Across<br className="hidden sm:block" /> the AI Landscape
              </h2>

              {/* Subheading - constrained width for natural taper */}
              <p 
                className={`text-sm sm:text-base md:text-lg text-text-description max-w-md mx-auto leading-relaxed transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '200ms' }}
              >
                Measure visibility, benchmark competitors, <br className="hidden max-[435px]:block" /> and identify competitive gaps.
              </p>
         </div>

        {/* Painting Container - Just for the Image */}
        <div
            className={`relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[var(--color-card-border)] transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '300ms' }}
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
              <div
                className={`w-full relative group cursor-pointer transition-all duration-800 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}
                style={{ transitionDelay: '0.4s', transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
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
              </div>
           </div>
           
           <ImageModal 
             isOpen={isModalOpen}
             onClose={() => setIsModalOpen(false)}
             src={imageSrc}
             alt="Overview visibility dashboard"
           />
        </div>
      </div>
    </section>
  )
}
