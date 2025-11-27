import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'rectangular' | 'circular'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className, 
    variant = 'rectangular', 
    width, 
    height, 
    animation = 'pulse',
    style,
    ...props 
  }, ref) => {
    const variantStyles = {
      text: 'h-4 w-full',
      rectangular: 'w-full',
      circular: 'rounded-full',
    }

    const animationStyles = {
      pulse: 'animate-pulse',
      wave: 'animate-wave',
      none: '',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'bg-surface-hover rounded',
          variantStyles[variant],
          animationStyles[animation],
          className
        )}
        style={{
          width: width || (variant === 'circular' ? height : undefined),
          height: height || (variant === 'text' ? '1rem' : undefined),
          ...style,
        } as React.CSSProperties}
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

export const SkeletonText = React.forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  ({ className, ...props }, ref) => (
    <Skeleton ref={ref} variant="text" className={className} {...props} />
  )
)

export const SkeletonCircle = React.forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  ({ className, ...props }, ref) => (
    <Skeleton ref={ref} variant="circular" className={className} {...props} />
  )
)

export const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('bg-surface border border-border rounded-lg p-6 space-y-4', className)}
      {...props}
    >
      <div className="flex items-center space-x-3">
        <SkeletonCircle width={40} height={40} />
        <div className="space-y-2 flex-1">
          <SkeletonText width="60%" />
          <SkeletonText width="40%" />
        </div>
      </div>
      <SkeletonText width="100%" />
      <SkeletonText width="80%" />
      <SkeletonText width="60%" />
    </div>
  )
)

SkeletonText.displayName = 'SkeletonText'
SkeletonCircle.displayName = 'SkeletonCircle'
SkeletonCard.displayName = 'SkeletonCard'

export { Skeleton }
