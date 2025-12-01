'use client'

import Image from 'next/image'
import { AIResponseData } from './types'
import { CompanyName } from './company-name'

interface AIResponseCardProps {
  data: AIResponseData
  activeType: string
}

function highlightText(
  text: string,
  positives: string[],
  negatives: string[],
  shouldHighlight: boolean
) {
  if (!shouldHighlight) {
    return [{ text: text.replace(/\*\*/g, ''), type: 'normal' as const }]
  }

  let highlightedText = text
  const parts: Array<{ text: string; type: 'positive' | 'negative' | 'normal' }> = []

  // Process positive highlights first
  positives.forEach((phrase) => {
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`\\*\\*(${escapedPhrase})\\*\\*`, 'gi')
    highlightedText = highlightedText.replace(regex, '__POSITIVE__$1__/POSITIVE__')
  })

  // Process negative highlights
  negatives.forEach((phrase) => {
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`\\*\\*(${escapedPhrase})\\*\\*`, 'gi')
    highlightedText = highlightedText.replace(regex, '__NEGATIVE__$1__/NEGATIVE__')
  })

  // Remove any remaining ** markers from unhighlighted text
  highlightedText = highlightedText.replace(/\*\*/g, '')

  // Split into segments
  const segments = highlightedText.split(/(__POSITIVE__|__NEGATIVE__|__\/POSITIVE__|__\/NEGATIVE__)/)

  let currentType: 'positive' | 'negative' | 'normal' = 'normal'
  
  segments.forEach((segment) => {
    if (segment === '__POSITIVE__') {
      currentType = 'positive'
    } else if (segment === '__NEGATIVE__') {
      currentType = 'negative'
    } else if (segment === '__/POSITIVE__' || segment === '__/NEGATIVE__') {
      currentType = 'normal'
    } else if (segment) {
      parts.push({ text: segment, type: currentType })
    }
  })

  return parts.length > 0 ? parts : [{ text: highlightedText.replace(/__[A-Z_/]+__/g, ''), type: 'normal' as const }]
}

export function AIResponseCard({ data, activeType }: AIResponseCardProps) {
  return (
        <div
          className="bg-[#050505] border border-transparent rounded-lg shadow-2xl shadow-black/40 p-4 sm:p-6 lg:p-8 mt-4 relative overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500/10 to-blue-500/20 animate-pulse"></div>
            <div className="absolute top-0 left-1/4 w-0 h-9 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-9 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          </div>
          {/* Fade Effects on Edges */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050505] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050505] to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-0 w-90 bg-gradient-to-r from-[#050505] to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent"></div>
          </div>
          <div className="relative z-10">
      {/* Question */}
      <div className="mb-6 sm:mb-8">
        <div className="mb-3 sm:mb-3">
          {/* Question Text */}
          <p className="text-white/70 text-sm sm:text-base lg:text-lg xl:text-xl min-w-0 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-tight sm:leading-normal ml-[80px] sm:ml-[280px] md:ml-[360px] lg:ml-[440px] pb-2 sm:pb-3">{data.question}</p>
        </div>
        
        {/* Intro Text with AI Platform Icons on the left */}
        <div className="flex items-start gap-2 sm:gap-3 ml-1 sm:ml-16 md:ml-24 lg:ml-32">
          {/* Icons Container - Left side of intro text */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 pt-1">
            {/* Gemini Icon */}
            <div className="flex items-center justify-center">
              <Image src="/ai-icons/gemini-color.webp" alt="Gemini" width={16} height={16} className="sm:w-5 sm:h-5 opacity-50" />
            </div>
            
            {/* Perplexity Icon */}
            <div className="flex items-center justify-center">
              <Image src="/ai-icons/perplexity.webp" alt="Perplexity" width={16} height={16} className="sm:w-5 sm:h-5 opacity-50" />
            </div>
            
            {/* ChatGPT Icon (Larger with bubble) */}
            <div className="flex items-center justify-center px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 lg:py-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur-sm"></div>
              <div className="relative z-10">
                <Image src="/ai-icons/openai.webp" alt="OpenAI" width={18} height={18} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
            </div>
          </div>
          
          {/* Intro Text */}
          <p className="text-white/70 leading-relaxed text-xs sm:text-sm min-w-0 max-w-2xl whitespace-pre-line flex-1">{data.intro}</p>
        </div>
      </div>

      <div className="space-y-0 relative">
        {data.companies.map((company) => {
          const highlightedParts = highlightText(
            company.description,
            company.positiveHighlights,
            company.negativeHighlights,
            activeType === 'sentiment'
          )

          return (
            <div
              key={`${company.name}-${activeType}`}
              className="rounded-xl px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-5 text-white/90 relative mb-0"
            >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                  <div className="flex-shrink-0 min-w-0">
                    <CompanyName name={company.name} size="lg" />
                  </div>
                  {activeType === 'position' && (
                    <span className="text-xs uppercase tracking-wide text-white/50 font-normal flex-shrink-0">#{company.rank}</span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal break-words">
                  {highlightedParts.map((part, i) => {
                    if (part.type === 'positive') {
                      return (
                        <span key={i} className="text-green-400 font-normal">
                          {part.text}
                        </span>
                      )
                    }
                    if (part.type === 'negative') {
                      return (
                        <span key={i} className="text-red-400 font-normal">
                          {part.text}
                        </span>
                      )
                    }
                    return <span key={i}>{part.text}</span>
                  })}
                </p>
              </div>
            )
          })}

      </div>
          </div>
        </div>
  )
}

