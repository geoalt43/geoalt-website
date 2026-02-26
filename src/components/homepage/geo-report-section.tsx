'use client'

import { useRef, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { TrendingUp, PieChart, BarChart3, Lightbulb } from 'lucide-react'



export function GeoReportSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'
  const borderColor = isLightTheme ? 'border-[#555555]' : 'border-[#121212]'

  return (
    <section
      ref={sectionRef}
      className="geo-report-section py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div
          className="pb-4 sm:pb-6 md:pb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold md:font-medium tracking-tight mb-6 sm:mb-8 md:mb-8 px-2 sm:px-0 md:px-0 leading-tight text-text-heading"
          >
            We Believe in <span>Proof</span>, <br /> <span className="inline-block">Backed by Data</span>
          </h2>
        </div>

        {/* Main Card: Content + Image */}
        <div
          className={`rounded-t-lg rounded-b-none border overflow-hidden bg-black ${borderColor}`}
          style={{ borderBottomStyle: 'dashed', borderBottomColor: isLightTheme ? '#555555' : '#121212' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left Column - Content */}
            <div className="order-1 lg:order-1 py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-4 sm:px-5 md:px-6 lg:px-8"
            >
              <h2
                className="text-base sm:text-lg md:text-2xl lg:text-[2rem] font-light sm:font-normal md:font-normal leading-tight mb-3 sm:mb-4 md:mb-5 text-white"
              >
                Get Your Free GEO Report Today
              </h2>

              <p
                className="text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 md:mb-8 text-neutral-400 max-w-md"
              >
                Discover how your brand performs across AI platforms and uncover
                untapped opportunities to lead your competition.
              </p>


              {/* Input and Button - Stacked (Desktop) */}
              <div className="hidden lg:flex flex-col gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-5 w-full sm:max-w-xs">
                <input
                  type="url"
                  placeholder="Enter your website URL"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-[#333333] text-xs sm:text-sm transition-colors outline-none focus:outline-none hover:border-[#666666] bg-[#1a1a1a] text-white placeholder:text-neutral-500 focus:border-white"
                />
                <button
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out border border-[#333333] cursor-pointer bg-white text-black hover:bg-gray-200"
                >
                  Analyze My Brand
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className="order-2 lg:order-2 relative min-h-[200px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-full"
            >
              <Image
                src="/ai-icons/GEO-Report.jpeg"
                alt="GEO Intelligence Report Dashboard"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                quality={100}
              />
            </div>

            {/* Input and Button - Stacked (Mobile) */}
             <div className="order-3 lg:hidden flex flex-col gap-2 sm:gap-2.5 md:gap-3 p-4 sm:p-5 md:p-6 w-full">
                <input
                  type="url"
                  placeholder="Enter your website URL"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-[#333333] text-xs sm:text-sm transition-colors outline-none focus:outline-none hover:border-[#666666] bg-[#1a1a1a] text-white placeholder:text-neutral-500 focus:border-white"
                />
                <button
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out border border-[#333333] cursor-pointer bg-white text-black hover:bg-gray-200"
                >
                  Analyze My Brand
                </button>
              </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-0 gap-0"
        >
          {[
            {
              icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />,
              title: 'AI Crawler Visibility',
              description: 'Track when, how often, and which AI bots access your content.'
            },
            {
              icon: <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />,
              title: 'Technical Analysis',
              description: 'Ensure your site is fully optimized for AI-based indexing and retrieval.'
            },
            {
              icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />,
              title: 'Attribution & Traffic Insights',
              description: 'Measure how many human visitors originate from AI-driven search.'
            },
            {
              icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />,
              title: 'Content Performance',
              description: 'See which pages are frequently accessed by bots.'
            }
          ].map((feature, index) => {
            // Border logic for responsive grid transitions:
            // Mobile (1-col): all cards stacked, last gets bottom rounding
            // sm (2-col): 2 cards per row with dashed separators
            // lg (4-col): all 4 in a row with dashed separators

            let borderClasses = ''
            let roundedClasses = ''

            if (index === 0) {
              // First card: bottom-left rounded on lg
              borderClasses = `border border-t-0 sm:border-r-0 lg:border-r-0 ${borderColor}`
              roundedClasses = 'rounded-none sm:rounded-none lg:rounded-bl-lg'
            } else if (index === 1) {
              // Second card: dashed left on sm & lg, no right border on lg
              borderClasses = `border border-t-0 sm:[border-left-style:dashed] lg:border-r-0 lg:[border-left-style:dashed] ${borderColor}`
              roundedClasses = 'rounded-none'
            } else if (index === 2) {
              // Third card: no right border on sm & lg, dashed left on lg
              borderClasses = `border border-t-0 sm:border-r-0 lg:[border-left-style:dashed] lg:border-r-0 ${borderColor}`
              roundedClasses = 'rounded-none sm:rounded-bl-lg lg:rounded-none'
            } else if (index === 3) {
              // Last card: bottom rounded, dashed left separator
              borderClasses = `border border-t-0 sm:[border-left-style:dashed] lg:[border-left-style:dashed] ${borderColor}`
              roundedClasses = 'rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg lg:rounded-bl-none lg:rounded-br-lg'
            }

            return (
              <div
                key={index}
                className={`relative group p-4 sm:p-5 md:p-6 h-full ${borderClasses} ${roundedClasses} bg-black transition-all duration-300 hover:bg-neutral-900`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex flex-col h-full items-start text-left sm:items-center sm:text-center justify-center">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    {feature.icon}
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
