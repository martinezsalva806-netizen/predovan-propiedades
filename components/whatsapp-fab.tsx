'use client'

import { MessageCircle } from 'lucide-react'
import { siteData } from '@/lib/data'

export function WhatsAppFab() {
  const whatsappUrl = `${siteData.whatsappLink}?text=${encodeURIComponent('Hola! Vi su página web y me gustaría consultar sobre una propiedad.')}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-105"
      aria-label="Abrir WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366]/20 animate-[subtle-glow_4s_ease-in-out_infinite]" />
      <MessageCircle className="relative h-8 w-8" />
    </a>
  )
}
