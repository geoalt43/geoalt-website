"use client"

import { RefObject } from 'react'
import { Search, Check, Plus } from 'lucide-react'

interface Competitor {
  name: string
  isSelected: boolean
}

interface DemoAddCompetitorsProps {
  searchValue: string
  urlValue: string
  activeField: 'search' | 'url' | null
  competitors: Competitor[]
  inputRefs: {
    search: RefObject<HTMLInputElement | null>
    url: RefObject<HTMLInputElement | null>
  }
  isLightTheme: boolean
  isAnimating: boolean
}

export function DemoAddCompetitors({
  searchValue,
  urlValue,
  activeField,
  competitors,
  inputRefs,
  isLightTheme,
  isAnimating,
}: DemoAddCompetitorsProps) {
  
  // Theme-aware design tokens (matching demo-add-brand.tsx)
  const bgClass = isLightTheme ? 'bg-white' : 'bg-black'
  const textClass = isLightTheme ? 'text-gray-900' : 'text-white'
  const labelClass = isLightTheme ? 'text-gray-600' : 'text-gray-300'
  const borderClass = isLightTheme ? 'border-[var(--color-card-border)]' : 'border-[var(--color-card-border)]'
  const inputBgClass = isLightTheme ? 'bg-white' : 'bg-[var(--color-ref-043)]'
  const placeholderClass = isLightTheme ? 'placeholder-gray-400' : 'placeholder-zinc-500'
  const iconClass = isLightTheme ? 'text-gray-400' : 'text-zinc-400'
  const activeBorderClass = isLightTheme ? 'border-gray-500' : 'border-zinc-700'
  
  // Competitor chip styles
  const selectedChipClass = isLightTheme 
    ? 'bg-gray-200 text-gray-800 border-gray-300' 
    : 'bg-zinc-700 text-white border-zinc-600'
  const unselectedChipClass = isLightTheme 
    ? 'bg-white text-gray-700 border-gray-300' 
    : 'bg-zinc-800 text-zinc-300 border-zinc-600'

  return (
    <div 
      className={`w-full h-full p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg ${bgClass} flex flex-col select-none
        transition-all duration-700 ease-out
        ${isAnimating ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <h2 className={`text-base sm:text-lg md:text-2xl font-semibold text-center mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-8 md:mb-12 ${textClass}`}>
        Add your competitors
      </h2>

      <div className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center">
        
        {/* Add Custom Competitor Section */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%]">
          <label className={`text-xs sm:text-sm font-medium ${labelClass} mb-1.5 sm:mb-2 block`}>
            Add Custom Competitor
          </label>
          
          {/* Search Input */}
          <div className="relative mb-2 sm:mb-3">
            {searchValue.length === 0 && (
              <Search className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 ${iconClass}`} />
            )}
            <input
              ref={inputRefs.search}
              type="text"
              value={searchValue}
              disabled
              tabIndex={-1}
              placeholder="Search competitors..."
              className={`w-full ${searchValue.length === 0 ? 'pl-8 sm:pl-10' : 'pl-2 sm:pl-3'} pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
                ${activeField === 'search' ? activeBorderClass : borderClass}
                ${inputBgClass} ${textClass} ${placeholderClass}
                pointer-events-none
              `}
              onChange={() => {}}
            />
          </div>
          
          {/* URL Input */}
          <div className="relative">
            <span className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm ${
              urlValue.length > 0
                ? textClass
                : (isLightTheme ? 'text-gray-400' : 'text-zinc-500')
            }`}>
              https://
            </span>
            <input
              ref={inputRefs.url}
              type="text"
              value={urlValue}
              disabled
              tabIndex={-1}
              placeholder="competitor.com"
              className={`w-full pl-[52px] sm:pl-[68px] pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
                ${activeField === 'url' ? activeBorderClass : borderClass}
                ${inputBgClass} ${textClass} ${placeholderClass}
                pointer-events-none
              `}
              onChange={() => {}}
            />
          </div>
        </div>

        {/* Competitors Section */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%]">
          <label className={`text-xs sm:text-sm font-medium ${labelClass} mb-2 sm:mb-3 block`}>
            Competitors
          </label>
          
          {/* Competitors Grid */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {competitors.map((competitor, index) => (
              <div
                key={`${competitor.name}-${index}`}
                data-competitor={competitor.name}
                className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border transition-all duration-200 cursor-default select-none
                  ${competitor.isSelected ? selectedChipClass : unselectedChipClass}
                `}
              >
                <span>{competitor.name}</span>
                {competitor.isSelected ? (
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                ) : (
                  <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
