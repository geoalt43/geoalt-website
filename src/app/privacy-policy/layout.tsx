import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Geoalt Privacy Policy - Learn how we collect, use, and protect your personal and business information.',
  alternates: {
    canonical: 'https://www.geoalt.in/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





