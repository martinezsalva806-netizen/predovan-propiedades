import { cn } from '@/lib/utils'

export function BrandLogo({ className, compact = false }: { className?: string; compact?: boolean }) {
  if (compact) {
    return (
      <div className={cn('flex items-center gap-1', className)}>
        <span className="text-xl font-extrabold tracking-wide text-[#DC2626]">P</span>
      </div>
    )
  }

  return (
    <div className={cn('flex items-baseline gap-1.5', className)}>
      <span className="text-2xl font-extrabold tracking-wider text-[#DC2626] sm:text-3xl">PREDOVAN</span>
      <span className="text-base font-light italic text-white/70 dark:text-white/70 sm:text-lg">Propiedades</span>
    </div>
  )
}
