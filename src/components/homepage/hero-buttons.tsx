'use client'

import { triggerBookDemoEvent, triggerSignUpInitiatedEvent } from '@/lib/mixpanel'

export function HeroButtons() {
  return (
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
  )
}
