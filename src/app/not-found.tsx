import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--color-ref-026)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="space-x-4 flex flex-col sm:flex-row gap-3 sm:gap-0">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Go home"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
