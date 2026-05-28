import { cn } from '@/lib/utils'

export function BrandLogo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative flex h-11 w-11 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#e12222_0%,#7b1313_100%)] shadow-lg shadow-brand-500/25 ring-1 ring-white/10">
        <svg viewBox="0 0 64 64" className="h-9 w-9 text-white" aria-hidden="true">
          <path d="M21 52V12h18.5c8.5 0 14.5 5.1 14.5 13 0 5.9-3.4 10.2-8.8 12.1L56 52H44.7l-8.3-12H31v12H21Zm10-21h7.6c3.9 0 6.8-1.9 6.8-5.8 0-4.2-2.9-5.8-6.8-5.8H31V31Z" fill="currentColor"/>
          <path d="M14 18l7-6 11 9-2.7 3.2L21 19.4 16.2 23 14 18Zm36 0-7-6-11 9 2.7 3.2L43 19.4 47.8 23 50 18Z" fill="#ffffff" opacity="0.92"/>
        </svg>
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-wide text-white">Predovan Propiedades</div>
          <div className="text-xs text-white/55">La Plata · Buenos Aires</div>
        </div>
      )}
    </div>
  )
}
