'use client'

import { motion } from 'framer-motion'
import { BookOpen, HeartHandshake, ShieldCheck } from 'lucide-react'
import { Card } from '@/components/ui/card'

const blocks = [
  {
    title: 'Misión',
    icon: ShieldCheck,
    text:
      'Mudarse no es cosa fácil. Bajo este conocimiento, nuestra misión es la de asistir a nuestros clientes en el proceso de búsqueda de vivienda, mediante la prestación de servicios profesionales de calidad.',
  },
  {
    title: 'Nuestra Empresa',
    icon: BookOpen,
    text:
      'PREDOVAN Propiedades es una empresa dinámica y pujante de la ciudad de La Plata, fundada en 2001, con amplia experiencia en la búsqueda, selección, negociación y en la tarea de mediar en alquiler y venta de propiedades. Contamos con todos los medios técnicos y humanos necesarios para prestar un servicio de altísima calidad, basado en la confianza y honradez personal y profesional de todos los integrantes de esta empresa. La relación es directa y personal con todos los clientes que encuentran en nuestros colaboradores a la persona que les facilitará la siempre difícil tarea de encontrar la propiedad de sus sueños o la solución a la necesidad inmobiliaria que en cada momento se le pueda plantear.',
  },
  {
    title: 'Compromiso',
    icon: HeartHandshake,
    text:
      'Nuestro compromiso está basado en el hecho de poder generar relaciones duraderas con un intercambio constante, con el objeto de poder conjugar, en forma exitosa, nuestro conocimiento del mercado con la complejidad y dinámica que el sector inmobiliario presenta en la actualidad, comprometiéndonos a servir los intereses de cada uno de nuestros clientes. Nuestro conocimiento del mercado inmobiliario nos permite procurar en tiempo récord, la propiedad que mejor satisfaga las necesidades de nuestros clientes. Estamos orgullosos de los logros de nuestra empresa y quedamos a la espera de nuevas oportunidades para continuar con nuestro récord de servicio.',
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(16,18,22,1),rgba(29,32,38,1))] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(204,0,0,0.16),transparent_24%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.05),transparent_18%)]" />
      <div className="container-grid relative z-10">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-white/55">Quiénes somos</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Una empresa familiar con calidez, profesionalismo y raíces profundas en La Plata.</h2>
          <p className="mt-4 text-white/65">
            Predovan Propiedades combina experiencia, cercanía y una forma de trabajo que prioriza la confianza y el trato directo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blocks.map(({ title, icon: Icon, text }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
              <Card className="h-full border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
                <div className="mb-5 inline-flex rounded-2xl bg-brand-500/12 p-3 text-brand-300 ring-1 ring-brand-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
