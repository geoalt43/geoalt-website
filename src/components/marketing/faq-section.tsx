'use client'

import { RefObject } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FAQSectionProps {
  openFaq: number | null
  toggleFaq: (index: number) => void
  faqRef: RefObject<HTMLDivElement | null>
}

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

interface FAQCardProps {
  faq: { question: string; answer: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}

function FAQCard({ faq, index, isOpen, onToggle }: FAQCardProps) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-150px' })

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? 'visible' : 'hidden'}
      className="bg-black border-b border-[#656565] shadow-sm faq-card-partial-borders rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden relative"
      whileHover={{
        backgroundColor: 'rgba(20, 20, 20, 1)',
        borderColor: 'rgba(120, 120, 120, 0.6)',
        transition: { duration: 0.4, ease: 'easeInOut' }
      }}
    >
      <motion.div
        className="absolute inset-0 bg-white/[0.02] opacity-0 pointer-events-none rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
        whileHover={{
          opacity: 1,
          transition: { duration: 0.3, ease: 'easeOut' }
        }}
      />
      <motion.button
        className="w-full pl-3 sm:pl-4 pr-6 sm:pr-8 py-3 sm:py-4 text-left flex items-start sm:items-center gap-2 sm:gap-4"
        onClick={onToggle}
      >
        <motion.span
          className="text-white text-base sm:text-lg font-light inline-block flex-shrink-0 mt-0.5 sm:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1,
            rotate: isOpen ? 90 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          &gt;
        </motion.span>
        <span className="font-medium text-white text-sm sm:text-base lg:text-lg leading-relaxed flex-1 text-left">{faq.question}</span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3, ease: 'easeOut', delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.2, ease: 'easeIn' }
              }
            }}
            className="overflow-hidden bg-transparent"
          >
            <div className="pl-[calc(0.75rem+1rem+0.75rem)] sm:pl-[calc(1rem+1.5rem+1rem)] pr-4 sm:pr-8 pb-4 sm:pb-6 pt-0 bg-transparent">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { duration: 0.3, ease: 'easeOut', delay: 0.15 }
                }}
                exit={{ 
                  y: -10, 
                  opacity: 0,
                  transition: { duration: 0.2, ease: 'easeIn' }
                }}
                className="text-gray-400 leading-relaxed text-sm sm:text-base font-light bg-transparent"
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
  const faqs = [
    {
      question: "How is Generative Engine Optimization any different to Search Engine Optimization?",
      answer: "GEO focuses on optimizing content for AI search engines like ChatGPT, Perplexity, and Google AI, while traditional SEO targets human search engines. GEO requires understanding how AI models process and reference information differently."
    },
    {
      question: "Can I just use normal SEO to optimize for AI Search?",
      answer: "While some SEO principles apply, AI search engines have different ranking factors and content preferences. Our platform is specifically designed to help you understand and optimize for AI search behavior."
    },
    {
      question: "How does GE<OpenAI size={16} className=\"mx-0.5\" />Alt get its data?",
      answer: "We use advanced simulation techniques to test how AI models respond to different prompts and content. Our data comes from comprehensive testing across multiple AI platforms and search engines."
    },
    {
      question: "Can you select prompts to simulate?",
      answer: "Yes, you can customize and select specific prompts to simulate based on your industry, target audience, and business goals. This helps you understand exactly how AI models respond to your content."
    },
    {
      question: "Have you increased someone&apos;s visibility on AI Search before?",
      answer: "Yes, our clients have seen significant improvements in AI search visibility. We&apos;ve helped businesses increase their AI mentions by up to 300% and improve their brand ranking in AI search results."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free consultations to help you understand how GEO can benefit your business. Contact us to schedule a personalized demo and strategy session."
    }
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-4 sm:mb-6 px-2 sm:px-0">FAQ</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#898989] font-light px-4 sm:px-0">Generative Engine Optimization is still very new.<br className="hidden sm:block" />We&apos;ve got you covered.</p>
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
              index={index}
              isOpen={openFaq === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

