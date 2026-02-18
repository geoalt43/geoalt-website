'use client'

import { AIPlatformRotator } from '@/components/shared/ai-platform-rotator'
import { triggerBookDemoEvent, triggerSignUpInitiatedEvent } from '@/lib/mixpanel'

export function HeroSection() {
  return (
    <section id="home" className="pt-16 sm:pt-20 lg:pt-24 relative overflow-hidden">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 z-0 bg-dot-grid mask-fade-out pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mt-4 sm:mt-8">
          <div className="max-w-4xl">
            {/* Heading — CSS animation, visible from first paint */}
            <h1
              id="navbar-trigger"
              className="hero-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-normal mt-1 sm:mt-0 mb-1 sm:mb-2 md:mb-0 leading-tight tracking-tight text-[var(--color-ref-001)] dark:text-white"
            >
              Get Your Brand Recommended by
            </h1>

            <div className="flex justify-center w-full hero-fade-in" style={{ animationDelay: '0.15s' }}>
              <AIPlatformRotator size="large" centered={true} />
            </div>

            <p
              className="hero-fade-in text-sm sm:text-base md:text-lg text-center text-text-description px-4 sm:px-0 mt-1 sm:mt-2 md:mt-0"
              style={{ animationDelay: '0.25s' }}
            >
              Geoalt helps your business stand out across AI platforms
            </p>
            <p
              className="hero-fade-in text-xs sm:text-sm md:text-base mb-6 sm:mb-8 pb-2 sm:pb-4 text-center text-text-description px-4 sm:px-0"
              style={{ animationDelay: '0.35s' }}
            >
              <em>— Turning AI visibility into traffic</em>
            </p>

            {/* AEO (Answer Engine Optimization) Definition Block */}
            <div className="sr-only">
                <h2>What is Geoalt?</h2>
                <p>
                    Geoalt is a Generative Engine Optimization (GEO) platform that helps businesses optimize their brand visibility across AI platforms like ChatGPT, Perplexity, Claude, and Gemini. 
                    It analyzes how AI recommends brands and provides actionable insights to increase mentions, traffic, and citation share in AI-driven search results.
                </p>
            </div>

            {/* CTA Buttons — visible from first paint */}
            <div className="hero-fade-in flex flex-row gap-3 sm:gap-4 items-center justify-center px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://app.geoalt.in/register"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSignUpInitiatedEvent('hero-section')}
                className="group inline-flex items-center justify-center pl-4 pr-2 py-2 sm:py-3 rounded-full text-[11px] sm:text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out text-center cursor-pointer border border-border bg-[#080808] dark:bg-white text-white dark:text-black"
              >
                <span className="text-white dark:text-black">Start Free Trial</span>
                <div className="relative flex items-center justify-center w-5 h-5 ml-1.5 overflow-hidden text-white dark:text-black">
                  {/* Chevron Icon - Default */}
                  <svg 
                    className="absolute transition-all duration-300 transform opacity-100 group-hover:opacity-0 group-hover:translate-x-4" 
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {/* Arrow Icon - Hover */}
                  <svg 
                    className="absolute transition-all duration-300 transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5" 
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
              <a
                href="https://calendly.com/geoalt43/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerBookDemoEvent('hero-section')}
                className="group inline-flex items-center justify-center bg-button-bg border border-[#6E6E6E] px-4 py-2 sm:py-3 rounded-full text-[11px] sm:text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out hover:opacity-90 text-center cursor-pointer"
              >
                <span className="text-text-heading dark:!text-black">Book a Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
