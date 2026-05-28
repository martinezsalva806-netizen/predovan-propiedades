'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPinned, ShieldCheck, HeartHandshake, Trophy } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { teamMembers, siteData } from '@/lib/data'

const values = [
  { icon: ShieldCheck, title: 'Transparencia', text: 'Proceso claro, comunicación directa y foco comercial responsable.' },
  { icon: HeartHandshake, title: 'Cercanía', text: 'Acompañamiento humano en cada etapa de compra, venta o alquiler.' },
  { icon: Trophy, title: 'Profesionalismo', text: 'Presentación premium y criterios sólidos para tomar mejores decisiones.' },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(15,19,24,1),rgba(30,34,41,1))] py-20 text-white">
      <div className="container-grid relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/55">Quiénes somos</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Una inmobiliaria con historia y una estética a la altura de sus operaciones.</h2>
          <p className="mt-4 max-w-2xl text-white/65">{siteData.name} nació y creció acompañando el mercado de La Plata, con atención personalizada, conocimiento del territorio y una vocación real de servicio.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-white/10 bg-white/6 p-5">
                <Icon className="h-6 w-6 text-brand-400" />
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
                <Card className="overflow-hidden border-white/10 bg-white/6">
                  <div className="relative h-56">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-semibold">{member.name}</div>
                    <div className="text-sm text-white/60">{member.role}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mt-6 overflow-hidden border-white/10 bg-white/6">
            <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Nuestra ubicación</h3>
                <div className="mt-3 flex items-start gap-3 text-sm text-white/68"><MapPinned className="mt-0.5 h-4 w-4 text-brand-400" /> {siteData.address}</div>
                <p className="mt-4 text-sm leading-6 text-white/60">A minutos del centro de La Plata y con presencia comercial en una ubicación estratégica.</p>
              </div>
              <iframe
                title="Mapa Predovan Propiedades"
                src="https://www.google.com/maps?q=13+n636+La+Plata+Buenos+Aires&output=embed"
                className="min-h-[280px] w-full border-0"
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
