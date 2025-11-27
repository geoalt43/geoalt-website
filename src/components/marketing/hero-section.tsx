'use client'

import Link from 'next/link'
import { AIPlatformRotator } from './ai-platform-rotator'
import { DemoCTA } from './demo-cta'
import OpenAI from '@lobehub/icons/es/OpenAI'

interface HeroSectionProps {
  isTextLoaded: boolean
}

export function HeroSection({ isTextLoaded }: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mt-8">
          <div className="max-w-4xl">
            <h1 
              className={`text-6xl lg:text-6xl font-normal mb-0 leading-tight tracking-tighter transition-all duration-[3000ms] ease-out ${
                isTextLoaded ? 'blur-none opacity-100' : 'blur-lg opacity-100'
              }`}
              style={{
                background: 'linear-gradient(135deg, #4285f4 0%, #9c27b0 50%, #ea4335 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Get Your Brand Recommended by
            </h1>
            <div className="mt-0 flex justify-center">
              <AIPlatformRotator size="large" />
            </div>
            <p className="text-xl mb-0 leading-relaxed mt-4 flex items-center justify-center" style={{color: '#878787'}}>
              GE<OpenAI size={20} className="mx-0.5" />Alt helps your business stand out across AI platforms
            </p>
            <p className="text-xl mb-8 leading-relaxed flex items-center justify-center" style={{color: '#878787'}}>
              <em>— Turning AI visibility into traffic</em>
            </p>
          
            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/register" className="text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors" style={{backgroundColor: '#2b2b2b'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1a1a'} onMouseLeave={(e) => e.target.style.backgroundColor = '#2b2b2b'}>
                Get Started
              </Link>
              <DemoCTA 
                text="Get Demo" 
                variant="outline" 
                size="md"
                showModal={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
