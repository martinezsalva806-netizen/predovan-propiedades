export const siteData = {
  name: 'Predovan Propiedades',
  founder: 'Fernando Predovan',
  address: '13 n636 e/ Plaza Paso y 45, La Plata, Buenos Aires 1900',
  hours: 'Lunes a Viernes de 9:00 a 16:00hs',
  instagram: '@predovanpropiedades',
  whatsapp: '+54 9 221 353 3555',
  whatsappDisplay: '+54 9 221 353 3555',
  whatsappLink: 'https://wa.me/5492213533555',
}

export const heroStats = [
  { value: '492+', label: 'propiedades publicadas' },
  { value: '4000+', label: 'clientes satisfechos' },
  { value: '20+', label: 'años de experiencia' },
]

export const quickFilters = ['Venta', 'Alquiler', 'Emprendimientos'] as const

export { properties as featuredProperties } from './properties'
export { propertyBySlug, similarProperties } from './properties'

export const whatsappQuickMessage = (subject: string) => `https://wa.me/5492213533555?text=${encodeURIComponent(`Hola! Quiero consultar sobre ${subject}.`)}`

export const blogPosts = [
  {
    title: 'Cómo se mueve el mercado inmobiliario en La Plata en 2026',
    category: 'Mercado',
    excerpt: 'Una lectura clara de precios, demanda y zonas con mayor dinamismo para compradores e inversores.',
  },
  {
    title: 'Qué buscar en una propiedad para alquilar rápido y mejor',
    category: 'Consejos',
    excerpt: 'Iluminación, distribución, amenities y presentación: todo lo que eleva la conversión de un aviso.',
  },
  {
    title: 'Zonas de La Plata con mayor potencial de revalorización',
    category: 'Inversión',
    excerpt: 'Un recorrido visual por barrios con proyección y oportunidades de capturar valor a mediano plazo.',
  },
]

export const teamMembers = [
  { name: 'Equipo Comercial', role: 'Asesoría y cierre', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80' },
  { name: 'Equipo de Tasaciones', role: 'Valoración y análisis', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
  { name: 'Equipo Marketing', role: 'Contenido y difusión', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80' },
]

export const zones = [
  'Centro', 'Gonnet', 'City Bell', 'Tolosa', 'Ringuelet', 'Villa Elisa', 'Los Hornos', 'Villa Castells', 'Altos de San Lorenzo', 'Manuel B. Gonnet'
]

export const valuationBaseByType = {
  casa: 1500,
  depto: 1750,
  terreno: 620,
  local: 1300,
  oficina: 1450,
}

export const zoneMultiplier: Record<string, number> = {
  'Centro': 1.08,
  'Gonnet': 1.18,
  'City Bell': 1.22,
  'Tolosa': 0.96,
  'Ringuelet': 0.92,
  'Villa Elisa': 1.14,
  'Los Hornos': 0.9,
  'Villa Castells': 1.16,
  'Altos de San Lorenzo': 0.84,
  'Manuel B. Gonnet': 1.2,
}

export const conditionMultiplier: Record<string, number> = {
  'a estrenar': 1.22,
  'excelente': 1.12,
  'bueno': 1,
  'regular': 0.88,
  'a reciclar': 0.74,
}
