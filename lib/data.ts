export const siteData = {
  name: 'Predovan Propiedades',
  address: '13 n636 e/ Plaza Paso y 45, La Plata, Buenos Aires 1900',
  hours: 'Lunes a Viernes de 9:00 a 16:00hs',
  instagram: '@predovanpropiedades',
  whatsapp: '+5492213533555',
  whatsappDisplay: '+54 9 221 353-3555',
  whatsappLink: 'https://wa.me/5492213533555?text=Hola!%20Vi%20su%20pagina%20web%20y%20me%20gustaria%20consultar%20sobre%20una%20propiedad',
}

export const heroStats = [
  { value: '492+', label: 'propiedades publicadas' },
  { value: '4000+', label: 'clientes satisfechos' },
  { value: '20+', label: 'años de experiencia' },
]

export const quickFilters = ['Venta', 'Alquiler', 'Emprendimientos'] as const

export const featuredProperties = [
  {
    id: 1,
    title: 'Casa moderna con jardín y pileta',
    price: 285000,
    location: 'Gonnet, La Plata',
    area: '210 m²',
    bedrooms: 4,
    bathrooms: 3,
    status: 'Venta',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Departamento luminoso con vista abierta',
    price: 142000,
    location: 'Centro, La Plata',
    area: '88 m²',
    bedrooms: 2,
    bathrooms: 2,
    status: 'Alquiler',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Emprendimiento premium en pozo',
    price: 96000,
    location: 'City Bell, La Plata',
    area: '64 m²',
    bedrooms: 1,
    bathrooms: 1,
    status: 'Emprendimientos',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Local comercial con frente vidriado',
    price: 180000,
    location: 'Barrio Norte, La Plata',
    area: '130 m²',
    bedrooms: 0,
    bathrooms: 2,
    status: 'Venta',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  }
]

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
