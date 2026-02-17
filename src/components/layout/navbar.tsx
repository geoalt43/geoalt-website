'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { triggerSignUpInitiatedEvent } from '@/lib/mixpanel'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { useTheme } from 'next-themes'

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightTheme = mounted && resolvedTheme === 'light'

  useEffect(() => {
    // On pages other than home, always show the solid background
    if (pathname !== '/') {
      setIsScrolled(true)
      return
    }

    // Reset scroll state when transitioning back to home
    setIsScrolled(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '-10px 0px 0px 0px' // Trigger slightly before it hits the top
      }
    )

    const trigger = document.getElementById('navbar-trigger')
    if (trigger) {
      observer.observe(trigger)
    }

    return () => {
      if (trigger) {
        observer.unobserve(trigger)
      }
    }
  }, [pathname])

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById('home')
      if (element) {
        const html = document.documentElement
        const body = document.body
        const originalScrollBehavior = html.style.scrollBehavior

        html.style.scrollBehavior = 'auto'
        body.style.scrollBehavior = 'auto'

        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              html.style.scrollBehavior = originalScrollBehavior || ''
              body.style.scrollBehavior = ''
            })
          })
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById('pricing')
      if (element) {
        const html = document.documentElement
        const body = document.body
        const originalScrollBehavior = html.style.scrollBehavior

        html.style.scrollBehavior = 'auto'
        body.style.scrollBehavior = 'auto'

        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              html.style.scrollBehavior = originalScrollBehavior || ''
              body.style.scrollBehavior = ''
            })
          })
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleFeaturesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById('features')
      if (element) {
        const html = document.documentElement
        const body = document.body
        const originalScrollBehavior = html.style.scrollBehavior

        html.style.scrollBehavior = 'auto'
        body.style.scrollBehavior = 'auto'

        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              html.style.scrollBehavior = originalScrollBehavior || ''
              body.style.scrollBehavior = ''
            })
          })
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-page-background/90 backdrop-blur-sm border-b border-[var(--color-card-border)]" 
        : "bg-transparent border-b border-transparent"
    }`}>
      {!isScrolled && (
        <div className="absolute inset-0 z-0 bg-dot-grid mask-fade-out pointer-events-none" aria-hidden="true" />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-16 relative">
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="flex items-center text-lg sm:text-xl md:text-xl font-semibold text-text-primary"
            >
              <Image
                src={isLightTheme ? '/geoalt-logo/logo-navbar-.svg' : '/geoalt-logo/logo-nav-white.svg'}
                alt="GEOAlt logo"
                width={80}
                height={20}
                quality={90}
                className="h-5 sm:h-6 md:h-6 w-auto"
                priority
                sizes="80px"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-0 absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border hover:bg-surface-hover transition-all duration-150 ease-out ${
                isLightTheme
                  ? (!isScrolled && pathname === '/' ? 'bg-[var(--color-page-background)]' : 'bg-transparent')
                  : 'bg-transparent'
              } ${
                isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border hover:bg-surface-hover transition-all duration-150 ease-out ${
                isLightTheme
                  ? (!isScrolled && pathname === '/' ? 'bg-[var(--color-page-background)]' : 'bg-transparent')
                  : 'bg-transparent'
              } ${
                isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/#features"
              onClick={handleFeaturesClick}
              className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border hover:bg-surface-hover transition-all duration-150 ease-out ${
                isLightTheme
                  ? (!isScrolled && pathname === '/' ? 'bg-[var(--color-page-background)]' : 'bg-transparent')
                  : 'bg-transparent'
              } ${
                isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
              }`}
            >
              Features
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border hover:bg-surface-hover transition-all duration-150 ease-out ${
                isLightTheme
                  ? (!isScrolled && pathname === '/' ? 'bg-[var(--color-page-background)]' : 'bg-transparent')
                  : 'bg-transparent'
              } ${
                isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 md:space-x-3.5 lg:space-x-4 flex-shrink-0 z-10">
            <ModeToggle className={
              isLightTheme
                ? (!isScrolled && pathname === '/' ? 'bg-[var(--color-page-background)]' : 'bg-transparent')
                : 'bg-transparent'
            } />
            <a
              href="https://app.geoalt.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSignUpInitiatedEvent("navbar-sign-in")}
              className={`navbar-sign-in hover:opacity-80 px-3 md:px-3.5 lg:px-3.5 py-1.5 text-sm font-normal tracking-wide transition-all duration-150 whitespace-nowrap cursor-pointer rounded-full border border-border text-text-primary ${
                isLightTheme
                  ? (!isScrolled && pathname === '/' ? 'bg-[var(--color-page-background)]' : 'bg-transparent')
                  : 'bg-transparent'
              }`}
            >
              Sign in
            </a>
            <a
              href="https://app.geoalt.in/register"
              target="_blank"
              onClick={() => triggerSignUpInitiatedEvent("navbar-get-started")}
              rel="noopener noreferrer"
              className="navbar-get-started bg-black text-white dark:bg-white dark:text-black border border-border px-3 md:px-3.5 lg:px-3.5 py-1.5 rounded-full text-sm font-normal hover:opacity-90 transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-0 flex-shrink-0 text-text-primary">
            <div className="scale-75"><ModeToggle className="bg-transparent" /></div>
            <a
              href="https://app.geoalt.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSignUpInitiatedEvent("navbar-sign-in-mobile")}
              className="hidden xs:inline-block hover:text-text-secondary hover:opacity-80 px-1 py-1.5 text-xs font-normal tracking-wide transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Sign in
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none -mr-1"
              aria-label="Toggle menu"
            >
              <span
                className={`absolute block w-5 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen
                  ? 'rotate-45 translate-y-0'
                  : '-translate-y-1.5'
                  }`}
              />
              <span
                className={`absolute block w-5 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen
                  ? '-rotate-45 translate-y-0'
                  : 'translate-y-1.5'
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden fixed top-14 sm:top-16 left-0 right-0 w-full border-t border-border dark:border-[#242424] py-6 px-6 sm:px-8 z-[100] ${isLightTheme ? 'bg-[#F2F2F2]' : 'bg-[#111111]'}`}>
            <div className="w-full mx-auto">
              <div className="flex flex-col w-full">
                
                {/* Navigation Links - Left Aligned */}
                <div className="flex flex-col space-y-2 items-start w-full">
                  <Link
                    href="/"
                    onClick={handleHomeClick}
                    className={`flex items-center gap-3 py-3 text-sm sm:text-base font-normal transition-all duration-200 ease-out cursor-pointer group w-full ${
                      isLightTheme 
                        ? 'text-gray-800 hover:text-gray-600' 
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Home
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={handlePricingClick}
                    className={`flex items-center gap-3 py-3 text-sm sm:text-base font-normal transition-all duration-200 ease-out cursor-pointer group w-full ${
                      isLightTheme 
                        ? 'text-gray-800 hover:text-gray-600' 
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    Pricing
                  </Link>
                  <Link
                    href="/#features"
                    onClick={handleFeaturesClick}
                    className={`flex items-center gap-3 py-3 text-sm sm:text-base font-normal transition-all duration-200 ease-out cursor-pointer group w-full ${
                      isLightTheme 
                        ? 'text-gray-800 hover:text-gray-600' 
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                    Features
                  </Link>
                  <Link
                    href="/blog"
                    onClick={handleLinkClick}
                    className={`flex items-center gap-3 py-3 text-sm sm:text-base font-normal transition-all duration-200 ease-out cursor-pointer group w-full ${
                      isLightTheme 
                        ? 'text-gray-800 hover:text-gray-600' 
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Blog
                  </Link>
                </div>

                {/* CTA Section - Left Aligned Stack */}
                <div className="flex flex-col gap-3 w-full mt-6 items-center">
                  <a
                    href="https://app.geoalt.in/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                        handleLinkClick()
                        triggerSignUpInitiatedEvent("navbar-sign-in")
                    }}
                    className={`w-[90%] py-1.5 rounded-full text-center text-sm font-medium transition-colors border ${
                      isLightTheme
                        ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        : 'border-gray-700 text-gray-200 hover:bg-white/5'
                    }`}
                  >
                    Sign In
                  </a>
                  <a
                    href="https://app.geoalt.in/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                        handleLinkClick()
                        triggerSignUpInitiatedEvent("navbar-get-started")
                    }}
                    className={`w-[90%] py-1.5 rounded-full text-center text-sm font-medium transition-colors ${
                      isLightTheme
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

