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
  isLightTheme: boolean
  isAnimating: boolean
}

export function DemoSelectModelRegion({
  selectedModels,
  isDropdownOpen,
  dropdownScrollTop,
  selectedRegion,
  isRegionInputActive,
  hoveredCountry,
  isLightTheme,
  isAnimating,
}: DemoSelectModelRegionProps) {

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Sync scroll position from controller
  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.scrollTop = dropdownScrollTop
    }
  }, [dropdownScrollTop])

  // Theme-aware design tokens (matching other demo cards exactly)
  const bgClass = isLightTheme ? 'bg-white' : 'bg-black'
  const textClass = isLightTheme ? 'text-gray-900' : 'text-white'
  const labelClass = isLightTheme ? 'text-gray-600' : 'text-gray-300'
  const borderClass = isLightTheme ? 'border-[var(--color-card-border)]' : 'border-[var(--color-card-border)]'
  const inputBgClass = isLightTheme ? 'bg-white' : 'bg-[var(--color-ref-043)]'
  const activeBorderClass = isLightTheme ? 'border-gray-500' : 'border-zinc-700'

  // Model button styles
  const selectedModelClass = isLightTheme
    ? 'bg-gray-100 border-gray-400 text-gray-900'
    : 'bg-zinc-800 border-zinc-500 text-white'
  const unselectedModelClass = isLightTheme
    ? 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
    : 'bg-zinc-900 border-zinc-700 text-zinc-300'

  // Dropdown styles
  const dropdownBgClass = isLightTheme ? 'bg-white' : 'bg-zinc-900'
  const dropdownBorderClass = isLightTheme ? 'border-gray-200' : 'border-zinc-700'

  return (
    <div
      className={`w-full h-full p-6 rounded-t-lg shadow-lg ${bgClass} flex flex-col select-none
        transition-all duration-700 ease-out
        ${isAnimating ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Title with same margin as other demo cards */}
      <h2 className={`text-2xl font-semibold text-center mt-4 mb-6 ${textClass}`}>
        Choose AI models & region
      </h2>

      <div className="space-y-5 flex flex-col items-center">

        {/* AI Models Section */}
        <div className="w-[85%]">
          <label className={`text-sm font-medium ${labelClass} mb-1 block`}>
            AI Models
          </label>
          <p className={`text-xs ${isLightTheme ? 'text-gray-400' : 'text-zinc-500'} mb-3`}>
            3 models available in India
          </p>

          {/* Model Buttons */}
          <div className="flex gap-3">
            {AI_MODELS.map((model) => {
              const isSelected = selectedModels.includes(model.name)
              return (
                <button
                  key={model.name}
                  data-model={model.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition-all duration-200 cursor-default select-none
                    ${isSelected ? selectedModelClass : unselectedModelClass}
                  `}
                >
                  <Image
                    src={model.icon}
                    alt={model.name}
                    width={14}
                    height={14}
                    unoptimized
                    className={`w-3.5 h-3.5 ${model.iconClass} ${!isLightTheme && model.iconClass === 'brightness-0' ? 'invert' : ''}`}
                  />
                  <span>{model.name}</span>
                  {isSelected && (
                    <Check className="w-3 h-3 ml-0.5" strokeWidth={2.5} />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Region Section */}
        <div className="w-[85%] relative">
          <label className={`text-sm font-medium ${labelClass} mb-2 block`}>
            Region
          </label>

          {/* Region Input */}
          <div
            data-region-input="true"
            className={`w-full px-4 py-2.5 text-sm rounded-full border transition-all duration-200 cursor-default select-none flex items-center justify-between
              ${isRegionInputActive ? activeBorderClass : borderClass}
              ${inputBgClass} ${textClass}
            `}
          >
            {selectedRegion ? (
              <span className="flex items-center gap-2">
                <span className="text-base">{selectedRegion.flag}</span>
                <span>{selectedRegion.name}</span>
              </span>
            ) : (
              <span className={isLightTheme ? 'text-gray-400' : 'text-zinc-500'}>
                Select a region
              </span>
            )}
            <ChevronDown className={`w-4 h-4 ${isLightTheme ? 'text-gray-400' : 'text-zinc-500'} transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              className={`absolute left-0 right-0 mt-1 rounded-2xl border shadow-lg overflow-hidden z-50
                ${dropdownBgClass} ${dropdownBorderClass}
                animate-in fade-in slide-in-from-top-1 duration-200
              `}
            >
              <div
                ref={dropdownRef}
                data-dropdown="true"
                className="max-h-[140px] overflow-y-auto"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: isLightTheme ? '#d1d5db transparent' : '#3f3f46 transparent',
                }}
              >
                {COUNTRIES.map((country) => (
                  <div
                    key={country.name}
                    data-country={country.name}
                    className={`flex items-center gap-3 px-3 py-1.5 text-sm cursor-default select-none transition-colors duration-100
                      ${hoveredCountry === country.name 
                        ? (isLightTheme ? 'bg-gray-100' : 'bg-zinc-700') 
                        : ''}
                      ${textClass}
                    `}
                  >
                    <span className="text-base shrink-0">{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Helper text */}
          <p className={`text-xs mt-2 ${isLightTheme ? 'text-orange-500' : 'text-orange-400'}`}>
            Selected region may affect model availability and performance
          </p>
        </div>

      </div>
    </div>
  )
}
