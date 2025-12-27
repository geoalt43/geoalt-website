import { PolicyFooter } from '@/components/policy-pages/policy-footer'
import { PolicyPageClient } from '@/components/policy-pages/policy-page-client'

function getEffectiveDate() {
  return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function PrivacyPolicyPage() {
  const effectiveDate = getEffectiveDate()

  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-6 xs:py-8 sm:py-12 md:py-16 relative z-10">
          {/* Header */}
        <div className="mb-4 xs:mb-6 sm:mb-8 md:mb-10 mt-1 xs:mt-2 sm:mt-2 md:mt-1">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal mt-4 xs:mt-6 sm:mt-8 md:mt-10 mb-10 xs:mb-12 sm:mb-10 md:mb-16 text-white text-center">
            Privacy Policy
          </h1>
            <div className="text-xs xs:text-sm sm:text-base text-white/70 space-y-1 xs:space-y-0">
              <p className="break-words">Effective date: {effectiveDate}</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
          {/* Overview */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Overview
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              This Privacy Policy explains how GeoAlt collects, uses, stores, and protects personal and business information
              when you use our platform.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Information We Collect
            </h2>
            <div className="space-y-2 xs:space-y-0 text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              <p>
                We collect information you provide directly, such as your name, email address, company name, account details,
                and support communications.
              </p>
              <p>
                We also collect technical and usage data including IP address, browser type, device data, logs, and analytics
                information.
              </p>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              How We Use Information
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              We use collected information to operate the platform, manage subscriptions and free trials, process payments and
              refunds, improve product performance, and provide customer support.
            </p>
          </section>

          {/* AI & Brand Data */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              AI & Brand Data
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              Your brand data, prompts, and inputs remain your property. GeoAlt uses this data only to generate insights and
              does not sell or publicly train AI models on private customer data.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Data Sharing
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              We may share limited data with trusted third-party providers for payment processing, analytics, and infrastructure
              services, under confidentiality obligations.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Data Security
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              We use reasonable technical and organizational safeguards to protect your data. No system can be guaranteed
              100% secure.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Data Retention
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              We retain data only for as long as your account is active or as required by law.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Your Rights
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              You may request access, correction, or deletion of your data by contacting <a href="mailto:contact@geoalt.in" className="text-white hover:text-white/80 underline break-all">contact@geoalt.in</a>.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Children&apos;s Privacy
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              GeoAlt is not intended for individuals under the age of 18.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
              Policy Updates
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-[1.2] mt-1 xs:mt-0.5 sm:mt-0.5 mb-2 xs:mb-3 sm:mb-4 md:mb-4">
              We may update this Privacy Policy from time to time. Continued use of the Service means acceptance of the
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
