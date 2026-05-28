import { conditionMultiplier, valuationBaseByType, zoneMultiplier } from '@/lib/data'

export type PropertyType = keyof typeof valuationBaseByType
export type PropertyCondition = keyof typeof conditionMultiplier

export function calculateValuation(params: {
  type: PropertyType
  zone: string
  totalArea: number
  coveredArea: number
  bedrooms: number
  bathrooms: number
  age: number
  garage: boolean
  pool: boolean
  condition: PropertyCondition
}) {
  const base = valuationBaseByType[params.type] ?? 1400
  const zoneFactor = zoneMultiplier[params.zone] ?? 1
  const conditionFactor = conditionMultiplier[params.condition] ?? 1
  const areaFactor = Math.max(params.coveredArea * 0.72 + params.totalArea * 0.28, 20)
  const ageFactor = params.age <= 5 ? 1.06 : params.age <= 15 ? 1 : params.age <= 30 ? 0.95 : 0.9
  const roomBoost = 1 + Math.min(params.bedrooms * 0.018 + params.bathrooms * 0.015, 0.12)
  const extras = (params.garage ? 1.03 : 1) * (params.pool ? 1.05 : 1)
  const pricePerM2 = Math.round(base * zoneFactor * conditionFactor * ageFactor * roomBoost)
  const total = Math.round(pricePerM2 * areaFactor * extras)

  return {
    pricePerM2,
    estimatedValue: total,
    low: Math.round(total * 0.92),
    high: Math.round(total * 1.08),
  }
}
