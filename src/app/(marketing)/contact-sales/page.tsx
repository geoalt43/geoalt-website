import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Contact Sales',
  description: 'Get in touch with our sales team to discuss your AI visibility needs and learn about our enterprise solutions.',
}

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Contact Our Sales Team
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to take your AI visibility to the next level? Our sales team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Why Choose GEOAlt?
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Increase your AI visibility by up to 300%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Track competitors and identify opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Get actionable recommendations for optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dedicated support and onboarding</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>Email:</strong> sales@geoalt.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Response Time:</strong> Within 2 hours
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black border border-gray-600 rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

