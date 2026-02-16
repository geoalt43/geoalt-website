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
      className={`w-full h-full p-6 rounded-t-lg shadow-lg ${bgClass} flex flex-col select-none
        transition-all duration-700 ease-out
        ${isAnimating ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Title with same margin as Add Your Brand */}
      <h2 className={`text-2xl font-semibold text-center mt-4 mb-12 ${textClass}`}>
        Add your competitors
      </h2>

      <div className="space-y-6 flex flex-col items-center">
        
        {/* Add Custom Competitor Section */}
        <div className="w-[85%]">
          <label className={`text-sm font-medium ${labelClass} mb-2 block`}>
            Add Custom Competitor
          </label>
          
          {/* Search Input */}
          <div className="relative mb-3">
            {searchValue.length === 0 && (
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${iconClass}`} />
            )}
            <input
              ref={inputRefs.search}
              type="text"
              value={searchValue}
              disabled
              tabIndex={-1}
              placeholder="Search competitors..."
              className={`w-full ${searchValue.length === 0 ? 'pl-10' : 'pl-3'} pr-3 py-2 text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
                ${activeField === 'search' ? activeBorderClass : borderClass}
                ${inputBgClass} ${textClass} ${placeholderClass}
                pointer-events-none
              `}
              onChange={() => {}}
            />
          </div>
          
          {/* URL Input */}
          <div className="relative">
            <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${
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
              className={`w-full pl-[68px] pr-3 py-2 text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
                ${activeField === 'url' ? activeBorderClass : borderClass}
                ${inputBgClass} ${textClass} ${placeholderClass}
                pointer-events-none
              `}
              onChange={() => {}}
            />
          </div>
        </div>

        {/* Competitors Section */}
        <div className="w-[85%]">
          <label className={`text-sm font-medium ${labelClass} mb-3 block`}>
            Competitors
          </label>
          
          {/* Competitors Grid */}
          <div className="flex flex-wrap gap-2">
            {competitors.map((competitor, index) => (
              <div
                key={`${competitor.name}-${index}`}
                data-competitor={competitor.name}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border transition-all duration-200 cursor-default select-none
                  ${competitor.isSelected ? selectedChipClass : unselectedChipClass}
                `}
              >
                <span>{competitor.name}</span>
                {competitor.isSelected ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
