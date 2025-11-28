import { DemoCTA } from './demo-cta'
import { AIPlatformRotator } from './ai-platform-rotator'
import OpenAI from '@lobehub/icons/es/OpenAI'

export function CTASection() {
  return (
    <section className="pt-24 pb-40  ">
      <div className="max-w-7xl mx-auto px-6 pt-3 pb-3  lg:px-8 border border-[#1d1d1d] rounded-2xl bg-[#0d0d0d] ">
        <div className="bg-[#0d0d0d] rounded-2xl p-12 flex items-center">
          {/* Left Section - Text Content */}
          <div className="flex-1 pr-8">
            <h2 className="text-4xl font-normal text-white mb-4 leading-tight tracking-wide">
              <span className="pb-2 inline-block">Start Growing Your</span><br />
             AI Visibility Today
            </h2>
            <p className="text-lg mb-8 leading-relaxed tracking-wide flex items-center text-[#898989]">
              GE<OpenAI size={20} className="mx-0.5" />Alt helps you lead in AI search and scale your brand faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://forms.google.com/YOUR_FORM_ID_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Start Free Trial
              </a>
              <DemoCTA 
                text="Contact Us" 
                variant="outline" 
                size="md"
                showModal={false}
              />
            </div>
          </div>
          
          {/* Right Section - AI Platform Rotator */}
          <div className="flex-shrink-0 w-80 h-64 flex items-center justify-end">
            <div className="cta-rotator-transform">
              <AIPlatformRotator variant="muted" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

