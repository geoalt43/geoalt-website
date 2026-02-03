'use client'

import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  const currentData = activeType ? aiResponseData[activeType] : aiResponseData.sentiment

  const handleCardHover = (cardId: InsightType) => {
    setActiveType(cardId)
  }

  return (
    <section ref={sectionRef} className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh] bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2 variants={headerVariants} className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0 ${isLightTheme ? 'text-[var(--color-ref-001)]' : 'text-text-primary'}`}>
            How AI actually sees your brand
          </motion.h2>
          <motion.p variants={subtitleVariants} className="text-xs sm:text-sm md:text-base text-text-description px-4 sm:px-0 md:px-0">
            Everything that matters in one place
          </motion.p>
        </motion.div>

        <div className="mt-8 sm:mt-12 md:mt-12 max-w-7xl mx-auto relative">
          <div className="grid gap-3 sm:gap-4 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative overflow-hidden">
            {/* Top horizontal line - aligned with card top */}
            <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-white/5 z-20"></div>
            
            {insightCards.map((card) => (
              <InsightCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                isActive={activeType === card.id}
                onHover={() => handleCardHover(card.id)}
                onClick={() => handleCardHover(card.id)}
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
            
            {/* Bottom horizontal line - aligned with card bottom */}
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-px bg-white/5 z-20"></div>
          </div>
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {currentData && activeType && (
              <motion.div
                key={activeType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <AIResponseCard
                  data={currentData}
                  activeType={activeType}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

