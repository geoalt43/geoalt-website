'use client'

import type { ReactElement } from 'react'
import Image from 'next/image'
import { getPlatformIcon } from '@/lib/utils/platform-icons'

interface FeatureTextProps {
  text: string
}

export function FeatureText({ text }: FeatureTextProps) {
  if (text === 'Access to 3 models') {
    return (
      <span className="flex items-center gap-2">
        <span>Access to 3 models</span>
        <div className="flex items-center gap-0.5">
          <Image
            src="/ai-icons/openai.webp"
            alt="OpenAI"
            width={18}
            height={18}
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-[18px] md:h-[18px] opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/ai-icons/perplexity.webp"
            alt="Perplexity"
            width={18}
            height={18}
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-[18px] md:h-[18px] opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/ai-icons/gemini-color.webp"
            alt="Gemini"
            width={18}
            height={18}
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-[18px] md:h-[18px] opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </span>
    )
  }
  
  if (text.includes('Access to 1 model') && text.includes('ChatGPT')) {
    return (
      <span className="flex items-center gap-2">
        <span>Access to 1 model</span>
        <div className="flex items-center gap-0.5">
          <Image
            src="/ai-icons/openai.webp"
            alt="OpenAI"
            width={18}
            height={18}
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-[18px] md:h-[18px] opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </span>
    )
  }
  
  const platformRegex = /(ChatGPT|Gemini|Perplexity)/gi
  const parts: (string | ReactElement)[] = []
  let lastIndex = 0
  let match
  
  platformRegex.lastIndex = 0
  
  while ((match = platformRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    
    const platformName = match[0]
    const icon = getPlatformIcon(platformName)
    
    if (icon) {
      parts.push(
        <span key={`${match.index}-${platformName}`} className="inline-flex items-center gap-1.5">
          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0">
            {icon}
          </span>
          <span>{platformName}</span>
        </span>
      )
    } else {
      parts.push(platformName)
    }
    
    lastIndex = match.index + match[0].length
  }
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }
  
  return parts.length > 1 ? <span>{parts}</span> : <span>{text}</span>
}

