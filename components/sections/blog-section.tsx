'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: 'María G.',
    location: 'La Plata',
    quote: 'Vendimos nuestro departamento en 2 semanas gracias a Predovan. Fueron claros, rápidos y muy profesionales.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Julián R.',
    location: 'Gonnet',
    quote: 'Me acompañaron en todo el proceso de compra. Se notó mucho el trato cercano y el conocimiento de cada barrio.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Carla M.',
    location: 'City Bell',
    quote: 'La tasación fue precisa y el asesoramiento, impecable. Sentí que realmente cuidaron nuestra propiedad.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sofía L.',
    location: 'Centro',
    quote: 'Publicaron el aviso con una presentación muy linda y conseguimos consultas desde el primer día.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Diego P.',
    location: 'La Plata',
    quote: 'Nos transmitieron confianza desde el minuto uno. Una inmobiliaria familiar que realmente conoce el oficio.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
]

export function BlogSection() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(244,239,230,1),rgba(233,228,221,0.95))] py-20 text-coal-900 dark:bg-[linear-gradient(180deg,rgba(13,16,21,1),rgba(20,24,30,1))] dark:text-white">
      <div className="container-grid relative z-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-coal-500 dark:text-white/55">Testimonios</div>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Lo que dicen clientes que ya confiaron en Predovan.</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <Card className="glass overflow-hidden border-white/10 bg-white/25 p-5 text-coal-900 dark:bg-white/6 dark:text-white">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-500/20" />
                  <div>
                    <div className="text-sm font-semibold">{item.name}</div>
                    <div className="text-xs uppercase tracking-[0.22em] text-coal-500 dark:text-white/50">{item.location}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-6 text-coal-700 dark:text-white/70">
                  <Quote className="mb-2 inline h-4 w-4 text-brand-500" /> {item.quote}
                </p>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
