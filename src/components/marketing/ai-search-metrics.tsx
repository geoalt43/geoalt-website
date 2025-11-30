'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const highlights = [
  {
    rank: '#1',
    brand: 'Your Brand',
    summary:
      'Your brand consistently appears in AI-generated responses with strong visibility across major AI platforms. You maintain a competitive position with positive sentiment and clear messaging that resonates with AI systems.',
    positives: ['high visibility', 'positive sentiment', 'consistent presence'],
    cautions: [],
  },
  {
    rank: '#2',
    brand: 'Competitor A',
    summary:
      'This competitor shows strong performance in AI search results with frequent mentions and favorable positioning. They leverage strategic content optimization to maintain their ranking.',
    positives: ['strong performance', 'frequent mentions'],
    cautions: ['opportunity to outperform'],
  },
  {
    rank: '#3',
    brand: 'Competitor B',
    summary:
      'Competitor B appears less frequently in AI responses but shows potential for growth. Their current positioning suggests opportunities to improve visibility through targeted content strategies.',
    positives: ['growth potential'],
    cautions: ['lower visibility', 'needs optimization'],
  },
]

const VisibilityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

const PositionIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const SentimentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const insightCards = [
  {
    title: 'Visibility',
    description:
      'See how often your brand appears in AI conversations and measure the consistency of your mentions.',
    icon: VisibilityIcon,
  },
  {
    title: 'Position',
    description:
      'Understand your brand\'s ranking in AI search results and identify quick opportunities to move up.',
    icon: PositionIcon,
  },
  {
    title: 'Sentiment',
    description:
      'Learn how AI feels about your brand, what\'s positive, what\'s negative, and what needs attention.',
    icon: SentimentIcon,
  },
]

// Animation variants with modern spring physics
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
}

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.5,
      delay: 0.3,
    },
  },
}

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
}

const insightCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.7,
    },
  },
}

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 12,
      mass: 0.5,
    },
  },
}

const aiBoxVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
      mass: 0.8,
      delay: 0.6,
    },
  },
}

const highlightContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.8,
    },
  },
}

const highlightCardVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.7,
    },
  },
}

const badgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 12,
    },
  },
}

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

export function AISearchMetricsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-24 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={headerVariants}
            className="text-5xl font-normal text-white"
          >
            How AI actually sees your brand
          </motion.h2>
          <motion.p
            variants={subtitleVariants}
            className="mt-4 text-lg text-white/70"
          >
            Everything that matters in one place
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 max-w-7xl mx-auto grid gap-4 md:grid-cols-3"
        >
          {insightCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={card.title}
                variants={insightCardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: {
                    type: 'spring' as const,
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="bg-[#050505] border border-white/10 rounded-lg p-6 text-white/80 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div variants={iconVariants}>
                    <IconComponent />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={aiBoxVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="bg-[#050505] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-8 mt-4"
        >
          <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{
                type: 'spring' as const,
                stiffness: 200,
                damping: 15,
                delay: 0.7,
              }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold"
            >
              AI
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                type: 'spring' as const,
                stiffness: 100,
                damping: 15,
                delay: 0.8,
              }}
            >
              Understanding your AI visibility requires tracking multiple signals across different platforms and models to get a complete picture of your brand&apos;s presence.
            </motion.span>
          </div>
          <motion.div
            variants={highlightContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.brand}
                variants={highlightCardVariants}
                whileHover={{
                  x: 8,
                  scale: 1.01,
                  transition: {
                    type: 'spring' as const,
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="bg-[#080808] border border-white/10 rounded-xl p-6 text-white/90 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      type: 'spring' as const,
                      stiffness: 200,
                      damping: 12,
                      delay: 0.9 + index * 0.12,
                    }}
                    className="text-xs uppercase tracking-wide text-white/50"
                  >
                    {item.rank}
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{
                      type: 'spring' as const,
                      stiffness: 100,
                      damping: 15,
                      delay: 0.95 + index * 0.12,
                    }}
                    className="text-lg font-semibold text-white"
                  >
                    {item.brand}
                  </motion.p>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{
                    type: 'spring' as const,
                    stiffness: 100,
                    damping: 15,
                    delay: 1.0 + index * 0.12,
                  }}
                  className="text-sm text-white/70 leading-relaxed"
                >
                  {item.summary}
                </motion.p>
                <motion.div
                  variants={badgeContainerVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {item.positives.map((text, badgeIndex) => (
                    <motion.span
                      key={text}
                      variants={badgeVariants}
                      custom={badgeIndex}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: 'spring' as const,
                          stiffness: 400,
                          damping: 15,
                        },
                      }}
                      className="bg-green-500/15 text-green-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {text}
                    </motion.span>
                  ))}
                  {item.cautions.map((text, badgeIndex) => (
                    <motion.span
                      key={text}
                      variants={badgeVariants}
                      custom={badgeIndex + item.positives.length}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: 'spring' as const,
                          stiffness: 400,
                          damping: 15,
                        },
                      }}
                      className="bg-rose-500/15 text-rose-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {text}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

