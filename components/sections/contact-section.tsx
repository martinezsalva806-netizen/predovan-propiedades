'use client'

import { motion } from 'framer-motion'
import { MapPinned, Clock3, Phone, Instagram, Mail, Send } from 'lucide-react'
import { siteData } from '@/lib/data'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,22,28,1),rgba(11,14,18,1))] py-20 text-white">
      <div className="container-grid relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/55">Contacto</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Hablemos de la propiedad que querés vender, alquilar o publicar.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="border-white/10 bg-white/6 p-5"><MapPinned className="h-5 w-5 text-brand-400" /><div className="mt-3 text-sm text-white/55">Dirección</div><div className="mt-1 text-base">{siteData.address}</div></Card>
            <Card className="border-white/10 bg-white/6 p-5"><Clock3 className="h-5 w-5 text-brand-400" /><div className="mt-3 text-sm text-white/55">Horario</div><div className="mt-1 text-base">{siteData.hours}</div></Card>
            <Card className="border-white/10 bg-white/6 p-5"><Phone className="h-5 w-5 text-brand-400" /><div className="mt-3 text-sm text-white/55">WhatsApp</div><div className="mt-1 text-base">{siteData.whatsappDisplay}</div></Card>
            <Card className="border-white/10 bg-white/6 p-5"><Instagram className="h-5 w-5 text-brand-400" /><div className="mt-3 text-sm text-white/55">Instagram</div><div className="mt-1 text-base">{siteData.instagram}</div></Card>
          </div>

          <Card className="mt-6 overflow-hidden border-white/10 bg-white/6">
            <iframe
              title="Mapa Predovan Propiedades"
              src="https://www.google.com/maps?q=13+n636+La+Plata+Buenos+Aires&output=embed"
              className="h-[300px] w-full border-0"
              loading="lazy"
            />
          </Card>
        </div>

        <Card className="border-white/10 bg-white/6 p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Nombre y apellido" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Teléfono" />
            <Textarea placeholder="Contanos qué necesitás" />
            <Button variant="accent" type="submit" className="w-full"><Send className="h-4 w-4" /> Enviar consulta</Button>
          </form>
          {sent && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-4 text-sm text-brand-100">Gracias. Recibimos tu consulta y te contactaremos pronto.</motion.div>}
          <div className="mt-6 rounded-[26px] border border-white/10 bg-black/20 p-5 text-sm text-white/60">
            <div className="flex items-center gap-2 text-white"><Mail className="h-4 w-4 text-brand-400" /> Respuesta rápida por WhatsApp y email.</div>
            <p className="mt-3 leading-6">Nuestra atención está pensada para ofrecer una experiencia ágil, clara y confiable.</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
