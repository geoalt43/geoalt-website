'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { OpenAI } from '@lobehub/icons'
import { Perplexity } from '@lobehub/icons'
import { Grok } from '@lobehub/icons'
import { Claude } from '@lobehub/icons'
import { Gemini } from '@lobehub/icons'

const CheckIcon = () => (
  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40 text-white text-xs font-semibold">
    ✓
  </span>
)

// Helper function to get icon for AI platform
const getPlatformIcon = (platformName: string, iconSize: number = 16) => {
  const iconColor = 'currentColor'
  
  const normalizedName = platformName.toLowerCase().trim()
  
  if (normalizedName.includes('chatgpt') || normalizedName.includes('openai')) {
    return <OpenAI size={iconSize} style={{ color: iconColor }} className="flex-shrink-0" />
  }
  if (normalizedName.includes('gemini') || normalizedName.includes('google')) {
    return <Gemini.Color size={iconSize} style={{ color: iconColor }} className="flex-shrink-0" />
  }
  if (normalizedName.includes('perplexity')) {
    return <Perplexity size={iconSize} style={{ color: iconColor }} className="flex-shrink-0" />
  }
  if (normalizedName.includes('grok')) {
    return <Grok.Combine size={iconSize} style={{ color: iconColor }} className="flex-shrink-0" />
  }
  return null
}

// Component to render feature text with icons
const FeatureText = ({ text }: { text: string }) => {
  // Special handling for "Access to all models" - show icons only with blur effect
  if (text === 'Access to all models') {
    const iconSize = 18
    
    return (
      <span className="flex items-center gap-2">
        <span>Access to all models</span>
        {/* Icons only - very small gap between them */}
        <div className="flex items-center gap-0.5">
          <OpenAI size={iconSize} className="opacity-80 hover:opacity-100 transition-opacity" />
          <Perplexity size={iconSize} className="opacity-80 hover:opacity-100 transition-opacity" />
          <Grok size={iconSize} className="opacity-80 hover:opacity-100 transition-opacity" />
          <Claude.Color size={iconSize} className="opacity-80 hover:opacity-100 transition-opacity" />
          <Gemini.Color size={iconSize} className="opacity-80 hover:opacity-100 transition-opacity" />
          {/* 3+ text with blur effect only on the left side */}
          <div className="relative flex items-center ml-0.5">
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white/35 to-transparent backdrop-blur-[6px] rounded-l" />
            <span className="relative text-xs font-semibold text-white/90 z-10 pl-1">
              3+
            </span>
          </div>
        </div>
      </span>
    )
  }
  
  // Special handling for "Access to 3 models (ChatGPT, Gemini, Perplexity)"
  if (text.includes('Access to 3 models') && text.includes('ChatGPT') && text.includes('Gemini') && text.includes('Perplexity')) {
    const match = text.match(/Access to 3 models\s*\(([^)]+)\)/)
    if (match) {
      const platformsText = match[1] // "ChatGPT, Gemini, Perplexity"
      const platforms = platformsText.split(',').map(p => p.trim())
      
      return (
        <span className="flex flex-col gap-1.5">
          <span className="pb-1">Access to 3 models</span>
          <span className="flex items-center flex-wrap gap-1.5">
            {platforms.map((platform, idx) => {
              const icon = getPlatformIcon(platform)
              return (
                <React.Fragment key={idx}>
                  <span className="inline-flex items-center gap-1.5">
                    {icon}
                    <span>{platform}</span>
                  </span>
                  {idx < platforms.length - 1 && <span>,</span>}
                </React.Fragment>
              )
            })}
          </span>
        </span>
      )
    }
  }
  
  // Default handling for other features
  // Split text by platform names (case-insensitive)
  const platformRegex = /(ChatGPT|Gemini|Perplexity)/gi
  const parts: (string | React.ReactElement)[] = []
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

const pricingPlans = [
  {
    name: 'Basic',
    price: '$79',
    period: '/month',
    description: 'For teams who want to run GEO in-house.',
    features: [
      // 'Models: ChatGPT, Gemini, Perplexity',
      'Access to 3 models (ChatGPT, Gemini, Perplexity)',
      'Track 25 Prompts',
      'Email Support',
      'Unlimited Countries'
    ],
    isRecommended: false,
    bgColor: 'bg-[#090909]',
    borderColor: 'border-white/10',
  },
  {
    name: 'Pro',
    price: '$199',
    period: '/month',
    description: 'For growing teams and businesses.',
    features: ['Track 100 Prompts', 'Access to all models', 'Priority Support', 'Unlimited Countries'],
    isRecommended: true,
    bgColor: 'bg-white/5',
    borderColor: 'border-white/20',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Everything in Pro, plus:',
    features: ['Custom limits', 'Dedicated GEO expert', 'Enterprise Support', 'Unlimited Countries'],
    isRecommended: false,
    bgColor: 'bg-[#090909]',
    borderColor: 'border-white/10',
  },
]

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

const cardVariants = {
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

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
}

function PricingCard({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ 
        y: -3,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className={`
        ${plan.bgColor} ${plan.borderColor} border flex flex-col text-white
        relative overflow-hidden group
        ${plan.isRecommended ? 'shadow-2xl shadow-white/10 -mt-[4rem] border-b-0' : 'rounded-lg'}
      `}
      style={{
        borderRadius: plan.isRecommended ? '0.89rem 0.89rem 0.5rem 0.5rem' : undefined,
        minHeight: plan.isRecommended ? 'calc(100% + 4rem)' : undefined,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {plan.isRecommended && (
        <div className="bg-white/5 px-12 py-4 text-base font-medium text-white text-center rounded-t-[18px] flex-shrink-0 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              width: '50%',
              height: '100%',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <span className="relative z-10">Recommended plan</span>
        </div>
      )}
      
      <div className="p-10 flex flex-col gap-8 flex-1">
        <div>
          <p className={`text-lg font-semibold mb-3 ${plan.name === 'Pro' ? 'pt-2' : ''}`}>{plan.name}</p>
          <p className="text-[2.5rem] font-normal leading-none">
            {plan.price}
            {plan.period && <span className="text-lg font-light">{plan.period}</span>}
          </p>
        </div>
        <p className="text-base text-white/70">{plan.description}</p>
        <div className="flex flex-col gap-4 text-sm text-white/80">
          {plan.features.map((feature, i) => (
            <motion.div
              key={feature}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex items-center gap-3"
            >
              <CheckIcon />
              <div className="flex-1">
                <FeatureText text={feature} />
              </div>
            </motion.div>
          ))}
        </div>
        {plan.price === 'Custom' ? (
          <button className="mt-auto w-full rounded-full border border-white/40 text-white py-3 text-sm font-semibold">
            Contact Us
          </button>
        ) : (
          <a
            href="https://forms.gle/wLMpHeTqQogumFMK8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full rounded-full bg-white text-black py-3 text-sm font-semibold text-center block hover:bg-[#d4d4d4] transition-all duration-200 ease-in-out"
          >
            Start free trial
          </a>
        )}
      </div>
    </motion.div>
  )
}

export function PricingSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

  return (
    <section id="pricing" className="py-24 scroll-mt-16 relative overflow-hidden bg-brand-black">
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      <div ref={sectionRef} className="max-w-[1500px] mx-auto px-6 lg:px-14 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-normal text-white pb-24">Pricing</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

