'use client'

import { useState } from 'react'
import OpenAI from '@lobehub/icons/es/OpenAI'
import { cn } from '@/lib/utils'

interface DemoCTAProps {
  text: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showModal?: boolean
}

export function DemoCTA({ 
  text, 
  variant = 'primary', 
  size = 'md', 
  className,
  showModal = true 
}: DemoCTAProps) {
  const [isOpen, setIsOpen] = useState(false)

  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-gray-600 text-white hover:bg-[#cecece] hover:text-black',
    ghost: 'text-white hover:bg-gray-800',
  }

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
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
                Get a personalized demo of GE<OpenAI size={16} className="mx-0.5" />Alt and see how we can help your brand dominate AI search.
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
        className
      )}
    >
      {text}
    </button>
  )
}

