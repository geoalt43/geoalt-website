import { PolicyFooter } from '@/components/policy-pages/policy-footer'
import { PolicyPageClient } from '@/components/policy-pages/policy-page-client'
import { Navbar } from '@/components/layout/navbar'

function getEffectiveDate() {
  return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function PrivacyPolicyPage() {
  const effectiveDate = getEffectiveDate()

  return (
    <div className="bg-[var(--color-ref-001)] text-[var(--color-ref-026)] w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-6 xs:py-8 sm:py-12 md:py-16 relative z-10">
          {/* Header */}
          <div className="mb-4 xs:mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal mt-4 xs:mt-6 sm:mt-8 md:mt-10 max-[680px]:mt-20 mb-10 xs:mb-12 sm:mb-10 md:mb-16 text-[var(--color-ref-026)] text-center">
              Refund Policy
            </h1>
            <div className="text-xs xs:text-sm sm:text-base text-white/70 space-y-1">
              <p>Effective date: {effectiveDate}</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            <div className="space-y-2 xs:space-y-0 text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
              <p>
                Payments for our services are processed by Paddle.com, who acts as our Merchant of Record.
              </p>
            </div>

            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Eligibility for Refunds
              </h2>
              <div className="space-y-2 xs:space-y-0 text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                <p>
                  If you’re not satisfied with your purchase, you may be eligible for a refund under the conditions outlined below:
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1 pl-1">
                  <li>Refund requests must be made within fourteen (14) days of the original purchase date.</li>
                  <li>Refund eligibility depends on the type of product or subscription purchased and Paddle&apos;s Buyer Terms.</li>
                  <li>Abuse, excessive usage, or violation of our Terms of Service may void refund eligibility.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                How to Request a Refund
              </h2>
              <div className="space-y-2 xs:space-y-0 text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                <p>To request a refund:</p>
                <ul className="list-disc list-outside ml-4 space-y-1 pl-1">
                  <li>
                    Contact us at <a href="mailto:contact@geoalt.in" className="text-blue-400 hover:text-blue-300 underline transition-colors break-all">contact@geoalt.in</a>, or
                  </li>
                  <li>Submit a refund request directly through Paddle.</li>
                </ul>
                <p>
                  All refund requests are reviewed and processed by Paddle in accordance with their policies.
                </p>
              </div>
            </section>

            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Processing Time
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                If approved, refunds are typically processed within 5–10 business days, depending on your payment method and bank.
              </p>
            </section>

            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Subscriptions
              </h2>
              <div className="space-y-2 xs:space-y-0 text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                <p>For subscription-based services:</p>
                <ul className="list-disc list-outside ml-4 space-y-1 pl-1">
                  <li>You may cancel your subscription at any time.</li>
                  <li>
                    Cancellation stops future billing but does not automatically trigger a refund for the current billing period unless required by law or approved by Paddle.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Paddle Buyer Terms
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[var(--color-ref-019)] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                All payments and refunds are subject to Paddle&apos;s Buyer Terms, which can be found on Paddle&apos;s website.
              </p>
            </section>
          </div>
        </div>
      </main>

      <PolicyFooter />
      <PolicyPageClient />
    </div>
  )
}
