import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { PricingSection } from '@/components/homepage/pricing-section'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
    title: 'Pricing - Geoalt',
    description: 'Choose the right plan for your business. Geoalt offers flexible pricing for AI visibility optimization.',
    alternates: {
        canonical: 'https://geoalt.com/pricing',
    },
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-brand-black">
            <Navbar />
            <main className="pt-20">
                <PricingSection />
            </main>
            <Footer />
        </div>
    )
}
