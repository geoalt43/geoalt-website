'use client'

import { useRef, useState, useEffect } from 'react'
import { colorClasses } from '@/constants/colors'

function FeaturesSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden bg-transparent-text bg-clip-text">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`mb-8 sm:mb-12 pb-4 sm:pb-6 text-center transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal mb-4 sm:mb-6 text-text-heading transition-all duration-700 ease-out"
            style={{ transitionDelay: '100ms' }}
          >
            Own your visibility on AI Search
          </h2>
          <p 
            className="text-sm sm:text-base md:text-lg text-text-description max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 transition-all duration-700 ease-out"
            style={{ transitionDelay: '200ms' }}
          >
            Geoalt offers unparalleled accuracy, real-time insights, <br className="hidden lg:block" />
            and a commitment to data security.
          </p>
        </div>

        <div
          className={`grid gap-4 sm:gap-5 lg:gap-8 pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Accurate Data */}
          <div
            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-all duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] hover:shadow-lg"
            style={{ transitionDelay: '400ms' }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-4 relative z-10">
              <div
                className="transition-all duration-500 ease-out"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 13l3-3 4 4 5-6" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-heading">Accurate Data</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2`}>
              Our advanced algorithms ensure precise tracking of your AI visibility.
              <br className="hidden sm:block" />
              Get reliable metrics that help you make data-driven decisions.
            </p>
          </div>

          {/* Real-time Insights */}
          <div
            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-all duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] hover:shadow-lg"
            style={{ transitionDelay: '500ms' }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-4 relative z-10">
              <div
                className="transition-all duration-500 ease-out"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-heading">Real-time Insights</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2`}>
              Stay ahead of the curve with up‑to‑the‑minute data on your performance.
              <br className="hidden sm:block" />
              Monitor changes as they happen and respond quickly to opportunities.
            </p>
          </div>

          {/* Secure & Reliable */}
          <div
            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-all duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] hover:shadow-lg md:col-span-2 lg:col-span-1"
            style={{ transitionDelay: '600ms' }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-4 relative z-10">
              <div
                className="transition-all duration-500 ease-out"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-heading">Secure & Reliable</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2`}>
              We prioritize the security and confidentiality of your data.
              <br className="hidden sm:block" />
              Your information is protected with enterprise-grade security measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FeaturesSection }
