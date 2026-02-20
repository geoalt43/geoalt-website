'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { InsightType, SentimentData, PositionData, VisibilityData } from './types'
import { CompanyName } from './company-name'

interface InsightCardProps {
  title: string
  description: string
  icon: React.ComponentType
  isActive: boolean
  isExpanded?: boolean
  isNarrow?: boolean
  onHover: () => void
  onClick?: () => void
  type: InsightType
  data?: SentimentData[] | PositionData[] | VisibilityData[]
}

export function InsightCard({
  title,
  description,
  icon: IconComponent,
  isActive,
  isExpanded,
  isNarrow,
  onHover,
  onClick,
  type,
  data,
}: InsightCardProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  const handleInteraction = () => {
    if (onClick) {
      onClick()
    } else {
      onHover()
    }
  }

  // For mobile: show content when expanded
  const showContent = isNarrow ? isExpanded : isActive

  return (
    <motion.div
      onMouseEnter={onHover}
      onClick={handleInteraction}
      whileTap={{ scale: 0.98 }}
      className={`mx-4 sm:mx-0 overflow-hidden relative group rounded-r-lg rounded-l-none border-y border-r border-l-0 cursor-pointer active:opacity-80 transition-all duration-200 ${isLightTheme
        ? 'bg-[var(--color-card-bg)] border-neutral-300'
        : 'bg-[var(--color-ref-043)] border-[var(--color-card-border)]'
      } ${isNarrow 
        ? isExpanded 
          ? 'py-1.5 px-2 h-auto' 
          : 'py-1.5 px-2 h-auto'
          : 'p-2 sm:p-3.5 h-[110px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[180px]'}`}
    >
      {/* Left Active Indicator */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 z-10 transition-colors duration-300 ${
          isActive ? 'bg-green-600' : isLightTheme ? 'bg-neutral-400' : 'bg-white/5'
        }`} 
      />

      <div className="relative z-10 flex flex-col pl-2">
        {/* Header - hidden when content is shown (active on desktop, expanded on mobile) */}
        {!showContent && (
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 [&>svg]:w-full [&>svg]:h-full text-text-secondary">
              <IconComponent />
            </div>
            <h3 className={`text-base sm:text-lg font-medium flex-shrink-0 ${isLightTheme ? 'text-black' : 'text-white'}`}>{title}</h3>
          </div>
        )}
        
        <div className="relative">
          {/* Description - shown on desktop when not active */}
          <motion.div
            initial={false}
            animate={{ 
              opacity: !isNarrow && !isActive ? 1 : 0,
              height: !isNarrow && !isActive ? 'auto' : 0
            }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm leading-relaxed font-light text-gray-600 dark:text-gray-400 overflow-hidden line-clamp-2 sm:line-clamp-none">
              {description}
            </p>
          </motion.div>
          
          {/* Data content - shown when active (desktop) or expanded (mobile) */}
          <motion.div
            initial={false}
            animate={{ 
              opacity: showContent ? 1 : 0,
              height: showContent ? 'auto' : 0
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden -mt-3"
          >
            {(type === 'sentiment' && data) && (
              <>
                {(data as SentimentData[]).map((item) => (
                  <div
                    key={item.companyName}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex-shrink-0 min-w-0">
                      <CompanyName name={item.companyName} size="sm" />
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs md:text-sm font-semibold flex-shrink-0 ${
                        item.score >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {item.score > 0 ? '+' : ''}{item.score}
                    </span>
                  </div>
                ))}
              </>
            )}
            {(type === 'position' && data) && (
              <>
                {(data as PositionData[]).map((item) => (
                  <div
                    key={item.rank}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex-shrink-0 min-w-0">
                      <CompanyName name={item.companyName} size="sm" />
                    </div>
                    <span className="text-text-muted text-[10px] sm:text-xs md:text-sm font-normal flex-shrink-0">#{item.rank}</span>
                  </div>
                ))}
              </>
            )}
            {(type === 'visibility' && data) && (
              <>
                {(data as VisibilityData[]).map((item, index) => (
                  <div
                    key={item.companyName}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex-shrink-0 min-w-0">
                      <CompanyName name={item.companyName} size="sm" />
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 md:gap-2 flex-shrink-0">
                      <div className="w-10 sm:w-14 md:w-[3.5rem] lg:w-16 h-1 sm:h-1.5 md:h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 0.3, delay: index * 0.03 + 0.1, ease: 'easeOut' }}
                          className="h-full bg-green-400 rounded-full"
                        />
                      </div>
                      <span className="text-text-muted text-[10px] sm:text-xs md:text-xs w-7 sm:w-10 md:w-10 text-right">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

