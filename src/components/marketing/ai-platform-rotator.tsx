'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface AIPlatformRotatorProps {
  variant?: 'default' | 'muted'
  size?: 'default' | 'large'
}

export function AIPlatformRotator({ variant = 'default', size = 'large' }: AIPlatformRotatorProps) {
  const [currentPlatform, setCurrentPlatform] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isBlurring, setIsBlurring] = useState(false)

  // Consistent sizing: text height is base, icon is 5% larger
  const baseTextHeight = size === 'large' ? 40 : 22
  const iconHeight = Math.round(baseTextHeight * 1.05) // 5% larger than text
  const iconWidth = iconHeight // Square icons
  const textHeight = baseTextHeight // Consistent text height
  const textWidth = size === 'large' ? 140 : 110 // Proportional width for text images

  const platforms = [
    {
      name: 'ChatGPT',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      weight: 'font-medium',
      icon: '/ai-icons/openai.webp',
      hasText: false
    },
    {
      name: 'Perplexity',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      weight: 'font-medium',
      icon: '/ai-icons/perplexity.webp',
      text: '/ai-icons/perplexity-text.webp',
      hasText: true
    },
    {
      name: 'Claude',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: '/ai-icons/claude-color.webp',
      text: '/ai-icons/claude-text.webp',
      hasText: true
    },
    {
      name: 'Gemini',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      weight: 'font-medium',
      icon: '/ai-icons/gemini-color.webp',
      text: '/ai-icons/gemini-text.webp',
      hasText: true
    },
    {
      name: 'Microsoft Copilot',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: '/ai-icons/copilot-color.webp',
      hasText: false
    },
    {
      name: 'Google AI Overviews',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      weight: 'font-medium',
      icon: '/ai-icons/gemini-color.webp',
      text: '/ai-icons/gemini-text.webp',
      hasText: true
    },
    {
      name: '',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: '/ai-icons/deepseek.webp',
      text: '/ai-icons/deepseek-text.webp',
      hasText: true
    },
    {
      name: '',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: '/ai-icons/metaai-color.webp',
      text: '/ai-icons/metaai-text.webp',
      hasText: true
    },
    {
      name: '',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: '/ai-icons/grok.webp',
      text: '/ai-icons/grok-text.webp',
      hasText: true
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlurring(true)
      setTimeout(() => {
        setCurrentPlatform((prev) => (prev + 1) % platforms.length)
        setIsBlurring(false)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [platforms.length])

  const current = platforms[currentPlatform]

  return (
    <div className="relative flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Animated Background Elements (only for default variant) */}
      {variant === 'default' && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Animated lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#828282] to-transparent opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#828282] to-transparent opacity-25 animate-pulse animation-delay-1500"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full grid-overlay-muted"></div>
          </div>
        </div>
      )}
      
      {/* Fixed width container to prevent shaking */}
      <div className="w-full sm:w-80 lg:w-96 h-16 sm:h-20 flex items-center justify-center">
        <div
          className={`flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-500 text-shadow-muted ${
            isBlurring ? 'opacity-20' : 'opacity-100'
          } ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'} ${
            variant === 'muted'
              ? isBlurring
                ? 'filter-muted-blur text-[#2b2b2b]'
                : 'filter-muted-base text-[#2b2b2b]'
              : isBlurring
                  ? 'filter-default-blur text-white'
                  : 'filter-none text-white'
          }`}
        >
          {current.icon && (
            <div aria-hidden className="flex-shrink-0 flex items-center gap-2">
              <Image
                src={current.icon}
                alt=""
                width={iconWidth}
                height={iconHeight}
                className="object-contain"
                style={{ height: `${iconHeight}px`, width: 'auto' }}
              />
              {current.hasText && current.text && (
                <Image
                  src={current.text}
                  alt=""
                  width={textWidth}
                  height={textHeight}
                  className="object-contain"
                  style={{ height: `${textHeight}px`, width: 'auto' }}
                />
              )}
            </div>
          )}
          {current.name && !current.hasText && (
            <span 
              className={`${size === 'large' ? 'text-2xl' : 'text-xl'} font-medium leading-tight tracking-tight whitespace-nowrap ${
                variant === 'muted' ? 'text-[#2b2b2b]' : 'text-white'
              }`}
              style={{ fontSize: `${baseTextHeight}px`, lineHeight: '1' }}
            >
              {current.name}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}


