import { cn } from '@/lib/utils'

function PredovanMark() {
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="predovan-stripes" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(22)">
          <rect width="10" height="10" fill="none" />
          <rect x="0" y="0" width="4" height="10" fill="#b10000" opacity="0.9" />
        </pattern>
        <clipPath id="predovan-wordmark">
          <text x="6" y="52" fontSize="44" fontWeight="800" letterSpacing="2.2" fontFamily="Inter, Arial, sans-serif">PREDOVAN</text>
        </clipPath>
      </defs>

      <g>
        <rect x="7" y="18" width="240" height="40" fill="url(#predovan-stripes)" opacity="0.95" clipPath="url(#predovan-wordmark)" />
        <text x="6" y="52" fontSize="44" fontWeight="800" letterSpacing="2.2" fontFamily="Inter, Arial, sans-serif" fill="#cc0000">PREDOVAN</text>
      </g>

      <g transform="translate(253,7)">
        <path d="M24 0 48 24 24 48 0 24 24 0Z" fill="#cc0000" />
        <path d="M16 35V13h10.7c5.1 0 8.4 2.9 8.4 7.4 0 3.1-1.7 5.4-4.6 6.5L36 35h-7l-4.9-7h-2.1v7H16Zm6.3-12.7h4.4c2.4 0 3.9-1 3.9-3 0-2.1-1.4-3-3.9-3h-4.4v6Z" fill="#fff" />
      </g>

      <text x="150" y="92" textAnchor="middle" fontSize="20" fontStyle="italic" fontWeight="500" fill="#909090" fontFamily="Georgia, 'Times New Roman', serif">Propiedades</text>
    </svg>
  )
}

export function BrandLogo({ className, compact = false }: { className?: string; compact?: boolean }) {
  if (compact) {
    return (
      <div className={cn('flex items-center gap-3', className)}>
        <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-white/5 p-2 ring-1 ring-white/10">
          <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
            <path d="M24 2 46 24 24 46 2 24 24 2Z" fill="#cc0000" />
            <path d="M16 35V13h9.6c4.9 0 8 2.7 8 6.9 0 2.8-1.5 4.9-4 6l4.3 9.1h-6.1l-3.7-8.1h-2.6V35H16Zm6.2-11.6h3.5c2.1 0 3.3-.9 3.3-2.6 0-1.8-1.2-2.6-3.3-2.6h-3.5v5.2Z" fill="#fff" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="h-[92px] w-[320px] max-w-full">
        <PredovanMark />
      </div>
    </div>
  )
}
