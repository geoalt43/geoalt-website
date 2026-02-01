import { PolicyFooter } from '@/components/policy-pages/policy-footer'
import { PolicyPageClient } from '@/components/policy-pages/policy-page-client'
import { Navbar } from '@/components/layout/navbar'

function getEffectiveDate() {
  return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function CookiePolicyPage() {
  const effectiveDate = getEffectiveDate()

  return (
    <div className="bg-[var(--color-ref-001)] text-[var(--color-ref-026)] w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-6 xs:py-8 sm:py-12 md:py-16 relative z-10">
        {/* Header */}
        <div className="mb-4 xs:mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal mt-4 xs:mt-6 sm:mt-8 md:mt-10 max-[680px]:mt-20 mb-10 xs:mb-12 sm:mb-10 md:mb-16 text-[var(--color-ref-026)] text-center">
            Cookie Policy
          </h1>
          <div className="text-xs xs:text-sm sm:text-base text-white/70 space-y-1 xs:space-y-0">
            <p className="break-words">Effective date: {effectiveDate}</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
          {/* What Are Cookies */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              What Are Cookies
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              Cookies are small text files stored on your device that help websites function correctly and improve user
              experience.
            </p>
          </section>

          {/* Cookies We Use */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Cookies We Use
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              Essential cookies are required for login, security, and session management. Analytics cookies help us understand usage patterns and improve performance. Functional cookies remember preferences and settings.
            </p>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Third-Party Cookies
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              Some cookies are set by trusted third-party analytics providers and are governed by their own privacy policies.
            </p>
          </section>

          {/* Managing Cookies */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Managing Cookies
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              You can control or disable cookies through your browser settings. Disabling essential cookies may affect website
              functionality.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Policy Updates
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              We may update this Cookie Policy from time to time. Continued use of the website means acceptance of the
              updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Contact Us
            </h2>
            <div className="space-y-2 text-base sm:text-lg md:text-lg text-white/90 md:leading-normal">
              <p>Email: <a href="mailto:contact@geoalt.in" className="text-blue-400 hover:text-blue-300 underline transition-colors break-all">contact@geoalt.in</a></p>
              <p>Website: <a href="https://geoalt.in" className="text-blue-400 hover:text-blue-300 underline transition-colors break-all">https://geoalt.in</a></p>
            </div>
          </section>
        </div>
        </div>
      </main>
      
      <PolicyFooter />
      <PolicyPageClient />
    </div>
  )
}
