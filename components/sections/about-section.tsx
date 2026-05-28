
'use client'

import { motion } from 'framer-motion'
import { MapPinned, ShieldCheck, HeartHandshake, Trophy, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { siteData } from '@/lib/data'

const values = [
  { icon: ShieldCheck, title: 'Confianza', text: 'Una historia familiar construida con criterio, seriedad y palabra.' },
  { icon: HeartHandshake, title: 'Experiencia familiar', text: 'Generaciones de trabajo en el mercado de La Plata, con conocimiento real de cada zona.' },
  { icon: Sparkles, title: 'Trato personalizado', text: 'Cada cliente recibe atención cercana, humana y orientada a resolver.' },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(15,19,24,1),rgba(30,34,41,1))] py-20 text-white">
      <div className="container-grid relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/55">Quiénes somos</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Fernando Predovan y un legado familiar en el mercado de La Plata.</h2>
          <p className="mt-4 max-w-2xl text-white/65">
            Predovan Propiedades es una empresa familiar con décadas de trayectoria en La Plata. Nació del trabajo de generaciones y hoy combina esa calidez con la profesionalidad de una inmobiliaria moderna.
          </p>
          <p className="mt-4 max-w-2xl text-white/65">
            Su fundador y dueño, Fernando Predovan, sostiene una forma de trabajo basada en la confianza, el conocimiento del barrio y un trato personalizado que acompaña cada operación con cercanía y responsabilidad.
          </p>

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
          <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/30">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-white/55">Trayectoria</div>
            <h3 className="text-2xl font-semibold">Años de experiencia y cercanía con el barrio.</h3>
            <p className="mt-4 text-sm leading-6 text-white/65">
              La inmobiliaria trabaja con una mirada de largo plazo: conocimiento del mercado local, asesoramiento honesto y una presentación cuidada para transmitir profesionalismo desde el primer contacto.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/6 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-white/50">Fundador</div>
                <div className="mt-1 text-xl font-semibold">Fernando Predovan</div>
              </div>
              <div className="rounded-2xl bg-white/6 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-white/50">Zona base</div>
                <div className="mt-1 text-xl font-semibold">La Plata</div>
              </div>
            </div>
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
