// FeatureText component - extracted from pricing-section
// Maintains exact same functionality and output

'use client'

import type { ReactElement } from 'react'
import Image from 'next/image'
import { getPlatformIcon } from '@/lib/utils/platform-icons'

interface FeatureTextProps {
  text: string
}

export function FeatureText({ text }: FeatureTextProps) {
  // Special handling for "Access to 3 models" - Pro card: show OpenAI, Perplexity, Gemini icons
  if (text === 'Access to 3 models') {
    const iconSize = 18
    
    return (
      <span className="flex items-center gap-2">
        <span>Access to 3 models</span>
        {/* Icons only - very small gap between them */}
        <div className="flex items-center gap-0.5">
          <Image
            src="/ai-icons/openai.webp"
            alt="OpenAI"
            width={iconSize}
            height={iconSize}
            className="opacity-80 hover:opacity-100 transition-opacity"
            unoptimized
          />
          <Image
            src="/ai-icons/perplexity.webp"
            alt="Perplexity"
            width={iconSize}
            height={iconSize}
            className="opacity-80 hover:opacity-100 transition-opacity"
            unoptimized
          />
          <Image
            src="/ai-icons/gemini-color.webp"
            alt="Gemini"
            width={iconSize}
            height={iconSize}
            className="opacity-80 hover:opacity-100 transition-opacity"
            unoptimized
          />
        </div>
      </span>
    )
  }
  
  // Special handling for "Access to 1 model (ChatGPT)"
  // Basic card: only show ChatGPT icon
  if (text.includes('Access to 1 model') && text.includes('ChatGPT')) {
    const iconSize = 18
    
    return (
      <span className="flex items-center gap-2">
        <span>Access to 1 model</span>
        {/* Icons only - same style as "Access to 3 models" */}
        <div className="flex items-center gap-0.5">
          <Image
            src="/ai-icons/openai.webp"
            alt="OpenAI"
            width={iconSize}
            height={iconSize}
            className="opacity-80 hover:opacity-100 transition-opacity"
            unoptimized
          />
        </div>
      </span>
    )
  }
  
  // Default handling for other features
  // Split text by platform names (case-insensitive)
  const platformRegex = /(ChatGPT|Gemini|Perplexity)/gi
  const parts: (string | ReactElement)[] = []
  let lastIndex = 0
  let match
  
  // Reset regex
  platformRegex.lastIndex = 0
  
  while ((match = platformRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    
    // Add icon and platform name
    const platformName = match[0]
    const icon = getPlatformIcon(platformName)
    
    if (icon) {
      parts.push(
        <span key={`${match.index}-${platformName}`} className="inline-flex items-center gap-1.5">
          {icon}
          <span>{platformName}</span>
        </span>
      )
    } else {
      parts.push(platformName)
    }
    
    lastIndex = match.index + match[0].length
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }
  
  // If we found platforms, return the parts, otherwise return original text
  return parts.length > 1 ? <span>{parts}</span> : <span>{text}</span>
}

