"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Check, ChevronDown } from 'lucide-react'
import { COUNTRIES } from '@/hooks/use-model-region-demo-controller'

// AI Model definitions
const AI_MODELS = [
  { name: 'ChatGPT', icon: '/ai-icons/openai-light.svg', iconClass: 'brightness-0' },
  { name: 'Grok', icon: '/ai-icons/grok-light.svg', iconClass: 'brightness-0' },
  { name: 'Gemini', icon: '/ai-icons/gemini-color.webp', iconClass: '' },
]

interface DemoSelectModelRegionProps {
  selectedModels: string[]
  isDropdownOpen: boolean
  dropdownScrollTop: number
  selectedRegion: { name: string; flag: string } | null
  isRegionInputActive: boolean
  hoveredCountry: string | null
  isAnimating: boolean
}

export function DemoSelectModelRegion({
  selectedModels,
  isDropdownOpen,
  dropdownScrollTop,
  selectedRegion,
  isRegionInputActive,
  hoveredCountry,
  isAnimating,
}: DemoSelectModelRegionProps) {

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Sync scroll position from controller
  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.scrollTop = dropdownScrollTop
    }
  }, [dropdownScrollTop])

  return (
    <div
      className={`w-full h-full p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg bg-white dark:bg-black flex flex-col select-none
        transition-all duration-700 ease-out
        ${isAnimating ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-center mt-2 sm:mt-3 md:mt-4 mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white">
        Choose AI models & region
      </h2>

      <div className="space-y-3 sm:space-y-4 md:space-y-5 flex flex-col items-center">

        {/* AI Models Section */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%]">
          <label className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-0.5 sm:mb-1 block">
            AI Models
          </label>
          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-zinc-500 mb-2 sm:mb-3">
            3 models available in India
          </p>

          {/* Model Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {AI_MODELS.map((model) => {
              const isSelected = selectedModels.includes(model.name)
              return (
                <button
                  key={model.name}
                  data-model={model.name}
                  className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs border transition-all duration-200 cursor-default select-none
                    ${isSelected 
                      ? 'bg-gray-100 dark:bg-zinc-800 border-gray-400 dark:border-zinc-500 text-gray-900 dark:text-white' 
                      : 'bg-white dark:bg-zinc-900 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:border-gray-400'}
                  `}
                >
                  <Image
                    src={model.icon}
                    alt={model.name}
                    width={14}
                    height={14}
                    unoptimized
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${model.iconClass} ${model.iconClass === 'brightness-0' ? 'dark:invert' : ''}`}
                  />
                  <span>{model.name}</span>
                  {isSelected && (
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5" strokeWidth={2.5} />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Region Section */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%] relative">
          <label className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 sm:mb-2 block">
            Region
          </label>

          {/* Region Input */}
          <div
            data-region-input="true"
            className={`w-full px-3 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-sm rounded-full border transition-all duration-200 cursor-default select-none flex items-center justify-between
              ${isRegionInputActive ? 'border-gray-500 dark:border-zinc-700' : 'border-[var(--color-card-border)]'}
              bg-white dark:bg-[var(--color-ref-043)] text-gray-900 dark:text-white
            `}
          >
            {selectedRegion ? (
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base">{selectedRegion.flag}</span>
                <span>{selectedRegion.name}</span>
              </span>
            ) : (
              <span className="text-gray-400 dark:text-zinc-500">
                Select a region
              </span>
            )}
            <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 dark:text-zinc-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              className="absolute left-0 right-0 mt-1 rounded-2xl border shadow-lg overflow-hidden z-50 bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 animate-in fade-in slide-in-from-top-1 duration-200"
            >
              <div
                ref={dropdownRef}
                data-dropdown="true"
                className="max-h-[100px] sm:max-h-[140px] overflow-y-auto"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'var(--scrollbar-thumb, #3f3f46) transparent',
                }}
              >
                {COUNTRIES.map((country) => (
                  <div
                    key={country.name}
                    data-country={country.name}
                    className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm cursor-default select-none transition-colors duration-100
                      ${hoveredCountry === country.name 
                        ? 'bg-gray-100 dark:bg-zinc-700' 
                        : ''}
                      text-gray-900 dark:text-white
                    `}
                  >
                    <span className="text-sm sm:text-base shrink-0">{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Helper text */}
          <p className="text-[10px] sm:text-xs mt-1.5 sm:mt-2 text-orange-500 dark:text-orange-400">
            Selected region may affect model availability and performance
          </p>
        </div>

      </div>
    </div>
  )
}
