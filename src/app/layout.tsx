import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://zestvalves.com'),
  title: { default: 'Zest Industries — Brass Valves & Fittings Manufacturer | Jalandhar, India', template: '%s | Zest Industries' },
  description: 'Leading manufacturer of brass valves, brass cocks, brass fittings, gun metal check valves & brass unions since 1998. Based in Jalandhar, Punjab, India. Exporting to India & UAE.',
  keywords: ['brass valves', 'brass fittings', 'brass cocks', 'gun metal check valves', 'brass unions', 'Jalandhar', 'India', 'manufacturer', 'Zest Industries'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Zest Industries',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Zest Industries - Brass Valves Manufacturer' }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://zestvalves.com' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zest Industries',
  url: 'https://zestvalves.com',
  logo: 'https://zestvalves.com/logo.png',
  foundingDate: '1998',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Industrial Area',
    addressLocality: 'Jalandhar',
    addressRegion: 'Punjab',
    postalCode: '144001',
    addressCountry: 'IN',
  },
  contactPoint: { '@type': 'ContactPoint', telephone: '+91-181-2345678', contactType: 'sales' },
  sameAs: [],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Zest Industries',
  image: 'https://zestvalves.com/og-image.jpg',
  address: organizationSchema.address,
  telephone: '+91-181-2345678',
  url: 'https://zestvalves.com',
  priceRange: '$$',
  openingHours: 'Mo-Sa 09:00-18:00',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
