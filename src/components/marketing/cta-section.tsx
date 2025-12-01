'use client'

import { DemoCTA } from './demo-cta'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// Vertical Flowing AI Platform Rotator for CTA Section
function VerticalFlowingRotator() {
  // Consistent sizing: text height is base, icon is 5% larger
  const baseTextHeight = 18
  const iconHeight = Math.round(baseTextHeight * 1.05) // 5% larger than text
  const iconWidth = iconHeight // Square icons
  const textHeight = baseTextHeight // Consistent text height
  const textWidth = 100 // Proportional width for text images

  const platforms = [
    {
      name: 'ChatGPT',
      icon: '/ai-icons/openai.webp',
      hasText: false,
      weight: 'font-medium',
    },
    {
      name: 'Perplexity',
      icon: '/ai-icons/perplexity.webp',
      text: '/ai-icons/perplexity-text.webp',
      hasText: true,
      weight: 'font-medium',
    },
    {
      name: 'Claude',
      icon: '/ai-icons/claude-color.webp',
      text: '/ai-icons/claude-text.webp',
      hasText: true,
    },
    {
      name: 'Gemini',
      icon: '/ai-icons/gemini-color.webp',
      text: '/ai-icons/gemini-text.webp',
      hasText: true,
      weight: 'font-medium',
    },
    {
      name: 'Microsoft Copilot',
      icon: '/ai-icons/copilot-color.webp',
      hasText: false,
    },
    {
      name: 'Google AI Overviews',
      icon: '/ai-icons/gemini-color.webp',
      text: '/ai-icons/gemini-text.webp',
      hasText: true,
      weight: 'font-medium',
    },
    {
      name: '',
      icon: '/ai-icons/deepseek.webp',
      text: '/ai-icons/deepseek-text.webp',
      hasText: true,
    },
    {
      name: '',
      icon: '/ai-icons/metaai-color.webp',
      text: '/ai-icons/metaai-text.webp',
      hasText: true,
    },
    {
      name: '',
      icon: '/ai-icons/grok.webp',
      text: '/ai-icons/grok-text.webp',
      hasText: true,
    }
  ]

  // Fixed height to show exactly 3 platforms at a time
  const itemHeight = 60
  const visibleHeight = itemHeight * 3 // 3 platforms visible
  const totalHeight = platforms.length * itemHeight

  // Duplicate platforms for seamless infinite loop
  const duplicatedPlatforms = [...platforms, ...platforms]

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height: `${visibleHeight}px`,
      }}
    >
      <motion.div
        className="flex flex-col items-start"
        style={{
          gap: '0.25rem',
        }}
        animate={{
          y: [0, -totalHeight],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedPlatforms.map((platform, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 flex-shrink-0"
            style={{ 
              height: `${itemHeight}px`,
              minHeight: `${itemHeight}px`,
            }}
          >
            {platform.icon && (
              <div className="flex-shrink-0 filter-muted-base flex items-center gap-2">
                <Image
                  src={platform.icon}
                  alt=""
                  width={iconWidth}
                  height={iconHeight}
                  className="object-contain"
                  style={{ height: `${iconHeight}px`, width: 'auto' }}
                />
                {platform.hasText && platform.text && (
                  <Image
                    src={platform.text}
                    alt=""
                    width={textWidth}
                    height={textHeight}
                    className="object-contain"
                    style={{ height: `${textHeight}px`, width: 'auto' }}
                  />
                )}
              </div>
            )}
            {platform.name && !platform.hasText && (
              <span 
                className="font-medium text-[#2b2b2b] text-[18px] leading-[1] tracking-tight whitespace-nowrap"
              >
                {platform.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function CTASection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-3 lg:px-8 border border-[#1d1d1d] rounded-lg bg-[#0a0a0a]"
      >
        <div className="bg-[#0a0a0a] rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center lg:items-center">
          {/* Left Section - Text Content */}
          <div className="flex-1 lg:pr-8 w-full lg:w-auto text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-3 sm:mb-4 leading-tight tracking-wide">
              <span className="pb-2 inline-block">
                Start Growing Your
              </span>
              <br className="hidden sm:block" />
              <span>
                AI Visibility Today
              </span>
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed tracking-wide text-center lg:text-left text-[#898989]">
              GE<Image src="/ai-icons/openai.webp" alt="" width={18} height={18} className="mx-0.5 sm:w-5 sm:h-5 inline-block align-middle" />Alt helps you lead in AI search and scale your brand faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="https://forms.google.com/YOUR_FORM_ID_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#d9d9d9] transition-all duration-200 ease-in-out inline-block text-center w-full sm:w-auto"
              >
                Start Free Trial
              </a>
              <DemoCTA 
                text="Contact Us" 
                variant="outline" 
                size="md"
                showModal={false}
              />
            </div>
          </div>
          
          {/* Right Section - AI Platform Rotator */}
          <div className="flex-shrink-0 w-full sm:w-[300px] lg:w-[450px] h-[250px] sm:h-[300px] lg:h-[350px] flex items-center justify-center lg:justify-start lg:-ml-24 lg:-mr-9 relative overflow-hidden lg:overflow-visible">
            <div className="relative w-full h-full">
              <div className="relative w-full h-full">
                {/* Card Container */}
                <div 
                  className="relative w-full h-full bg-[#0a0a0a] rounded-lg pt-1 pb-1 pl-4 sm:pl-6 lg:pl-10 pr-2 sm:pr-4 lg:pr-0 mt-4 sm:mt-6 lg:mt-10 overflow-hidden"
                  style={{
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Gradient masks for fade effect at top and bottom */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-transparent z-10 pointer-events-none" />
                  
                  <div className="scale-[1.2] sm:scale-[1.5] lg:scale-[2] origin-left overflow-hidden" style={{ height: '100%', width: '100%' }}>
                    <VerticalFlowingRotator />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

