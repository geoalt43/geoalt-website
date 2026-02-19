'use client'

import { useState, useRef, useEffect } from 'react'

// import { useTheme } from 'next-themes'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { InsightCard } from './ai-search-metrics/insight-card'
import { AIResponseCard } from './ai-search-metrics/ai-response-card'
import { VisibilityIcon, PositionIcon, SentimentIcon } from './ai-search-metrics/icons'
import { aiResponseData } from './ai-search-metrics/data'
import {
  containerVariants,
  headerVariants,
  subtitleVariants,
} from './ai-search-metrics/variants'
import type { InsightType } from './ai-search-metrics/types'

const insightCards = [
  {
    id: 'visibility' as InsightType,
    title: 'Visibility',
    description:
      'See how often your brand appears in AI conversations and measure the consistency of your mentions.',
    icon: VisibilityIcon,
  },
  {
    id: 'position' as InsightType,
    title: 'Position',
    description:
      'Understand your brand\'s ranking in AI search results and identify quick opportunities to move up.',
    icon: PositionIcon,
  },
  {
    id: 'sentiment' as InsightType,
    title: 'Sentiment',
    description:
      'Learn how AI feels about your brand, what\'s positive, what\'s negative, and what needs attention.',
    icon: SentimentIcon,
  },
]

export function AISearchMetricsSection() {
  const [activeType, setActiveType] = useState<InsightType | null>('visibility')
  const [expandedCard, setExpandedCard] = useState<InsightType | null>('visibility')
  const [isNarrow, setIsNarrow] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsNarrow(window.innerWidth < 680)
    }
    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])




  const currentData = activeType ? aiResponseData[activeType] : aiResponseData.sentiment

  const handleCardHover = (cardId: InsightType) => {
    if (!isNarrow) {
      setActiveType(cardId)
    }
  }

  const handleCardClick = (cardId: InsightType) => {
    if (isNarrow) {
      // Toggle expanded state for mobile
      setExpandedCard(expandedCard === cardId ? null : cardId)
      setActiveType(cardId)
    } else {
      setActiveType(cardId)
    }
  }

  return (
    <section ref={sectionRef} className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh] bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-12"
        >
          <motion.h2 variants={headerVariants} className={`text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0 text-text-heading`}>
            How AI actually sees your brand
          </motion.h2>
          <motion.p variants={subtitleVariants} className="text-sm sm:text-base md:text-lg text-text-description max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Understand how AI positions your brand vs competitors,<br className="hidden sm:block" /> highlighting sentiment and gaps.
          </motion.p>
        </motion.div>

        <div className="mt-8 sm:mt-12 md:mt-12 max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-4 sm:gap-5 md:gap-6">
            {/* Left Column - Three stacked cards */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-4">
              {insightCards.map((card) => (
                <InsightCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  isActive={activeType === card.id}
                  isExpanded={isNarrow ? expandedCard === card.id : undefined}
                  isNarrow={isNarrow}
                  onHover={() => handleCardHover(card.id)}
                  onClick={() => handleCardClick(card.id)}
                  type={card.id}
                  data={
                    activeType && currentData
                      ? card.id === 'sentiment'
                        ? currentData.sentiment
                        : card.id === 'position'
                          ? currentData.position
                          : currentData.visibility
                      : undefined
                  }
                />
              ))}
            </div>

            {/* Right Column - Bigger AI Response Card (hidden on mobile) */}
            {!isNarrow && (
              <div>
                <AnimatePresence mode="wait">
                  {currentData && activeType && (
                    <motion.div
                      key={activeType}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="h-full"
                    >
                      <AIResponseCard
                        data={currentData}
                        activeType={activeType}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Mobile: AI Response Card below the cards */}
          {isNarrow && expandedCard && (
            <div className="mt-4">
              <AnimatePresence mode="wait">
                {currentData && (
                  <motion.div
                    key={activeType}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <AIResponseCard
                      data={currentData}
                      activeType={activeType || 'visibility'}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

