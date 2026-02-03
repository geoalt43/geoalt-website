'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariantsMedium, headerVariants, cardVariantsSmooth, iconVariantsSmooth } from '@/lib/animations/variants'
import { colorClasses } from '@/constants/colors'

function FeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [isBelow1088, setIsBelow1088] = useState(false)
  const [isBelow680, setIsBelow680] = useState(false)

  useEffect(() => {
    const checkWidth = () => {
      setIsBelow1088(window.innerWidth < 1088)
      setIsBelow680(window.innerWidth < 680)
    }
    
    checkWidth()
    window.addEventListener('resize', checkWidth)
    
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <section ref={sectionRef} className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-16 sm:pb-20 md:pb-20 lg:pb-[4vh] xl:pb-[6vh] relative overflow-hidden bg-transparent-text bg-clip-text">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariantsMedium}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-8 sm:mb-12 md:mb-12 pb-[18px] sm:pb-6 md:pb-6 text-center"
        >
          <motion.h2 
            variants={headerVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal text-text-primary mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0"
          >
            Own your visibility on AI Search
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} px-4 sm:px-0 md:px-0 leading-tight`}
          >
            Geoalt offers unparalleled accuracy,<br className="leading-none" />
            <span className="block -mt-0.5">real-time insights, and a<br className="leading-none" /></span>
            <span className="block -mt-0.5">commitment to data security.</span>
          </motion.p>
        </motion.div>

          <motion.div
          variants={containerVariantsMedium}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`grid gap-3 sm:gap-5 md:gap-[1.625rem] lg:gap-8 pt-3 sm:pt-4 md:pt-4 ${isBelow680 ? 'grid-cols-1' : isBelow1088 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
        >
          {/* Accurate Data */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`bg-[var(--color-card-bg)] border border-border rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-[calc(50%-0.5rem)] max-w-none mx-auto' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 md:gap-4 mb-2.5 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 13l3-3 4 4 5-6" />
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-text-heading">Accurate Data</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Our advanced algorithms ensure precise tracking of your AI visibility.
              <br className="hidden sm:block" />
              Get reliable metrics that help you make data-driven decisions.
            </p>
          </motion.div>

          {/* Wrapper for Real-time Insights and Secure & Reliable - 2 columns below 1088px but above 680px */}
          <div className={isBelow680 ? 'contents' : isBelow1088 ? 'grid grid-cols-2 gap-4 col-span-1 w-full max-w-full mx-auto' : 'contents'}>
          {/* Real-time Insights */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`bg-[var(--color-card-bg)] border border-border rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-full' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 md:gap-4 mb-2.5 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-text-heading">Real-time Insights</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Stay ahead of the curve with up‑to‑the‑minute data on your performance.
              <br className="hidden sm:block" />
              Monitor changes as they happen and respond quickly to opportunities.
            </p>
          </motion.div>

          {/* Secure & Reliable */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`bg-[var(--color-card-bg)] border border-border rounded-lg p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] ${isBelow680 ? 'w-full' : isBelow1088 ? 'w-full' : ''}`}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 md:gap-4 mb-2.5 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" />
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-text-heading">Secure & Reliable</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              We prioritize the security and confidentiality of your data.
              <br className="hidden sm:block" />
              Your information is protected with enterprise-grade security measures.
            </p>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { FeaturesSection }

