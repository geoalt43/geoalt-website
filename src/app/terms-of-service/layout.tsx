import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'GEOAlt Terms of Service - Read our terms and conditions for using the GEOAlt platform.',
  alternates: {
    canonical: 'https://www.geoalt.in/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





