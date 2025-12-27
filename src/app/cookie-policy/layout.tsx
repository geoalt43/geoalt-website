import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'GeoAlt Cookie Policy - Learn about how we use cookies on our website.',
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





