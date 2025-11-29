'use client'

import { DemoCTA } from './demo-cta'
import OpenAI from '@lobehub/icons/es/OpenAI'
import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Perplexity from '@lobehub/icons/es/Perplexity'
import DeepSeek from '@lobehub/icons/es/DeepSeek'
import Claude from '@lobehub/icons/es/Claude'
import MetaAI from '@lobehub/icons/es/MetaAI'
import Copilot from '@lobehub/icons/es/Copilot'
import Grok from '@lobehub/icons/es/Grok'
import Gemini from '@lobehub/icons/es/Gemini'

// Vertical Flowing AI Platform Rotator for CTA Section
function VerticalFlowingRotator() {
  const iconColor = '#2b2b2b'
  const iconSize = 0.4
  const textSize = 'text-base'

  const platforms = [
    {
      name: 'ChatGPT',
      icon: <OpenAI size={64 * iconSize} style={{ color: iconColor }} />,
      weight: 'font-medium',
    },
    {
      name: 'Perplexity',
      icon: <Perplexity size={56 * iconSize} style={{ color: iconColor }} />,
      weight: 'font-medium',
    },
    {
      name: 'Claude',
      icon: <Claude.Color size={56 * iconSize} style={{ color: iconColor }} />,
    },
    {
      name: 'Gemini',
      icon: <Gemini.Color size={56 * iconSize} style={{ color: iconColor }} />,
      weight: 'font-medium',
    },
    {
      name: 'Microsoft Copilot',
      icon: <Copilot.Color size={56 * iconSize} style={{ color: iconColor }} />,
    },
    {
      name: 'Google AI Overviews',
      icon: <Gemini.Color size={56 * iconSize} style={{ color: iconColor }} />,
      weight: 'font-medium',
    },
    {
      name: '',
      icon: <DeepSeek.Combine size={64 * iconSize} style={{ color: iconColor }} />,
    },
    {
      name: '',
      icon: <MetaAI.Combine size={56 * iconSize} style={{ color: iconColor }} />,
    },
    {
      name: '',
      icon: <Grok.Combine size={56 * iconSize} style={{ color: iconColor }} />,
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
              <div className="flex-shrink-0 filter-muted-base">
                {platform.icon}
              </div>
            )}
            {platform.name && (
              <span className={`${textSize} ${platform.weight || 'font-medium'} text-[#2b2b2b] leading-tight tracking-tight whitespace-nowrap`}>
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
    },
  }

  return (
    <section ref={sectionRef} className="pt-24 pb-40">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 pt-3 pb-3 lg:px-8 border border-[#1d1d1d] rounded-2xl bg-[#0d0d0d]"
      >
        <div className="bg-[#0d0d0d] rounded-2xl p-8 flex items-center">
          {/* Left Section - Text Content */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 pr-8"
          >
            <motion.h2 
              variants={textVariants}
              className="text-4xl font-normal text-white mb-4 leading-tight tracking-wide"
            >
              <motion.span 
                variants={textVariants}
                className="pb-2 inline-block"
              >
                Start Growing Your
              </motion.span>
              <br />
              <motion.span 
                variants={textVariants}
              >
                AI Visibility Today
              </motion.span>
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="text-lg mb-8 leading-relaxed tracking-wide flex items-center text-[#898989]"
            >
              GE<OpenAI size={20} className="mx-0.5" />Alt helps you lead in AI search and scale your brand faster.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://forms.google.com/YOUR_FORM_ID_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#d9d9d9] transition-all duration-200 ease-in-out inline-block text-center"
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
          </motion.div>
          
          {/* Right Section - AI Platform Rotator */}
          <motion.div 
            variants={itemVariants}
            className="flex-shrink-0 w-[450px] h-[350px] flex items-center justify-start -ml-24 -mr-9 relative overflow-visible"
          >
            <div className="relative w-full h-full">
              <div className="relative w-full h-full">
                {/* Card Container */}
                <motion.div 
                  variants={itemVariants}
                  className="relative w-full h-full bg-[#0d0d0d] rounded-2xl pt-1 pb-1 pl-10 pr-0 mt-10 overflow-hidden"
                  style={{
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Gradient masks for fade effect at top and bottom */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-transparent z-10 pointer-events-none" />
                  
                  <div className="scale-[2] origin-left" style={{ height: '100%' }}>
                    <VerticalFlowingRotator />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

