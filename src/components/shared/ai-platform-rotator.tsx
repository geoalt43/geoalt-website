'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface AIPlatformRotatorProps {
  variant?: 'default' | 'muted'
  size?: 'default' | 'large'
  copilotNameOverride?: string
  centered?: boolean
}

export function AIPlatformRotator({ variant = 'default', size = 'large', copilotNameOverride, centered = false }: AIPlatformRotatorProps) {
  const [currentPlatform, setCurrentPlatform] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isBlurring, setIsBlurring] = useState(false)

  const getResponsiveSizes = () => {
    if (size === 'large') {
      return {
        baseTextHeight: 32,
        iconHeight: 36,
        textWidth: 120,
      }
    } else {
      return {
        baseTextHeight: 24, // Increased for mobile
        iconHeight: 28, // Increased for mobile
        textWidth: 100, // Increased for mobile
      }
    }
  }

  const baseSizes = getResponsiveSizes()
  const baseTextHeight = baseSizes.baseTextHeight
  const iconHeight = baseSizes.iconHeight
  const iconWidth = iconHeight // Square icons
  const textHeight = baseTextHeight // Consistent text height
  const textWidth = baseSizes.textWidth // Proportional width for text images

  const platforms = [
    {
      name: 'ChatGPT',
      icon: '/ai-icons/openai.webp',
      hasText: false
    },
    {
      name: 'Perplexity',
      icon: '/ai-icons/perplexity.webp',
      text: '/ai-icons/perplexity-text.webp',
      hasText: true
    },
    {
      name: 'Claude',
      icon: '/ai-icons/claude-color.webp',
      text: '/ai-icons/claude-text.webp',
      hasText: true
    },
    {
      name: 'Gemini',
      icon: '/ai-icons/gemini-color.webp',
      text: '/ai-icons/gemini-text.webp',
      hasText: true
    },
    {
      name: copilotNameOverride || 'Microsoft Copilot',
      icon: '/ai-icons/copilot-color.webp',
      hasText: false
    },
    {
      name: 'Google AI Overviews',
      icon: '/ai-icons/gemini-color.webp',
      text: '/ai-icons/gemini-text.webp',
      hasText: true
    },
    {
      name: '',
      icon: '/ai-icons/deepseek.webp',
      text: '/ai-icons/deepseek-text.webp',
      hasText: true
    },
    {
      name: '',
      icon: '/ai-icons/metaai-color.webp',
      text: '/ai-icons/metaai-text.webp',
      hasText: true
    },
    {
      name: '',
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

  const rotatorContent = (
    <div
      className={`flex items-center justify-center space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-3 transition-all duration-500 text-shadow-muted ${
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
        <div aria-hidden className="flex-shrink-0 flex items-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2">
          {/* Icon: ~10% larger than text height */}
          <Image
            src={current.icon}
            alt={`${current.name || 'AI platform'} icon`}
            width={iconWidth}
            height={iconHeight}
            className="object-contain w-auto h-[20px] sm:h-[24px] md:h-[26px] lg:h-[36px] xl:h-[42px] max-w-full"
          />
          {current.hasText && current.text && (
            <Image
              src={current.text}
              alt={`${current.name || 'AI platform'} logo text`}
              width={textWidth}
              height={textHeight}
              className="object-contain w-auto h-[20px] sm:h-[24px] md:h-[26px] lg:h-[36px] xl:h-[42px] max-w-full"
            />
          )}
        </div>
      )}
      {current.name && !current.hasText && (
        <span
          className={`h-[20px] sm:h-[24px] md:h-[26px] lg:h-[30px] flex items-center text-sm sm:text-base md:text-lg lg:text-3xl xl:text-4xl font-medium leading-tight tracking-tight whitespace-nowrap ${
            variant === 'muted' ? 'text-[#2b2b2b]' : 'text-white'
          }`}
        >
          {current.name}
        </span>
      )}
    </div>
  )

  return (
    <div className="relative w-full flex items-center justify-center py-2 sm:py-4 md:py-6 lg:py-16 xl:py-20 mt-4 sm:mt-6 md:mt-8 lg:mt-0 mb-4 sm:mb-6 md:mb-8 lg:mb-0">
      {/* Animated Background Elements (only for default variant) */}
      {variant === 'default' && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Animated lines */}
          <div className="absolute inset-0 flex flex-col items-center pointer-events-none">
            {/* <div className="absolute top-[0%] w-full max-w-[100px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[240px] xl:max-w-[300px] h-px bg-gradient-to-r from-transparent via-[#828282] to-transparent opacity-30 animate-pulse"></div> */}
            {/* <div className="absolute top-[37%] w-full max-w-[100px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[240px] xl:max-w-[300px] h-px bg-gradient-to-r from-transparent via-[#828282] to-transparent opacity-25 animate-pulse animation-delay-1500"></div> */}
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full grid-overlay-muted"></div>
          </div>
        </div>
      )}
      
      {/* Responsive width container to prevent shaking */}
      <div className={centered ? "absolute top-[17%] -translate-y-1/2 w-full flex justify-center z-10" : "flex justify-center w-full"}>
        <div className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[400px] xl:max-w-[480px] h-8 sm:h-10 md:h-12 lg:h-20 xl:h-24 flex items-center justify-center">
          {rotatorContent}
        </div>
      </div>
    </div>
  )
}


