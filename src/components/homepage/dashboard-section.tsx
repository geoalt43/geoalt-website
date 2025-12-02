'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariants, cardVariants, imageVariants, headingVariants } from '@/lib/animations/variants'
import { CARD_BASE, BOX_SHADOW_3D, PERSPECTIVE_3D, TRANSFORM_STYLE_3D } from '@/lib/styles/constants'

const visibilitySlides = [
  { id: 1, image: '/images/ShareOfVoice_.jpeg' },
]

function AIVisibilityCarousel({ isInView }: { isInView: boolean }) {
  const slide = visibilitySlides[0] // Only show the ShareOfVoice slide

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`${CARD_BASE} p-2 sm:p-0 overflow-hidden relative min-h-[320px] sm:min-h-[330px] lg:min-h-[400px] max-w-[90%] sm:max-w-none mx-auto sm:mx-0`}
    >
      <div className="relative w-full h-full min-h-[320px] sm:min-h-[330px] lg:min-h-[400px] rounded-lg overflow-hidden">
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
          className="relative w-full h-full flex flex-col"
        >
          <motion.div 
            variants={headingVariants}
            className="pt-2 sm:pt-6 px-2 sm:px-6 mb-2 sm:mb-4 flex-shrink-0"
          >
            <h3 className={`text-base sm:text-xl font-light sm:font-medium text-white mb-1 sm:mb-2`}>
              Analyze AI visibility scores
            </h3>
            <p className={`text-xs sm:text-sm md:text-base text-gray-400 mb-2 sm:mb-4`}>
              Track how often your brand appears in AI-generated answers, monitor visibility trends.
            </p>
          </motion.div>

          <div className="flex-1 min-h-0" />

          <div className="w-full overflow-hidden flex items-end flex-shrink-0">
            <div className="w-full">
              <Image
                src={slide.image}
                alt="AI visibility interface"
                width={800}
                height={1900}
                className="w-full object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
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
    <section id="features" ref={sectionRef} className="pt-6 sm:pt-8 lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 lg:pb-[4vh] xl:pb-[6vh] bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="pt-[5%] mb-8 sm:mb-12 text-left sm:text-center"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal text-white mb-3 sm:mb-4 px-2 sm:px-0">
            {/* Mobile version */}
            <span className="block sm:hidden">
              <span className="pt-[5%] block text-center">Unlock AI-driven search insights</span>
              <span className="block text-center">
                that bring customers to you
              </span>
              <span className="block text-center pb-4 sm:pb-6 lg:pb-9">
                — GeoAlt
              </span>
            </span>
            {/* Desktop version */}
            <span className="hidden sm:block">
              <span className="pt-[5%]">Unlock AI-driven search insights that bring</span>
              <br />
              <span className="pb-4 sm:pb-6 lg:pb-9 block">
                customers to you — GeoAlt
              </span>
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
          <div className={`${CARD_BASE} p-2 sm:p-5 overflow-hidden relative min-h-[320px] sm:min-h-[330px] lg:min-h-[400px] max-w-[90%] sm:max-w-none mx-auto sm:mx-0 pb-16 sm:pb-22 lg:pb-0`}>
            <div className="mb-2 relative z-10">
              <h3 className={`text-base sm:text-xl font-light sm:font-medium text-white mb-1`}>Customize Your Prompts</h3>
              <p className={`text-xs sm:text-sm md:text-base text-gray-400 mb-1.5 pb-3 sm:pb-4`}>
                Prompts are the foundation of your AI search strategy 
              </p>
            </div>
            
            <div className={`absolute -bottom-[40px] sm:-bottom-[60px] md:-bottom-[70px] lg:-bottom-[90px] left-0 right-0 rounded-lg overflow-hidden ${PERSPECTIVE_3D} h-[100%] pointer-events-none`}>
              <div 
                className={`${TRANSFORM_STYLE_3D} transition-transform duration-300 ease-out ${BOX_SHADOW_3D} w-full h-full dashboard-image-transform`}
              >
                <Image
                  src="/images/Prompts_studio_.jpg"
                  alt="Prompt Studio interface"
                  width={900}
                  height={600}
                  className="w-full h-full object-cover rounded-lg object-[center_bottom]"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Container 2: Add Business Competitors */}
          <motion.div 
            variants={cardVariants}
            className={`${CARD_BASE} p-2 sm:p-5 overflow-hidden relative min-h-[320px] sm:min-h-[330px] lg:min-h-[400px] max-w-[90%] sm:max-w-none mx-auto sm:mx-0 pb-20 sm:pb-26 lg:pb-0`}
          >
            <motion.div 
              variants={headingVariants}
              className="mb-2 relative z-10"
            >
              <h3 className={`text-base sm:text-xl font-light sm:font-medium text-white mb-2`}>Add Business Competitors</h3>
              <p className={`text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4`}>
              <span className="whitespace-nowrap">Add competitors so GeoAlt can map landscape for growth</span>
              </p>
            </motion.div>
            
            <div className={`absolute bottom-0 sm:-bottom-[80px] md:-bottom-[100px] lg:-bottom-[140px] left-0 right-0 rounded-lg overflow-hidden ${PERSPECTIVE_3D} h-[128%] pointer-events-none`}>
              <div 
                className={`${TRANSFORM_STYLE_3D} transition-transform duration-300 ease-out ${BOX_SHADOW_3D} w-full h-full relative z-20 dashboard-image-transform`}
              >
                <Image
                  src="/images/Competitor_.png"
                  alt="Add competitors interface"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg object-[center_bottom]"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 50vw"
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
            className={`${CARD_BASE} p-2 sm:p-5 overflow-hidden relative min-h-[320px] sm:min-h-[330px] lg:min-h-[400px] max-w-[90%] sm:max-w-none mx-auto sm:mx-0 pb-20 sm:pb-26 lg:pb-0`}
          >
            <motion.div 
              variants={headingVariants}
              className="mb-2 relative z-10"
            >
              <h3 className={`text-base sm:text-xl font-light sm:font-medium text-white mb-2`}>Pick Model and Region</h3>
              <p className={`text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4`}>
              Pick AI model and region to generate insights that help business grow
              </p>
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              className={`absolute -bottom-[60px] sm:-bottom-[80px] md:-bottom-[100px] lg:-bottom-[140px] left-0 right-0 rounded-lg overflow-hidden ${PERSPECTIVE_3D} h-[100%] pointer-events-none`}
            >
              <motion.div
                initial={{ 
                  transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
                }}
                className={`${TRANSFORM_STYLE_3D} ${BOX_SHADOW_3D} w-full h-full dashboard-image-transform`}
              >
                <Image
                  src="/images/Region_Selector_.png"
                  alt="Region Selector interface"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg object-[center_bottom]"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 50vw"
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

