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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-x-hidden ${
      isScrolled 
        ? "bg-page-background/90 backdrop-blur-sm border-b border-border" 
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
                width={100}
                height={24}
                quality={90}
                className="h-[0.9em] sm:h-[1em] md:h-[1em] w-auto"
                priority
                sizes="(max-width: 640px) 80px, 100px"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-0 absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border bg-[var(--color-page-background)] hover:bg-surface-hover transition-all duration-150 ease-out ${
                isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border bg-[var(--color-page-background)] hover:bg-surface-hover transition-all duration-150 ease-out ${
                isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/#features"
              onClick={handleFeaturesClick}
              className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border bg-[var(--color-page-background)] hover:bg-surface-hover transition-all duration-150 ease-out ${
                isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
              }`}
            >
              Features
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border bg-[var(--color-page-background)] hover:bg-surface-hover transition-all duration-150 ease-out ${
                isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 md:space-x-3.5 lg:space-x-4 flex-shrink-0 z-10">
            <ModeToggle />
            <a
              href="https://app.geoalt.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSignUpInitiatedEvent("navbar-sign-in")}
              className="hover:opacity-80 px-3 md:px-3.5 lg:px-3.5 py-1.5 text-sm font-normal tracking-wide transition-all duration-150 whitespace-nowrap cursor-pointer rounded-full border border-border bg-[var(--color-page-background)] text-text-primary"
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
          <div className="md:hidden flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
             <div className="scale-75"><ModeToggle /></div>
            <a
              href="https://app.geoalt.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSignUpInitiatedEvent("navbar-sign-in-mobile")}
              className="text-text-primary hover:text-text-secondary hover:opacity-80 px-1.5 sm:px-2 py-1.5 text-xs sm:text-sm font-normal tracking-wide transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Sign in
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-6 h-6 flex flex-col justify-center items-center focus:outline-none group"
              aria-label="Toggle menu"
            >
              <span
                className={`absolute block w-5 h-[2px] bg-text-primary rounded-full transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen
                  ? 'rotate-45 translate-y-0'
                  : '-translate-y-1.5'
                  }`}
              />
              <span
                className={`absolute block w-5 h-[2px] bg-text-primary rounded-full transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen
                  ? '-rotate-45 translate-y-0'
                  : 'translate-y-1.5'
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border dark:border-[#242424] py-4 bg-page-background">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={handleHomeClick}
                className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border hover:bg-surface-hover active:bg-surface-hover transition-all duration-150 ease-out ${
                  isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
                }`}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                onClick={handlePricingClick}
                className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border hover:bg-surface-hover active:bg-surface-hover transition-all duration-150 ease-out ${
                  isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/#features"
                onClick={handleFeaturesClick}
                className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border hover:bg-surface-hover active:bg-surface-hover transition-all duration-150 ease-out ${
                  isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
                }`}
              >
                Features
              </Link>
              <Link
                href="/blog"
                className={`px-4 py-2 text-sm font-medium rounded-full border border-transparent hover:border-border hover:bg-surface-hover active:bg-surface-hover transition-all duration-150 ease-out ${
                  isLightTheme ? 'text-[var(--color-text-feature)] hover:text-[var(--color-text-feature)]' : 'text-[var(--color-ref-039)]'
                }`}
              >
                Blog
              </Link>
              <a
                href="https://app.geoalt.in/register"
                target="_blank"
                rel="noopener noreferrer"

                onClick={() => {
                  handleLinkClick()
                  triggerSignUpInitiatedEvent("navbar-get-started")
                }}
                className="navbar-get-started mt-2 bg-black text-white dark:bg-white dark:text-black border border-border px-4 py-2 rounded-full text-sm font-normal hover:opacity-90 transition-all duration-150 text-center cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

