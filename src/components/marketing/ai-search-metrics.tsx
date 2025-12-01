'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

  const currentData = activeType ? aiResponseData[activeType] : aiResponseData.sentiment

  const handleCardClick = (cardId: InsightType) => {
    if (activeType === cardId) {
      setActiveType(null)
    } else {
      setActiveType(cardId)
    }
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2 variants={headerVariants} className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white px-2 sm:px-0">
            How AI actually sees your brand
          </motion.h2>
          <motion.p variants={subtitleVariants} className="mt-3 sm:mt-4 text-base sm:text-lg text-white/70 px-4 sm:px-0">
            Everything that matters in one place
          </motion.p>
        </motion.div>

        <div className="mt-8 sm:mt-12 max-w-7xl mx-auto relative">
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative overflow-hidden">
            {/* Top horizontal line - aligned with card top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-white/5 z-20"></div>
            
            {insightCards.map((card) => (
              <InsightCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                isActive={activeType === card.id}
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
            
            {/* Bottom horizontal line - aligned with card bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 z-20"></div>
          </div>
        </div>

        <div className="mt-8">
          {currentData && (
            <AIResponseCard
              data={currentData}
              activeType={activeType || 'sentiment'}
            />
          )}
        </div>
      </div>
    </section>
  )
}

