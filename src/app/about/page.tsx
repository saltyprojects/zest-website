import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us — 25+ Years of Brass Manufacturing Excellence',
  description: 'Learn about Zest Industries — a trusted brass valves & fittings manufacturer since 1998 in Jalandhar, Punjab. Our history, manufacturing capabilities, and quality commitments.',
  alternates: { canonical: 'https://zestvalves.com/about' },
}

const milestones = [
  { year: '1998', event: 'Founded in Jalandhar, Punjab with a small manufacturing unit' },
  { year: '2003', event: 'Expanded product range to include gun metal check valves' },
  { year: '2008', event: 'Upgraded to CNC machining for precision manufacturing' },
  { year: '2013', event: 'Began exporting to UAE and Middle East markets' },
  { year: '2018', event: 'Celebrated 20 years with state-of-the-art facility expansion' },
  { year: '2023', event: '25+ years of excellence, serving 500+ clients across 2 countries' },
]

export default function About() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zestvalves.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://zestvalves.com/about' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brass">Home</Link> <span className="mx-2">/</span> <span className="text-brass">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-brass">Zest Industries</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl">Over 25 years of manufacturing excellence in brass valves and fittings from the heart of India&apos;s industrial hub.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Founded in 1998 in Jalandhar, Punjab — the brass capital of India — Zest Industries began with a vision to manufacture world-class brass valves and fittings at competitive prices.</p>
              <p>Over the past 25+ years, we have grown from a small workshop to a fully-equipped manufacturing facility with CNC machines, automated quality testing, and a dedicated team of skilled engineers and craftsmen.</p>
              <p>Today, we serve clients across India and the UAE, providing a comprehensive range of brass valves, cocks, fittings, gun metal check valves, and unions that meet the highest international quality standards.</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-6">Company Timeline</h3>
            <div className="space-y-4">
              {milestones.map(m => (
                <div key={m.year} className="flex gap-4">
                  <div className="text-brass font-bold text-lg min-w-[4rem]">{m.year}</div>
                  <div className="text-gray-600 text-sm border-l-2 border-brass pl-4">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Manufacturing Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'CNC Machining', desc: 'Precision CNC lathes and milling machines for tight-tolerance components. Automated production for consistent quality.', icon: '🏭' },
              { title: 'Quality Testing', desc: 'Comprehensive testing including pressure testing, dimensional inspection, and material analysis for every batch.', icon: '🔬' },
              { title: 'Custom Manufacturing', desc: 'OEM and custom manufacturing capabilities. We can produce to your exact drawings and specifications.', icon: '📐' },
              { title: 'Surface Finishing', desc: 'In-house chrome plating, nickel plating, and polishing for superior finish and corrosion resistance.', icon: '✨' },
              { title: 'Raw Material Control', desc: 'Strict raw material procurement from certified suppliers. Material test certificates available for all products.', icon: '📋' },
              { title: 'Packaging & Logistics', desc: 'Professional packaging and reliable logistics partners for timely delivery to any location in India and UAE.', icon: '📦' },
            ].map(c => (
              <div key={c.title} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-8">Quality Certifications & Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 9001:2015', 'IS 778', 'BS 5154', 'DIN 3357'].map(cert => (
              <div key={cert} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-brass text-2xl mb-2">🏅</div>
                <div className="font-bold text-navy text-sm">{cert}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8">Our products are manufactured in compliance with national and international standards, ensuring reliability and performance in every application.</p>
        </div>
      </section>

      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-gray-300 mb-8">Looking for a reliable brass products manufacturer? Let&apos;s discuss your requirements.</p>
          <Link href="/contact" className="bg-brass hover:bg-brass-dark text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
