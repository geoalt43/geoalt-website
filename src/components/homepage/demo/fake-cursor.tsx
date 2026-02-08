"use client"

import { MousePointer } from 'lucide-react'

interface FakeCursorProps {
  x: number
  y: number
  isClicking: boolean
  isVisible: boolean
}

export function FakeCursor({ x, y, isClicking, isVisible }: FakeCursorProps) {
  if (!isVisible) return null
  
  return (
    <div
      className="fixed z-[9999] pointer-events-none transform transition-transform duration-300 ease-out will-change-transform"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0) scale(${isClicking ? 0.85 : 1})`,
      }}
    >
      <div className="relative">
        <MousePointer 
          className="w-5 h-5 text-gray-900 fill-white drop-shadow-md" 
          strokeWidth={2}
        />
      </div>
    </div>
  )
}
