import { AIPlatformRotator } from '@/components/shared/ai-platform-rotator'
import { HeroButtons } from '@/components/homepage/hero-buttons'

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
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  )
}
