'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import OpenAI from '@lobehub/icons/es/OpenAI'

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleHashScroll = () => {
      if (pathname === '/' && window.location.hash === '#pricing') {
        const element = document.getElementById('pricing')
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
    }

    handleHashScroll()
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [pathname])

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById('pricing')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-brand-black/90 backdrop-blur-sm border-b border-[#1d1d1d] sticky top-0 z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 relative">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center text-lg sm:text-xl font-semibold text-brand-white">
              GE<OpenAI size={18} className="mx-0.5 sm:w-5 sm:h-5" />Alt
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-0 absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link href="/" className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out">
              Home
            </Link>
            <Link 
              href="/#pricing" 
              onClick={handlePricingClick}
              className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
            >
              Pricing
            </Link>
            <Link href="/resources" className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out">
              Resources
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out">
              About
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0 z-10">
            <Link href="/login" className="text-white hover:text-brand-gray-300 hover:opacity-80 px-2 lg:px-3 py-2 text-sm font-normal tracking-wide transition-all duration-150 whitespace-nowrap">
              Sign in
            </Link>
            <Link
              href="/register"
              className="bg-white text-black border border-white px-3 lg:px-3.5 py-1.5 rounded-full text-sm font-normal hover:bg-white/90 hover:opacity-90 transition-all duration-150 whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            <Link href="/login" className="text-white hover:text-brand-gray-300 hover:opacity-80 px-1.5 sm:px-2 py-1.5 text-xs sm:text-sm font-normal tracking-wide transition-all duration-150 whitespace-nowrap">
              Sign in
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#1d1d1d] py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
              >
                Home
              </Link>
              <Link 
                href="/#pricing" 
                onClick={handlePricingClick}
                className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
              >
                Pricing
              </Link>
              <Link 
                href="/resources" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
              >
                Resources
              </Link>
              <Link 
                href="/about" 
                onClick={handleLinkClick}
                className="px-4 py-2 text-sm font-medium rounded-full border border-transparent text-[#afafaf] hover:border-[#4b4b4b] hover:bg-[#4b4b4b] hover:text-white transition-all duration-150 ease-out"
              >
                About
              </Link>
              <Link
                href="/register"
                onClick={handleLinkClick}
                className="mt-2 bg-white text-black border border-white px-4 py-2 rounded-full text-sm font-normal hover:bg-white/90 hover:opacity-90 transition-all duration-150 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

