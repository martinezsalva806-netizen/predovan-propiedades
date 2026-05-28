import { conditionMultiplier, valuationBaseByType, zoneMultiplier } from '@/lib/data'

export type PropertyType = keyof typeof valuationBaseByType
export type PropertyCondition = keyof typeof conditionMultiplier

export function calculateValuation(params: {
  type: PropertyType
  zone: string
  totalArea: number
  coveredArea: number
  floorCount: number
  bedrooms: number
  bathrooms: number
  garageCount: number
  pool: boolean
  age: number
  condition: PropertyCondition
  orientation: 'frente' | 'contrafrente'
  balcony: boolean
  grill: boolean
}) {
  const base = valuationBaseByType[params.type] ?? 1400
  const zoneFactor = zoneMultiplier[params.zone] ?? 1
  const conditionFactor = conditionMultiplier[params.condition] ?? 1
  const areaFactor = Math.max(params.coveredArea * 0.72 + params.totalArea * 0.28, 20)
  const ageFactor = params.age <= 5 ? 1.08 : params.age <= 15 ? 1 : params.age <= 30 ? 0.95 : 0.9
  const roomBoost = 1 + Math.min(params.bedrooms * 0.02 + params.bathrooms * 0.017, 0.16)
  const garageBoost = 1 + Math.min(params.garageCount * 0.025, 0.06)
  const extras = garageBoost * (params.pool ? 1.05 : 1) * (params.balcony ? 1.02 : 1) * (params.grill ? 1.015 : 1) * (params.orientation === 'frente' ? 1.01 : 0.99)
  const floorBoost = params.floorCount > 0 ? 1 + Math.min(params.floorCount * 0.004, 0.03) : 1
  const pricePerM2 = Math.round(base * zoneFactor * conditionFactor * ageFactor * roomBoost * floorBoost)
  const total = Math.round(pricePerM2 * areaFactor * extras)

  const comparableLow = Math.round(pricePerM2 * 0.92)
  const comparableHigh = Math.round(pricePerM2 * 1.08)

  return {
    pricePerM2,
    estimatedValue: total,
    low: Math.round(total * 0.92),
    high: Math.round(total * 1.08),
    comparableLow,
    comparableHigh,
  }
}
