'use client'

import { useState, useRef, useEffect } from 'react'

import { InsightCard } from './ai-search-metrics/insight-card'
import { AIResponseCard } from './ai-search-metrics/ai-response-card'
import { VisibilityIcon, PositionIcon, SentimentIcon } from './ai-search-metrics/icons'
import { aiResponseData } from './ai-search-metrics/data'
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
  const [expandedCard, setExpandedCard] = useState<InsightType | null>(null)
  const [isNarrow, setIsNarrow] = useState<boolean | null>(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const checkWidth = () => {
      const narrow = window.innerWidth < 1080
      setIsNarrow(narrow)
    }
    
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  const currentData = activeType ? aiResponseData[activeType] : aiResponseData.sentiment

  const handleCardHover = (cardId: InsightType) => {
    const currentlyNarrow = isNarrow !== null ? isNarrow : window.innerWidth < 1080
    if (!currentlyNarrow) {
      setActiveType(cardId)
    }
  }

  const handleCardClick = (cardId: InsightType) => {
    console.log('CLICK:', cardId, 'isNarrow:', isNarrow, 'width:', window.innerWidth)
    // If isNarrow hasn't been determined yet, check current width
    const currentlyNarrow = isNarrow !== null ? isNarrow : window.innerWidth < 1080
    console.log('currentlyNarrow:', currentlyNarrow)
    
    if (currentlyNarrow) {
      // Toggle expanded state for narrow screens
      if (expandedCard === cardId) {
        console.log('Collapsing:', cardId)
        setExpandedCard(null)
      } else {
        console.log('Expanding:', cardId)
        setExpandedCard(cardId)
        setActiveType(cardId)
      }
    } else {
      setActiveType(cardId)
    }
  }

  return (
    <section ref={sectionRef} className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh] bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0 text-text-heading">
            How AI actually sees your brand
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-description max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Understand how AI positions your brand vs competitors,<br className="hidden sm:block" /> highlighting sentiment and gaps.
          </p>
        </div>

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
                  isExpanded={isNarrow === true ? expandedCard === card.id : undefined}
                  isNarrow={isNarrow === true}
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

            {/* Right Column - Bigger AI Response Card (hidden on narrow screens) */}
            {isNarrow === false && (
              <div>
                {currentData && activeType && (
                  <div
                    key={activeType}
                    className="h-full transition-opacity duration-200"
                  >
                    <AIResponseCard
                      data={currentData}
                      activeType={activeType}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile/Narrow: AI Response Card below the cards */}
          {isNarrow === true && expandedCard && (
            <div className="mt-4">
              {currentData && (
                <div
                  key={activeType}
                  className="transition-all duration-200"
                >
                  <AIResponseCard
                    data={currentData}
                    activeType={activeType || 'visibility'}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
