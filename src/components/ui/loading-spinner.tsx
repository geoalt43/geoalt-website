import * as React from 'react'
import { cn } from '@/lib/utils'

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'primary' | 'secondary'
  text?: string
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size = 'md', variant = 'default', text, ...props }, ref) => {
    const sizeStyles = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    }

    const variantStyles = {
      default: 'text-text-muted',
      primary: 'text-interactive',
      secondary: 'text-text-secondary',
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-center', className)}
        {...props}
      >
        <div className="flex items-center space-x-2">
          <div
            className={cn(
              'animate-spin rounded-full border-2 border-current border-t-transparent',
              sizeStyles[size],
              variantStyles[variant]
            )}
            role="status"
            aria-label="Loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
          {text && (
            <span className={cn('text-sm', variantStyles[variant])}>
              {text}
            </span>
          )}
        </div>
      </div>
    )
  }
)

LoadingSpinner.displayName = 'LoadingSpinner'

export { LoadingSpinner }