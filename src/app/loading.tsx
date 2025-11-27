import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center sm:flex">
      <LoadingSpinner size="lg" />
    </div>
  )
}
