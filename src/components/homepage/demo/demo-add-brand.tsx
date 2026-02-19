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
  isAnimating,
}: DemoAddBrandProps) {

  return (
    <div 
      className={`w-full h-full p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg bg-white dark:bg-black flex flex-col select-none
        transition-all duration-700 ease-out
        ${isAnimating ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-center mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-8 md:mb-12 text-gray-900 dark:text-white">
        Add your Brand
      </h2>

      <div className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col items-center">
        
        {/* Brand Name Input */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%]">
          <label className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
            <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600 dark:text-zinc-400" />
            Brand Name <span className="text-red-500">*</span>
          </label>
          <input
            ref={inputRefs.brand}
            type="text"
            value={brandValue}
            disabled
            tabIndex={-1}
            placeholder="Enter your company or brand name"
            className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
              ${activeField === 'brand' ? 'border-gray-500 dark:border-zinc-700' : 'border-[var(--color-card-border)]'}
              bg-white dark:bg-[var(--color-ref-043)] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500
              pointer-events-none
            `}
            onChange={() => {}}
          />
        </div>

        {/* Website URL Input */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%]">
          <label className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600 dark:text-zinc-400" />
            Website URL <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm ${
              websiteValue.length > 0
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400 dark:text-gray-500'
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
              className={`w-full pl-[52px] sm:pl-[68px] pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl border transition-all duration-200 outline-none cursor-default select-none
                ${activeField === 'website' ? 'border-gray-500 dark:border-zinc-700' : 'border-[var(--color-card-border)]'}
                bg-white dark:bg-[var(--color-ref-043)] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500
                pointer-events-none
              `}
              onChange={() => {}}
            />
          </div>
        </div>

        {/* Brand Aliases Textarea */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%]">
          <label className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
            <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600 dark:text-zinc-400" />
            Brand Aliases <span className="font-normal text-gray-400 dark:text-gray-500">(Optional)</span>
          </label>
          <div className="relative">
            <textarea
              ref={inputRefs.aliases}
              value={aliasesValue}
              disabled
              tabIndex={-1}
              maxLength={200}
              placeholder="Alternative names, nicknames (comma separated)"
              className={`w-full h-[60px] sm:h-[80px] md:h-[112px] px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-xl border transition-all duration-200 outline-none resize-none cursor-default select-none
                ${activeField === 'aliases' ? 'border-gray-500 dark:border-zinc-700' : 'border-[var(--color-card-border)]'}
                bg-white dark:bg-[var(--color-ref-043)] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500
                pointer-events-none
              `}
              onChange={() => {}}
            />
            <span className="absolute bottom-1 sm:bottom-2 right-2 sm:right-3 text-[8px] sm:text-[10px] text-gray-400 dark:text-gray-500">
              {aliasesValue.length}/200
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
