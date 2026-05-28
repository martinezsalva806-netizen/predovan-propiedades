import { MessageCircle, ArrowRight } from 'lucide-react'
import { siteData } from '@/lib/data'

export function WhatsAppBanner({ compact = false }: { compact?: boolean }) {
  const text = compact
    ? 'Reservá tu turno por WhatsApp y recibí atención rápida y personalizada.'
    : 'Consultanos por WhatsApp: atención rápida, seguimiento humano y respuestas claras para cada propiedad.'

  const whatsappUrl = `${siteData.whatsappLink}?text=${encodeURIComponent('Hola! Vi su página web y me gustaría consultar sobre una propiedad.')}`

  return (
    <section className={compact ? 'bg-[linear-gradient(180deg,rgba(20,24,30,1),rgba(13,16,21,1))] py-8 text-white' : 'bg-[linear-gradient(180deg,rgba(30,34,41,1),rgba(15,19,24,1))] py-10 text-white'}>
      <div className="container-grid">
        <div className="flex flex-col gap-4 rounded-[28px] border border-brand-500/25 bg-brand-500/10 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/55">WhatsApp directo</div>
            <p className="mt-2 max-w-2xl text-lg leading-7 text-white/85">{text}</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar por WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
