'use client'

import React from 'react'
import { InsightType, SentimentData, PositionData, VisibilityData } from './types'
import { CompanyName } from './company-name'

interface InsightCardProps {
  title: string
  description: string
  icon: React.ComponentType
  isActive: boolean
  onClick: () => void
  type: InsightType
  data?: SentimentData[] | PositionData[] | VisibilityData[]
}

export function InsightCard({
  title,
  description,
  icon: IconComponent,
  isActive,
  onClick,
  type,
  data,
}: InsightCardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg p-2 ${isActive ? 'pb-3 sm:pb-3.5' : 'sm:p-3.5'} text-white/80 cursor-pointer transition-colors duration-300 ${isActive ? 'min-h-0 sm:min-h-[160px]' : 'min-h-[140px] sm:min-h-[160px]'} md:min-h-[180px] flex flex-col overflow-hidden relative group ${
        isActive ? 'border-l-2 border-white' : type === 'position' || type === 'sentiment' ? 'border-l-2 border-white/5' : 'border-l-2 border-transparent'
      }`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
        <div>
          <IconComponent />
        </div>
        <h3 className="text-xs sm:text-sm lg:text-base font-normal text-white">{title}</h3>
        </div>
        {!isActive ? (
        <p className="text-[11px] sm:text-sm md:text-base text-white/60 leading-relaxed overflow-hidden line-clamp-2 sm:line-clamp-none">{description}</p>
      ) : (
        <div className="mt-1 pb-2 sm:pb-0 sm:mt-0 sm:flex-1 space-y-0 sm:space-y-2 lg:space-y-3">
          {type === 'sentiment' && data && (
            <>
              {(data as SentimentData[]).map((item, index) => (
                <div key={item.companyName} className={`flex items-center justify-between gap-2 ${index > 0 ? '-mt-3 sm:mt-0' : ''}`}>
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
          {type === 'position' && data && (
            <>
              {(data as PositionData[]).map((item, index) => (
                <div key={item.rank} className={`flex items-center justify-between gap-2 ${index > 0 ? '-mt-3 sm:mt-0' : ''}`}>
                  <div className="flex-shrink-0 min-w-0">
                    <CompanyName name={item.companyName} size="sm" />
                  </div>
                  <span className="text-white/50 text-[10px] sm:text-xs md:text-sm font-normal flex-shrink-0">#{item.rank}</span>
                </div>
              ))}
            </>
          )}
          {type === 'visibility' && data && (
            <>
              {(data as VisibilityData[]).map((item, index) => (
                <div key={item.companyName} className={`flex items-center justify-between gap-2 ${index > 0 ? '-mt-3 sm:mt-0' : ''}`}>
                  <div className="flex-shrink-0 min-w-0">
                    <CompanyName name={item.companyName} size="sm" />
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <div className="w-10 sm:w-14 lg:w-16 h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${item.percentage}%` }}
                        className="h-full bg-green-400 rounded-full"
                      />
                    </div>
                    <span className="text-white/70 text-[10px] sm:text-xs w-7 sm:w-10 text-right">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      </div>
    </div>
  )
}

