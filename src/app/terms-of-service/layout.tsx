import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'GeoAlt Terms of Service - Read our terms and conditions for using the GeoAlt platform.',
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




