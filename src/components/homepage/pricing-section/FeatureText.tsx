'use client'

import { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import Image from 'next/image'
import { getPlatformIcon } from '@/lib/utils/platform-icons'
import { useTheme } from 'next-themes'

interface FeatureTextProps {
  text: string
}

export function FeatureText({ text }: FeatureTextProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  if (text === 'Access to 3 models') {
    return (
      <span className="flex items-center gap-2">
        <span>Access to 3 models</span>
        <div className="flex items-center -space-x-1.5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-10">
            <Image
              src='/ai-icons/openai-light.svg'
              alt="OpenAI"
              width={18}
              height={18}
              unoptimized
              className="w-5 h-5 sm:w-[20px] sm:h-[20px] brightness-0"
            />
          </div>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-20 shadow-[-2px_0_4px_rgba(0,0,0,0.15)]">
            <Image
              src='/ai-icons/perplexity-light.svg'
              alt="Perplexity"
              width={18}
              height={18}
              unoptimized
              className="w-5 h-5 sm:w-[20px] sm:h-[20px] brightness-0"
            />
          </div>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center border border-gray-200 relative z-30 shadow-[-2px_0_4px_rgba(0,0,0,0.15)]">
            <Image
              src='/ai-icons/gemini-color.webp'
              alt="Gemini"
              width={18}
              height={18}
              unoptimized
              className="w-5 h-5 sm:w-[20px] sm:h-[20px]"
            />
          </div>
        </div>
      </span>
    )
  }
  
  if (text.includes('Access to 1 model') && text.includes('ChatGPT')) {
    return (
      <span className="flex items-center gap-2">
        <span>Access to 1 model</span>
        <div className="flex items-center">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center border border-gray-200">
            <Image
              src='/ai-icons/openai-light.svg'
              alt="OpenAI"
              width={18}
              height={18}
              unoptimized
              className="w-5 h-5 sm:w-[20px] sm:h-[20px] brightness-0"
            />
          </div>
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

