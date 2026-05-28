import { cn } from '@/lib/utils'
import type { InputHTMLAttributes } from 'react'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-white/40 focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20 dark:bg-white/5',
        className
      )}
      {...props}
    />
  )
}
