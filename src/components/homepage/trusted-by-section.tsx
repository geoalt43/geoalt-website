import Image from 'next/image'

interface TrustedBrand {
  label: string;
  logo: string;
  displayLabel?: string;
  textImage?: string;
  preserveDetail?: boolean;
  lightWeight?: boolean;
  boldPart?: string;
  normalPart?: string;
  smallText?: boolean;
  mediumText?: boolean;
  fullImage?: boolean;
}

const trustedBrands: TrustedBrand[] = [
  {
    label: 'dabble',
    logo: '/logos/dabble.png',
    textImage: '/images/dabble-text.png',
    preserveDetail: true,
  },
  {
    label: 'Modo',
    displayLabel: 'MODO',
    logo: '/logos/modo.png',
    lightWeight: true,
    preserveDetail: true,
  },
  {
    label: 'SuperPen',
    logo: '/logos/Superpen.png',
    boldPart: 'Super',
    normalPart: 'Pen',
  },
  {
    label: 'NimbleDesk',
    logo: '/logos/nimbledesk.png',
  },
  {
    label: 'TreeTech Digi',
    logo: '/logos/treetechdigi.png',
    preserveDetail: true,
    lightWeight: true,
    mediumText: true,
  },
  {
    label: 'Oktaa',
    logo: '/images/oktaa.png',
    fullImage: true,
  },
]

export function TrustedBySection() {
  return (
    <section className="pt-[45.6px] sm:pt-[60.8px] md:pt-[65px] lg:pt-[4vh] xl:pt-[6vh] pb-12 sm:pb-16 md:pb-18 lg:pb-[4vh] xl:pb-[6vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div
          className="relative overflow-hidden bg-transparent px-0 pt-5 pb-5 sm:px-4 sm:pt-9 sm:pb-9 md:px-8 md:pt-10 md:pb-10 lg:px-10 lg:pt-12 lg:pb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <div className="relative flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-light sm:font-normal md:font-normal tracking-wide -mt-6 sm:-mt-8 md:-mt-9 lg:-mt-11 trusted-by-text">
              Trusted by
            </p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-0">
              {trustedBrands.map((brand, index) => (
                <div
                  key={`${brand.label}-${index}`}
                  className={`flex items-center justify-center gap-2 sm:gap-3 md:gap-4 py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-8 md:px-12 lg:px-16 xl:px-20 border border-[var(--color-card-border)] transition-colors duration-200 bg-[var(--color-card-bg)] dark:bg-[#060606] ${index >= 3 ? 'border-t-0' : ''}`}
                >
                  {brand.fullImage ? (
                    <div className="relative h-8 sm:h-10 md:h-12 lg:h-14 w-20 sm:w-28 md:w-32 lg:w-40 flex-shrink-0">
                      <Image
                        src={brand.logo}
                        alt={brand.label}
                        fill
                        className={`object-contain grayscale ${brand.preserveDetail
                          ? 'dark:invert'
                          : 'brightness-0 dark:invert'
                          }`}
                        quality={90}
                        sizes="(max-width: 640px) 5rem, (max-width: 768px) 7rem, (max-width: 1024px) 8rem, 10rem"
                        loading={index < 3 ? "eager" : "lazy"}
                        priority={index < 2}
                      />
                    </div>
                  ) : (
                    <>
                      <div className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 flex-shrink-0">
                        <Image
                          src={brand.logo}
                          alt={`${brand.label} logo`}
                          fill
                          className={`object-contain grayscale ${brand.preserveDetail
                            ? 'dark:invert'
                            : 'brightness-0 dark:invert'
                            }`}
                          quality={90}
                          sizes="(max-width: 640px) 1.5rem, (max-width: 768px) 2rem, (max-width: 1024px) 2.5rem, 3rem"
                          loading={index < 3 ? "eager" : "lazy"}
                          priority={index < 2}
                        />
                      </div>
                      {brand.textImage ? (
                        <div className="relative h-5 sm:h-6 md:h-8 lg:h-10 w-14 sm:w-20 md:w-24 lg:w-32 flex-shrink-0">
                          <Image
                            src={brand.textImage}
                            alt={brand.label}
                            fill
                            className="object-contain grayscale brightness-0 dark:invert"
                            quality={90}
                            sizes="(max-width: 640px) 3.5rem, (max-width: 768px) 5rem, (max-width: 1024px) 6rem, 8rem"
                            loading={index < 3 ? "eager" : "lazy"}
                            priority={index < 2}
                          />
                        </div>
                      ) : brand.boldPart && brand.normalPart ? (
                        <span className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black dark:text-white">
                          <span className="font-bold">{brand.boldPart}</span>
                          <span className="font-normal">{brand.normalPart}</span>
                        </span>
                      ) : brand.lightWeight ? (
                        <span className={`${brand.smallText ? 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl' : 'text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'
                          } font-light tracking-wide text-black dark:text-white`}>
                          {brand.displayLabel || brand.label}
                        </span>
                      ) : (
                        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black dark:text-white">
                          {brand.displayLabel || brand.label}
                        </span>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
