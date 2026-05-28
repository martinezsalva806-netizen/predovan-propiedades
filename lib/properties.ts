export type PropertyType = 'casa' | 'depto' | 'terreno' | 'local'
export type PropertyMarket = 'venta' | 'alquiler'

export type PropertyRecord = {
  slug: string
  title: string
  address: string
  type: PropertyType
  market: PropertyMarket
  price?: string
  area?: string
  rooms?: string
  description: string
  gallery: string[]
  sourceUrl: string
  status: 'active'
}

export const properties: PropertyRecord[] = [
  {
    slug: "11-entre-68-y-69",
    title: "Departamento 11 entre 68 y 69 U$S75000",
    address: "11 entre 68 y 69",
    type: "depto",
    market: "venta",
    price: "U$S 75000",
    rooms: "1 dormitorio",
    description: "Departamento interno de 1 dormitorio amplio con placard y piso de parquet, living comedor, cocina semi separada con bajo y sobre mesada con salida al",
    sourceUrl: "https://www.predovanpropiedades.com.ar/ventas/11-entre-68-y-69/",
    status: "active",
    gallery: [
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-14.41.33.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-14.41.47.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-14.41.51-2.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-14.41.52.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-14.41.41.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-14.41.42.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-14.41.52-1.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-14.41.48.jpeg",
    ],
  },
  {
    slug: "28-entre-67-y-68",
    title: "Departamento 28 entre 67 y 68 U$S 70000",
    address: "28 entre 67 y 68",
    type: "depto",
    market: "venta",
    price: "U$S 70000",
    description: "PH a refaccionar o modernizar, cuenta con dos dormitorios, cocina integrada al living comedor amplio, baño completo. Cuenta con dos patios, uno con",
    sourceUrl: "https://www.predovanpropiedades.com.ar/ventas/28-entre-67-y-68/",
    status: "active",
    gallery: [
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-16-at-12.59.04-6.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-16-at-12.59.04-4.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-16-at-12.59.04-2.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-16-at-12.59.04-3.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-16-at-12.59.04-8.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-16-at-12.59.03.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-16-at-12.59.04-7.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-16-at-12.59.04-9.jpeg",
    ],
  },
  {
    slug: "departamento-dg-79-entre-dg-78-y-4",
    title: "Departamento Dg 79 e/ Dg 78 y 4 U$S 55000",
    address: "Dg 79 e/ Dg 78 y 4",
    type: "depto",
    market: "venta",
    price: "U$S 55000",
    description: "Excelente monoambiente, Amplio ambiente separado por barra, baño, balcon al frente y lavadero separado. Placard y lugar de guardado. Split y calefactor.",
    sourceUrl: "https://www.predovanpropiedades.com.ar/ventas/departamento-dg-79-entre-dg-78-y-4/",
    status: "active",
    gallery: [
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/20708.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/20693.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/20689.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/20683.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/20688.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/20707.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/20701.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/20700.jpg",
    ],
  },
  {
    slug: "43-entre-13-y-14",
    title: "Departamento 43 entre 13 y 14 U$S 69500",
    address: "43 entre 13 y 14",
    type: "depto",
    market: "venta",
    price: "U$S 69500",
    area: "44.26 m2",
    description: "Departamento en pozo a la venta. Obra avanzada. Un dormitorio al contrafrente, 3er piso. Cuenta con 44.26 m2 y un Balcon de 2,50m2. M2 TOTALES: 46,76 El",
    sourceUrl: "https://www.predovanpropiedades.com.ar/ventas/43-entre-13-y-14/",
    status: "active",
    gallery: [
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/23608.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/23604.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/23606.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/23594.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/23599.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/23600.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/23597.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2026/02/23602.jpeg",
    ],
  },
  {
    slug: "135-entre-56-y-57",
    title: "Casa 135 entre 56 y 57 U$S 150000",
    address: "135 entre 56 y 57",
    type: "casa",
    market: "venta",
    price: "U$S 150000",
    area: "1379 m2",
    rooms: "2 dormitorios",
    description: "Casa en venta PH sobre lote de 1379 m2. Cuenta con 2 dormitorios, estar, comedor, cocina separada, quincho semicubierto , entrada para varios autos,",
    sourceUrl: "https://www.predovanpropiedades.com.ar/ventas/135-entre-56-y-57/",
    status: "active",
    gallery: [
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/12/23379.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/12/23371.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/12/23338.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/12/23339.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/12/23337.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/12/23319.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/12/23324.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/12/23336.jpeg",
    ],
  },
  {
    slug: "43-entre-131-y-132",
    title: "Duplex 43 entre 131 y 132 U$S 69000",
    address: "43 entre 131 y 132",
    type: "depto",
    market: "venta",
    price: "U$S 69000",
    description: "Dúplex Interno. En PB: Estar, toilette, cocina comedor, patio con pileta y parrilla. PA: dos dormitorios con placard y baño completo. Muy luminoso.",
    sourceUrl: "https://www.predovanpropiedades.com.ar/ventas/43-entre-131-y-132/",
    status: "active",
    gallery: [
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/23026.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/23025.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/21182.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/23017.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/21179.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/23016.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/23024.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/23023.jpeg",
    ],
  },
  {
    slug: "grand-bell",
    title: "Casa Grand Bell U$S 530000",
    address: "Grand Bell",
    type: "casa",
    market: "venta",
    price: "U$S 530000",
    description: "Casa en cool de sack PB: Estar, Living con hogar, Comedor, toilette, escritorio, Dormitorio principal en Suite con Vestidor, Lavadero y Garage cubierto",
    sourceUrl: "https://www.predovanpropiedades.com.ar/ventas/grand-bell/",
    status: "active",
    gallery: [
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/22962.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/22919.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/22921.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/22935.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/22936.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/22923.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/22915.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/11/22928.jpeg",
    ],
  },
  {
    slug: "184-y-35",
    title: "Terreno 184 y 35 U$S 23000",
    address: "184 y 35",
    type: "terreno",
    market: "venta",
    price: "U$S 23000",
    area: "75 m2",
    description: "Lote en venta de 248,75 m2 con construccion hasta el encadenado. Medidas: 10 de frente, un lateral 26,93, otro lateral 22,80 y 10,92 de fondo.",
    sourceUrl: "https://www.predovanpropiedades.com.ar/ventas/184-y-35/",
    status: "active",
    gallery: [
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-14-at-13.39.40.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-14-at-13.39.43.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-14-at-13.39.46.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-14-at-13.39.49.jpeg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2020/04/13191-305x230.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2022/07/1084-307x230.jpg",
      "https://www.predovanpropiedades.com.ar/wp-content/uploads/2020/04/3428-173x230.jpg",
    ],
  },
]

export const propertyBySlug = Object.fromEntries(properties.map((p) => [p.slug, p])) as Record<string, PropertyRecord>

export const similarProperties = (current: PropertyRecord) => properties.filter((p) => p.slug !== current.slug && p.market === current.market && p.type === current.type).slice(0, 3)