'use client'

import { RefObject, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { containerVariants, cardVariantsSmooth } from '@/lib/animations/variants'
import { colorClasses } from '@/constants/colors'
import { useTheme } from 'next-themes'
import { useState } from 'react'

interface FAQSectionProps {
  openFaq: number | null
  toggleFaq: (index: number) => void
  faqRef: RefObject<HTMLDivElement | null>
}

interface FAQCardProps {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}

function FAQCard({ faq, isOpen, onToggle }: FAQCardProps) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-150px' })
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariantsSmooth}
      initial="hidden"
      animate={cardInView ? 'visible' : 'hidden'}
      className={`border-b ${colorClasses.borderGray} shadow-sm faq-card-partial-borders rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden relative cursor-pointer`}
      style={{ backgroundColor: 'var(--color-page-background)' }}
      whileHover={{
        backgroundColor: 'var(--color-faq-card-hover)',
        borderColor: 'var(--color-border)',
        transition: { duration: 0.4, ease: 'easeInOut' }
      }}
    >
      <motion.button
        className="w-full pl-3 sm:pl-4 md:pl-4 pr-5 sm:pr-7 md:pr-7 py-2.5 sm:py-3.5 md:py-3.5 text-left flex items-start sm:items-center md:items-center gap-2 sm:gap-4 md:gap-4 cursor-pointer"
        onClick={onToggle}
      >
        <motion.svg
          className="text-text-muted w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 flex-shrink-0 mt-0.5 sm:mt-0 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1,
            rotate: isOpen ? 90 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 6l8 6-8 6" />
        </motion.svg>
        <span className={`font-medium text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed flex-1 text-left ${isLightTheme ? 'text-[#3D3D3D]' : colorClasses.textDescription}`}>{faq.question}</span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.15, ease: 'easeOut' }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.15, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.1, ease: 'easeIn' }
              }
            }}
            className="overflow-hidden bg-transparent"
          >
            <div className="pl-[calc(0.75rem+1rem+0.75rem)] sm:pl-[calc(1rem+1.5rem+1rem)] md:pl-[calc(1rem+1.5rem+1rem)] pr-4 sm:pr-8 md:pr-8 pb-3 sm:pb-5 md:pb-5 pt-0 bg-transparent">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { duration: 0.15, ease: 'easeOut' }
                }}
                exit={{ 
                  y: -10, 
                  opacity: 0,
                  transition: { duration: 0.1, ease: 'easeIn' }
                }}
                className={`leading-relaxed text-xs sm:text-sm md:text-sm font-light bg-transparent ${isLightTheme ? 'text-[#3D3D3D]' : colorClasses.textDescription}`}
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection({ openFaq, toggleFaq, faqRef }: FAQSectionProps) {
  const faqs = useMemo(() => [
    {
      question: "What does Geoalt do?",
      answer: "Geoalt shows how your website appears in AI search, delivering insights and recommendations to improve visibility, credibility, and performance across generative engines effectively."
    },
    {
      question: "How does Geoalt help my brand?",
      answer: "Geoalt analyzes your content's presence in AI answers, highlights missing visibility opportunities, and provides clear guidance to strengthen trust, authority, and competitive advantage across generative platforms."
    },
    {
      question: "Who should use Geoalt?",
      answer: "Brands, marketers, founders, and SEO teams wanting stronger AI search presence benefit from Geoalt's insights, optimization recommendations, competitive analysis, and structured visibility reporting across generative engines."
    },
    {
      question: "What data does Geoalt analyze?",
      answer: "Geoalt scans website content, competitor pages, AI-generated answers, semantic patterns, and topic coverage to identify gaps, strengths, weaknesses, and actionable optimization steps for improved AI search visibility."
    },
    {
      question: "How is Geoalt different from SEO tools?",
      answer: "Geoalt focuses specifically on generative engines, evaluating AI summary visibility rather than traditional keyword rankings, offering intent-driven recommendations tailored for modern answer-engine ecosystems and behaviors."
    },
    {
      question: "Does Geoalt work for any website?",
      answer: "Yes, Geoalt supports nearly all websites by analyzing content structure, clarity, authority, and relevance, offering optimization suggestions designed to improve AI search performance and generative visibility."
    }
  ], [])

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-structured-data'
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }
    
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)
    
    return () => {
      const existingScript = document.getElementById('faq-structured-data')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [faqs])

  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh] bg-transparent-text bg-clip-text">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal text-text-heading mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0">FAQ</h2>
          <p className={`text-xs sm:text-sm md:text-base ${colorClasses.textMuted} font-light px-4 sm:px-0 md:px-0 pt-0`}>Generative Engine Optimization is still<br className="leading-none" /><span className="block -mt-0.5 sm:-mt-0.5 md:-mt-0.5 lg:-mt-2">very new. We&apos;ve got you covered.</span></p>
        </motion.div>
        
        <motion.div
          ref={faqRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              faq={faq}
              isOpen={openFaq === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

