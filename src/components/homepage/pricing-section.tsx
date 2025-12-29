'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariants, cardVariantsSmooth } from '@/lib/animations/variants'
import { FeatureText } from './pricing-section/FeatureText'
import { colorClasses } from '@/constants/colors'
import { triggerStartTrialEvent } from '@/lib/mixpanel'

const CheckIcon = () => (
  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40 text-white text-xs font-semibold">
    ✓
  </span>
)

const pricingPlans = [
  {
    name: 'Basic',
    monthlyPrice: 79,
    yearlyPrice: 67, // 15% discount: 79 * 0.85 = 67.15, rounded to 67
    description: '',
    features: [
      'Access to 1 model (ChatGPT)',
      '30 Opportunities',
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
    monthlyPrice: 199,
    yearlyPrice: 169, // 15% discount: 199 * 0.85 = 169.15, rounded to 169
    description: 'For growing teams and businesses.',
    features: ['Track 100 Prompts', '75 Opportunities', 'Access to 3 models', 'Priority Support', 'Unlimited Countries'],
    isRecommended: true,
    bgColor: 'bg-white/5',
    borderColor: 'border-white/10',
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    price: 'Custom',
    period: '',
    description: 'Everything in Pro, plus:',
    features: ['Custom limits', 'Dedicated GEO expert', 'Enterprise Support', 'Unlimited Countries'],
    isRecommended: false,
    bgColor: colorClasses.surfaceDark,
    borderColor: 'border-white/10',
  },
]

function PricingCard({ plan, isYearly, className = '' }: { plan: typeof pricingPlans[0]; isYearly: boolean; className?: string }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  const isCustom = plan.monthlyPrice === null || plan.price === 'Custom'
  const displayPrice = isCustom
    ? 'Custom'
    : isYearly
      ? `$${plan.yearlyPrice}`
      : `$${plan.monthlyPrice}`

  const period = isCustom ? '' : isYearly ? '/month' : '/month'
  const billingNote = ''

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
        ${plan.isRecommended ? 'lg:-mt-[3.5rem] rounded-[0.89rem_0.89rem_0.5rem_0.5rem] lg:scale-[1.02]' : 'rounded-lg'}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {plan.isRecommended && (
        <div className="bg-white/5 px-4 sm:px-6 md:px-8 lg:px-10 pt-3 sm:pt-4 md:pt-4 pb-4 sm:pb-5 md:pb-5 text-xs sm:text-sm md:text-sm lg:text-base font-medium text-white text-center rounded-t-[18px] flex-shrink-0 relative overflow-hidden -mx-[1px] -mt-[2px] border-t-[2px] border-l border-r border-white/5">
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

      <div className={`${plan.isRecommended ? 'p-4 sm:p-6 md:p-[1.75rem] lg:p-[2rem] pt-3.5 sm:pt-5 md:pt-[1.5rem] lg:pt-[1.75rem]' : 'p-4 sm:p-6 md:p-[2rem] lg:p-[2.25rem]'} flex flex-col ${plan.isRecommended ? 'gap-4 sm:gap-6 md:gap-[1.75rem] lg:gap-[2rem]' : 'gap-4 sm:gap-6 md:gap-[2rem] lg:gap-[2.25rem]'} ${plan.isRecommended ? '' : 'flex-1'}`}>
        <div className={plan.isRecommended ? 'mt-auto' : ''}>
          <p className={`text-sm sm:text-base md:text-base font-semibold ${plan.isRecommended ? 'mb-1.5 sm:mb-2.5 md:mb-2.5' : 'mb-1.5 sm:mb-2.5 md:mb-2.5'}`}>{plan.name}</p>
          <p className={`${plan.isRecommended ? 'text-2xl sm:text-[2.2rem] md:text-[2.25rem] lg:text-[2.25rem]' : 'text-2xl sm:text-3xl md:text-3xl lg:text-[2.3rem]'} font-normal leading-none ${plan.name === 'Basic' ? 'mb-4 sm:mb-5 md:mb-5 lg:mb-6' : ''}`}>
            {displayPrice}
            {period && <span className="text-sm sm:text-base md:text-base font-light">{period}{billingNote}</span>}
          </p>
        </div>
        {plan.description && <p className="text-xs sm:text-sm md:text-sm text-white/70">{plan.description}</p>}
        <div className={`flex flex-col ${plan.isRecommended ? 'gap-2 sm:gap-2.5 md:gap-2.5' : 'gap-2.5 sm:gap-3.5 md:gap-3.5'} text-[11px] sm:text-xs md:text-sm text-white/80`}>
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
        {(plan.monthlyPrice === null || plan.price === 'Custom') ? (
          <div className="mt-auto pt-1">
            <a
              href="mailto:contact@geoalt.in"
              className="w-full max-w-[120px] sm:max-w-none md:max-w-none sm:w-full mx-auto sm:mx-0 rounded-full border border-white/10 text-white py-2 sm:py-3 md:py-3 text-[11px] sm:text-sm md:text-sm font-semibold whitespace-nowrap block text-center transition-all duration-200 ease-in-out hover:border-white/20 hover:bg-white/5"
            >
              Contact Us
            </a>
          </div>
        ) : (
          <a
            href="https://app.geoalt.in/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => triggerStartTrialEvent('pricing-section')}
            className={`${plan.isRecommended ? '' : 'mt-auto'} w-full max-w-[120px] sm:max-w-none md:max-w-none sm:w-full mx-auto sm:mx-0 rounded-full bg-white text-black py-2 sm:py-3 md:py-3 text-[11px] sm:text-sm md:text-sm font-semibold text-center whitespace-nowrap block transition-all duration-200 ease-in-out hover:bg-gray-100`}
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
  const [isYearly, setIsYearly] = useState(true)
  const [isBelow1088, setIsBelow1088] = useState(false)
  const [isBelow680, setIsBelow680] = useState(false)
  const [isBetween1080And1350, setIsBetween1080And1350] = useState(false)

  useEffect(() => {
    const checkWidth = () => {
      const width = window.innerWidth
      setIsBelow1088(width < 1088)
      setIsBelow680(width < 680)
      setIsBetween1080And1350(width >= 1080 && width <= 1350)
    }

    checkWidth()
    window.addEventListener('resize', checkWidth)

    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <section id="pricing" className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-6 sm:pb-8 md:pb-8 lg:pb-[6vh] xl:pb-[8vh] min-h-[90vh] sm:min-h-[95vh] md:min-h-[100vh] scroll-mt-16 relative overflow-hidden  bg-transparent-text bg-clip-text">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid-pattern-opacity-02" />

      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      <div ref={sectionRef} className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 relative z-20 pt-12 sm:pt-16 md:pt-20 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-0 sm:mb-0 md:mb-0 lg:mb-12 xl:mb-16"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-0 md:px-0">Pricing</h2>

          {/* Payment Frequency Toggle */}
          <div
            className="flex flex-col items-center justify-center mb-2 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-4 mt-2 sm:mt-3 md:mt-3 w-full"
            style={isBetween1080And1350 ? { paddingBottom: '2.5rem' } : {}}
          >
            <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10 flex-shrink-0 relative z-10">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 md:py-1.5 rounded-full text-[10px] sm:text-xs md:text-xs font-medium transition-all duration-300 cursor-pointer ${!isYearly
                  ? 'bg-white text-black'
                  : 'text-white/70 hover:text-white'
                  }`}
              >
                Pay monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 md:py-1.5 rounded-full text-[10px] sm:text-xs md:text-xs font-medium transition-all duration-300 cursor-pointer ${isYearly
                  ? 'bg-white text-black'
                  : 'text-white/70 hover:text-white'
                  }`}
              >
                Pay yearly
              </button>
            </div>
            <span
              className="my-1 sm:my-1.5 md:my-1.5 lg:my-2.5 pt-3 sm:pt-4 md:pt-4 lg:pt-0 text-[10px] sm:text-xs md:text-xs text-white/90 whitespace-nowrap text-center"
            >
              Save up to 15% with yearly
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`grid gap-4 sm:gap-6 md:gap-7 lg:gap-8 mt-4 sm:mt-6 md:mt-6 lg:mt-8 xl:mt-10 items-start ${isBelow680 ? 'grid-cols-1' : isBelow1088 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
        >
          {isBelow680 ? (
            <>
              <PricingCard
                plan={pricingPlans.find(p => p.isRecommended)!}
                isYearly={isYearly}
                className="w-full"
              />
              <PricingCard
                plan={pricingPlans.find(p => p.name === 'Basic')!}
                isYearly={isYearly}
                className="w-full"
              />
              <PricingCard
                plan={pricingPlans.find(p => p.name === 'Enterprise')!}
                isYearly={isYearly}
                className="w-full"
              />
            </>
          ) : isBelow1088 ? (
            <>
              {/* Pro Card - Equal margins using same grid structure */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <PricingCard
                  plan={pricingPlans.find(p => p.isRecommended)!}
                  isYearly={isYearly}
                  className="w-full col-span-2"
                />
              </div>
              {/* Wrapper for Basic and Enterprise - 2 columns below 1088px */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <PricingCard
                  plan={pricingPlans.find(p => p.name === 'Basic')!}
                  isYearly={isYearly}
                  className="w-full"
                />
                <PricingCard
                  plan={pricingPlans.find(p => p.name === 'Enterprise')!}
                  isYearly={isYearly}
                  className="w-full"
                />
              </div>
            </>
          ) : (
            pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}

