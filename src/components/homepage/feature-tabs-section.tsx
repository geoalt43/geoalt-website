'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import { headingVariants } from '@/lib/animations/variants'

// Constants
const TABS = [
  {
    id: 'brand',
    title: 'Add your brand',
    description: 'Track brand presence in AI answers and monitor visibility',
    imageLight: '/images/add-your-brand.png',
    imageDark: '/images/ShareOfVoice_.jpeg', 
    headingLight: 'text-[var(--color-ref-001)]',
    headingDark: 'text-text-muted',
  },
  {
    id: 'competitors',
    title: 'Add Business Competitors',
    description: 'Add competitors so Geoalt can map landscape for growth',
    imageLight: '/images/add-competitor.png',
    imageDark: '/images/Competitor-.png',
    headingLight: 'text-[var(--color-ref-001)]',
    headingDark: 'text-white/80',
    darkDropShadow: true
  },
  {
    id: 'model-region',
    title: 'Pick Model and Region',
    description: 'Pick model and region to get AI insights for growth...',
    imageLight: '/images/choose-ai-model.png',
    imageDark: '/images/Region_Selector-1.png',
    headingLight: 'text-[var(--color-ref-001)]',
    headingDark: 'text-white/80',
    darkDropShadow: true
  },
  {
    id: 'prompts',
    title: 'Customize Your Prompts',
    description: 'Prompts are the foundation of your AI search strategy',
    imageLight: '/prompt-studio-n.png',
    imageDark: '/images/Prompts_.jpg',
    headingLight: 'text-[var(--color-ref-001)]',
    headingDark: 'text-white/80',
  }
]

export function FeatureTabsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  // Auto-rotate tabs (optional, can remove if manual-only is preferred)
  // useEffect(() => {
  //   if (!isInView) return
  //   const interval = setInterval(() => {
  //     setActiveTab((prev) => (prev + 1) % TABS.length)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [isInView])

  return (
    <section ref={sectionRef} className="pt-8 sm:pt-10 md:pt-12 lg:pt-[6vh] pb-12 sm:pb-16 md:pb-20 lg:pb-[6vh] bg-page-background overflow-hidden relative">
       {/* Background Grid Effect - Optional, reuse if needed */}
       {/* <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 relative z-10">
        <motion.div
           variants={headingVariants}
           initial="hidden"
           animate={isInView ? 'visible' : 'hidden'}
           className="text-left sm:text-center mb-10 sm:mb-14 md:mb-16"
        >
           <h2 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-1 ${isLightTheme ? 'text-[var(--color-ref-001)]' : 'text-text-heading'}`}>
            <span className="block sm:inline">Unlock AI-powered search insights</span>{' '}
            <span className="block sm:inline lg:block">that bring the right customers to Geoalt</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-20 items-stretch h-auto lg:h-[520px]">
          {/* LEFT SIDE: Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-6">
            <AnimatePresence mode="wait">
              {TABS.map((tab, index) => {
                const isActive = activeTab === index;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative text-left p-6 sm:p-5 rounded-2xl transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                      isActive ? 'z-10' : 'z-0 hover:bg-white/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBackground"
                        className={`absolute inset-0 rounded-2xl shadow-sm ${
                          isLightTheme 
                            ? 'bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-gray-100' 
                            : 'bg-[#27272a] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] border border-white/5'
                        }`}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                      />
                    )}
                    
                    <span className="relative z-10 flex flex-col gap-1">
                      <h3 className={`text-lg sm:text-xl font-medium transition-colors duration-200 ${
                        isActive 
                          ? isLightTheme ? 'text-black' : 'text-white'
                          : isLightTheme ? 'text-gray-500 group-hover:text-gray-800' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}>
                        {tab.title}
                      </h3>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 8 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                         <p className={`text-[15px] leading-relaxed font-light ${
                           isLightTheme ? 'text-gray-600' : 'text-gray-400'
                         }`}>
                          {tab.description}
                         </p>
                      </motion.div>
                    </span>
                  </button>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Dynamic Display */}
          <div className="w-full lg:w-2/3 relative h-[350px] sm:h-[400px] lg:h-auto rounded-2xl overflow-hidden border border-[var(--color-card-border)] bg-[#080808]">
            {/* Background "Painting" Image */}
            <div className="absolute inset-0 z-0">
               <Image
                 src="/images/dash-BGimg.jpeg"
                 alt="Background"
                 fill
                 className="object-cover opacity-80"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
            </div>

            {/* Dynamic Content Area */}
            <div className="absolute inset-0 z-10 p-6 sm:p-8 md:p-10 flex items-center justify-center">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 20, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -20, scale: 0.95 }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   className="relative w-full h-full flex items-center justify-center"
                 >
                    {/* Content Container matching the "Dashboard Card" look inside the painting */}
                    <div className={`w-full max-w-[90%] lg:max-w-none h-fit max-h-full rounded-lg overflow-hidden relative shadow-2xl ${
                      isLightTheme ? 'bg-white' : 'bg-[#121212]' // Inner card bg
                    }`}>
                      {/* Image Content */}
                       <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[380px]">
                         <Image
                           src={isLightTheme ? TABS[activeTab].imageLight : TABS[activeTab].imageDark}
                           alt={TABS[activeTab].title}
                           fill
                           className={`object-contain object-top ${
                             TABS[activeTab].darkDropShadow && !isLightTheme 
                               ? 'drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]' 
                               : ''
                           }`}
                         />
                       </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
