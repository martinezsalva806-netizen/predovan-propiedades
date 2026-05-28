import Link from 'next/link'
import { siteData } from '@/lib/data'
import { Instagram, Phone, MapPin, Clock3 } from 'lucide-react'

const footerLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#destacadas', label: 'Propiedades' },
  { href: '#tasacion', label: 'Tasación' },
  { href: '#publica', label: 'Publicá tu propiedad' },
  { href: '#nosotros', label: 'Quiénes somos' },
  { href: '#blog', label: 'Blog' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-coal-900 text-white">
      <div className="container-grid py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 font-serif text-2xl">P</div>
              <div>
                <div className="text-lg font-semibold">Predovan Propiedades</div>
                <div className="text-sm text-white/55">Real Estate · La Plata</div>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/70">
              Experiencia digital premium para vender, alquilar, tasar y publicar propiedades con una presentación seria, moderna y confiable.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Secciones</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm text-white/70 transition hover:bg-white/8 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-400" /> {siteData.address}</li>
              <li className="flex items-start gap-3"><Clock3 className="mt-0.5 h-4 w-4 text-brand-400" /> {siteData.hours}</li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-brand-400" /> {siteData.whatsappDisplay}</li>
              <li className="flex items-start gap-3"><Instagram className="mt-0.5 h-4 w-4 text-brand-400" /> {siteData.instagram}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Predovan Propiedades. Todos los derechos reservados.</span>
          <span>Diseño y desarrollo premium con Next.js, Tailwind y Framer Motion.</span>
        </div>
      </div>
    </footer>
  )
}
