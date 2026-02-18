'use client'

import { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'

const SectionSkeleton = ({ height = 'h-96' }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse bg-page-background`} />
)

const FAQSection = dynamic(() => import('@/components/homepage/faq-section').then(m => ({ default: m.FAQSection })), { loading: () => <SectionSkeleton height="h-[500px]" /> })

export function FaqWrapper() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenFaq(null)
      }
    }

    if (openFaq !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openFaq])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return <FAQSection openFaq={openFaq} toggleFaq={toggleFaq} faqRef={faqRef} />
}
