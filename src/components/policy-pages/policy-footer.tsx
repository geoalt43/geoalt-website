import Link from 'next/link'
import Image from 'next/image'

export function PolicyFooter() {
  return (
    <footer className="bg-black w-full text-white relative flex flex-col" style={{ display: 'block', visibility: 'visible', position: 'relative', zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-0 pb-8 sm:pb-12 md:pb-16 mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-[8vh] 2xl:mt-[10vh]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center text-lg sm:text-xl md:text-2xl font-bold text-white">
              <Image
                src="/logos/GeoAlt_Logo.png"
                alt="GEOAlt logo"
                width={100}
                height={24}
                className="h-[1em] sm:h-[1.1em] md:h-[1.1em] w-auto"
                priority
              />
            </div>
            <p className="mt-3 sm:mt-4 md:mt-5 text-[10px] sm:text-xs md:text-sm text-[#898989] leading-relaxed">
              Turn AI mentions into traffic and customers. Dominate AI search and grow your brand faster.
            </p>
            <div className="mt-4 sm:mt-6 md:mt-7 flex space-x-3 sm:space-x-4 md:space-x-5">
              <a
                href="https://www.linkedin.com/company/geo-alt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#898989] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://x.com/geoalt_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#898989] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <a
              href="mailto:contact@geoalt.in"
              className="mt-3 sm:mt-4 md:mt-5 text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none block break-all"
            >
              contact@geoalt.in
            </a>
          </div>

          {/* Product Links */}
          <div className="ml-0 sm:ml-6 md:ml-12 xl:ml-14">
            <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-3 sm:mt-4 md:mt-5 space-y-2 sm:space-y-3 md:space-y-4">
              <li>
                <Link href="/" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="ml-0 sm:ml-6 md:ml-12 xl:ml-14">
            <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-3 sm:mt-4 md:mt-5 space-y-2 sm:space-y-3 md:space-y-4">
              <li>
                <Link href="/" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="ml-0 sm:ml-6 md:ml-12 xl:ml-14">
            <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-3 sm:mt-4 md:mt-5 space-y-2 sm:space-y-3 md:space-y-4">
              <li>
                <Link href="/" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="ml-0 sm:ml-6 md:ml-12 xl:ml-14">
            <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-3 sm:mt-4 md:mt-5 space-y-2 sm:space-y-3 md:space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full h-px bg-[#272324]"></div>
      <div className="pt-6 sm:pt-8 md:pt-10 pb-5 sm:pb-6 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-10">
          <div className="flex flex-wrap justify-between items-center gap-4 sm:gap-6 md:gap-8">
            <p className="text-[9px] sm:text-xs md:text-sm flex items-center gap-2 text-[#6d6264]">
              <span>&copy; 2025</span>
              <span className="inline-flex items-center leading-none">
                <Image
                  src="/logos/GeoAlt_Logo.png"
                  alt="GEOAlt logo"
                  width={80}
                  height={18}
                  className="h-[1em] w-auto align-middle"
                />
              </span>
            </p>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <Link
                href="/privacy-policy"
                className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none whitespace-nowrap"
              >
                Terms of Service
              </Link>
              <Link
                href="/refund-policy"
                className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none whitespace-nowrap"
              >
                Refund Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-[9px] sm:text-xs md:text-sm text-[#898989] hover:text-white transition-none whitespace-nowrap"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


