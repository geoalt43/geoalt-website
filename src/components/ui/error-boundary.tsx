'use client'

import * as React from 'react'
import { Alert } from './alert'
import { Button } from './button'

export interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<ErrorFallbackProps>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  resetOnPropsChange?: boolean
  resetKeys?: Array<string | number>
}

export interface ErrorFallbackProps {
  error: Error
  resetError: () => void
  retryCount: number
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error, 
  resetError, 
  retryCount 
}) => {
  const isDevelopment = process.env.NODE_ENV === 'development'

  return (
    <div className="min-h-screen bg-page-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Alert
          variant="error"
          title="Something went wrong"
          description={
            isDevelopment 
              ? error.message 
              : "We're sorry, but something unexpected happened. Please try again."
          }
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          }
        >
          {isDevelopment && (
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium">
                Error Details
              </summary>
              <pre className="mt-2 text-xs bg-surface rounded p-2 overflow-auto">
                {error.stack}
              </pre>
            </details>
          )}
          
          <div className="mt-4 flex space-x-2">
            <Button onClick={resetError} variant="outline" size="sm">
              Try Again
            </Button>
            <Button 
              onClick={() => window.location.href = '/'} 
              variant="default" 
              size="sm"
            >
              Go Home
            </Button>
          </div>
          
          {retryCount > 0 && (
            <p className="mt-2 text-xs text-text-muted">
              Retry attempt: {retryCount}
            </p>
          )}
        </Alert>
      </div>
    </div>
  )
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, {
  hasError: boolean
  error: Error | null
  retryCount: number
}> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      retryCount: 0,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    this.props.onError?.(error, errorInfo)
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { resetKeys, resetOnPropsChange } = this.props
    const { hasError } = this.state

    if (hasError && prevProps.children !== this.props.children) {
      if (resetOnPropsChange) {
        this.resetError()
      }
    }

    if (hasError && resetKeys && prevProps.resetKeys) {
      const hasResetKeyChanged = resetKeys.some((key, index) => 
        key !== prevProps.resetKeys?.[index]
      )
      
      if (hasResetKeyChanged) {
        this.resetError()
      }
    }
  }

  resetError = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      retryCount: prevState.retryCount + 1,
    }))
  }

  render() {
    const { hasError, error, retryCount } = this.state
    const { children, fallback: Fallback = DefaultErrorFallback } = this.props

    if (hasError && error) {
      return (
        <Fallback 
          error={error} 
          resetError={this.resetError}
          retryCount={retryCount}
        />
      )
    }

    return children
  }
}

export { ErrorBoundary as default }