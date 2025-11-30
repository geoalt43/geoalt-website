'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
    },
  }

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -10,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
    },
  }

  return (
    <section ref={sectionRef} className="pt-40 pb-24 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12 pb-8 text-center"
        >
          <motion.h2 
            variants={headerVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl font-normal text-white mb-4 tracking-tight"
          >
            Own your visibility on AI Search
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-lg text-[#9b9b9b]"
          >
            GEOAlt offers unparalleled accuracy, real-time insights, and a commitment to data security.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4"
        >
          {/* Accurate Data */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12 relative overflow-hidden group"
            whileHover={{ 
              y: -3,
              boxShadow: '0 12px 25px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.04)',
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent rounded-xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 13l3-3 4 4 5-6" />
                </svg>
              </motion.div>
              <h3 className="text-[1.3rem] font-semibold text-white">Accurate Data</h3>
            </div>
            <p className="text-base text-[#9b9b9b] relative z-10 pt-2">
              Our advanced algorithms ensure precise tracking of your AI visibility.
              <br />
              Get reliable metrics that help you make data-driven decisions.
            </p>
          </motion.div>

          {/* Real-time Insights */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12 relative overflow-hidden group"
            whileHover={{ 
              y: -3,
              boxShadow: '0 12px 25px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.04)',
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent rounded-xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </motion.div>
              <h3 className="text-[1.3rem] font-semibold text-white">Real-time Insights</h3>
            </div>
            <p className="text-base text-[#9b9b9b] relative z-10 pt-2">
              Stay ahead of the curve with up‑to‑the‑minute data on your performance.
              <br />
              Monitor changes as they happen and respond quickly to opportunities.
            </p>
          </motion.div>

          {/* Secure & Reliable */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12 relative overflow-hidden group"
            whileHover={{ 
              y: -3,
              boxShadow: '0 12px 25px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.04)',
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent rounded-xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" />
                </svg>
              </motion.div>
              <h3 className="text-[1.3rem] font-semibold text-white">Secure & Reliable</h3>
            </div>
            <p className="text-base text-[#9b9b9b] relative z-10 pt-2">
              We prioritize the security and confidentiality of your data.
              <br />
              Your information is protected with enterprise-grade security measures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { FeaturesSection }

