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
  isAnimating: boolean
}

export function DemoAddCompetitors({
  searchValue,
  urlValue,
  activeField,
  competitors,
  inputRefs,
  isAnimating,
}: DemoAddCompetitorsProps) {

  return (
    <div 
      className={`w-full h-full p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg bg-white dark:bg-black flex flex-col select-none
        transition-all duration-700 ease-out
        ${isAnimating ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-center mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-8 md:mb-12 text-gray-900 dark:text-white">
        Add your competitors
      </h2>

      <div className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center">
        
        {/* Add Custom Competitor Section */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%]">
          <label className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 sm:mb-2 block">
            Add Custom Competitor
          </label>
          
          {/* Search Input */}
          <div className="relative mb-2 sm:mb-3">
            {searchValue.length === 0 && (
              <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 dark:text-zinc-400" />
            )}
            <input
              ref={inputRefs.search}
              type="text"
              value={searchValue}
              disabled
              tabIndex={-1}
              placeholder="Search competitors..."
              className={`w-full ${searchValue.length === 0 ? 'pl-8 sm:pl-10' : 'pl-2 sm:pl-3'} pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
                ${activeField === 'search' ? 'border-gray-500 dark:border-zinc-700' : 'border-[var(--color-card-border)]'}
                bg-white dark:bg-[var(--color-ref-043)] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500
                pointer-events-none
              `}
              onChange={() => {}}
            />
          </div>
          
          {/* URL Input */}
          <div className="relative">
            <span className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm ${
              urlValue.length > 0
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400 dark:text-zinc-500'
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
                ${activeField === 'url' ? 'border-gray-500 dark:border-zinc-700' : 'border-[var(--color-card-border)]'}
                bg-white dark:bg-[var(--color-ref-043)] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500
                pointer-events-none
              `}
              onChange={() => {}}
            />
          </div>
        </div>

        {/* Competitors Section */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%]">
          <label className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 block">
            Competitors
          </label>
          
          {/* Competitors Grid */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {competitors.map((competitor, index) => (
              <div
                key={`${competitor.name}-${index}`}
                data-competitor={competitor.name}
                className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border transition-all duration-200 cursor-default select-none
                  ${competitor.isSelected 
                    ? 'bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white border-gray-300 dark:border-zinc-600' 
                    : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border-gray-300 dark:border-zinc-600'}
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
