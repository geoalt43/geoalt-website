'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Handle visibility for animations
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow animation
      const timer = setTimeout(() => setIsVisible(true), 10)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!mounted) return null

  return createPortal(
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className={`relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-2 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image wrapper
          >
             <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  )
}
