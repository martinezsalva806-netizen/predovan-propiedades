'use client'

import { MapPinned, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { siteData } from '@/lib/data'

const values = [
  { icon: ShieldCheck, title: 'Confianza', text: 'Una forma de trabajar basada en la palabra, el seguimiento y la responsabilidad.' },
  { icon: HeartHandshake, title: 'Cercanía real', text: 'Conocer cada calle, cada barrio y cada particularidad del mercado de La Plata.' },
  { icon: Sparkles, title: 'Herramientas modernas', text: 'Sumar tecnología, presentación visual y procesos claros sin perder el trato humano.' },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(15,19,24,1),rgba(30,34,41,1))] py-20 text-white">
      <div className="container-grid relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/55">Quiénes somos</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Una historia de familia, barrio y oficio inmobiliario en La Plata.</h2>
          <p className="mt-4 max-w-2xl text-white/65">
            Predovan Propiedades nació mucho antes de esta web: empezó con el padre de Fernando Predovan, que hace décadas se ganó la confianza de las familias de La Plata con trabajo serio, trato directo y conocimiento del oficio.
          </p>
          <p className="mt-4 max-w-2xl text-white/65">
            Fernando creció viendo ese recorrido de cerca, aprendiendo que una operación inmobiliaria no se trata solo de metros y precios, sino de acompañar decisiones importantes con criterio y respeto.
          </p>
          <p className="mt-4 max-w-2xl text-white/65">
            Hoy continúa ese legado familiar con una mirada moderna: herramientas digitales, presentación cuidada y un servicio cálido, profesional y muy arraigado a cada calle de La Plata.
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
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-white/55">El legado</div>
            <h3 className="text-2xl font-semibold">Padre e hijo, barrio y oficio, tradición y tecnología.</h3>
            <p className="mt-4 text-sm leading-6 text-white/65">
              Esa mezcla define a Predovan: una atención cercana, de familia, con una estructura actual que permite responder mejor, mostrar mejor y vender mejor.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/6 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-white/50">Empresa</div>
                <div className="mt-1 text-xl font-semibold">Predovan Propiedades</div>
              </div>
              <div className="rounded-2xl bg-white/6 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-white/50">Ciudad</div>
                <div className="mt-1 text-xl font-semibold">La Plata</div>
              </div>
            </div>
          </div>
          <Card className="mt-6 overflow-hidden border-white/10 bg-white/6">
            <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Nuestra ubicación</h3>
                <div className="mt-3 flex items-start gap-3 text-sm text-white/68"><MapPinned className="mt-0.5 h-4 w-4 text-brand-400" /> {siteData.address}</div>
                <p className="mt-4 text-sm leading-6 text-white/60">Una ubicación estratégica para atender La Plata y alrededores.</p>
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
