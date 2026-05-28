import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedPropertiesSection } from '@/components/sections/featured-properties-section'
import { ValuationSection } from '@/components/sections/valuation-section'
import { AboutSection } from '@/components/sections/about-section'
import { BlogSection } from '@/components/sections/blog-section'
import { ContactSection } from '@/components/sections/contact-section'
import { siteData } from '@/lib/data'
import { WhatsAppBanner } from '@/components/whatsapp-banner'
import { PropertiesIntroBanner } from '@/components/properties-intro-banner'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PropertiesIntroBanner />
      <FeaturedPropertiesSection />
      <WhatsAppBanner />
      <ValuationSection />
      <AboutSection />
      <BlogSection />
      <WhatsAppBanner compact />
      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: siteData.name,
            url: 'https://www.predovanpropiedades.com.ar',
            telephone: siteData.whatsappDisplay,
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteData.address,
              addressLocality: 'La Plata',
              addressRegion: 'Buenos Aires',
              addressCountry: 'AR'
            },
            areaServed: 'La Plata, Buenos Aires, Argentina',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
          })
        }}
      />
    </main>
  )
}
