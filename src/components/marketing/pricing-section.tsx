'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CheckIcon = () => (
  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40 text-white text-xs font-semibold">
    ✓
  </span>
)

const pricingPlans = [
  {
    name: 'Basic',
    price: '$99',
    period: '/mo',
    description: 'For teams who want to run GEO in-house.',
    features: ['Track 25 prompts', 'Access to all models (ChatGPT, Gemini, Perplexity, etc.)', 'Email support'],
    isRecommended: false,
    bgColor: 'bg-[#090909]',
    borderColor: 'border-white/10',
  },
  {
    name: 'Pro',
    price: '$299',
    period: '/mo',
    description: 'Everything in Basic, plus:',
    features: ['Track 100 prompts', 'Access to all models (ChatGPT, Gemini, Perplexity, etc.)', '8 AI-optimized articles', 'Email and Slack Support'],
    isRecommended: true,
    bgColor: 'bg-white/5',
    borderColor: 'border-white/20',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Everything in Pro, plus:',
    features: ['Custom limits', 'White-glove onboarding', 'Enterprise support', 'SAML SSO'],
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
        y: -8,
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
          <p className="text-lg font-semibold mb-3">{plan.name}</p>
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
              className="flex items-start gap-3"
            >
              <CheckIcon />
              <span>{feature}</span>
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
            className="mt-auto w-full rounded-full bg-white text-black py-3 text-sm font-semibold text-center block hover:bg-white/90 transition-colors"
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
    <section id="pricing" className="py-24 scroll-mt-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-10" />

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

