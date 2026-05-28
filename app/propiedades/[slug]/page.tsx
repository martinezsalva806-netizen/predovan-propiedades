import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Bath, BedDouble, CarFront, MapPin, Ruler, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { featuredProperties, propertyBySlug, similarProperties, siteData } from '@/lib/data'

export function generateStaticParams() {
  return featuredProperties.map((property) => ({ slug: property.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const property = propertyBySlug[params.slug]
  if (!property) return { title: 'Propiedad no encontrada' }
  return {
    title: property.title,
    description: property.description,
  }
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = propertyBySlug[params.slug]
  if (!property) return notFound()
  const related = similarProperties(property)
  const whatsappLink = `${siteData.whatsappLink}?text=${encodeURIComponent(`Hola! Quiero consultar por esta propiedad: ${property.title} (${property.address}).`)}`

  return (
    <main className="bg-[linear-gradient(180deg,rgba(12,15,20,1),rgba(8,10,14,1))] text-white">
      <section className="container-grid py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/55">Ficha de propiedad</div>
            <h1 className="mt-3 font-serif text-5xl sm:text-6xl">{property.title}</h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/65"><MapPin className="h-4 w-4 text-brand-400" />{property.address}</div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Card className="border-white/10 bg-white/6 p-4"><Ruler className="h-5 w-5 text-brand-400" /><div className="mt-2 text-sm text-white/55">Superficie</div><div className="text-lg font-semibold">{property.area || 'Consultar'}</div></Card>
              <Card className="border-white/10 bg-white/6 p-4"><BedDouble className="h-5 w-5 text-brand-400" /><div className="mt-2 text-sm text-white/55">Ambientes</div><div className="text-lg font-semibold">{property.rooms || 'Consultar'}</div></Card>
              <Card className="border-white/10 bg-white/6 p-4"><Sparkles className="h-5 w-5 text-brand-400" /><div className="mt-2 text-sm text-white/55">Tipo</div><div className="text-lg font-semibold capitalize">{property.type}</div></Card>
            </div>
            <p className="mt-6 max-w-3xl text-white/65">{property.description}</p>
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:brightness-110">
              Consultar por esta propiedad <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <Card className="overflow-hidden border-white/10 bg-white/6 p-0">
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-1">
              {property.gallery.slice(0, 4).map((src, index) => (
                <div key={src} className={`relative ${index === 0 ? 'h-96' : 'h-64'}`}>
                  <Image src={src} alt={`${property.title} ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="overflow-hidden border-white/10 bg-white/6 p-0">
            <iframe
              title={`Mapa ${property.address}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${property.address}, La Plata, Buenos Aires`)}&output=embed`}
              className="h-[360px] w-full border-0"
              loading="lazy"
            />
          </Card>
          <div>
            <h2 className="font-serif text-3xl">Propiedades similares</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/propiedades/${item.slug}`} className="group block">
                  <Card className="overflow-hidden border-white/10 bg-white/6 text-white transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-500/30 group-hover:shadow-2xl group-hover:shadow-brand-500/10">
                    <div className="relative h-44">
                      <Image src={item.gallery[0]} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/50">{item.market}</div>
                      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/65">{item.address}</p>
                      <span className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition group-hover:bg-white/10">
                        Ver ficha
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
