import { Metadata } from 'next'
import { DemoForm } from '@/components/forms/demo-form'

export const metadata: Metadata = {
  title: 'Request a Demo',
  description: 'Schedule a personalized demo of GEOAlt and see how we can help your brand dominate AI search.',
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            See GEOAlt in Action
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule a personalized demo and discover how GEOAlt can help your brand dominate AI search platforms.
          </p>
        </div>

        <div className="bg-black border border-gray-600 rounded-2xl p-8">
          <DemoForm />
        </div>
      </div>
    </div>
  )
}

