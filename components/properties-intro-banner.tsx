import Link from 'next/link'
import { ArrowRight, BadgeInfo } from 'lucide-react'

export function PropertiesIntroBanner() {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(244,239,230,1),rgba(233,228,221,0.92))] py-8 text-coal-900 dark:bg-[linear-gradient(180deg,rgba(14,17,22,1),rgba(18,22,28,1))] dark:text-white">
      <div className="container-grid">
        <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/35 p-5 shadow-soft dark:bg-white/5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <BadgeInfo className="mt-1 h-5 w-5 text-brand-500" />
            <div>
              <div className="text-xs uppercase tracking-[0.26em] text-coal-500 dark:text-white/55">Propiedades activas</div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-coal-700 dark:text-white/70">
                Catálogo real de propiedades en venta y alquiler, con fichas detalladas, fotos y acceso directo a WhatsApp.
              </p>
            </div>
          </div>
          <Link href="#destacadas" className="inline-flex items-center justify-center gap-2 rounded-full border border-coal-300/30 bg-white/60 px-5 py-3 text-sm font-medium text-coal-900 transition hover:-translate-y-0.5 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
            Ver catálogo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
