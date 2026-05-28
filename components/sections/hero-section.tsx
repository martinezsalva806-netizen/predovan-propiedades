'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Search, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { heroStats, siteData, quickFilters } from '@/lib/data'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-noise opacity-[0.35]" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25 dark:opacity-30"
          style={{ transform: `translateY(${offset}px) scale(1.08)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-[rgb(var(--background))]" />
      </div>

      <div className="container-grid relative z-10 min-h-[calc(100vh-84px)] py-16 lg:py-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-brand-400" />
              Inmobiliaria premium en La Plata
            </div>
            <h1 className="max-w-3xl font-serif text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
              Propiedades con una presencia visual que inspira confianza.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              {siteData.name} combina experiencia local, captación profesional y una experiencia digital premium para vender, alquilar y tasar con elegancia.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="glass rounded-[26px] p-5 text-white">
                  <div className="font-serif text-3xl text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
              <ChevronDown className="h-4 w-4 text-brand-400" />
              Scroll para explorar una experiencia premium
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: 'easeOut' }}
            className="glass rounded-[34px] p-5 sm:p-6"
          >
            <div className="rounded-[28px] border border-white/10 bg-coal-900/65 p-5 shadow-2xl shadow-black/25">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-white/55">Buscador principal</div>
                  <div className="mt-1 text-lg font-semibold text-white">Encontrá tu próxima propiedad</div>
                </div>
                <div className="rounded-full bg-brand-500/15 px-3 py-1 text-xs text-brand-300">Live</div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Select defaultValue="venta"><option value="venta">Venta</option><option value="alquiler">Alquiler</option></Select>
                <Select defaultValue="depto"><option>Departamento</option><option>Casa</option><option>Terreno</option><option>Local</option></Select>
                <Input placeholder="Zona o barrio" />
                <Select defaultValue="2"><option>1 dormitorio</option><option>2 dormitorios</option><option>3 dormitorios</option><option>4+ dormitorios</option></Select>
                <Input placeholder="Rango de precio" />
                <Input placeholder="Palabras clave" />
              </div>

              <Button variant="accent" className="mt-4 w-full text-base" type="button">
                <Search className="h-4 w-4" /> Buscar propiedades
              </Button>

              <div className="mt-5 flex flex-wrap gap-2">
                {quickFilters.map((item, index) => (
                  <span key={item} className={`rounded-full px-4 py-2 text-xs ${index === 0 ? 'bg-brand-500 text-white' : 'bg-white/7 text-white/75'} border border-white/10`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
