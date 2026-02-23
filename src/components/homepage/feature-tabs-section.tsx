'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

// import { headingVariants } from '@/lib/animations/variants'
import { DemoCanvas } from './demo/demo-canvas'

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


  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [segmentProgresses, setSegmentProgresses] = useState([0, 0, 0, 0])
  const [isMobile, setIsMobile] = useState(false)
  const [isNarrow, setIsNarrow] = useState(false)


  // Scroll tracking - using native scroll events instead of framer-motion
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return
      
      const container = scrollContainerRef.current
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollHeight = container.offsetHeight
      const scrollDistance = scrollHeight - windowHeight
      
      // Calculate progress (0 to 1)
      const scrollTop = -rect.top
      const progress = Math.max(0, Math.min(1, scrollTop / scrollDistance))
      
      // Update active tab based on scroll progress
      let step = 0
      if (progress >= 0.75) step = 3
      else if (progress >= 0.50) step = 2
      else if (progress >= 0.25) step = 1
      else step = 0

      setActiveTab(step)

      // Mark steps as completed
      const newCompleted: number[] = []
      if (progress >= 0.25) newCompleted.push(0)
      if (progress >= 0.50) newCompleted.push(1)
      if (progress >= 0.75) newCompleted.push(2)
      if (progress >= 0.90) newCompleted.push(3)
      setCompletedSteps(newCompleted)

      // Update segment progresses
      const seg1 = Math.min(1, Math.max(0, (progress - 0) / 0.25))
      const seg2 = Math.min(1, Math.max(0, (progress - 0.25) / 0.25))
      const seg3 = Math.min(1, Math.max(0, (progress - 0.50) / 0.25))
      const seg4 = Math.min(1, Math.max(0, (progress - 0.75) / 0.15))
      setSegmentProgresses([seg1, seg2, seg3, seg4])
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkBreakpoints = () => {
      setIsMobile(window.innerWidth < 1024)
      setIsNarrow(window.innerWidth < 1080)
    }
    checkBreakpoints()
    window.addEventListener('resize', checkBreakpoints)
    return () => window.removeEventListener('resize', checkBreakpoints)
  }, [])


  // Auto-advance mechanism
  const handleStepComplete = useCallback(() => {
    if (activeTab >= 3) return // No next step (or handle loop back to 0?)

    const container = scrollContainerRef.current
    if (!container) return

    // Target progress values based on scroll logic
    // 0 -> 1: > 0.25. Aim for 0.30
    // 1 -> 2: > 0.50. Aim for 0.55
    // 2 -> 3: > 0.75. Aim for 0.80
    let targetProgress = 0
    if (activeTab === 0) targetProgress = 0.30
    else if (activeTab === 1) targetProgress = 0.55
    else if (activeTab === 2) targetProgress = 0.80
    else return

    const scrollHeight = container.offsetHeight
    const windowHeight = window.innerHeight
    const scrollDistance = scrollHeight - windowHeight

    // Calculate absolute scroll position
    // We use getBoundingClientRect().top + window.scrollY for absolute top
    const containerTop = container.getBoundingClientRect().top + window.scrollY
    const targetScrollY = containerTop + (scrollDistance * targetProgress)

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    })
  }, [activeTab])

  // Navigation to specific step (for clicking on visited cards)
  const navigateToStep = useCallback((stepIndex: number) => {
    const container = scrollContainerRef.current
    if (!container) return

    // Calculate target progress for the step
    // Use midpoint of each segment for better UX
    const targetProgress = stepIndex === 0 ? 0.125 : 
                          stepIndex === 1 ? 0.375 : 
                          stepIndex === 2 ? 0.625 : 
                          stepIndex === 3 ? 0.875 : 0

    const scrollHeight = container.offsetHeight
    const windowHeight = window.innerHeight
    const scrollDistance = scrollHeight - windowHeight
    const containerTop = container.getBoundingClientRect().top + window.scrollY
    const targetScrollY = containerTop + (scrollDistance * targetProgress)

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    })
  }, [])

  // Scroll container height: smaller on mobile since the layout is stacked
  const scrollHeight = isMobile ? '180vh' : '250vh'

  return (
    // Outer scroll container - creates the "scroll space" for the sticky effect
    <div
      id="features"
      ref={scrollContainerRef}
      className="relative"
      style={{ height: scrollHeight }}
    >
      {/* Sticky content that stays in viewport */}
      <div
        ref={stickyContentRef}
        className="sticky top-0 min-h-screen lg:h-screen flex items-start lg:items-center bg-page-background overflow-hidden py-16 sm:py-12 lg:py-0"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 relative z-10">
          <div
            className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14"
          >
            <h2 className={`text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal mb-2 sm:mb-4 md:mb-6 px-1 text-text-heading`}>
              <span className="block sm:inline text-orange-500 dark:text-orange-400">We provide streamlined onboarding to</span>{' '}
              <span className="block sm:inline lg:block ">
                unlock actionable insights</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-12 xl:gap-20 items-stretch h-auto lg:h-[520px]">
            {/* LEFT SIDE: Tabs with Progress Border */}
            {/* Desktop (>=1080px): Show all 4 cards */}
            {!isNarrow && (
              <div className="w-full lg:w-1/3 flex flex-col gap-0 justify-between h-auto lg:h-[520px]">
                {TABS.map((tab, index) => {
                  const isActive = activeTab === index
                  const isCompleted = completedSteps.includes(index)
                  const progress = segmentProgresses[index]

                  return (
                    <div
                      key={tab.id}
                      className={`relative text-left p-3 sm:p-4 rounded-r-lg rounded-l-none transition-all duration-500 border-y border-r border-l-0 bg-[var(--color-card-bg)] dark:bg-[var(--color-ref-043)] border-[var(--color-card-border)] overflow-hidden`}
                    >
                      {/* Left Progress Border - Fills based on scroll */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 z-10 bg-gray-200 dark:bg-white/5" /> {/* Track */}
                      <div
                        className="absolute left-0 top-0 w-1 z-20 transition-all duration-100 ease-linear origin-top bg-green-600"
                        style={{ height: `${Math.min(100, Math.max(0, progress * 100))}%` }}
                      />

                      <span className="relative z-10 flex flex-col gap-0.5 sm:gap-1 pl-2">
                        <h3 className={`text-sm sm:text-base lg:text-lg font-medium transition-colors duration-500 flex items-center gap-2 ${isCompleted || (isActive && progress > 0.05)
                            ? 'text-black dark:text-white'
                            : 'text-gray-500 dark:text-zinc-500'
                          }`}>
                          {tab.title}
                          {tab.id === 'model-region' && (
                            <div className={`flex items-center -space-x-1.5 ml-1 transition-opacity duration-500 ${isCompleted || (isActive && progress > 0.05) ? 'opacity-100' : 'opacity-40'
                              }`}>
                              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-10 shrink-0">
                                <Image
                                  src='/ai-icons/openai-light.svg'
                                  alt="OpenAI"
                                  width={12}
                                  height={12}
                                  unoptimized
                                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 brightness-0"
                                />
                              </div>
                              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-20 shrink-0 shadow-[-2px_0_4px_rgba(0,0,0,0.15)]">
                                <Image
                                  src='/ai-icons/perplexity-light.svg'
                                  alt="Perplexity"
                                  width={12}
                                  height={12}
                                  unoptimized
                                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 brightness-0"
                                />
                              </div>
                              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-30 shrink-0 shadow-[-2px_0_4px_rgba(0,0,0,0.15)]">
                                <Image
                                  src='/ai-icons/gemini-color.webp'
                                  alt="Gemini"
                                  width={12}
                                  height={12}
                                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
                                />
                              </div>
                            </div>
                          )}
                        </h3>

                        <div
                          className="overflow-hidden transition-all duration-500 ease-in-out max-h-20 sm:max-h-24 mt-0.5 sm:mt-1.5"
                        >
                          {/* Split description by newline to animate lines separately */}
                          {tab.description.split('\n').map((line, i) => {
                            const threshold = i === 0 ? 0.35 : 0.75
                            const isLineVisible = isCompleted || (isActive && progress > threshold)

                            return (
                              <p
                                key={i}
                                className={`text-xs sm:text-sm leading-relaxed font-light transition-opacity duration-500 text-gray-600 dark:text-gray-400 ${isLineVisible ? 'opacity-100' : 'opacity-10'
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
            )}

            {/* Mobile/Tablet (<1080px): Stacking cards with visited history */}
            {isNarrow && (
              <div className="w-full flex flex-col gap-2 max-h-[320px] overflow-y-auto">
                {/* Visited/Completed Cards - Compact with checkmark */}
                {completedSteps.map((index) => (
                  <div
                    key={`visited-${index}`}
                    onClick={() => navigateToStep(index)}
                    className="relative p-2 sm:p-2.5 rounded-r-lg rounded-l-none border-y border-r border-l-0 bg-[var(--color-card-bg)] dark:bg-[var(--color-ref-043)] border-[var(--color-card-border)] cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-150 overflow-hidden group"
                  >
                    {/* Left border indicator - completed */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 z-10 bg-green-600" />
                    
                    <div className="flex items-center justify-between pl-2">
                      <h3 className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-150">
                        {TABS[index].title}
                      </h3>
                      
                      <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 shrink-0">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-700 dark:text-green-400" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Active Card - Full content with progress (only if not completed) */}
                {!completedSteps.includes(activeTab) && (
                  <div
                    key={activeTab}
                    className="relative text-left p-3 sm:p-4 rounded-r-lg rounded-l-none border-y border-r border-l-0 bg-[var(--color-card-bg)] dark:bg-[var(--color-ref-043)] border-[var(--color-card-border)] overflow-hidden transition-all duration-150"
                  >
                    {/* Left Progress Border */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 z-10 bg-gray-200 dark:bg-white/5" />
                    <div
                      className="absolute left-0 top-0 w-1 z-20 bg-green-600 transition-all duration-75"
                      style={{ height: `${Math.min(100, Math.max(0, segmentProgresses[activeTab] * 100))}%` }}
                    />

                    <span className="relative z-10 flex flex-col gap-0.5 sm:gap-1 pl-2">
                      <h3 className="text-sm sm:text-base font-medium text-black dark:text-white flex items-center gap-2">
                        {TABS[activeTab].title}
                        {TABS[activeTab].id === 'model-region' && (
                          <div className="flex items-center -space-x-1.5 ml-1 opacity-100">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-10 shrink-0">
                              <Image
                                src='/ai-icons/openai-light.svg'
                                alt="OpenAI"
                                width={12}
                                height={12}
                                unoptimized
                                className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 brightness-0"
                              />
                            </div>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-20 shrink-0 shadow-[-2px_0_4px_rgba(0,0,0,0.15)]">
                              <Image
                                src='/ai-icons/perplexity-light.svg'
                                alt="Perplexity"
                                width={12}
                                height={12}
                                unoptimized
                                className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 brightness-0"
                              />
                            </div>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-30 shrink-0 shadow-[-2px_0_4px_rgba(0,0,0,0.15)]">
                              <Image
                                src='/ai-icons/gemini-color.webp'
                                alt="Gemini"
                                width={12}
                                height={12}
                                className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
                              />
                            </div>
                          </div>
                        )}
                      </h3>

                      <div className="overflow-hidden max-h-20 sm:max-h-24 mt-0.5 sm:mt-1.5">
                        {TABS[activeTab].description.split('\n').map((line, i) => {
                          const threshold = i === 0 ? 0.35 : 0.75
                          const isLineVisible = completedSteps.includes(activeTab) || segmentProgresses[activeTab] > threshold

                          return (
                            <p
                              key={i}
                              className={`text-xs sm:text-sm leading-relaxed font-light transition-opacity duration-150 text-gray-600 dark:text-gray-400 ${isLineVisible ? 'opacity-100' : 'opacity-20'}`}
                            >
                              {line}
                            </p>
                          )
                        })}
                      </div>
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* RIGHT SIDE: Dynamic Display */}
            <div className="w-full lg:w-2/3 relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-auto rounded-2xl overflow-hidden border border-[var(--color-card-border)] bg-[#080808]">
              {/* Background "Painting" Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/dash-BGimg.jpeg"
                  alt="Background"
                  fill
                  className="object-cover opacity-80 rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
              </div>

              {/* Interactive Demo Canvas Overlay */}
              <DemoCanvas
                activeStep={activeTab}
                tabData={TABS[activeTab]}
                onStepComplete={handleStepComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
