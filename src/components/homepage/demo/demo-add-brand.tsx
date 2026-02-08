"use client"

import { RefObject } from 'react'
import { Building2, Globe, Tag } from 'lucide-react'

interface DemoAddBrandProps {
  brandValue: string
  websiteValue: string
  aliasesValue: string
  activeField: 'brand' | 'website' | 'aliases' | null
  inputRefs: {
    brand: RefObject<HTMLInputElement | null>
    website: RefObject<HTMLInputElement | null>
    aliases: RefObject<HTMLTextAreaElement | null>
  }
  isLightTheme: boolean
  onUserInteraction: () => void
  isDemoActive: boolean
  isAnimating: boolean
}

export function DemoAddBrand({
  brandValue,
  websiteValue,
  aliasesValue,
  activeField,
  inputRefs,
  isLightTheme,
  isAnimating,
}: DemoAddBrandProps) {
  
  // Theme-aware design tokens
  // Light theme: standard light colors
  // Dark theme: pure black and white combination
  const bgClass = isLightTheme ? 'bg-white' : 'bg-black'
  const textClass = isLightTheme ? 'text-gray-900' : 'text-white'
  const labelClass = isLightTheme ? 'text-gray-600' : 'text-gray-300'
  // Match card border color: var(--color-card-border) - same as left side cards
  const borderClass = isLightTheme ? 'border-[var(--color-card-border)]' : 'border-[var(--color-card-border)]'
  // Match left side cards background color
  const inputBgClass = isLightTheme ? 'bg-white' : 'bg-[var(--color-ref-043)]'
  const placeholderClass = isLightTheme ? 'placeholder-gray-400' : 'placeholder-zinc-500'
  // Darker icons
  const iconClass = isLightTheme ? 'text-gray-600' : 'text-zinc-400'
  // When clicked: slightly darker/more visible border
  const activeBorderClass = isLightTheme ? 'border-gray-500' : 'border-zinc-700'

  return (
    <div 
      className={`w-full h-full p-6 rounded-t-lg shadow-lg ${bgClass} flex flex-col select-none
        transition-all duration-700 ease-out
        ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      {/* Title with margin-bottom (reduced slightly from mb-16 to mb-12) */}
      <h2 className={`text-2xl font-semibold text-center mt-4 mb-12 ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
        Add your Brand
      </h2>

      <div className="space-y-8 flex flex-col items-center">
        
        {/* Brand Name Input */}
        <div className="w-[85%]">
          <label className={`text-xs font-medium ${labelClass} flex items-center gap-1.5 mb-2`}>
            <Building2 className={`w-3.5 h-3.5 ${iconClass}`} />
            Brand Name <span className="text-red-500">*</span>
          </label>
          <input
            ref={inputRefs.brand}
            type="text"
            value={brandValue}
            disabled
            tabIndex={-1}
            placeholder="Enter your company or brand name"
            className={`w-full px-3 py-2 text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
              ${activeField === 'brand' ? activeBorderClass : borderClass}
              ${inputBgClass} ${textClass} ${placeholderClass}
              pointer-events-none
            `}
            onChange={() => {}}
          />
        </div>

        {/* Website URL Input */}
        <div className="w-[85%]">
          <label className={`text-xs font-medium ${labelClass} flex items-center gap-1.5 mb-2`}>
            <Globe className={`w-3.5 h-3.5 ${iconClass}`} />
            Website URL <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${
              websiteValue.length > 0
                ? textClass
                : (isLightTheme ? 'text-gray-400' : 'text-gray-500')
            }`}>
              https://
            </span>
            <input
              ref={inputRefs.website}
              type="text"
              value={websiteValue}
              disabled
              tabIndex={-1}
              placeholder="yourcompany.com"
              className={`w-full pl-[68px] pr-3 py-2 text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
                ${activeField === 'website' ? activeBorderClass : borderClass}
                ${inputBgClass} ${textClass} ${placeholderClass}
                pointer-events-none
              `}
              onChange={() => {}}
            />
          </div>
        </div>

        {/* Brand Aliases Textarea */}
        <div className="w-[85%]">
          <label className={`text-xs font-medium ${labelClass} flex items-center gap-1.5 mb-2`}>
            <Tag className={`w-3.5 h-3.5 ${iconClass}`} />
            Brand Aliases <span className={`font-normal ${isLightTheme ? 'text-gray-400' : 'text-gray-500'}`}>(Optional)</span>
          </label>
          <div className="relative">
            <textarea
              ref={inputRefs.aliases}
              value={aliasesValue}
              disabled
              tabIndex={-1}
              maxLength={200}
              placeholder="Alternative names, nicknames (comma separated)"
              className={`w-full h-[112px] px-3 py-1.5 text-sm rounded-xl border transition-all duration-200 outline-none resize-none cursor-default select-none
                ${activeField === 'aliases' ? activeBorderClass : borderClass}
                ${inputBgClass} ${textClass} ${placeholderClass}
                pointer-events-none
              `}
              onChange={() => {}}
            />
            <span className={`absolute bottom-2 right-3 text-[10px] ${isLightTheme ? 'text-gray-400' : 'text-gray-500'}`}>
              {aliasesValue.length}/200
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
