import { cn } from '@/lib/utils'

export function BrandLogo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative flex h-11 w-11 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-11 w-11 drop-shadow-[0_8px_18px_rgba(225,34,34,0.25)]" aria-hidden="true">
          <path d="M32 4 58 20.5 49 60H15L6 20.5 32 4Z" fill="#cc0000" />
          <path d="M24 50V14h17.4c8.3 0 13.6 4.8 13.6 12 0 5.1-2.8 8.9-7.4 10.7L56 50H46l-8-11.5h-5.4V50H24Zm8-19.4h7.1c3.8 0 6.1-1.7 6.1-4.7 0-3.2-2.2-4.7-6.1-4.7H32v9.4Z" fill="#ffffff" />
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
