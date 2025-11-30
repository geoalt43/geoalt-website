'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const visibilitySlides = [
  { id: 0, image: '/images/visibility_score_.jpeg' },
  { id: 1, image: '/images/ShareOfVoice_.jpeg' },
]

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
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visibilitySlides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="lg:col-span-6 bg-black/60 border border-[#111111] rounded-2xl p-0 h-full w-[113.5%] -ml-20 overflow-visible"
      whileHover={{ 
        y: -2,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative w-full h-[500px] rounded-2xl overflow-visible">
        {visibilitySlides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <motion.div
              key={slide.id}
              initial="hidden"
              animate={isActive && isInView ? 'visible' : 'hidden'}
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
                className="pt-6 px-6 mb-4"
              >
                <h3 className="text-xl font-medium text-white mb-2">
                  Analyze AI visibility scores to understand market performance
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Track how often your brand appears in AI-generated answers, monitor visibility trends,
                  <br />
                  and compare rankings to uncover opportunities to strengthen your market position.
                </p>
              </motion.div>

              <div className="flex-1" />

              <motion.div 
                variants={imageVariants}
                className="w-full overflow-visible flex items-end -pb-34 -mb-25"
                style={{
                  perspective: '1500px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  initial={{ 
                    transform: 'rotateX(-7deg) rotateY(-11deg) translateZ(35px)',
                  }}
                  whileHover={{
                    transform: 'rotateX(-5deg) rotateY(-9deg) translateZ(50px)',
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    width: '100%',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src={slide.image}
                    alt="AI visibility interface"
                    width={800}
                    height={1900}
                    className="w-full object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export function DashboardSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-4xl font-normal text-white mb-4 pt-9">
          Unlock AI-driven search insights that bring <br  /> 
          <span className="pt-3 pb-9 block">customers to you — GeoAlt</span>
          </h1>
        </motion.div>

        {/* First Row - 2 containers */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-6"
        >
          {/* Container 1: Set up Prompts (reduced width - 6 columns) */}
          <div className="lg:col-span-6 bg-black/60 border border-[#111111] rounded-2xl p-6 overflow-visible">
            <div className="mb-2">
              <h3 className="text-xl font-medium text-white mb-1">Customize Your Prompts</h3>
              <p className="text-sm text-gray-400 mb-1.5 pb-4">
                Prompts are the foundation of your AI search strategy. 
              </p>
            </div>
            
            <div 
              className="w-full rounded-lg overflow-visible"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                style={{
                  transform: 'rotateX(20deg) rotateY(0deg) translateZ(40px)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Image
                  src="/images/Prompts_studio_.jpg"
                  alt="Prompt Studio interface"
                  width={900}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Container 2: Use Data to Pick Winners (wider - 6 columns) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -3,
              transition: { duration: 0.3 }
            }}
            className="lg:col-span-6 bg-black/60 border border-[#111111] rounded-2xl p-6 overflow-hidden relative min-h-[400px]"
          >
            <motion.div 
              variants={headingVariants}
              className="mb-2 relative z-10"
            >
              <h3 className="text-xl font-medium text-white mb-2">Add Business Competitors</h3>
              <p className="text-sm text-gray-400 mb-4">
              Add your competitors so GeoAlt can map the landscape and drive growth insights.
              </p>
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              className="absolute -bottom-35 left-0 right-0 rounded-lg overflow-hidden"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
                height: '85%',
              }}
            >
              <motion.div
                initial={{ 
                  transform: 'rotateX(20deg) rotateY(0deg) translateZ(100px)',
                }}
                whileHover={{
                  transform: 'rotateX(18deg) rotateY(2deg) translateZ(115px)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image
                  src="/images/Competitor_.png"
                  alt="Add competitors interface"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    objectPosition: 'center bottom',
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Row - Container 3 and 4 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-6"
        >
          {/* Container 3: Add Brands (smaller - 6 columns) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              y: -3,
              transition: { duration: 0.3 }
            }}
            className="lg:col-span-6 bg-black/60 border border-[#111111] rounded-2xl p-6 h-full w-[87%] overflow-visible"
          >
            <motion.div 
              variants={headingVariants}
              className="mb-4"
            >
              <h3 className="text-xl font-medium text-white mb-2">Pick Model and Region</h3>
              <p className="text-sm text-gray-400 mb-4">
              Pick AI model and region to generate insights that help business grow
              </p>
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              className="w-full rounded-lg overflow-visible"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                initial={{ 
                  transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
                }}
                whileHover={{
                  transform: 'rotateX(-2deg) rotateY(-2deg) translateZ(15px)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Image
                  src="/images/Region_Selector_.png"
                  alt="Region Selector interface"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Container 4: AI visibility carousel (2 slides) */}
          <AIVisibilityCarousel isInView={isInView} />
        </motion.div>

        {/* Third row (previously containers 5 and 6) has been removed */}
      </div>
    </section>
  )
}

