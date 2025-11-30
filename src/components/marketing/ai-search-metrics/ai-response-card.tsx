'use client'

import { motion } from 'framer-motion'
import OpenAI from '@lobehub/icons/es/OpenAI'
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
        <div className="bg-[#050505] border border-transparent rounded-2xl shadow-2xl shadow-black/40 p-8 mt-4 relative">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3 text-white/80 text-sm flex-1">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring' as const,
              stiffness: 200,
              damping: 15,
            }}
            className="flex items-center justify-center flex-shrink-0"
          >
            <OpenAI size={32} style={{ color: 'currentColor' }} />
          </motion.div>
          <p className="text-white/70 leading-relaxed">{data.intro}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm ml-4 flex-shrink-0"
        >
          {data.question}
        </motion.div>
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
              className="rounded-xl p-6 text-white/90 relative mb-0"
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
  )
}

