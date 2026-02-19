'use client'

import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

interface Testimonial {
  quote: string
  name: string
  designation: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Geoalt offers key insights on AI visibility, helping brands stay at the forefront of discovery in the age of AI and generative search. As ChatGPT, Perplexity, and Deepseek drive traffic and conversions, Geoalt measures the growth.",
    name: "Crystal Carter",
    designation: "Head of SEO Comms, Wix",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Geoalt avoids the issues we see with other SEO/AEO platforms, where there's often an overload of features and information that isn't of primary importance. It keeps things simple - set up your prompts, see your AI visibility, and act on top citations.",
    name: "Ethan Smith",
    designation: "CEO, Graphite",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "As European leaders in travel and search innovation for the vacation rental industry, staying ahead is crucial - Geoalt empowers our team to proactively manage & enhance our visibility across emerging search platforms.",
    name: "Felix Welckenbach",
    designation: "Director Organic Growth, HomeToGo",
    image: "https://i.pravatar.cc/150?img=3"
  }
]

export function TestimonialsCarousel() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-150px' }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  return (
    <section className="pt-9 sm:pt-12 md:pt-13 lg:pt-[4vh] xl:pt-[6vh] pb-6 sm:pb-8 md:pb-8 lg:pb-[4vh] xl:pb-[6vh] bg-page-background relative overflow-hidden bg-transparent-text bg-clip-text">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid-pattern-opacity-02" />
      
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-b from-page-background via-page-background/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-t from-page-background via-page-background/50 to-transparent pointer-events-none z-10" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 relative z-20">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-12 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 bg-white rounded-lg border border-white/20 mb-8 sm:mb-12 md:mb-12.5 lg:mb-14 shadow-sm transition-all duration-600"
            style={{ transitionDelay: '100ms' }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs sm:text-sm md:text-sm font-medium text-black">Testimonials</span>
          </div>
          <h2
            className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0 ${isLightTheme ? 'text-[var(--color-ref-001)]' : 'text-text-primary'} transition-all duration-600`}
            style={{ transitionDelay: '200ms' }}
          >
            See what industry leaders say<br className="hidden sm:block" />
            <span
              className="inline-block"
            >
              about Geoalt
            </span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-[1.375rem] lg:gap-6 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 shadow-lg min-h-[168px] sm:min-h-0 sm:h-full flex flex-col relative overflow-hidden group hover:border-border-hover transition-all duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] hover:shadow-xl"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative flex-1 flex flex-col">
                <div className="relative mb-2.5 sm:mb-3 md:mb-3">
                  <p className="text-text-description text-xs sm:text-sm md:text-base leading-relaxed font-normal relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                
                <div className="mt-auto flex items-center gap-2 sm:gap-3 md:gap-3 pt-2 relative z-10">
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 ring-2 ring-black/10 dark:ring-white/10 shadow-lg">
                    <Image
                      src={failedImages.has(index) 
                        ? `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`
                        : testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      onError={() => {
                        setFailedImages(prev => new Set(prev).add(index))
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-normal text-text-primary text-xs md:text-sm truncate">{testimonial.name}</p>
                    <p className="text-xs text-text-muted font-light truncate">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
