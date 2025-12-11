'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariants, cardVariantsSmooth } from '@/lib/animations/variants'
import { FeatureText } from './pricing-section/FeatureText'
import { colorClasses } from '@/constants/colors'

const CheckIcon = () => (
  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40 text-white text-xs font-semibold">
    ✓
  </span>
)

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
    bgColor: colorClasses.surfaceDark,
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
    bgColor: colorClasses.surfaceDark,
    borderColor: 'border-white/10',
  },
]

function PricingCard({ plan }: { plan: typeof pricingPlans[0] }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariantsSmooth}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`
        ${plan.bgColor} ${plan.borderColor} border flex flex-col text-white
        relative overflow-hidden group transition-colors duration-300
        hover:border-white/25
        ${plan.isRecommended ? 'shadow-2xl shadow-white/10 lg:-mt-[4rem] border-b-0 rounded-[0.89rem_0.89rem_0.5rem_0.5rem] scale-[1.02]' : 'rounded-lg'}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {plan.isRecommended && (
        <div className="bg-white/5 px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3.5 md:py-3.5 text-xs sm:text-sm md:text-sm lg:text-base font-medium text-white text-center rounded-t-[18px] flex-shrink-0 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 h-full"
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
      
      <div className="p-4 sm:p-6 md:p-7 lg:p-8 flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-8 flex-1">
        <div>
          <p className={`text-sm sm:text-base md:text-base font-semibold mb-1.5 sm:mb-2.5 md:mb-2.5 ${plan.name === 'Pro' ? 'pt-1 sm:pt-2 md:pt-2' : ''}`}>{plan.name}</p>
          <p className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.3rem] font-normal leading-none">
            {plan.price}
            {plan.period && <span className="text-sm sm:text-base md:text-base font-light">{plan.period}</span>}
          </p>
        </div>
        <p className="text-xs sm:text-sm md:text-sm text-white/70">{plan.description}</p>
        <div className="flex flex-col gap-2.5 sm:gap-3.5 md:gap-3.5 text-[11px] sm:text-xs md:text-sm text-white/80">
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
          <button className="mt-auto w-full max-w-[120px] sm:max-w-none md:max-w-none sm:w-full mx-auto sm:mx-0 rounded-full border border-white/40 text-white py-2 sm:py-3 md:py-3 text-[11px] sm:text-sm md:text-sm font-semibold whitespace-nowrap">
            Contact Us
          </button>
        ) : (
          <a
            href="https://forms.gle/wLMpHeTqQogumFMK8"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-auto w-full max-w-[120px] sm:max-w-none md:max-w-none sm:w-full mx-auto sm:mx-0 rounded-full bg-white text-black py-2 sm:py-3 md:py-3 text-[11px] sm:text-sm md:text-sm font-semibold text-center whitespace-nowrap block ${colorClasses.hoverGray} transition-all duration-200 ease-in-out`}
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
    <section id="pricing" className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-6 sm:pb-8 md:pb-8 lg:pb-[4vh] xl:pb-[6vh] scroll-mt-16 relative overflow-hidden  bg-transparent-text bg-clip-text">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid-pattern-opacity-02" />
      
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      <div ref={sectionRef} className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-6 sm:mb-8 md:mb-8"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal text-white pb-4 sm:pb-16 md:pb-20 lg:pb-24 px-2 sm:px-0 md:px-0">Pricing</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7 lg:gap-8"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

