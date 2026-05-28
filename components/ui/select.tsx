import { cn } from '@/lib/utils'
import type { SelectHTMLAttributes } from 'react'

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20',
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}
