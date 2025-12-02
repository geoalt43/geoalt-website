'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariantsMedium, headerVariants, cardVariantsSmooth, iconVariantsSmooth } from '@/lib/animations/variants'
import { colorClasses } from '@/constants/colors'

function FeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-16 sm:pb-20 md:pb-20 lg:pb-[4vh] xl:pb-[6vh] relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
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
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal text-white mb-3 sm:mb-4 md:mb-4 px-2 sm:px-0 md:px-0"
          >
            Own your visibility on AI Search
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`text-base sm:text-lg md:text-lg ${colorClasses.textSecondary} px-4 sm:px-0 md:px-0`}
          >
            GEOAlt offers unparalleled accuracy, real-time insights,<br />
            and a commitment to data security.
          </motion.p>
        </motion.div>

          <motion.div
          variants={containerVariantsMedium}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-[1.625rem] lg:gap-8 pt-3 sm:pt-4 md:pt-4"
        >
          {/* Accurate Data */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-black/60 border border-white/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden group hover:border-white/25 transition-colors duration-300 max-w-[90%] sm:max-w-none mx-auto sm:mx-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 md:gap-4 mb-2.5 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 13l3-3 4 4 5-6" />
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-white">Accurate Data</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textSecondary} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Our advanced algorithms ensure precise tracking of your AI visibility.
              <br className="hidden sm:block" />
              Get reliable metrics that help you make data-driven decisions.
            </p>
          </motion.div>

          {/* Real-time Insights */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-black/60 border border-white/10 rounded-lg p-4 sm:p-6 lg:p-10 relative overflow-hidden group hover:border-white/25 transition-colors duration-300 max-w-[90%] sm:max-w-none mx-auto sm:mx-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 md:gap-4 mb-2.5 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-white">Real-time Insights</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textSecondary} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
              Stay ahead of the curve with up‑to‑the‑minute data on your performance.
              <br className="hidden sm:block" />
              Monitor changes as they happen and respond quickly to opportunities.
            </p>
          </motion.div>

          {/* Secure & Reliable */}
          <motion.div
            variants={cardVariantsSmooth}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-black/60 border border-white/10 rounded-lg p-4 sm:p-6 lg:p-10 relative overflow-hidden group hover:border-white/25 transition-colors duration-300 max-w-[90%] sm:max-w-none mx-auto sm:mx-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-2.5 sm:gap-4 md:gap-4 mb-2.5 sm:mb-4 md:mb-4 relative z-10">
              <motion.div
                variants={iconVariantsSmooth}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" />
                </svg>
              </motion.div>
              <h3 className="text-base sm:text-xl md:text-xl font-light sm:font-medium md:font-medium text-white">Secure & Reliable</h3>
            </div>
            <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textSecondary} relative z-10 pt-1.5 sm:pt-2 md:pt-2`}>
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

