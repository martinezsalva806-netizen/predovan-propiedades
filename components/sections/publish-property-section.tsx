'use client'

import { motion } from 'framer-motion'
import { Upload, Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { siteData } from '@/lib/data'

export function PublishPropertySection() {
  const [sent, setSent] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    const message = encodeURIComponent('Hola! Quiero publicar mi propiedad en Predovan Propiedades. Ya completé el formulario en la web.')
    window.open(`https://wa.me/5492213533555?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="publica" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(244,239,230,1),rgba(228,221,212,0.94))] py-20 text-coal-900 dark:bg-[linear-gradient(180deg,rgba(18,22,28,1),rgba(11,14,18,1))] dark:text-white">
      <div className="container-grid relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-coal-500 dark:text-white/55">Publicá tu propiedad</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Un formulario claro para capturar tu inmueble con estilo.</h2>
          <p className="mt-4 max-w-xl text-coal-700 dark:text-white/65">Subí datos, fotos y contacto del propietario. Nosotros tomamos el siguiente paso y lo llevamos a WhatsApp para acelerar la gestión.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[26px] border border-white/10 bg-white/40 p-5 shadow-soft dark:bg-white/5">
              <div className="text-xs uppercase tracking-[0.24em] text-coal-500 dark:text-white/50">Paso 1</div>
              <div className="mt-2 text-lg font-semibold">Datos de la propiedad</div>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/40 p-5 shadow-soft dark:bg-white/5">
              <div className="text-xs uppercase tracking-[0.24em] text-coal-500 dark:text-white/50">Paso 2</div>
              <div className="mt-2 text-lg font-semibold">Fotos y contacto</div>
            </div>
          </div>
        </div>

        <Card className="border-white/10 bg-white/70 p-5 text-coal-900 dark:bg-white/6 dark:text-white">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Select defaultValue="casa"><option>Casa</option><option>Departamento</option><option>Terreno</option><option>Local</option><option>Oficina</option></Select>
              <Input placeholder="Ubicación" />
              <Input type="number" placeholder="m² totales" />
              <Input type="number" placeholder="Ambientes" />
              <Input type="number" placeholder="Precio pretendido" />
              <Input placeholder="Nombre del propietario" />
              <Input placeholder="Teléfono" />
              <Input placeholder="Email" type="email" />
            </div>
            <Textarea placeholder="Comentarios adicionales" />

            <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[26px] border border-dashed border-coal-400/30 bg-white/50 px-6 py-10 text-center transition hover:border-brand-500/50 hover:bg-brand-500/5 dark:border-white/10 dark:bg-white/5">
              <Upload className="h-7 w-7 text-brand-500" />
              <span className="text-sm font-medium">Arrastrá y soltá fotos aquí o hacé click para seleccionar</span>
              <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => setFiles(Array.from(e.target.files || []))} />
            </label>
            {files.length > 0 && <div className="text-sm text-coal-600 dark:text-white/65">{files.length} foto(s) seleccionada(s).</div>}

            <Button variant="accent" type="submit" className="w-full">
              <Send className="h-4 w-4" /> Enviar y notificar por WhatsApp
            </Button>
          </form>

          {sent && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-[22px] border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-300">
              <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="h-4 w-4" /> Tu solicitud fue enviada. Nos pondremos en contacto pronto.</div>
            </motion.div>
          )}
        </Card>
      </div>
    </section>
  )
}
