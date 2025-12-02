// Platform icon utility - extracted from pricing-section
// Maintains exact same functionality and output

import Image from 'next/image'
import type { ReactElement } from 'react'

export function getPlatformIcon(platformName: string, iconSize: number = 16): ReactElement | null {
  const normalizedName = platformName.toLowerCase().trim()
  
  if (normalizedName.includes('chatgpt') || normalizedName.includes('openai')) {
    return (
      <Image
        src="/ai-icons/openai.webp"
        alt="OpenAI"
        width={iconSize}
        height={iconSize}
        className="flex-shrink-0"
        unoptimized
      />
    )
  }
  if (normalizedName.includes('gemini') || normalizedName.includes('google')) {
    return (
      <Image
        src="/ai-icons/gemini-color.webp"
        alt="Gemini"
        width={iconSize}
        height={iconSize}
        className="flex-shrink-0"
        unoptimized
      />
    )
  }
  if (normalizedName.includes('perplexity')) {
    return (
      <Image
        src="/ai-icons/perplexity.webp"
        alt="Perplexity"
        width={iconSize}
        height={iconSize}
        className="flex-shrink-0"
        unoptimized
      />
    )
  }
  if (normalizedName.includes('claude')) {
    return (
      <Image
        src="/ai-icons/claude-color.webp"
        alt="Claude"
        width={iconSize}
        height={iconSize}
        className="flex-shrink-0"
        unoptimized
      />
    )
  }
  if (normalizedName.includes('grok')) {
    return (
      <Image
        src="/ai-icons/grok.webp"
        alt="Grok"
        width={iconSize}
        height={iconSize}
        className="flex-shrink-0"
        unoptimized
      />
    )
  }
  return null
}





