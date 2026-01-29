'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedGridBackground() {
  const gridSize = 40
  const lineThickness = 1 // Thickness of grid lines
  const lineOpacity = 0.35 // Same opacity for both horizontal and vertical lines
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static Grid Lines - Horizontal lines have increased height, vertical lines unchanged */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, ${lineOpacity}) ${lineThickness}px, transparent ${lineThickness}px),
            linear-gradient(90deg, rgba(255, 255, 255, ${lineOpacity}) ${lineThickness}px, transparent ${lineThickness}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
      
      {/* Additional static grid overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, ${lineOpacity * 0.58}) ${lineThickness}px, transparent ${lineThickness}px),
            linear-gradient(90deg, rgba(255, 255, 255, ${lineOpacity * 0.48}) ${lineThickness}px, transparent ${lineThickness}px)
          `,
          backgroundSize: `${gridSize * 10}px ${gridSize * 10}px`,
        }}
      />
      
      {/* Fade effect overlays on edges - positioned above grid but below image */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-48 md:h-56 lg:h-64 xl:h-80 bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 md:h-56 lg:h-64 xl:h-80 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 md:w-36 lg:w-40 bg-gradient-to-r from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 md:w-36 lg:w-40 bg-gradient-to-l from-black via-black/30 to-transparent pointer-events-none z-[5]" />
      
      {/* Animated gradient overlay for depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-purple-500/8"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Subtle corner glows */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export function DashboardImageSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' })

  return (
    <section ref={sectionRef} className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="p-4 sm:p-6 md:p-7 lg:p-8 xl:p-12 relative overflow-hidden bg-black rounded-lg"
        >
          {/* Animated Grid Background */}
          <AnimatedGridBackground />
          
          {/* Image */}
          <Image
            src="/images/img-2.jpeg"
            alt="Geoalt analytics dashboard"
            width={1280}
            height={720}
            priority
            quality={75}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 88vw"
            className="w-full sm:w-[90%] md:w-[89%] lg:w-[88%] mx-auto h-auto object-contain relative z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}
