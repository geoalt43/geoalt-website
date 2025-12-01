import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About GEOAlt',
  description: 'Learn about GEOAlt\'s mission to help businesses optimize their AI visibility and get recommended by AI platforms.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
            About GEOAlt
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            We&apos;re on a mission to help businesses thrive in the AI-driven future by optimizing their visibility across AI platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
              As AI becomes the primary way people search for information, traditional SEO is losing its effectiveness. 
              GEOAlt bridges this gap by helping businesses optimize their content for AI platforms like ChatGPT, 
              Perplexity, and Claude.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              We believe every business deserves to be discovered and recommended by AI, regardless of their size or industry.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Our Vision</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
              We envision a future where businesses can seamlessly integrate with AI ecosystems, 
              ensuring their products and services are accurately represented and easily discoverable.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Our goal is to democratize AI visibility, making it accessible to businesses of all sizes.
            </p>
          </div>
        </div>

        <div className="bg-black border border-gray-600 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Our Story</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
              GEOAlt was born from a simple observation: while businesses were investing heavily in traditional SEO, 
              AI platforms were becoming the go-to source for information and recommendations.
            </p>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
              Our founders, having worked in both AI and marketing, recognized this shift early and built GEOAlt 
              to help businesses adapt to this new landscape.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Today, we&apos;re proud to serve hundreds of businesses, from startups to Fortune 500 companies, 
              helping them maintain and grow their visibility in the AI era.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 px-4 sm:px-0">
            Join the businesses already optimizing their AI visibility with GEOAlt.
          </p>
        </div>
      </div>
    </div>
  )
}
