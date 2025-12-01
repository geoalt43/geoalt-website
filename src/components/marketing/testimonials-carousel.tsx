'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

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

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: -10,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
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

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            variants={badgeVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-lg border border-white/20 mb-8 sm:mb-12 lg:mb-14 shadow-sm"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-900">Testimonials</span>
          </motion.div>
          <motion.h2
            variants={headerVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white pb-8 sm:pb-12 lg:pb-14 px-2 sm:px-0"
          >
            See what industry leaders say<br className="hidden sm:block" />
            <motion.span
              variants={headerVariants}
              className="pt-2 inline-block"
            >
              about GEOAlt
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              variants={cardVariants}
              className="bg-black/60 border border-white/10 rounded-lg p-3 sm:p-5 md:p-7 shadow-lg h-full flex flex-col relative overflow-hidden group hover:border-white/25 transition-colors duration-300"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative flex-1 flex flex-col">
                <div className="relative mb-2.5 sm:mb-3">
                  <p className="text-gray-100 text-[11px] sm:text-sm md:text-base leading-relaxed font-normal relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                
                <div className="mt-auto flex items-center gap-2 sm:gap-3 pt-2 relative z-10">
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 ring-2 ring-white/10 shadow-lg">
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
                    <p className="font-normal text-white text-xs md:text-sm truncate">{testimonial.name}</p>
                    <p className="text-xs text-gray-300 font-light truncate">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
