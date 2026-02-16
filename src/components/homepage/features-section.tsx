'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariantsMedium, headerVariants, cardVariantsSmooth, iconVariantsSmooth } from '@/lib/animations/variants'
import { colorClasses } from '@/constants/colors'

function FeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

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
        <motion.div
          variants={containerVariantsMedium}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-8 sm:mb-12 pb-4 sm:pb-6 text-center"
        >
          <motion.h2 
            variants={headerVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal mb-4 sm:mb-6 text-text-heading"
          >
            Own your visibility on AI Search
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-text-description max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Geoalt offers unparalleled accuracy, real-time insights, <br className="hidden lg:block" />
            and a commitment to data security.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariantsMedium}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-4 sm:gap-5 lg:gap-8 pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Accurate Data */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)]"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-4 relative z-10">
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
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-heading">Accurate Data</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2`}>
              Our advanced algorithms ensure precise tracking of your AI visibility.
              <br className="hidden sm:block" />
              Get reliable metrics that help you make data-driven decisions.
            </p>
          </motion.div>

          {/* Real-time Insights */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)]"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-4 relative z-10">
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
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-heading">Real-time Insights</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2`}>
              Stay ahead of the curve with up‑to‑the‑minute data on your performance.
              <br className="hidden sm:block" />
              Monitor changes as they happen and respond quickly to opportunities.
            </p>
          </motion.div>

          {/* Secure & Reliable */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden group hover:border-border-hover transition-colors duration-300 shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] md:col-span-2 lg:col-span-1"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-4 relative z-10">
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
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-heading">Secure & Reliable</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textDescription} relative z-10 pt-1.5 sm:pt-2`}>
              We prioritize the security and confidentiality of your data.
              <br className="hidden sm:block" />
              Your information is protected with enterprise-grade security measures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { FeaturesSection }
