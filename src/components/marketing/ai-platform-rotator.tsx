'use client'

import { useEffect, useState } from 'react'
import Perplexity from '@lobehub/icons/es/Perplexity'
import OpenAI from '@lobehub/icons/es/OpenAI'
import DeepSeek from '@lobehub/icons/es/DeepSeek'
import Claude from '@lobehub/icons/es/Claude'
import MetaAI from '@lobehub/icons/es/MetaAI'
import Copilot from '@lobehub/icons/es/Copilot'
import Grok from '@lobehub/icons/es/Grok'
import Gemini from '@lobehub/icons/es/Gemini'

interface AIPlatformRotatorProps {
  variant?: 'default' | 'muted'
  size?: 'default' | 'large'
}

export function AIPlatformRotator({ variant = 'default', size = 'large' }: AIPlatformRotatorProps) {
  const [currentPlatform, setCurrentPlatform] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isBlurring, setIsBlurring] = useState(false)

  const iconColor = variant === 'muted' ? '#2b2b2b' : 'currentColor'
  const iconSize = size === 'large' ? 0.7 : 0.5
  const textSize = size === 'large' ? 'text-2xl lg:text-2xl' : 'text-3xl lg:text-3xl'

  const platforms = [
    {
      name: 'ChatGPT',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      weight: 'font-medium',
      icon: <OpenAI size={64 * iconSize} style={{ color: iconColor }} />
    },
    {
      name: 'Perplexity',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      weight: 'font-medium',
      icon: <Perplexity size={56 * iconSize} style={{ color: iconColor }} />
    },
    {
      name: 'Claude',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: <Claude.Color size={56 * iconSize} style={{ color: iconColor }} />
    },
    {
      name: 'Gemini',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      weight: 'font-medium',
      icon: <Gemini.Color size={56 * iconSize} style={{ color: iconColor }} />
    },
    {
      name: 'Microsoft Copilot',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: <Copilot.Color size={56 * iconSize} style={{ color: iconColor }} />
    },
    {
      name: 'Google AI Overviews',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      weight: 'font-medium',
      icon: <Gemini.Color size={56 * iconSize} style={{ color: iconColor }} />
    },
    {
      name: '',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: <DeepSeek.Combine size={64 * iconSize} style={{ color: iconColor }} />
    },
    {
      name: '',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: <MetaAI.Combine size={56 * iconSize} style={{ color: iconColor }} />
    },
    {
      name: '',
      color: variant === 'muted' ? '#2b2b2b' : 'text-white',
      icon: <Grok.Combine size={56 * iconSize} style={{ color: iconColor }} />
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
    <div className="relative flex items-center justify-center py-20 px-6">
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
      <div className="w-96 h-20 flex items-center justify-center">
        <div
          className={`flex items-center justify-center space-x-3 transition-all duration-500 text-shadow-muted -ml-35 mt-10 ${
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
            <div aria-hidden className="flex-shrink-0">
              {current.icon}
            </div>
          )}
          {current.name && (
            <span 
              className={`${textSize} ${current.weight || (size === 'large' ? 'font-medium' : 'font-semibold')} leading-tight tracking-tight whitespace-nowrap ${
                variant === 'muted' ? 'text-[#2b2b2b]' : 'text-white'
              }`}
            >
              {current.name}
            </span>
          )}
        </div>
      </div>
      
      {/* CSS for grid animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}


