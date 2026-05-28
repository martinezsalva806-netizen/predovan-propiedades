import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { FeaturedPropertiesSection } from '@/components/sections/featured-properties-section'
import { Card } from '@/components/ui/card'
import { featuredProperties, siteData } from '@/lib/data'

export const metadata = {
  title: 'Propiedades activas',
  description: 'Catálogo de propiedades activas en venta y alquiler de Predovan Propiedades en La Plata.',
}

export default function PropertiesPage() {
  return (
    <main className="bg-[linear-gradient(180deg,rgba(15,19,24,1),rgba(10,12,16,1))] text-white">
      <section className="container-grid py-16">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-white/55">Catálogo completo</div>
          <h1 className="mt-3 font-serif text-5xl sm:text-6xl">Propiedades activas de Predovan</h1>
          <p className="mt-4 text-white/65">Explorá las fichas activas con fotos reales, datos de referencia y acceso directo a WhatsApp para consultar por cada inmueble.</p>
          <Link href={siteData.whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:brightness-110">
            Consultar por WhatsApp <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProperties.map((property) => (
            <Link key={property.slug} href={`/propiedades/${property.slug}`} className="group block">
              <Card className="overflow-hidden border-white/10 bg-white/6 text-white transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-500/30 group-hover:shadow-2xl group-hover:shadow-brand-500/10">
                <div className="relative h-56 bg-[linear-gradient(135deg,rgba(225,34,34,0.18),rgba(255,255,255,0.02))]">
                  <img src={property.gallery[0]} alt={property.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/50">{property.market}</div>
                  <h2 className="mt-2 text-xl font-semibold">{property.title}</h2>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/65"><MapPin className="h-4 w-4 text-brand-400" />{property.address}</div>
                  <span className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition group-hover:bg-white/10">
                    Ver ficha
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
