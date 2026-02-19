'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function DashboardImageSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  return (
    <section ref={sectionRef} className="mt-0 sm:mt-0 md:mt-0 lg:mt-0 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-[4vh] xl:pb-[6vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="p-4 sm:p-6 md:p-7 lg:p-8 xl:p-12 relative overflow-hidden rounded-lg"
        >
          {/* Background Image */}
          <div className="absolute inset-x-[4%] inset-y-0 z-0">
            <Image
              src="/images/dash-BGimg.jpeg"
              alt=""
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Dashboard Image — Light theme */}
          <Image
            src="/images/Dashboard-light-theme.png"
            alt="Geoalt analytics dashboard"
            width={1280}
            height={720}
            priority
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 88vw"
            className="w-[92%] sm:w-[94%] md:w-[94%] lg:w-[94%] mx-auto h-auto object-contain relative z-10 block dark:hidden"
          />
          {/* Dashboard Image — Dark theme */}
          <Image
            src="/images/Dasboard-dark-theme.png"
            alt="Geoalt analytics dashboard"
            width={1280}
            height={720}
            priority
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 88vw"
            className="w-[92%] sm:w-[94%] md:w-[94%] lg:w-[94%] mx-auto h-auto object-contain relative z-10 hidden dark:block"
          />
        </motion.div>
      </div>
    </section>
  )
}
