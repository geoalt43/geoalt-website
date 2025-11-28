'use client'

import { useState } from 'react'
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
    quote: "GEOAlt allows us to pinpoint the exact types of content that are surfaced in specific LLMs. With that visibility, we've been able to optimize our content strategy and significantly improve our AI search presence.",
    name: "Sarah Johnson",
    designation: "Content Director, TechFlow",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    quote: "GEOAlt gave us a data-informed view of our LLMO strategy at Glide - virtually overnight. With its insights, our blog posts started ranking for targeted ChatGPT and Perplexity queries, driving measurable traffic growth.",
    name: "Michael Chen",
    designation: "VP Marketing, Glide",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "As search marketers, our decisions should always be driven by data. GEOAlt provides the actionable insights we need to stay competitive in the evolving landscape of AI-powered search engines.",
    name: "David Rodriguez",
    designation: "SEO Lead, DataDrive",
    image: "https://i.pravatar.cc/150?img=6"
  }
]

export function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  const handleCardClick = () => {
    setIsPaused(!isPaused)
  }

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-white/20 mb-6 shadow-sm">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-4xl font-normal text-white mb-4 pb-13">
            See what industry leaders say about GEOAlt
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className={`flex gap-4 md:gap-6 animate-testimonials-marquee ${isPaused ? 'animation-paused' : ''}`}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div
                    onClick={handleCardClick}
                    className={`bg-[#181818] border border-[#363636] rounded-xl p-6 md:p-8 shadow-lg h-full flex flex-col cursor-pointer transition-all duration-300 ${
                      isPaused ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-xl'
                    }`}
                  >
                    <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-6 font-light">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-auto flex items-center gap-4 pt-6">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
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
                      <div>
                        <p className="font-normal text-white text-sm md:text-base">{testimonial.name}</p>
                        <p className="text-xs md:text-sm text-gray-300 font-light">{testimonial.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10 fade-edge-left"
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10 fade-edge-right"
          />

          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="bg-blue-500/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                <p className="text-sm font-medium text-white">Paused - Click any card to resume</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
