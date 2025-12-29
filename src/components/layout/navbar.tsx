'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { triggerSignUpInitiatedEvent } from '@/lib/mixpanel'

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <nav className="bg-brand-black/90 backdrop-blur-sm border-b border-[#1d1d1d] fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-16 relative">
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="flex items-center text-lg sm:text-xl md:text-xl font-semibold text-brand-white"
            >
              <Image
                src="/logos/GeoAlt_Logo.png"
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
              className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
            >
              Pricing
            </Link>
            <Link
              href="/#features"
              onClick={handleFeaturesClick}
              className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
            >
              Features
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 md:space-x-3.5 lg:space-x-4 flex-shrink-0 z-10">
            <a
              href="https://app.geoalt.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSignUpInitiatedEvent("navbar-sign-in")}
              className="text-white hover:text-brand-gray-300 hover:opacity-80 px-2 md:px-2.5 lg:px-3 py-2 text-sm font-normal tracking-wide transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Sign in
            </a>
            <a
              href="https://app.geoalt.in/register"
              target="_blank"
              onClick={() => triggerSignUpInitiatedEvent("navbar-get-started")}
              rel="noopener noreferrer"
              className="bg-white text-black border border-white px-3 md:px-3.5 lg:px-3.5 py-1.5 rounded-full text-sm font-normal hover:bg-white/90 hover:opacity-90 transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            <a
              href="https://app.geoalt.in/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSignUpInitiatedEvent("navbar-sign-in-mobile")}
              className="text-white hover:text-brand-gray-300 hover:opacity-80 px-1.5 sm:px-2 py-1.5 text-xs sm:text-sm font-normal tracking-wide transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Sign in
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-6 h-6 flex flex-col justify-center items-center focus:outline-none group"
              aria-label="Toggle menu"
            >
              <span
                className={`absolute block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen
                  ? 'rotate-45 translate-y-0'
                  : '-translate-y-1.5'
                  }`}
              />
              <span
                className={`absolute block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen
                  ? '-rotate-45 translate-y-0'
                  : 'translate-y-1.5'
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#1d1d1d] py-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={handleHomeClick}
                className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white active:bg-[#5a5a5a] active:border-[#5a5a5a] active:text-white transition-all duration-150 ease-out"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                onClick={handlePricingClick}
                className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white active:bg-[#5a5a5a] active:border-[#5a5a5a] active:text-white transition-all duration-150 ease-out"
              >
                Pricing
              </Link>
              <Link
                href="/#features"
                onClick={handleFeaturesClick}
                className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white active:bg-[#5a5a5a] active:border-[#5a5a5a] active:text-white transition-all duration-150 ease-out"
              >
                Features
              </Link>
              <a
                href="https://app.geoalt.in/register"
                target="_blank"
                rel="noopener noreferrer"

                onClick={() => {
                  handleLinkClick()
                  triggerSignUpInitiatedEvent("navbar-get-started")
                }}
                className="mt-2 bg-white text-black border border-white px-4 py-2 rounded-full text-sm font-normal hover:bg-white/90 hover:opacity-90 transition-all duration-150 text-center cursor-pointer"
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

