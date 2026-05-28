import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-cormorant' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.predovanpropiedades.com.ar'),
  title: {
    default: 'Predovan Propiedades | Inmobiliaria premium en La Plata',
    template: '%s | Predovan Propiedades'
  },
  description: 'Predovan Propiedades: venta, alquiler, tasaciones y publicación de propiedades en La Plata con una experiencia digital premium.',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.predovanpropiedades.com.ar',
    siteName: 'Predovan Propiedades',
    title: 'Predovan Propiedades | Inmobiliaria premium en La Plata',
    description: 'Venta, alquiler, tasaciones y publicaciones con una experiencia moderna, elegante y confiable.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Predovan Propiedades',
    description: 'Inmobiliaria premium en La Plata, Buenos Aires.'
  },
  icons: {
    icon: '/icon',
    shortcut: '/icon'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(225,34,34,0.09),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_10%)] dark:bg-[radial-gradient(circle_at_top,_rgba(225,34,34,0.18),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_10%)]">
            <SiteHeader />
            {children}
            <SiteFooter />
            <WhatsAppFab />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
