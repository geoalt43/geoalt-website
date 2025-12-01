'use client'

import { useEffect } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function LoginPage() {
  useEffect(() => {
    window.location.href = 'https://platform.geoalt.com/login'
  }, [])

  return (
    <div className="min-h-screen bg-page-background flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md w-full">
        <LoadingSpinner size="lg" className="mb-4" />
        <h1 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
          Redirecting to GEOAlt Platform...
        </h1>
        <p className="text-sm sm:text-base text-text-secondary mb-4">
          You will be redirected to our platform to sign in.
        </p>
        <p className="text-xs sm:text-sm text-text-muted mt-4">
          If you are not redirected automatically,{' '}
          <a 
            href="https://platform.geoalt.com/login" 
            className="text-interactive hover:text-interactive-hover underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  )
}

