'use client'

import { motion } from 'framer-motion'
import OpenAI from '@lobehub/icons/es/OpenAI'
import Perplexity from '@lobehub/icons/es/Perplexity'
import { Gemini } from '@lobehub/icons'
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

  positives.forEach((phrase) => {
    const regex = new RegExp(`\\*\\*${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*`, 'gi')
    highlightedText = highlightedText.replace(regex, `__POSITIVE__${phrase}__/POSITIVE__`)
  })

  negatives.forEach((phrase) => {
    const regex = new RegExp(`\\*\\*${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*`, 'gi')
    highlightedText = highlightedText.replace(regex, `__NEGATIVE__${phrase}__/NEGATIVE__`)
  })

  const segments = highlightedText.split(/(__POSITIVE__|__NEGATIVE__|__\/POSITIVE__|__\/NEGATIVE__)/)

  segments.forEach((segment) => {
    if (segment.startsWith('__POSITIVE__')) {
      const text = segment.replace('__POSITIVE__', '')
      if (text) parts.push({ text, type: 'positive' })
    } else if (segment.startsWith('__NEGATIVE__')) {
      const text = segment.replace('__NEGATIVE__', '')
      if (text) parts.push({ text, type: 'negative' })
    } else if (segment === '__/POSITIVE__' || segment === '__/NEGATIVE__') {
    } else if (segment) {
      parts.push({ text: segment, type: 'normal' })
    }
  })

  return parts.length > 0 ? parts : [{ text: highlightedText.replace(/\*\*/g, ''), type: 'normal' as const }]
}

export function AIResponseCard({ data, activeType }: AIResponseCardProps) {
  return (
        <div className="bg-[#050505] border border-transparent rounded-2xl shadow-2xl shadow-black/40 p-8 mt-4 relative overflow-hidden">
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
      {/* Question with AI Platform Icons */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          {/* Gemini Icon - Left */}
          <div className="flex items-center justify-center">
            <Gemini.Color size={20} style={{ color: 'currentColor' }} className="text-white/50" />
          </div>
          
          {/* Perplexity Icon - Middle */}
          <div className="flex items-center justify-center">
            <Perplexity size={20} style={{ color: 'currentColor' }} className="text-white/50" />
          </div>
          
          {/* ChatGPT Icon - Right (Larger with bubble) */}
          <div className="flex items-center justify-center px-3 py-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur-sm"></div>
            <div className="relative z-10">
              <OpenAI size={28} style={{ color: 'currentColor' }} />
            </div>
          </div>
          
          {/* Question Text */}
          <p className="text-white/70 text-2xl ml-2 min-w-0 flex-1">{data.question}</p>
        </div>
        
        {/* Intro Text - Aligned with question, same width */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-[124px]"></div>
          <p className="text-white/70 leading-relaxed text-sm min-w-0 max-w-2xl whitespace-pre-line">{data.intro}</p>
        </div>
      </div>

      <div className="space-y-0 relative">
        {data.companies.map((company, index) => {
          const highlightedParts = highlightText(
            company.description,
            company.positiveHighlights,
            company.negativeHighlights,
            activeType === 'sentiment'
          )

          return (
            <motion.div
              key={`${company.name}-${activeType}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="rounded-xl px-6 pt-5 pb-5 text-white/90 relative mb-0"
            >
                <div className="flex items-center gap-3 mb-3">
                  <CompanyName name={company.name} size="lg" />
                  {activeType === 'position' && (
                    <span className="text-xs uppercase tracking-wide text-white/50 font-normal">#{company.rank}</span>
                  )}
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {highlightedParts.map((part, i) => {
                    if (part.type === 'positive') {
                      return (
                        <span key={i} className="text-green-300 font-medium">
                          {part.text}
                        </span>
                      )
                    }
                    if (part.type === 'negative') {
                      return (
                        <span key={i} className="text-rose-300 font-medium">
                          {part.text}
                        </span>
                      )
                    }
                    return <span key={i}>{part.text}</span>
                  })}
                </p>
              </motion.div>
            )
          })}

      </div>
          </div>
        </div>
  )
}

