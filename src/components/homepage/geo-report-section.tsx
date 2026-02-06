'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { TrendingUp, PieChart, BarChart3, Lightbulb } from 'lucide-react'
import { containerVariants, headerVariants } from '@/lib/animations/variants'



export function GeoReportSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  return (
    <section
      ref={sectionRef}
      className="geo-report-section py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="pb-6 sm:pb-8 md:pb-8 text-center"
        >
          <motion.h2 
            variants={headerVariants}
            className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light sm:font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 px-2 sm:px-0 md:px-0 ${isLightTheme ? 'text-[var(--color-ref-001)]' : 'text-text-heading'}`}
          >
            We Believe in <span className="text-green-600">Proof</span>, <br /> <span className="inline-block">Backed by Data</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`rounded-t-lg rounded-b-none border overflow-hidden bg-black ${isLightTheme ? 'border-[#555555]' : 'border-[#121212]'}`}
          style={{ borderBottomStyle: 'dashed', borderBottomColor: isLightTheme ? '#555555' : '#121212' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left Column - Content */}
            <motion.div variants={headerVariants} className="order-2 lg:order-1 py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-5 lg:px-6">
              <h2
                className="text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-light sm:font-normal md:font-normal leading-tight mb-4 sm:mb-5 text-white"
              >
                Get Your Free GEO Report Today
              </h2>

              <p
                className="text-xs sm:text-sm md:text-base leading-tight mb-6 sm:mb-8 text-neutral-400"
              >
                Discover how your brand performs across AI platforms and uncover
                untapped opportunities to lead your competition.
              </p>

              {/* Input and Button - Stacked */}
              <div className="flex flex-col gap-2.5 sm:gap-3 mb-3 sm:mb-5 max-w-xs ">
                <input
                  type="url"
                  placeholder="Enter your website URL"
                  className="w-full px-4 py-2 sm:py-2.5 rounded-full border border-[#333333] text-xs sm:text-sm transition-colors outline-none focus:outline-none hover:border-[#666666] bg-[#1a1a1a] text-white placeholder:text-neutral-500 focus:border-white"
                />
                <button
                  className="w-full px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out border border-[#333333] cursor-pointer bg-white text-black hover:bg-gray-200"
                >
                  Analyze My Brand
                </button>
              </div>


            </motion.div>

            {/* Right Column - Image (touches top, bottom, right edges) */}
            <motion.div
              variants={headerVariants}
              className="order-1 lg:order-2 relative min-h-[280px] sm:min-h-[320px] lg:min-h-full"
            >
              <Image
                src="/ai-icons/GEO-Report.jpeg"
                alt="GEO Intelligence Report Dashboard"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-0 gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-0"
        >
          {[
            {
              icon: <TrendingUp className="w-5 h-8 text-white" />,
              title: 'AI Crawler Visibility',
              description: 'Track when, how often, and which AI bots access your content.'
            },
            {
              icon: <PieChart className="w-5 h-8 text-white" />,
              title: 'Technical Analysis',
              description: 'Ensure your site is fully optimized for AI-based indexing and retrieval.'
            },
            {
              icon: <BarChart3 className="w-5 h-8 text-white" />,
              title: 'Attribution & Traffic Insights',
              description: 'Measure how many human visitors originate from AI-driven search.'
            },
            {
              icon: <Lightbulb className="w-5 h-8 text-white" />,
              title: 'Content Performance',
              description: 'See which pages are frequently accessed by bots.'
            }
          ].map((feature, index) => {
            // Determine border and rounded classes based on index for standard layout
            let borderClasses = `border border-t-0 lg:border-r-0 ${isLightTheme ? 'border-[#555555]' : 'border-[#121212]'}` // Default: no top, no right (for 0, 1, 2)
            let roundedClasses = 'rounded-b-lg rounded-t-none lg:rounded-br-none' // Default: rounded bottom, but no BR (for 0)

            if (index === 0) {
              // First card: Keep defaults (Left border exists, Bottom-Left rounded, Bottom-Right square, No Right border)
              borderClasses = `border border-t-0 lg:border-r-0 ${isLightTheme ? 'border-[#555555]' : 'border-[#121212]'}`
              roundedClasses = 'rounded-b-lg rounded-t-none lg:rounded-br-none'
            } else if (index === 1 || index === 2) {
              // Middle cards: No Right border, Square bottom corners. Left border acts as separator (Dashed)
              borderClasses = `border border-t-0 lg:border-r-0 lg:[border-left-style:dashed] ${isLightTheme ? 'border-[#555555]' : 'border-[#121212]'}`
              roundedClasses = 'rounded-b-lg rounded-t-none lg:rounded-b-none'
            } else if (index === 3) {
              // Last card: Has Right border, Square Bottom-Left, Rounded Bottom-Right. Left border acts as separator (Dashed)
              borderClasses = `border border-t-0 lg:[border-left-style:dashed] ${isLightTheme ? 'border-[#555555]' : 'border-[#121212]'}`
              roundedClasses = 'rounded-b-lg rounded-t-none lg:rounded-bl-none'
            }

            return (
              <div
                key={index}
                className={`relative group p-6 h-full ${borderClasses} ${roundedClasses} bg-black`}
              >
                <div className="flex flex-col h-full items-center justify-center text-center">
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <h3 className="text-base font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}