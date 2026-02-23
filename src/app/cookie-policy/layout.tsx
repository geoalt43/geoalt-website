import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Geoalt Cookie Policy - Learn about how we use cookies on our website.',
  alternates: {
    canonical: 'https://www.geoalt.in/cookie-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





