'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface DemoCTAProps {
  text: string
  variant?: 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showModal?: boolean
}

export function DemoCTA({ 
  text, 
  variant = 'outline', 
  size = 'md', 
  className,
  showModal = true 
}: DemoCTAProps) {
  const [isOpen, setIsOpen] = useState(false)

  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    outline: 'border-2 border-gray-600 text-white hover:bg-[#d4d4d4] hover:text-black transition-all duration-200 ease-in-out',
    ghost: 'text-white hover:bg-gray-800',
  }

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 sm:px-5 py-2.5 text-sm sm:text-base',
    lg: 'h-12 px-8 text-lg',
  }

  const handleClick = () => {
    if (showModal) {
      setIsOpen(true)
    }
  }

  if (showModal) {
    return (
      <>
        <button
          onClick={handleClick}
          className={cn(
            baseClasses,
            variants[variant],
            sizes[size],
            'w-full sm:w-auto text-center',
            className
          )}
        >
          {text}
        </button>

        {/* Demo Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Schedule a Demo
              </h3>
              <p className="text-gray-600 mb-6 flex items-center">
                Get a personalized demo of GE<Image src="/ai-icons/openai.webp" alt="" width={16} height={16} className="mx-0.5 inline-block" />Alt and see how we can help your brand dominate AI search.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        'w-full sm:w-auto text-center',
        className
      )}
    >
      {text}
    </button>
  )
}

