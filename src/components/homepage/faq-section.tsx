'use client'

import { RefObject, useRef, useEffect, useMemo, useState } from 'react'
import { colorClasses } from '@/constants/colors'
import { useTheme } from 'next-themes'

interface FAQSectionProps {
  openFaq: number | null
  toggleFaq: (index: number) => void
  faqRef: RefObject<HTMLDivElement | null>
}

interface FAQCardProps {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
  index: number
}

// Chevron icon component with smooth rotation
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-4 h-4 sm:w-5 sm:h-5 text-text-muted flex-shrink-0 opacity-30 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function FAQCard({ faq, isOpen, onToggle, index }: FAQCardProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Measure content height when it changes
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [faq.answer])

  const isLightTheme = mounted && resolvedTheme === 'light'
  const contentId = `faq-content-${index}`
  const headerId = `faq-header-${index}`

  // Keyboard support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div
      className="border-b shadow-sm faq-card-partial-borders rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden relative"
      style={{ 
        backgroundColor: 'var(--color-page-background)',
        borderColor: 'var(--color-faq-border)'
      }}
    >
      <button
        id={headerId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full py-2.5 sm:py-3.5 md:py-3.5 text-left flex items-center justify-between gap-3 sm:gap-4 md:gap-4 cursor-pointer"
      >
        <span 
          className={`font-medium text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed flex-1 text-left ${
            isLightTheme ? 'text-[#3D3D3D]' : colorClasses.textDescription
          }`}
        >
          {faq.question}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      
      {/* Animated content container */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          maxHeight: isOpen ? contentHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="pb-3 sm:pb-5 md:pb-5 pt-0 bg-transparent"
        >
          <p
            className={`leading-relaxed text-xs sm:text-sm md:text-sm font-normal bg-transparent ${colorClasses.textDescription}`}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection({ openFaq, toggleFaq, faqRef }: FAQSectionProps) {
  const faqs = useMemo(() => [
    {
      question: "What does GEOAlt do?",
      answer: "GEOAlt shows how your website appears in AI search, delivering insights and recommendations to improve visibility, credibility, and performance across generative engines effectively."
    },
    {
      question: "How does GEOAlt help my brand?",
      answer: "GEOAlt analyzes your content's presence in AI answers, highlights missing visibility opportunities, and provides clear guidance to strengthen trust, authority, and competitive advantage across generative platforms."
    },
    {
      question: "Who should use GEOAlt?",
      answer: "Brands, marketers, founders, and SEO teams wanting stronger AI search presence benefit from GEOAlt's insights, optimization recommendations, competitive analysis, and structured visibility reporting across generative engines."
    },
    {
      question: "What data does GEOAlt analyze?",
      answer: "GEOAlt scans website content, competitor pages, AI-generated answers, semantic patterns, and topic coverage to identify gaps, strengths, weaknesses, and actionable optimization steps for improved AI search visibility."
    },
    {
      question: "How is GEOAlt different from SEO tools?",
      answer: "GEOAlt focuses specifically on generative engines, evaluating AI summary visibility rather than traditional keyword rankings, offering intent-driven recommendations tailored for modern answer-engine ecosystems and behaviors."
    },
    {
      question: "Does GEOAlt work for any website?",
      answer: "Yes, GEOAlt supports nearly all websites by analyzing content structure, clarity, authority, and relevance, offering optimization suggestions designed to improve AI search performance and generative visibility."
    }
  ], [])

  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-150px' }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

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
      <div ref={sectionRef} className="max-w-3xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0 text-text-heading">FAQ</h2>
          <p className="text-sm sm:text-base md:text-lg text-text-description max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 pt-0">Generative Engine Optimization is still <br className="hidden sm:block" /> very new. We&apos;ve got you covered.</p>
        </div>
        
        <div
          ref={faqRef}
          className={`space-y-4 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              index={index}
              faq={faq}
              isOpen={openFaq === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
