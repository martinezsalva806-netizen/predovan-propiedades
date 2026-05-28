'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bath, BedDouble, Ruler, MapPin, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { currency } from '@/lib/utils'
import { featuredProperties, quickFilters } from '@/lib/data'

export function FeaturedPropertiesSection() {
  const [active, setActive] = useState<(typeof quickFilters)[number] | 'Todos'>('Todos')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 700)
    return () => window.clearTimeout(timer)
  }, [])

  const properties = active === 'Todos' ? featuredProperties : featuredProperties.filter((item) => item.status === active)

  return (
    <section id="destacadas" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(15,19,24,0.98),rgba(27,31,38,0.96))] py-20 text-white">
      <div className="absolute inset-0 bg-dark-grid bg-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(225,34,34,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_20%)]" />
      <div className="container-grid relative z-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/55">Propiedades destacadas</div>
            <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">Selección curada de oportunidades reales.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Todos', ...quickFilters].map((filter) => (
              <button key={filter} onClick={() => setActive(filter as any)} className={`rounded-full px-4 py-2 text-sm transition ${active === filter ? 'bg-brand-500 text-white' : 'bg-white/7 text-white/70 hover:bg-white/10'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {!ready && Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-[470px] rounded-[28px] bg-white/8" />)}
          {ready && properties.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="group overflow-hidden border-white/10 bg-white/6">
                <div className="relative h-56 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1280px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-xl">{item.status}</div>
                  <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/55">Precio</div>
                    <div className="font-serif text-2xl text-white">{currency(item.price)}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <div className="mt-3 flex items-center gap-2 text-sm text-white/65"><MapPin className="h-4 w-4 text-brand-400" />{item.location}</div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-white/75">
                    <div className="rounded-2xl bg-white/6 p-3"><Ruler className="mb-2 h-4 w-4 text-brand-400" />{item.area}</div>
                    <div className="rounded-2xl bg-white/6 p-3"><BedDouble className="mb-2 h-4 w-4 text-brand-400" />{item.bedrooms} dorms</div>
                    <div className="rounded-2xl bg-white/6 p-3"><Bath className="mb-2 h-4 w-4 text-brand-400" />{item.bathrooms} baños</div>
                  </div>
                  <Button variant="ghost" className="mt-5 w-full justify-between border border-white/10 bg-white/5 text-white hover:bg-white/10">
                    Ver detalle
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
