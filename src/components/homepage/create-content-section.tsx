'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { ImageModal } from '@/components/ui/image-modal'

export function CreateContentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      ref={sectionRef}
      className="pt-4 pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left Column - Painting Image Container */}
          <div
            className="order-2 lg:order-1 relative w-full aspect-video overflow-hidden rounded-lg bg-white dark:bg-[#080808]/50"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              {/* Light theme background */}
              <Image
                src="/images/dash-BGimg.jpeg"
                alt=""
                fill
                className="object-cover opacity-80 block dark:hidden"
                quality={100}
                priority={false}
              />
              {/* Dark theme background */}
              <Image
                src="/images/BG-Greens.jpeg"
                alt=""
                fill
                className="object-cover opacity-80 hidden dark:block"
                quality={100}
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-[#080808] via-transparent to-transparent opacity-40" />
              <div className="absolute inset-0 bg-white/10 dark:bg-black/20" />
            </div>

            {/* Content Layer - touches left and bottom borders */}
            <div
              className="absolute z-10 top-[5%] right-[3%] bottom-0 left-0 cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative w-full h-full">
                {/* Light theme image */}
                <Image
                  src="/images/content-img-2.png"
                  alt="Create Content analytics"
                  className="object-contain object-left-bottom rounded-tr-lg transition-all duration-700 block dark:hidden"
                  quality={100}
                  width={2220}
                  height={280}
                  priority
                />
                {/* Dark theme image */}
                <Image
                  src="/images/content-img.png"
                  alt="Create Content analytics"
                  className="object-contain object-left-bottom rounded-tr-lg transition-all duration-700 hidden dark:block"
                  quality={100}
                  width={2220}
                  height={280}
                  priority
                />
                
                {/* Permanent Overlay */}
                <div className="absolute inset-0 bg-black/5 rounded-tr-lg" />
                {/* Plus Icon - hover only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg">
                  <div className="bg-black/30 backdrop-blur-md p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <ImageModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                src="/images/content-img.png"
                alt="Create Content analytics"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 lg:pl-16">
            {/* Step Label */}
            <div className="flex items-center gap-2 mb-4">
              {/* <span className="w-3 h-3 rounded-sm bg-orange-500" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-text-description">
                STEP 2
              </span> */}
            </div>

            {/* Heading */}
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-light tracking-tight mb-2 text-text-heading">
              Create AI-optimized content
            </h2>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-text-description max-w-md leading-relaxed font-light">
              We create AI-optimized content that positions your brand as a trusted source in answers.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
