'use client'

import Link from 'next/link'
import { MoonStar, SunMedium, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/brand-logo'
import { cn } from '@/lib/utils'

const links = [
  { href: '/propiedades', label: 'Propiedades' },
  { href: '/#tasacion', label: 'Tasación' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#testimonios', label: 'Testimonios' },
  { href: '/#contacto', label: 'Contacto' },
]


export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-coal-900/75 backdrop-blur-xl dark:bg-coal-900/70">
      <div className="container-grid flex items-center justify-between py-4">
        <Link href="/#inicio" className="group flex items-center gap-3">
          <BrandLogo compact />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm text-white/75 transition hover:bg-white/8 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden border-white/12 bg-white/5 text-white hover:bg-white/10 md:inline-flex"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            <span className="hidden sm:inline">{mounted && theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
          </Button>
          <Link href="https://wa.me/5492213533555" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:brightness-110">
            WhatsApp
          </Link>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn('border-t border-white/8 lg:hidden', open ? 'block' : 'hidden')}>
        <div className="container-grid grid gap-2 py-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/80">
              {link.label}
            </Link>
          ))}
          <Button variant="outline" className="mt-2 justify-start border-white/10 bg-white/5 text-white" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {mounted && theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            Alternar tema
          </Button>
        </div>
      </div>
    </header>
  )
}
