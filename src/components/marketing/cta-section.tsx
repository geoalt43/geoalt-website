import Link from 'next/link'
import { DemoCTA } from './demo-cta'
import { AIPlatformRotator } from './ai-platform-rotator'
import OpenAI from '@lobehub/icons/es/OpenAI'

export function CTASection() {
  return (
    <section className="pt-24 pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-black rounded-2xl p-12 flex items-center">
          {/* Left Section - Text Content */}
          <div className="flex-1 pr-8">
            <h2 className="text-5xl font-normal text-white mb-4 leading-tight tracking-wide">
              Start Growing Your AI<br />
              Visibility Today
            </h2>
            <p className="text-lg mb-8 leading-relaxed tracking-wide flex items-center" style={{color: '#898989'}}>
              GE<OpenAI size={20} className="mx-0.5" />Alt helps you lead in AI search and scale your brand faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors inline-block text-center">
                Try for Free
              </Link>
              <DemoCTA 
                text="Get Demo" 
                variant="outline" 
                size="md"
                showModal={false}
              />
            </div>
          </div>
          
          {/* Right Section - AI Platform Rotator */}
          <div className="flex-shrink-0 w-80 h-64 flex items-center justify-end">
            <div style={{ transform: 'translateX(150px) translateY(-50px) scale(1.3)' }}>
              <AIPlatformRotator variant="muted" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

