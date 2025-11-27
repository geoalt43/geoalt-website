'use client'

import { RefObject } from 'react'

interface FAQSectionProps {
  openFaq: number | null
  toggleFaq: (index: number) => void
  faqRef: RefObject<HTMLDivElement | null>
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

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-medium text-white mb-6 tracking-wide">FAQ</h2>
          <p className="text-2xl" style={{color: '#898989'}}>Generative Engine Optimization is still very new. We&apos;ve got you covered.</p>
        </div>
        
        <div ref={faqRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black rounded-2xl border border-[#656565] shadow-sm">
              <button
                className={`w-full px-8 py-4 text-left flex justify-between items-center transition-colors rounded-2xl ${
                  openFaq === index ? '' : 'hover:bg-[#656565]'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-white text-lg">{faq.question}</span>
                <span className="text-white text-2xl font-light">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-400 leading-relaxed text-lg font-normal">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

