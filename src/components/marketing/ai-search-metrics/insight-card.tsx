'use client'

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
      className={`rounded-lg p-4  text-white/80 cursor-pointer transition-all duration-300 h-[160px] flex flex-col overflow-hidden relative group ${
        isActive ? 'border-l-2 border-white' : type === 'position' || type === 'sentiment' ? 'border-l border-white/20' : ''
      }`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-2">
        <div>
          <IconComponent />
        </div>
        <h3 className="text-base font-normal text-white">{title}</h3>
        </div>
        {!isActive ? (
        <p className="text-sm text-white/60 leading-relaxed overflow-hidden">{description}</p>
      ) : (
        <div className="space-y-4 flex-1">
          {type === 'sentiment' && data && (
            <div>
              <div className="space-y-4">
                {(data as SentimentData[]).map((item, index) => (
                  <div key={item.companyName} className={`flex items-center justify-between ${index === 0 ? 'mt-2' : ''}`}>
                    <CompanyName name={item.companyName} size="sm" />
                    <span
                      className={`text-sm font-semibold ${
                        item.score >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {item.score > 0 ? '+' : ''}{item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {type === 'position' && data && (
            <div>
              <div className="space-y-4">
                {(data as PositionData[]).map((item, index) => (
                  <div key={item.rank} className={`flex items-center justify-between ${index === 0 ? 'mt-2' : ''}`}>
                    <CompanyName name={item.companyName} size="sm" />
                    <span className="text-white/50 text-xs font-normal">#{item.rank}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {type === 'visibility' && data && (
            <div>
              <div className="space-y-4">
                {(data as VisibilityData[]).map((item, index) => (
                  <div key={item.companyName} className={`flex items-center justify-between ${index === 0 ? 'mt-2' : ''}`}>
                    <CompanyName name={item.companyName} size="sm" />
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${item.percentage}%` }}
                          className="h-full bg-green-400 rounded-full"
                        />
                      </div>
                      <span className="text-white/70 text-xs w-10 text-right">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  )
}

