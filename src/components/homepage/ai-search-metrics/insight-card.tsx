'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { InsightType, SentimentData, PositionData, VisibilityData } from './types'
import { CompanyName } from './company-name'

interface InsightCardProps {
  title: string
  description: string
  icon: React.ComponentType
  isActive: boolean
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
  onHover,
  onClick,
  type,
  data,
}: InsightCardProps) {
  const handleInteraction = () => {
    if (onClick) {
      onClick()
    } else {
      onHover()
    }
  }

  return (
    <motion.div
      onMouseEnter={onHover}
      onClick={handleInteraction}
      whileTap={{ scale: 0.98 }}
      className={`mx-4 sm:mx-0 rounded-lg p-2 sm:p-3.5 text-white/80 h-[150px] sm:h-[150px] md:h-[170px] flex flex-col overflow-hidden relative group border-l-2 cursor-pointer active:opacity-80 ${
        isActive ? 'border-white' : type === 'position' || type === 'sentiment' ? 'border-white/5' : 'border-transparent'
      }`}
      animate={{
        borderLeftColor: isActive ? 'var(--color-ref-014)' : type === 'position' || type === 'sentiment' ? 'var(--color-ref-008)' : 'var(--color-ref-011)',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-3 mb-1.5 sm:mb-2 md:mb-2 min-h-[24px] sm:min-h-[28px] md:min-h-[28px]">
        <div className="flex-shrink-0">
          <IconComponent />
        </div>
        <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-normal text-white flex-shrink-0">{title}</h3>
        </div>
        <AnimatePresence mode="wait">
          {!isActive ? (
            <motion.p
              key="description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-[11px] sm:text-sm md:text-base text-white/60 leading-relaxed overflow-hidden line-clamp-2 sm:line-clamp-none md:line-clamp-none"
            >
              {description}
            </motion.p>
          ) : (
            <motion.div
              key="data"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="-mt-2 pb-2 sm:pb-0 md:pb-0 sm:-mt-2 md:-mt-2 sm:flex-1 md:flex-1 space-y-0 sm:space-y-2 md:space-y-2 lg:space-y-0"
            >
          {type === 'sentiment' && data && (
            <>
              {(data as SentimentData[]).map((item, index) => (
                <motion.div
                  key={item.companyName}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
                  className={`flex items-center justify-between gap-2 ${index > 0 ? '-mt-3 sm:mt-0 md:mt-0 lg:-mt-4' : ''} ${index === (data as SentimentData[]).length - 1 ? 'pb-2' : ''}`}
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
                </motion.div>
              ))}
            </>
          )}
          {type === 'position' && data && (
            <>
              {(data as PositionData[]).map((item, index) => (
                <motion.div
                  key={item.rank}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
                  className={`flex items-center justify-between gap-2 ${index > 0 ? '-mt-3 sm:mt-0 md:mt-0 lg:-mt-4' : ''} ${index === (data as PositionData[]).length - 1 ? 'pb-2' : ''}`}
                >
                  <div className="flex-shrink-0 min-w-0">
                    <CompanyName name={item.companyName} size="sm" />
                  </div>
                  <span className="text-white/50 text-[10px] sm:text-xs md:text-sm font-normal flex-shrink-0">#{item.rank}</span>
                </motion.div>
              ))}
            </>
          )}
          {type === 'visibility' && data && (
            <>
              {(data as VisibilityData[]).map((item, index) => (
                <motion.div
                  key={item.companyName}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
                  className={`flex items-center justify-between gap-2 ${index > 0 ? '-mt-3 sm:mt-0 md:mt-0 lg:-mt-4' : ''} ${index === (data as VisibilityData[]).length - 1 ? 'pb-2' : ''}`}
                >
                  <div className="flex-shrink-0 min-w-0">
                    <CompanyName name={item.companyName} size="sm" />
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 md:gap-2 flex-shrink-0">
                    <div className="w-10 sm:w-14 md:w-[3.5rem] lg:w-16 h-1 sm:h-1.5 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 0.5, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
                        className="h-full bg-green-400 rounded-full"
                      />
                    </div>
                    <span className="text-white/70 text-[10px] sm:text-xs md:text-xs w-7 sm:w-10 md:w-10 text-right">{item.percentage}%</span>
                  </div>
                </motion.div>
              ))}
            </>
          )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

