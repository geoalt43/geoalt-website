'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Testimonial {
  quote: string
  name: string
  designation: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote: "GEOAlt offers key insights on AI visibility, helping brands stay at the forefront of discovery in the age of AI and generative search. As ChatGPT, Perplexity, and Deepseek drive traffic and conversions, GEOAlt measures the growth.",
    name: "Crystal Carter",
    designation: "Head of SEO Comms, Wix",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "GEOAlt avoids the issues we see with other SEO/AEO platforms, where there's often an overload of features and information that isn't of primary importance. It keeps things simple - set up your prompts, see your AI visibility, and act on top citations.",
    name: "Ethan Smith",
    designation: "CEO, Graphite",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "As European leaders in travel and search innovation for the vacation rental industry, staying ahead is crucial - GEOAlt empowers our team to proactively manage & enhance our visibility across emerging search platforms.",
    name: "Felix Welckenbach",
    designation: "Director Organic Growth, HomeToGo",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    quote: "GEOAlt allows us to pinpoint the exact types of content that are surfaced in specific LLMs. With that visibility, we've been able to prioritize our content strategy and drive a 5x year-over-year increase in traffic and demo requests from LLMs.",
    name: "Jon Gitlin",
    designation: "SEO Strategist, Merge",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    quote: "GEOAlt gave us a data-informed view of our LLMO strategy at Glide - virtually overnight. With its insights, our blog posts started ranking for targeted ChatGPT and Perplexity prompts within 24 hours. I am really impressed with the platform, and the exceptional support from the team.",
    name: "Sepy Bazzazi",
    designation: "Head of Marketing, Glide",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "As search marketers, our decisions should always be driven by data. GEOAlt provides exactly the critical insights we need to stay competitive in the ever-evolving world of search.",
    name: "Artur Kosch",
    designation: "General Manager, KKP",
    image: "https://i.pravatar.cc/150?img=6"
  }
]

export function TestimonialsCarousel() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => new Set(prev).add(index))
              }, index * 80)
              observer.unobserve(card)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
      )

      observer.observe(card)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-white/20 mb-14 shadow-sm">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-3xl font-light text-white mb-4 pb-13">
            See what industry leaders say about GEOAlt
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`
                bg-[#181818] border border-[#363636] rounded-xl p-6 md:p-8 shadow-lg h-full flex flex-col
                relative overflow-hidden
                group
                ${visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
                }
              `}
              style={{
                transition: visibleCards.has(index) 
                  ? `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 80}ms, 
                     transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 80}ms,
                     box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                     border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
                  : 'opacity 0.3s ease-out, transform 0.3s ease-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative flex-1 flex flex-col">
                <div className="relative mb-3">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/8 via-purple-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <p className="text-gray-100 text-sm md:text-base leading-relaxed font-light relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                
                <div className="mt-auto flex items-center gap-3 pt-2 relative z-10">
                  <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 ring-2 ring-white/10 group-hover:ring-white/25 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Image
                      src={failedImages.has(index) 
                        ? `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`
                        : testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      onError={() => {
                        setFailedImages(prev => new Set(prev).add(index))
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-normal text-white text-xs md:text-sm transition-colors duration-300 group-hover:text-white truncate">{testimonial.name}</p>
                    <p className="text-xs text-gray-300 font-light truncate">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
