'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-page-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-text-primary mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-text-secondary mb-4">Something went wrong</h2>
        <p className="text-text-muted mb-8 max-w-md">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
        <div className="space-x-4 flex flex-col sm:flex-row gap-3 sm:gap-0">
          <button
            onClick={reset}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Try again"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-border text-text-primary rounded-lg hover:bg-surface-hover transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
