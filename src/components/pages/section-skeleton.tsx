export function SectionSkeleton({ height = 'h-96' }: { height?: string }) {
  return <div className={`${height} w-full animate-pulse bg-page-background`} />
}
