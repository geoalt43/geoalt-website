'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Plus, Mic, ArrowUp } from 'lucide-react'
import { AIResponseData } from './types'
import { CompanyName } from './company-name'
import { useTheme } from 'next-themes'


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

  positives.forEach((phrase) => {
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`\\*\\*(${escapedPhrase})\\*\\*`, 'gi')
    highlightedText = highlightedText.replace(regex, '__POSITIVE__$1__/POSITIVE__')
  })

  negatives.forEach((phrase) => {
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`\\*\\*(${escapedPhrase})\\*\\*`, 'gi')
    highlightedText = highlightedText.replace(regex, '__NEGATIVE__$1__/NEGATIVE__')
  })

  highlightedText = highlightedText.replace(/\*\*/g, '')

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

const aiPlatformsDark = [
  { icon: '/ai-icons/openai.webp', alt: 'OpenAI' },
  { icon: '/ai-icons/gemini-color.webp', alt: 'Gemini' },
  { icon: '/ai-icons/perplexity.webp', alt: 'Perplexity' },
  { icon: '/ai-icons/claude-color.webp', alt: 'Claude' },
  { icon: '/ai-icons/grok.webp', alt: 'Grok' },
  { icon: '/ai-icons/copilot-color.webp', alt: 'Copilot' },
]

const aiPlatformsLight = [
  { icon: '/ai-icons/openai-light.svg', alt: 'OpenAI' },
  { icon: '/ai-icons/gemini-light mode.svg', alt: 'Gemini' },
  { icon: '/ai-icons/perplexity-light.svg', alt: 'Perplexity' },
  { icon: '/ai-icons/claude-light.svg', alt: 'Claude' },
  { icon: '/ai-icons/grok-light.svg', alt: 'Grok' },
  { icon: '/ai-icons/copilot-light.svg', alt: 'Copilot' },
]

function FloatingBubble({ icon, alt, left, delay, drift }: { icon: string; alt: string; left: number; delay: number; drift: number }) {
  return (
    <div
      className="absolute pointer-events-none animate-float-up"
      style={{ 
        left: `${left}%`, 
        bottom: 0,
        animationDelay: `${delay}s`,
        '--drift': `${drift}px`
      } as React.CSSProperties}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white/10 rounded-full blur-md sm:blur-lg"></div>
        <Image
          src={icon}
          alt={alt}
          width={40}
          height={40}
          quality={100}
          className="relative z-10 w-6 h-6 sm:w-10 sm:h-10"
        />
      </div>
    </div>
  )
}

export function AIResponseCard({ data, activeType }: AIResponseCardProps) {
  const [bubbles, setBubbles] = useState<Array<{ icon: string; alt: string; left: number; delay: number; drift: number; id: number }>>([])
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'
  const aiPlatforms = isLightTheme ? aiPlatformsLight : aiPlatformsDark

  useEffect(() => {
    const createBubble = () => {
      const platform = aiPlatforms[Math.floor(Math.random() * aiPlatforms.length)]
      const newBubble = {
        icon: platform.icon,
        alt: platform.alt,
        left: 10 + Math.random() * 80,
        delay: 0,
        drift: Math.random() * 20 - 10,
        id: Date.now() + Math.random()
      }
      setBubbles(prev => [...prev, newBubble])

      setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.id !== newBubble.id))
      }, 12000)
    }

    for (let i = 0; i < 3; i++) {
      setTimeout(() => createBubble(), i * 2000)
    }

    const interval = setInterval(() => {
      createBubble()
    }, 3000)

    return () => clearInterval(interval)
  }, [aiPlatforms])

  return (
    <div
      className={`bg-[var(--color-card-bg)] border ${isLightTheme ? 'border-neutral-300' : 'border-transparent'} rounded-lg shadow-2xl shadow-[var(--color-ref-036)] p-2 sm:p-6 lg:p-8 mt-0 relative overflow-hidden h-full`}
    >
      <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
        {bubbles.map((bubble) => (
          <FloatingBubble key={bubble.id} {...bubble} />
        ))}
      </div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500/10 to-blue-500/20 animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-0 h-9 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-9 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      {/* Fade Effects on Edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[var(--color-card-bg)] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--color-card-bg)] to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[var(--color-card-bg)] to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[var(--color-card-bg)] to-transparent"></div>
      </div>
      <div className="relative z-20">
        {/* Question - Search Input Style */}
        <div className="mb-3 sm:mb-4 md:mb-4">
          <div className="mb-2 sm:mb-2 md:mb-2">
            <div className="flex flex-col items-end">
              <div className="flex flex-row items-center gap-1 sm:gap-3 md:gap-3 pb-2 sm:pb-3 md:pb-3 justify-end">
                {/* AI Platform Icons */}
                <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-2 flex-shrink-0 -mt-0.5 sm:-mt-1 md:-mt-1">
                  {/* Gemini Icon */}
                  <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5">
                    <Image src={isLightTheme ? '/ai-icons/gemini-light mode.svg' : '/ai-icons/gemini-color.webp'} alt="Gemini" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 opacity-50" />
                  </div>

                  {/* Perplexity Icon */}
                  <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5">
                    <Image src={isLightTheme ? '/ai-icons/perplexity-light.svg' : '/ai-icons/perplexity.webp'} alt="Perplexity" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 opacity-50" />
                  </div>

                  {/* ChatGPT Icon (Larger with bubble) */}
                  <div className="flex items-center justify-center px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 md:py-1 lg:py-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur-sm"></div>
                    <div className="relative z-10">
                      <Image src={isLightTheme ? '/ai-icons/openai-light.svg' : '/ai-icons/openai.webp'} alt="OpenAI" width={18} height={18} className="sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    </div>
                  </div>
                </div>

                {/* Search Input Style Question */}
                <div className={`flex items-center gap-1.5 sm:gap-2 border ${isLightTheme ? 'border-neutral-300' : 'border-white/15'} rounded-full px-1.5 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-1.5 bg-black/5 dark:bg-white/5`}>
                  {/* Plus icon - left */}
                  <div className="flex-shrink-0 text-text-secondary">
                    <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />
                  </div>

                  {/* Question Text */}
                  <span className="text-text-primary text-[11px] sm:text-xs md:text-sm leading-normal">{data.question}</span>

                  {/* Right icons - mic & send */}
                  <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                    <div className="text-text-secondary">
                      <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />
                    </div>
                    <div className="bg-black dark:bg-white rounded-full p-0.5 sm:p-1">
                      <ArrowUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white dark:text-black" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                className="rounded-xl px-4 sm:px-6 md:px-6 pt-2 sm:pt-3 md:pt-3 pb-2 sm:pb-3 md:pb-3 text-text-primary relative mb-0"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-3 mb-1">
                  <div className="flex-shrink-0 min-w-0">
                    <CompanyName name={company.name} size="lg" />
                  </div>
                  {activeType === 'position' && (
                    <span className="text-xs uppercase tracking-wide text-text-secondary font-normal flex-shrink-0">#{company.rank}</span>
                  )}
                </div>
                <p className={`text-xs sm:text-sm md:text-sm ${isLightTheme ? 'text-text-secondary' : 'text-text-description'} leading-relaxed font-normal break-words`}>
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
