import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refunds Policy',
  description: 'Geoalt Refunds Policy - Learn how we handle refunds and returns.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RefundsPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





