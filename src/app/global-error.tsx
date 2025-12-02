'use client'

import { useEffect } from 'react'

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    const capture = async () => {
      if (process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.NODE_ENV === 'production') {
        const Sentry = await import('@sentry/nextjs')
        Sentry.captureException(error)
      }
    }
    capture()
  }, [error])

  return (
    <html>
      <body>
        <div style={{ padding: 24 }}>
          <h2>Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      </body>
    </html>
  )
}
