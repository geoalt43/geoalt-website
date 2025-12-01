'use client'

import { useRef } from 'react'
import type { ReactElement } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const CheckIcon = () => (
  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40 text-white text-xs font-semibold">
    ✓
  </span>
)

// Helper function to get icon for AI platform
const getPlatformIcon = (platformName: string, iconSize: number = 16) => {
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
            src="/ai-icons/grok.webp"
            alt="Grok"
            width={iconSize}
            height={iconSize}
            className="opacity-80 hover:opacity-100 transition-opacity"
            unoptimized
          />
          <Image
            src="/ai-icons/claude-color.webp"
            alt="Claude"
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
          {/* 3+ text */}
          <span className="text-xs font-semibold text-white/90 ml-0.5">
            3+
          </span>
        </div>
      </span>
    )
  }
  
  // Special handling for "Access to 3 models (ChatGPT, Gemini, Perplexity)"
  if (text.includes('Access to 3 models') && text.includes('ChatGPT') && text.includes('Gemini') && text.includes('Perplexity')) {
    const iconSize = 18
    
    return (
      <span className="flex items-center gap-2">
        <span>Access to 3 models</span>
        {/* Icons only - same style as "Access to all models" */}
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
            src="/ai-icons/gemini-color.webp"
            alt="Gemini"
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

const pricingPlans = [
  {
    name: 'Basic',
    price: '$79',
    period: '/month',
    description: 'For teams who want to run GEO in-house.',
    features: [
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


function PricingCard({ plan }: { plan: typeof pricingPlans[0] }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`
        ${plan.bgColor} ${plan.borderColor} border flex flex-col text-white
        relative overflow-hidden group transition-colors duration-300
        hover:border-white/25
        ${plan.isRecommended ? 'shadow-2xl shadow-white/10 lg:-mt-[4rem] border-b-0' : 'rounded-lg'}
      `}
      style={{
        borderRadius: plan.isRecommended ? '0.89rem 0.89rem 0.5rem 0.5rem' : undefined,
        // Slight emphasis on recommended card, but avoid overly large scale on mobile
        transform: plan.isRecommended ? 'scale(1.02)' : undefined,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {plan.isRecommended && (
        <div className="bg-white/5 px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3.5 text-xs sm:text-sm lg:text-base font-medium text-white text-center rounded-t-[18px] flex-shrink-0 relative overflow-hidden">
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
      
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 lg:gap-8 flex-1">
        <div>
          <p className={`text-sm sm:text-base font-semibold mb-1.5 sm:mb-2.5 ${plan.name === 'Pro' ? 'pt-1 sm:pt-2' : ''}`}>{plan.name}</p>
          <p className="text-2xl sm:text-3xl lg:text-[2.3rem] font-normal leading-none">
            {plan.price}
            {plan.period && <span className="text-sm sm:text-base font-light">{plan.period}</span>}
          </p>
        </div>
        <p className="text-xs sm:text-sm text-white/70">{plan.description}</p>
        <div className="flex flex-col gap-2.5 sm:gap-3.5 text-[11px] sm:text-xs md:text-sm text-white/80">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <CheckIcon />
              <div className="flex-1">
                <FeatureText text={feature} />
              </div>
            </div>
          ))}
        </div>
        {plan.price === 'Custom' ? (
          <button className="mt-auto w-full max-w-[120px] sm:max-w-none sm:w-full mx-auto sm:mx-0 rounded-full border border-white/40 text-white py-2 sm:py-3 text-[11px] sm:text-sm font-semibold whitespace-nowrap">
            Contact Us
          </button>
        ) : (
          <a
            href="https://forms.gle/wLMpHeTqQogumFMK8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full max-w-[120px] sm:max-w-none sm:w-full mx-auto sm:mx-0 rounded-full bg-white text-black py-2 sm:py-3 text-[11px] sm:text-sm font-semibold text-center whitespace-nowrap block hover:bg-[#d4d4d4] transition-all duration-200 ease-in-out"
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
    <section id="pricing" className="pt-6 sm:pt-8 lg:pt-12 pb-6 sm:pb-8 lg:pb-12 scroll-mt-16 relative overflow-hidden bg-brand-black">
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
      
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      <div ref={sectionRef} className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-14 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white pb-12 sm:pb-16 lg:pb-24 px-2 sm:px-0">Pricing</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

