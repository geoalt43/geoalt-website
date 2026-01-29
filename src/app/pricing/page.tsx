import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { PricingSection } from '@/components/homepage/pricing-section'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
    title: 'Pricing - Geoalt',
    description: 'Choose the right plan for your business. Geoalt offers flexible pricing for AI visibility optimization.',
    alternates: {
        canonical: 'https://www.geoalt.in/pricing',
    },
}

export default function PricingPage() {
    const pricingStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Geoalt AI Visibility Platform',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: [
            {
                '@type': 'Offer',
                name: 'Free Starter',
                price: '0',
                priceCurrency: 'USD',
            },
            {
                '@type': 'Offer',
                name: 'Standard',
                price: '49',
                priceCurrency: 'USD',
            },
            {
                '@type': 'Offer',
                name: 'Professional',
                price: '99',
                priceCurrency: 'USD',
            },
        ],
    }

    return (
        <div className="min-h-screen bg-brand-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingStructuredData) }}
            />
            <Navbar />
            <main className="pt-20">
                <PricingSection />
            </main>
            <Footer />
        </div>
    )
}
