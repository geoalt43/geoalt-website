'use client'

import { useEffect } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function LoginPage() {
  useEffect(() => {
    window.location.href = 'https://platform.geoalt.com/login'
  }, [])

  return (
    <div className="min-h-screen bg-page-background flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Redirecting to GEOAlt Platform...
        </h1>
        <p className="text-text-secondary">
          You will be redirected to our platform to sign in.
        </p>
        <p className="text-sm text-text-muted mt-4">
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

