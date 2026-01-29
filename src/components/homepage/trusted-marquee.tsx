'use client'

import Image from 'next/image'

const trustedBrands = [
  { 
    label: 'dabble', 
    logo: '/logos/dabble.png',
  },
  { 
    label: 'Modo', 
    logo: '/logos/modo.png',
  },
  { 
    label: 'SuperPen', 
    logo: '/logos/Superpen.png',
  },
  { 
    label: 'NimbleDesk', 
    logo: '/logos/nimbledesk.png',
  },
  { 
    label: 'TreeTech Digi', 
    logo: '/logos/treetechdigi.png',
  },
]

export function TrustedMarquee() {
  return (
    <section className="pt-[45.6px] sm:pt-[60.8px] md:pt-[65px] lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-18 lg:pb-[4vh] xl:pb-[6vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="relative overflow-hidden rounded-[0px] border-b border-white/10 bg-transparent px-4 pt-5 pb-5 sm:px-6 sm:pt-9 sm:pb-9 md:px-8 md:pt-10 md:pb-10 lg:px-10 lg:pt-12 lg:pb-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-32 h-32 bg-white/0 rounded-full blur-3xl -top-10 -left-6" />
            <div className="absolute w-40 h-40 bg-white/0 rounded-full blur-3xl -bottom-16 right-6" />
          </div>
          <div className="relative flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <p className="text-base sm:text-lg md:text-lg font-base tracking-wide -mt-6 sm:-mt-8 md:-mt-9 lg:-mt-11 trusted-by-text">
              Trusted by
            </p>
            <div className="w-full overflow-hidden mask-fade-horizontal">
              <div className="trusted-marquee flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20">
                {[...trustedBrands, ...trustedBrands].map((brand, index) => (
                  <div
                    key={`${brand.label}-${index}`}
                    className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 whitespace-nowrap flex-shrink-0"
                  >
                    <div className="relative h-[1rem] w-[1rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem] lg:h-[2.5rem] lg:w-[2.5rem] flex-shrink-0">
                      <Image
                        src={brand.logo}
                        alt={`${brand.label} logo`}
                        fill
                        className="object-contain"
                        quality={75}
                        sizes="(max-width: 640px) 1rem, (max-width: 768px) 1.5rem, (max-width: 1024px) 2rem, 2.5rem"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                    <span className="text-sm sm:text-xl md:text-2xl lg:text-[2.1rem] font-normal text-white">
                      {brand.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
