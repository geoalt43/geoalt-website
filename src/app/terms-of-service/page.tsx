import { PolicyPageClient } from '@/components/policy-pages/policy-page-client'

function getLastUpdated() {
  return "January 20, 2025"
}

export default function TermsOfServicePage() {
  const lastUpdated = getLastUpdated()

  return (
    <div className="bg-black text-white w-full px-2">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-6 xs:py-8 sm:py-12 md:py-16 relative z-10">
          {/* Header */}
          <div className="mb-4 xs:mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal mt-4 xs:mt-6 sm:mt-8 md:mt-10 max-[680px]:mt-20 mb-10 xs:mb-12 sm:mb-10 md:mb-16 text-white text-center">
              Terms of Service
            </h1>
            <div className="text-xs xs:text-sm sm:text-base text-white/70 space-y-1">
              <p>Last updated: {lastUpdated}</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            {/* Introduction */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Introduction
              </h2>
              <div className="space-y-2 xs:space-y-0 text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                <p>
                  Welcome to Geoalt (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). As you have just clicked our Terms of Service, please take a
                  moment to carefully read the following sections. It should take approximately 5–7 minutes to review.
                </p>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website located at <a href="https://geoalt.in" className="text-blue-400 hover:text-blue-300 underline transition-colors break-all">https://geoalt.in</a> and
                  the Geoalt platform operated by the Company.
                </p>
                <p>
                  Our Privacy Policy also governs your use of the Service and explains how we collect, use, safeguard, and disclose
                  information resulting from your use of the Service.
                </p>
                <p>
                  Together, these Terms and the Privacy Policy form a legally binding agreement (&quot;Agreements&quot;). By accessing or
                  using the Service, you acknowledge that you have read, understood, and agree to be bound by them.
                </p>
                <p>
                  If you do not agree with these Agreements, you must not access or use the Service. For questions, contact us at
                  <a href="mailto:contact@geoalt.in" className="text-blue-400 hover:text-blue-300 underline transition-colors break-all"> contact@geoalt.in</a>.
                </p>
              </div>
            </section>

            {/* Communications */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Communications
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                By creating an account, you agree to receive service-related communications, including account updates, product
                changes, and promotional messages. You may opt out of non-essential communications at any time.
              </p>
            </section>

            {/* Purchases */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Purchases
              </h2>
              <div className="space-y-2 xs:space-y-0 text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                <p>
                  If you purchase a subscription or service, you may be required to provide billing and payment information. You
                  represent that you are authorized to use the payment method provided and that all information is accurate.
                </p>
                <p>
                  Payments are processed via third-party providers. Geoalt does not store full payment card details. We reserve the
                  right to refuse or cancel orders in cases of error, fraud, or unauthorized activity.
                </p>
              </div>
            </section>

            {/* Usage Limits & Service Modifications */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Usage Limits & Service Modifications
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                Geoalt may modify usage limits, feature access, or service capacity to ensure fairness, system stability, and
                service quality, even if prior limits were communicated.
              </p>
            </section>

            {/* Subscriptions */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Subscriptions
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                Subscriptions are billed in advance on a monthly or annual basis and renew automatically unless cancelled before
                the billing cycle ends. A valid payment method is required to maintain access.
              </p>
            </section>

            {/* Free Trial */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Free Trial
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                Geoalt may offer a free trial at its discretion. Billing information may be required. If not cancelled before the trial
                ends, the subscription converts to a paid plan automatically.
              </p>
            </section>

            {/* Refunds */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Merchant of Record
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns
              </p>
            </section>

            {/* Fair Usage Policy */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Fair Usage Policy
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                Automated access, excessive usage, account sharing, or abuse is prohibited. Violations may result in suspension
                or termination without refund.
              </p>
            </section>

            {/* Prohibited Uses */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Prohibited Uses
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                You agree not to use the Service for unlawful, fraudulent, harmful, or abusive activities, or to attempt unauthorized
                access or system interference.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-12">
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-normal mb-1 xs:mb-0.5 sm:mb-0.5 text-white/90 leading-tight">
                Governing Law
              </h2>
              <p className="text-xs xs:text-sm sm:text-base md:text-base text-[#898989] md:leading-normal xs:leading-snug mt-1 xs:mt-0.5 sm:mt-0.5">
                These Terms are governed by and construed in accordance with the laws of India.
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
      <PolicyPageClient />
    </div>
  )
}
