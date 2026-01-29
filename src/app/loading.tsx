import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-20">
      <LoadingSpinner size="lg" />
    </div>
  )
}
