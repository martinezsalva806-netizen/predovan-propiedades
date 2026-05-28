import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type BaseProps = {
  variant?: 'default' | 'secondary' | 'ghost' | 'outline' | 'accent'
  size?: 'default' | 'sm' | 'lg'
  className?: string
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false }
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { asChild: true; href: string }

export function Button(props: ButtonProps | LinkProps) {
  const { className, variant = 'default', size = 'default' } = props as BaseProps
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  const variants = {
    default: 'bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600 hover:-translate-y-0.5',
    secondary: 'bg-white/10 text-current hover:bg-white/15',
    ghost: 'bg-transparent hover:bg-white/10',
    outline: 'border border-white/15 bg-transparent hover:bg-white/10',
    accent: 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/25 hover:brightness-110 hover:-translate-y-0.5',
  } as const
  const sizes = {
    default: 'h-11 px-5 text-sm',
    sm: 'h-9 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  } as const
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('asChild' in props && props.asChild) {
    const { asChild, ...linkProps } = props
    return <Link className={classes} {...linkProps} />
  }

  const { asChild, ...buttonProps } = props as ButtonProps
  return <button className={classes} {...buttonProps} />
}
