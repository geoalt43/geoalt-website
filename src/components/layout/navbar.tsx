'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import OpenAI from '@lobehub/icons/es/OpenAI'

export function Navbar() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/' && window.location.hash === '#pricing') {
      const element = document.getElementById('pricing')
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
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
  }

  return (
    <nav className="bg-brand-black/90 backdrop-blur-sm border-b border-[#656565] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-semibold text-brand-white">
              GE<OpenAI size={20} className="mx-0.5" />Alt
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
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

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-white hover:text-brand-gray-300 hover:opacity-80 px-3 py-2 text-sm font-normal tracking-wide transition-all duration-150">
              Sign in
            </Link>
            <Link
              href="/register"
              className="bg-white text-black border border-white px-3.5 py-1.5 rounded-full text-sm font-normal hover:bg-white/90 hover:opacity-90 transition-all duration-150"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

