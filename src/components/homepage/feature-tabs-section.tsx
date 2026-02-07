'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useTheme } from 'next-themes'
import { headingVariants } from '@/lib/animations/variants'

// Constants
const TABS = [
  {
    id: 'brand',
    title: 'Add your brand',
    description: `We use your brand name and website\nURL to identify your top competitors.`,
    imageLight: '/images/add-your-brand.png',
    imageDark: '/images/ShareOfVoice_.jpeg', 
    headingLight: 'text-[var(--color-ref-001)]',
    headingDark: 'text-text-muted',
  },
  {
    id: 'competitors',
    title: 'Add custom Competitors',
    description: `Finalize the competitors you want to track.\nEnsures accurate and relevant analysis.`,
    imageLight: '/images/add-competitor.png',
    imageDark: '/images/Competitor-.png',
    headingLight: 'text-[var(--color-ref-001)]',
    headingDark: 'text-white/80',
    darkDropShadow: true
  },
  {
    id: 'model-region',
    title: 'Select AI Model and Region',
    description: `Choose the AI models and region\nto generate prompts for insights.`,
    imageLight: '/images/choose-ai-model.png',
    imageDark: '/images/Region_Selector-1.png',
    headingLight: 'text-[var(--color-ref-001)]',
    headingDark: 'text-white/80',
    darkDropShadow: true
  },
  {
    id: 'prompts',
    title: 'Customize Your Prompts',
    description: `Prompts are the foundation of insights,\nCustomize prompts to shape your analysis.`,
    imageLight: '/prompt-studio-n.png',
    imageDark: '/images/Prompts_.jpg',
    headingLight: 'text-[var(--color-ref-001)]',
    headingDark: 'text-white/80',
  }
]

export function FeatureTabsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const stickyContentRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [segmentProgresses, setSegmentProgresses] = useState([0, 0, 0, 0])
  const [visibleCards, setVisibleCards] = useState<number[]>([0]) // Start with first card visible

  // Scroll tracking - using the tall scroll container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Update active tab and completed steps based on scroll ONLY
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate step based on scroll progress
    let step = 0
    if (latest >= 0.95) step = 3
    else if (latest >= 0.7) step = 3
    else if (latest >= 0.45) step = 2
    else if (latest >= 0.2) step = 1
    else step = 0
    
    setActiveTab(step)
    
    // Mark steps as completed
    const newCompleted: number[] = []
    if (latest >= 0.2) newCompleted.push(0)
    if (latest >= 0.45) newCompleted.push(1)
    if (latest >= 0.7) newCompleted.push(2)
    if (latest >= 0.95) newCompleted.push(3)
    setCompletedSteps(newCompleted)

    // Update visible cards - cards appear one by one
    const newVisibleCards: number[] = [0] // First card always visible
    if (latest >= 0.15) newVisibleCards.push(1)
    if (latest >= 0.4) newVisibleCards.push(2)
    if (latest >= 0.65) newVisibleCards.push(3)
    setVisibleCards(newVisibleCards)

    // Update segment progresses
    const seg1 = Math.min(1, Math.max(0, (latest - 0) / 0.2))
    const seg2 = Math.min(1, Math.max(0, (latest - 0.2) / 0.25))
    const seg3 = Math.min(1, Math.max(0, (latest - 0.45) / 0.25))
    const seg4 = Math.min(1, Math.max(0, (latest - 0.7) / 0.25))
    setSegmentProgresses([seg1, seg2, seg3, seg4])
  })

  const isLightTheme = mounted && resolvedTheme === 'light'

  return (
    // Outer scroll container - creates the "scroll space" for the sticky effect
    <div 
      ref={scrollContainerRef} 
      className="relative"
      style={{ height: '300vh' }} // Tall container for scroll space
    >
      {/* Sticky content that stays in viewport */}
      <div 
        ref={stickyContentRef}
        className="sticky top-0 h-screen flex items-center bg-page-background overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 relative z-10 py-8">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="text-left sm:text-center mb-10 sm:mb-14 md:mb-16"
          >
            <h2 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-1 ${isLightTheme ? 'text-[var(--color-ref-001)]' : 'text-text-heading'}`}>
              <span className="block sm:inline text-orange-500 dark:text-orange-400">We provide streamlined onboarding to</span>{' '}
              <span className="block sm:inline lg:block ">
unlock actionable insights</span>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-20 items-stretch h-auto lg:h-[520px]">
            {/* LEFT SIDE: Tabs with Progress Border */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between h-auto lg:h-[520px]">
                {TABS.map((tab, index) => {
                  const isActive = activeTab === index
                  const isExpanded = index <= activeTab // Visited/Active cards are "Expanded" with full style
                  const isCompleted = completedSteps.includes(index)
                  const progress = segmentProgresses[index]
                  
                  return (
                    <div
                      key={tab.id}
                      className={`relative text-left p-5 sm:p-4 rounded-r-lg rounded-l-none transition-all duration-500 border-y border-r border-l-0 ${
                        isLightTheme 
                          ? 'bg-[var(--color-card-bg)] border-[var(--color-card-border)]' 
                          : 'bg-[var(--color-ref-043)] border-[var(--color-card-border)]'
                      } overflow-hidden`}
                    >
                      {/* Left Progress Border - Fills based on scroll */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 z-10 ${isLightTheme ? 'bg-gray-200' : 'bg-white/5'}`} /> {/* Track */}
                      <div 
                        className="absolute left-0 top-0 w-1 bg-white z-20 transition-all duration-100 ease-linear origin-top"
                        style={{ height: `${Math.min(100, Math.max(0, progress * 100))}%` }}
                      />

                      <span className="relative z-10 flex flex-col gap-1 pl-2"> {/* Added padding-left to offset visually from border */}
                        <h3 className={`text-base sm:text-lg font-medium transition-colors duration-500 flex items-center gap-2 ${
                          isCompleted || (isActive && progress > 0.05) // Heading becomes active early in the segment
                            ? isLightTheme ? 'text-black' : 'text-white'
                            : isLightTheme ? 'text-gray-500' : 'text-zinc-500' // Muted initially
                        }`}>
                          {tab.title}
                          {tab.id === 'model-region' && (
                            <div className={`flex items-center -space-x-1.5 ml-1 transition-opacity duration-500 ${
                              isCompleted || (isActive && progress > 0.05) ? 'opacity-100' : 'opacity-40'
                            }`}>
                              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-10 shrink-0">
                                <Image
                                  src='/ai-icons/openai-light.svg'
                                  alt="OpenAI"
                                  width={12}
                                  height={12}
                                  unoptimized
                                  className="w-3.5 h-3.5 brightness-0"
                                />
                              </div>
                              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-20 shrink-0 shadow-[-2px_0_4px_rgba(0,0,0,0.15)]">
                                <Image
                                  src='/ai-icons/perplexity-light.svg'
                                  alt="Perplexity"
                                  width={12}
                                  height={12}
                                  unoptimized
                                  className="w-3.5 h-3.5 brightness-0"
                                />
                              </div>
                              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-30 shrink-0 shadow-[-2px_0_4px_rgba(0,0,0,0.15)]">
                                <Image
                                  src='/ai-icons/gemini-color.webp'
                                  alt="Gemini"
                                  width={12}
                                  height={12}
                                  unoptimized
                                  className="w-3.5 h-3.5"
                                />
                              </div>
                            </div>
                          )}
                        </h3>
                        
                        <div
                          className="overflow-hidden transition-all duration-500 ease-in-out max-h-24 mt-1.5"
                        >
                          {/* Split description by newline to animate lines separately */}
                          {tab.description.split('\n').map((line, i) => {
                             // Line 1 (index 0) aligns with mid-progress (~0.4)
                             // Line 2 (index 1) aligns with end-progress (~0.8)
                             const threshold = i === 0 ? 0.35 : 0.75
                             const isLineVisible = isCompleted || (isActive && progress > threshold)
                             
                             return (
                               <p 
                                key={i}
                                className={`text-sm leading-relaxed font-light transition-opacity duration-500 ${
                                  isLightTheme ? 'text-gray-600' : 'text-gray-400'
                                } ${
                                  isLineVisible ? 'opacity-100' : 'opacity-10'
                                }`}
                               >
                                 {line}
                               </p>
                             )
                          })}
                        </div>
                      </span>
                    </div>
                  )
                })}
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
                    <div className={`w-full max-w-[90%] lg:max-w-[96%] h-fit max-h-full rounded-lg overflow-hidden relative shadow-2xl ${
                      isLightTheme ? 'bg-white' : 'bg-[#121212]'
                    }`}>
                      {/* Image Content */}
                      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px]">
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
      </div>
    </div>
  )
}
