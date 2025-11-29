'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const visibilitySlides = [
  { id: 0, image: '/images/visibility_score_.jpeg' },
  { id: 1, image: '/images/ShareOfVoice_.jpeg' },
]

function AIVisibilityCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visibilitySlides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="lg:col-span-6 bg-black/60 border border-[#111111] rounded-2xl p-0 h-full w-[113.5%] -ml-20 overflow-visible">
      <div className="relative w-full h-[500px] rounded-2xl overflow-visible">
        {visibilitySlides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex h-full flex-col transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="pt-6 px-6 mb-4">
                <h3 className="text-xl font-medium text-white mb-2">
                  Analyze AI visibility scores to understand market performance
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Track how often your brand appears in AI-generated answers, monitor visibility trends,
                  <br />
                  and compare rankings to uncover opportunities to strengthen your market position.
                </p>
              </div>

              <div className="flex-1" />

              <div 
                className="w-full overflow-visible flex items-end -pb-34 -mb-25"
                style={{
                  perspective: '1500px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  style={{
                    transform: 'rotateX(-7deg) rotateY(-11deg) translateZ(35px)',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out',
                    width: '100%',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src={slide.image}
                    alt="AI visibility interface"
                    width={800}
                    height={1900}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function DashboardSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-4xl font-normal text-white mb-4 pt-9">
          Unlock AI-driven search insights that bring <br  /> 
          <span className="pt-3 pb-9 block">customers to you — GeoAlt</span>
          </h1>
        </div>

        {/* First Row - 2 containers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-6">
          {/* Container 1: Set up Prompts (reduced width - 6 columns) */}
          <div className="lg:col-span-6 bg-black/60 border border-[#111111] rounded-2xl p-6 overflow-visible">
            <div className="mb-2">
              <h3 className="text-xl font-medium text-white mb-1">Customize Your Prompts</h3>
              <p className="text-sm text-gray-400 mb-1.5 pb-4">
                Prompts are the foundation of your AI search strategy. 
              </p>
            </div>
            
            <div 
              className="w-full rounded-lg overflow-visible"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                style={{
                  transform: 'rotateX(-8deg) rotateY(-12deg) translateZ(40px)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Image
                  src="/images/Prompts_studio_.jpg"
                  alt="Prompt Studio interface"
                  width={900}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Container 2: Use Data to Pick Winners (wider - 6 columns) */}
          <div className="lg:col-span-6 bg-black/60 border border-[#111111] rounded-2xl p-6 overflow-visible">
            <div className="mb-4">
              <h3 className="text-xl font-medium text-white mb-2">Add Business Competitors</h3>
              <p className="text-sm text-gray-400 mb-4">
              Add your competitors so GeoAlt can map the landscape and drive growth insights.
              </p>
            </div>
            
            <div 
              className="w-full rounded-lg overflow-visible"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                style={{
                  transform: 'rotateX(-6deg) rotateY(-10deg) translateZ(45px)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Image
                  src="/images/Competitor_.png"
                  alt="Add competitors interface"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Container 3 and 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-6">
          {/* Container 3: Add Brands (smaller - 6 columns) */}
          <div className="lg:col-span-6 bg-black/60 border border-[#111111] rounded-2xl p-6 h-full w-[87%] overflow-visible">
            <div className="mb-4">
              <h3 className="text-xl font-medium text-white mb-2">Pick Model and Region</h3>
              <p className="text-sm text-gray-400 mb-4">
              Pick AI model and region to generate insights that help business grow
              </p>
            </div>
            
            <div 
              className="w-full rounded-lg overflow-visible"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                style={{
                  transform: 'rotateX(-10deg) rotateY(-14deg) translateZ(50px)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Image
                  src="/images/Region_Selector_.png"
                  alt="Region Selector interface"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Container 4: AI visibility carousel (2 slides) */}
          <AIVisibilityCarousel />
        </div>

        {/* Third row (previously containers 5 and 6) has been removed */}
      </div>
    </section>
  )
}

