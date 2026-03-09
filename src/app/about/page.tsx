import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — 25+ Years of Brass Manufacturing Excellence',
  description:
    'Learn about Zest Industries — a trusted brass valves & fittings manufacturer since 1998 in Jalandhar, Punjab. Our history, manufacturing capabilities, and quality commitments.',
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

const capabilities = [
  { title: 'CNC Machining', desc: 'Precision CNC lathes and milling machines for tight-tolerance components. Automated production for consistent quality across every batch.', emoji: '🏭' },
  { title: 'Quality Testing', desc: 'Comprehensive testing — pressure testing, dimensional inspection, and material analysis — for every production batch.', emoji: '🔬' },
  { title: 'Custom Manufacturing', desc: 'Full OEM and custom manufacturing capabilities. We produce to your exact drawings and specifications.', emoji: '📐' },
  { title: 'Surface Finishing', desc: 'In-house chrome plating, nickel plating, and polishing for superior finish and corrosion resistance.', emoji: '✨' },
  { title: 'Raw Material Control', desc: 'Strict raw material procurement from certified suppliers. Material test certificates available for all products.', emoji: '📋' },
  { title: 'Packaging & Logistics', desc: 'Professional packaging and reliable logistics partners for timely delivery to any location in India and UAE.', emoji: '📦' },
]

const certifications = [
  { name: 'IS:778', desc: 'Gun Metal Valves & Fittings' },
  { name: 'IS:319', desc: 'Free Cutting Brass Standard' },
  { name: 'BS:5154', desc: 'British Standard for Copper Alloy Valves' },
  { name: 'ISO 9001:2015', desc: 'Quality Management System' },
]

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zestvalves.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://zestvalves.com/about' },
  ],
}

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="relative bg-navy py-16 text-white sm:py-20" aria-labelledby="about-hero">
        <div className="absolute inset-0">
          <Image
            src="/images/products/factory.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-10"
            sizes="100vw"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 to-navy/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 font-body text-sm text-gray-400" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="transition-colors duration-150 hover:text-brass">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brass" aria-current="page">About Us</li>
            </ol>
          </nav>
          <h1 id="about-hero" className="text-balance text-4xl font-bold sm:text-5xl">
            About <span className="text-brass">Zest Industries</span>
          </h1>
          <p className="mt-4 max-w-3xl font-body text-lg text-gray-300">
            Over 25 years of manufacturing excellence in brass valves and fittings from the
            heart of India&apos;s industrial hub.
          </p>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-20 sm:py-24" aria-labelledby="story-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 id="story-heading" className="font-heading text-3xl font-bold text-navy">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 font-body text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998 in Jalandhar, Punjab — historically renowned as the
                  brass capital and sports goods hub of India — Zest Industries began
                  with a vision to manufacture world-class brass valves and fittings
                  at competitive prices from the heart of India&apos;s industrial
                  metalworking belt.
                </p>
                <p>
                  Over the past 25+ years, we have grown from a small workshop in
                  Jalandhar&apos;s Industrial Area to a fully-equipped manufacturing
                  facility with CNC machines, automated quality testing, and a dedicated
                  team of skilled engineers and craftsmen. Every product is manufactured
                  from IS:319 grade brass and gun metal LTB2, meeting IS:778, BS:5154,
                  and other international quality standards.
                </p>
                <p>
                  Today, we serve 500+ clients across India and export to Dubai, UAE,
                  and Africa — providing a comprehensive range of brass valves, cocks,
                  fittings, gun metal horizontal check valves, and unions trusted by
                  plumbing contractors, industrial suppliers, and government projects.
                </p>
              </div>

              {/* Trust signals */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: '25+', label: 'Years' },
                  { value: '500+', label: 'Clients' },
                  { value: '5,000+', label: 'Products' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                    <div className="font-heading text-2xl font-bold text-brass">{s.value}</div>
                    <div className="font-body text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="mb-6 font-heading text-xl font-bold text-navy">
                Company Timeline
              </h3>
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brass font-heading text-xs font-bold text-white">
                        {m.year.slice(-2)}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="mt-1 h-full w-0.5 bg-brass/20" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="font-heading text-sm font-bold text-navy">{m.year}</div>
                      <p className="mt-1 font-body text-sm text-gray-600">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="bg-gray-50 py-20 sm:py-24" aria-labelledby="capabilities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="capabilities-heading" className="section-heading">
            Manufacturing Capabilities
          </h2>
          <p className="section-subheading">
            State-of-the-art facilities and processes ensuring precision, quality, and
            efficiency in every product.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="card">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brass/10 text-2xl"
                  aria-hidden="true"
                >
                  {c.emoji}
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-2 font-body text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 sm:py-24" aria-labelledby="certs-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="certs-heading" className="section-heading">
            Quality Certifications &amp; Standards
          </h2>
          <p className="section-subheading">
            Our products are manufactured in compliance with national and international
            standards.
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="mb-3 text-3xl text-brass" aria-hidden="true">🏅</div>
                <div className="font-heading text-sm font-bold text-navy">{cert.name}</div>
                <div className="mt-1 font-body text-xs text-gray-500">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="about-cta">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="about-cta" className="text-balance font-heading text-3xl font-bold md:text-4xl">
            Partner With Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-300">
            Looking for a reliable brass products manufacturer? Let&apos;s discuss your
            requirements and build a lasting partnership.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
              Get in Touch
            </Link>
            <Link href="/products" className="btn-outline text-lg !px-10 !py-4 !border-white/30 !text-white hover:!bg-white/10">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
