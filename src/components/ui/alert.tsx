import * as React from 'react'
import { cn } from '@/lib/utils'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  title?: string
  description?: string
  icon?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className, 
    variant = 'default', 
    title, 
    description, 
    icon, 
    dismissible = false, 
    onDismiss,
    children,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true)
    
    const handleDismiss = () => {
      setIsVisible(false)
      onDismiss?.()
    }

    if (!isVisible) return null

    const variantStyles = {
      default: 'bg-surface border-border text-text-primary',
      success: 'bg-success-bg border-success text-success',
      warning: 'bg-warning-bg border-warning text-warning',
      error: 'bg-error-bg border-error text-error',
      info: 'bg-info-bg border-info text-info',
    }

    const iconStyles = {
      default: 'text-text-muted',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
      info: 'text-info',
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'relative rounded-lg border p-4',
          variantStyles[variant],
          className
        )}
        {...props}
      >
        <div className="flex items-start">
          {icon && (
            <div className={cn('flex-shrink-0 mr-3', iconStyles[variant])}>
              {icon}
            </div>
          )}
          
          <div className="flex-1">
            {title && (
              <h3 className="text-sm font-medium mb-1">
                {title}
              </h3>
            )}
            
            {description && (
              <p className="text-sm opacity-90">
                {description}
              </p>
            )}
            
            {children}
          </div>
          
          {dismissible && (
            <button
              onClick={handleDismiss}
              className={cn(
                'flex-shrink-0 ml-3 text-current opacity-70 hover:opacity-100 transition-opacity',
                iconStyles[variant]
              )}
              aria-label="Dismiss alert"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export { Alert }
