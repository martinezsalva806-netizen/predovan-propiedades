'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Home, MapPinned, BadgeCheck, HeartPulse, CarFront, Waves, Sparkles, ArrowUpRight, Building2, Layers3, DoorOpen, Bath, Trees, Hotel, View, CookingPot } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { calculateValuation } from '@/lib/valuation'
import { siteData, zones } from '@/lib/data'
import { currency } from '@/lib/utils'

const types = [
  { value: 'casa', icon: Home, label: 'Casa' },
  { value: 'depto', icon: BadgeCheck, label: 'Depto' },
  { value: 'terreno', icon: MapPinned, label: 'Terreno' },
  { value: 'local', icon: Sparkles, label: 'Local' },
  { value: 'oficina', icon: HeartPulse, label: 'Oficina' },
] as const

const conditions = ['a estrenar', 'excelente', 'bueno', 'regular', 'a reciclar'] as const

const fields = [
  { icon: Building2, label: 'm² totales' },
  { icon: Layers3, label: 'm² cubiertos' },
  { icon: Hotel, label: 'Altura / piso' },
  { icon: DoorOpen, label: 'Dormitorios' },
  { icon: Bath, label: 'Baños' },
  { icon: CarFront, label: 'Cochera' },
  { icon: Waves, label: 'Pileta' },
  { icon: Trees, label: 'Antigüedad' },
  { icon: View, label: 'Orientación' },
  { icon: CookingPot, label: 'Balcón / terraza / parrilla' },
] as const

export function ValuationSection() {
  const [step, setStep] = useState(1)
  const [type, setType] = useState<'casa' | 'depto' | 'terreno' | 'local' | 'oficina'>('casa')
  const [zone, setZone] = useState('Centro')
  const [totalArea, setTotalArea] = useState(150)
  const [coveredArea, setCoveredArea] = useState(120)
  const [floorCount, setFloorCount] = useState(0)
  const [bedrooms, setBedrooms] = useState(3)
  const [bathrooms, setBathrooms] = useState(2)
  const [garageCount, setGarageCount] = useState(1)
  const [pool, setPool] = useState(false)
  const [age, setAge] = useState(10)
  const [condition, setCondition] = useState<'a estrenar' | 'excelente' | 'bueno' | 'regular' | 'a reciclar'>('excelente')
  const [orientation, setOrientation] = useState<'frente' | 'contrafrente'>('frente')
  const [balcony, setBalcony] = useState(true)
  const [grill, setGrill] = useState(false)

  const result = useMemo(() => calculateValuation({ type, zone, totalArea, coveredArea, floorCount, bedrooms, bathrooms, garageCount, pool, age, condition, orientation, balcony, grill }), [type, zone, totalArea, coveredArea, floorCount, bedrooms, bathrooms, garageCount, pool, age, condition, orientation, balcony, grill])

  const next = () => setStep((s) => Math.min(s + 1, 5))
  const back = () => setStep((s) => Math.max(s - 1, 1))
  const whatsappLink = `${siteData.whatsappLink}?text=${encodeURIComponent(`Hola! Me gustaría solicitar una tasación profesional gratuita para una propiedad tipo ${type} en ${zone}.`)}`

  return (
    <section id="tasacion" className="relative overflow-hidden bg-[linear-gradient(180deg,#0f1318_0%,#0b0e12_100%)] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(225,34,34,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_25%)]" />
      <div className="container-grid relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/55">Calculadora de tasación</div>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl sm:text-5xl">Estimá el valor con una experiencia interactiva, ágil y premium.</h2>
          <p className="mt-4 max-w-2xl text-white/65">Usamos referencias promedio por m² en La Plata y factores ajustados por zona, estado, superficie y amenities para darte una estimación razonable.</p>

          <Card className="mt-8 border-white/10 bg-white/6 p-4 sm:p-6">
            <div className="mb-6 flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm ${step >= n ? 'border-brand-500 bg-brand-500 text-white' : 'border-white/10 bg-white/5 text-white/50'}`}>{n}</div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} className="space-y-4">
                  <h3 className="text-lg font-semibold">Paso 1 · Tipo de propiedad</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {types.map((item) => {
                      const Icon = item.icon
                      return (
                        <button key={item.value} onClick={() => setType(item.value)} className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${type === item.value ? 'border-brand-500 bg-brand-500/15' : 'border-white/10 bg-white/5 hover:bg-white/8'}`}>
                          <Icon className="h-5 w-5 text-brand-400" />
                          <span>{item.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} className="space-y-4">
                  <h3 className="text-lg font-semibold">Paso 2 · Ubicación</h3>
                  <Select value={zone} onChange={(e) => setZone(e.target.value)}>{zones.map((z) => <option key={z}>{z}</option>)}</Select>
                  <p className="text-sm text-white/55">Elegí la zona de La Plata para afinar la referencia por m².</p>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} className="space-y-4">
                  <h3 className="text-lg font-semibold">Paso 3 · Características</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input type="number" value={totalArea} onChange={(e) => setTotalArea(Number(e.target.value))} placeholder="m² totales" />
                    <Input type="number" value={coveredArea} onChange={(e) => setCoveredArea(Number(e.target.value))} placeholder="m² cubiertos" />
                    <Input type="number" value={floorCount} onChange={(e) => setFloorCount(Number(e.target.value))} placeholder="Altura / piso" />
                    <Input type="number" value={bedrooms} onChange={(e) => setBedrooms(Number(e.target.value))} placeholder="Dormitorios" />
                    <Input type="number" value={bathrooms} onChange={(e) => setBathrooms(Number(e.target.value))} placeholder="Baños" />
                    <Input type="number" value={garageCount} onChange={(e) => setGarageCount(Number(e.target.value))} placeholder="Cocheras" />
                    <Input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Antigüedad (años)" />
                    <div className="grid gap-3 sm:col-span-2 sm:grid-cols-2">
                      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"><input type="checkbox" checked={pool} onChange={(e) => setPool(e.target.checked)} /> Pileta</label>
                      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"><input type="checkbox" checked={balcony} onChange={(e) => setBalcony(e.target.checked)} /> Balcón / terraza</label>
                      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"><input type="checkbox" checked={grill} onChange={(e) => setGrill(e.target.checked)} /> Parrilla</label>
                      <Select value={orientation} onChange={(e) => setOrientation(e.target.value as 'frente' | 'contrafrente')}>
                        <option value="frente">Frente</option>
                        <option value="contrafrente">Contrafrente</option>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} className="space-y-4">
                  <h3 className="text-lg font-semibold">Paso 4 · Estado general</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {conditions.map((item) => (
                      <button key={item} onClick={() => setCondition(item)} className={`rounded-2xl border px-4 py-3 text-left capitalize ${condition === item ? 'border-brand-500 bg-brand-500/15' : 'border-white/10 bg-white/5 hover:bg-white/8'}`}>{item}</button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 5 && (
                <motion.div key="s5" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="space-y-4">
                  <h3 className="text-lg font-semibold">Paso 5 · Resultado estimado</h3>
                  <div className="rounded-[28px] border border-brand-500/30 bg-gradient-to-br from-brand-500/12 to-white/5 p-6">
                    <div className="text-xs uppercase tracking-[0.26em] text-white/55">Precio por m² de referencia</div>
                    <div className="mt-2 font-serif text-4xl text-white">{currency(result.pricePerM2)}</div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl bg-white/6 p-4"><div className="text-xs text-white/55">Estimado</div><div className="text-2xl font-semibold">{currency(result.estimatedValue)}</div></div>
                      <div className="rounded-2xl bg-white/6 p-4"><div className="text-xs text-white/55">Rango bajo</div><div className="text-2xl font-semibold">{currency(result.low)}</div></div>
                      <div className="rounded-2xl bg-white/6 p-4"><div className="text-xs text-white/55">Rango alto</div><div className="text-2xl font-semibold">{currency(result.high)}</div></div>
                    </div>
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-white/70">
                      Comparables de la zona: {currency(result.comparableLow)} a {currency(result.comparableHigh)} por m².
                    </div>
                    <Button variant="accent" className="mt-6 w-full sm:w-auto" onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}>
                      Solicitar tasación profesional gratuita <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between gap-3">
              <Button variant="outline" className="border-white/10 bg-white/5 text-white" onClick={back} disabled={step === 1}>Atrás</Button>
              {step < 5 ? <Button variant="accent" onClick={next}>Continuar <ArrowRight className="h-4 w-4" /></Button> : <Button variant="outline" className="border-white/10 bg-white/5 text-white" onClick={() => setStep(1)}>Reiniciar</Button>}
            </div>
          </Card>
        </div>

        <div className="lg:pt-20">
          <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center gap-2 text-sm text-white/70"><MapPinned className="h-4 w-4 text-brand-400" /> Referencia local de La Plata</div>
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-transparent p-5">
              <div className="text-xs uppercase tracking-[0.26em] text-white/55">Promedio orientativo</div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/6 p-4"><div className="text-white/55 text-sm">Zona actual</div><div className="text-2xl font-semibold">{zone}</div></div>
                <div className="rounded-2xl bg-white/6 p-4"><div className="text-white/55 text-sm">Tipo</div><div className="text-2xl font-semibold capitalize">{type}</div></div>
                <div className="rounded-2xl bg-white/6 p-4"><div className="text-white/55 text-sm">Condición</div><div className="text-2xl font-semibold capitalize">{condition}</div></div>
                <div className="rounded-2xl bg-white/6 p-4"><div className="text-white/55 text-sm">Contacto</div><div className="text-2xl font-semibold">WhatsApp</div></div>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-4 text-sm text-white/80">
                <CarFront className="h-5 w-5 text-brand-400" />
                El resultado es estimativo y sirve como punto de partida comercial.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
