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
    <section id="home" className="pt-22 pb-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mt-8">
          <div className="max-w-4xl">
            <h1 
              className={`text-4xl lg:text-[3.3rem] font-normal -mt-6 mb-4 leading-tight tracking-tighter transition-all duration-[0ms]  bg-gradient-to-r from-[#4285f4] via-[#9c27b0] to-[#ea4335] text-transparent bg-clip-text ${
                isTextLoaded ? 'blur-none opacity-90' : 'blur-lg opacity-90'
              }`}
            >
              Get Your Brand Recommended by
            </h1>
            <div className="-mt-11 flex justify-center">
              <AIPlatformRotator size="large" />
            </div>
            <p className="text-xl -mt-8 leading-relaxed flex items-center justify-center text-[#878787]">
              GE<OpenAI size={20} className="mx-0.5" />Alt helps your business stand out across AI platforms
            </p>
            <p className="text-xl mb-8 pb-4 leading-relaxed flex items-center justify-center text-[#878787]">
              <em>— Turning AI visibility into traffic</em>
            </p>
          
            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/register" className="text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors bg-[#2b2b2b] hover:bg-[#1a1a1a]">
                Get Started
              </Link>
              <DemoCTA 
                text="Contact Us" 
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
