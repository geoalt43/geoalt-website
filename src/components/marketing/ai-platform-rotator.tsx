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

  // Responsive sizing: scales down on mobile, medium on tablet, full on desktop
  // Mobile: smaller sizes, Desktop: larger sizes
  const getResponsiveSizes = () => {
    if (size === 'large') {
      // Mobile-first approach: smaller on mobile, larger on desktop
      return {
        baseTextHeight: 24, // Mobile base
        iconHeight: 26, // Mobile icon
        textWidth: 90, // Mobile text width
        // These will be overridden by CSS classes for larger screens
      }
    } else {
      return {
        baseTextHeight: 18,
        iconHeight: 20,
        textWidth: 80,
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
      name: 'Microsoft Copilot',
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

  return (
    <div className="relative flex items-center justify-center py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-2 sm:px-4 md:px-6">
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
      
      {/* Responsive width container to prevent shaking */}
      <div className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[400px] xl:max-w-[480px] h-10 sm:h-12 md:h-14 lg:h-20 xl:h-24 flex items-center justify-center">
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
                className="object-contain w-auto h-[21px] sm:h-[23px] md:h-[25px] lg:h-[36px] xl:h-[42px]"
                style={{ maxWidth: '100%' }}
              />
              {current.hasText && current.text && (
                <Image
                  src={current.text}
                  alt={`${current.name || 'AI platform'} logo text`}
                  width={textWidth}
                  height={textHeight}
                  className="object-contain w-auto h-[19px] sm:h-[21px] md:h-[23px] lg:h-[32px] xl:h-[38px]"
                  style={{ maxWidth: '100%' }}
                />
              )}
            </div>
          )}
          {current.name && !current.hasText && (
            <span
              className={`${size === 'large' ? 'text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl' : 'text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl'} font-medium leading-tight tracking-tight whitespace-nowrap ${
                variant === 'muted' ? 'text-[#2b2b2b]' : 'text-white'
              }`}
            >
              {current.name}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}


