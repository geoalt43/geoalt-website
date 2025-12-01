'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const visibilitySlides = [
  { id: 1, image: '/images/ShareOfVoice_.jpeg' },
]

// Reusable Tailwind class constants
const BOX_SHADOW_3D = '[box-shadow:0_20px_60px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.3)]'
const PERSPECTIVE_3D = '[perspective:1500px] [transform-style:preserve-3d]'
const TRANSFORM_STYLE_3D = '[transform-style:preserve-3d]'
const CARD_BASE = 'lg:col-span-6 bg-black/60 border border-white/10 rounded-lg hover:border-white/25 transition-colors duration-300'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
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
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
}

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    rotateX: -15,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
      mass: 1,
      delay: 0.2,
    },
  },
}

const headingVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.5,
    },
  },
}

function AIVisibilityCarousel({ isInView }: { isInView: boolean }) {
  const slide = visibilitySlides[0] // Only show the ShareOfVoice slide

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`${CARD_BASE} p-0 min-h-[260px] sm:min-h-[330px] lg:min-h-[400px] overflow-hidden`}
    >
          <div className="relative w-full h-[260px] sm:h-[330px] lg:h-[400px] rounded-lg overflow-hidden">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { duration: 0.8, ease: 'easeInOut' }
            },
          }}
          className="absolute inset-0 flex h-full flex-col"
        >
          <motion.div 
            variants={headingVariants}
            className="pt-4 sm:pt-6 px-4 sm:px-6 mb-3 sm:mb-4"
          >
            <h3 className={`text-lg sm:text-xl font-medium text-white mb-2`}>
              Analyze AI visibility scores
            </h3>
            <p className={`text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4`}>
              Track how often your brand appears in AI-generated answers, monitor visibility trends.
            </p>
          </motion.div>

          <div className="flex-1" />

          <div className="w-full overflow-hidden flex items-end">
            <div className="w-full">
              <Image
                src={slide.image}
                alt="AI visibility interface"
                width={800}
                height={1900}
                className="w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function DashboardSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="features" ref={sectionRef} className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="pt-[5%] mb-8 sm:mb-12 text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-3 sm:mb-4 px-2 sm:px-0">
            <span className="pt-[5%]">Unlock AI-driven search insights that bring</span>
            <br />
            <span className="pb-4 sm:pb-6 lg:pb-9 block">
              customers to you — GeoAlt
            </span>
          </h2>
        </motion.div>

        {/* First Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-2 mb-5 sm:mb-8 lg:mb-6"
        >
          {/* Container 1: Customize Your Prompts */}
          <div className={`${CARD_BASE} p-3 sm:p-5 overflow-hidden relative min-h-[260px] sm:min-h-[330px] lg:min-h-[400px] pb-16 sm:pb-22 lg:pb-0`}>
            <div className="mb-2 relative z-10">
              <h3 className={`text-lg sm:text-xl font-medium text-white mb-1`}>Customize Your Prompts</h3>
              <p className={`text-xs sm:text-sm md:text-base text-gray-400 mb-1.5 pb-3 sm:pb-4`}>
                Prompts are the foundation of your AI search strategy. 
              </p>
            </div>
            
            <div className={`absolute -bottom-[40px] sm:-bottom-[60px] lg:-bottom-[90px] left-0 right-0 rounded-lg overflow-hidden ${PERSPECTIVE_3D} h-[100%] pointer-events-none`}>
              <div 
                className={`${TRANSFORM_STYLE_3D} transition-transform duration-300 ease-out ${BOX_SHADOW_3D} w-full h-full [transform:rotateX(15deg)_rotateY(0deg)_translateZ(20px)_translateY(40px)] sm:[transform:rotateX(18deg)_rotateY(0deg)_translateZ(30px)_translateY(60px)] lg:[transform:rotateX(20deg)_rotateY(0deg)_translateZ(40px)_translateY(90px)]`}
              >
                <Image
                  src="/images/Prompts_studio_.jpg"
                  alt="Prompt Studio interface"
                  width={900}
                  height={600}
                  className="w-full h-full object-cover rounded-lg object-[center_bottom]"
                />
              </div>
            </div>
          </div>

          {/* Container 2: Add Business Competitors */}
          <motion.div 
            variants={cardVariants}
            className={`${CARD_BASE} p-3 sm:p-5 overflow-hidden relative min-h-[260px] sm:min-h-[330px] lg:min-h-[400px] pb-20 sm:pb-26 lg:pb-0`}
          >
            <motion.div 
              variants={headingVariants}
              className="mb-2 relative z-10"
            >
              <h3 className={`text-lg sm:text-xl font-medium text-white mb-2`}>Add Business Competitors</h3>
              <p className={`text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4`}>
              Add your competitors so GeoAlt can map the landscape and drive growth insights.
              </p>
            </motion.div>
            
            <div className={`absolute bottom-0 sm:-bottom-[80px] lg:-bottom-[140px] left-0 right-0 rounded-lg overflow-hidden ${PERSPECTIVE_3D} h-[128%] pointer-events-none`}>
              <div 
                className={`${TRANSFORM_STYLE_3D} transition-transform duration-300 ease-out ${BOX_SHADOW_3D} w-full h-full relative z-20 [transform:rotateX(15deg)_rotateY(0deg)_translateZ(20px)_translateY(40px)] sm:[transform:rotateX(18deg)_rotateY(0deg)_translateZ(30px)_translateY(60px)] lg:[transform:rotateX(20deg)_rotateY(0deg)_translateZ(40px)_translateY(90px)]`}
              >
                <Image
                  src="/images/Competitor_.png"
                  alt="Add competitors interface"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg object-[center_bottom]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-2 mb-5 sm:mb-8 lg:mb-6"
        >
          {/* Container 3: Pick Model and Region */}
          <motion.div 
            variants={cardVariants}
            className={`${CARD_BASE} p-3 sm:p-5 overflow-hidden relative min-h-[260px] sm:min-h-[330px] lg:min-h-[400px] pb-20 sm:pb-26 lg:pb-0`}
          >
            <motion.div 
              variants={headingVariants}
              className="mb-2 relative z-10"
            >
              <h3 className={`text-lg sm:text-xl font-medium text-white mb-2`}>Pick Model and Region</h3>
              <p className={`text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4`}>
              Pick AI model and region to generate insights that help business grow
              </p>
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              className={`absolute -bottom-[60px] sm:-bottom-[80px] lg:-bottom-[140px] left-0 right-0 rounded-lg overflow-hidden ${PERSPECTIVE_3D} h-[100%] pointer-events-none`}
            >
              <motion.div
                initial={{ 
                  transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
                }}
                className={`${TRANSFORM_STYLE_3D} ${BOX_SHADOW_3D} w-full h-full`}
              >
                <Image
                  src="/images/Region_Selector_.png"
                  alt="Region Selector interface"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg object-[center_bottom]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Container 4: AI visibility carousel */}
          <AIVisibilityCarousel isInView={isInView} />
        </motion.div>

      </div>
    </section>
  )
}

