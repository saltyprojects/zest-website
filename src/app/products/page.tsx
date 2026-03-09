import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Products — Brass Valves, Cocks, Fittings & Unions',
  description:
    'Explore our complete range of brass valves, brass cocks, brass fittings, gun metal check valves, and brass unions. Premium quality, manufactured in Jalandhar, India.',
  alternates: { canonical: 'https://zestvalves.com/products' },
}

/* ── Data ─── */

const categories = [
  'All',
  'Brass Valves',
  'Brass Cocks',
  'Brass Fittings',
  'Gun Metal Check Valves',
  'Brass Unions',
]

const products = [
  {
    name: 'Brass Gate Valves',
    category: 'Brass Valves',
    desc: 'Heavy-duty brass gate valves for full-flow isolation in water supply and distribution systems. Non-rising stem design with hand wheel operation. Manufactured from IS:319 grade brass.',
    specs: ['Sizes: 15 mm to 100 mm', 'Pressure: PN16 / PN25', 'Material: IS:319 Brass', 'Thread: BSP / NPT'],
    image: '/images/products/brass-gate-valve.jpg',
  },
  {
    name: 'Brass Ball Valves',
    category: 'Brass Valves',
    desc: 'Full bore and reduced bore brass ball valves for water, gas, and oil applications. Quarter-turn operation with chrome or nickel plating options. IS:319 compliant.',
    specs: ['Sizes: 6 mm to 50 mm', 'Pressure: PN25 / 600 WOG', 'Material: IS:319 Brass', 'Thread: BSP / NPT'],
    image: '/images/products/brass-ball-valve.jpg',
  },
  {
    name: 'Brass Check Valves',
    category: 'Brass Valves',
    desc: 'Horizontal and vertical brass check valves preventing backflow in plumbing and industrial systems. Spring-loaded disc design for reliable one-way flow control.',
    specs: ['Sizes: 15 mm to 50 mm', 'Type: Horizontal / Vertical', 'Material: IS:319 Brass', 'Standard: BS:5154'],
    image: '/images/products/brass-check-valve.jpg',
  },
  {
    name: 'Brass Bibcocks',
    category: 'Brass Cocks',
    desc: 'Premium brass bibcocks with polished chrome finish for domestic and commercial plumbing. Ceramic disc cartridge for drip-free operation.',
    specs: ['Sizes: 15 mm & 20 mm', 'Finish: Chrome / Natural', 'Material: IS:319 Brass', 'Cartridge: Ceramic Disc'],
    image: '/images/products/brass-bibcock.jpg',
  },
  {
    name: 'Brass Stopcocks & Ferrule Cocks',
    category: 'Brass Cocks',
    desc: 'Precision-machined brass stopcocks and ferrule cocks for main water supply control. Quarter-turn operation for quick shut-off. Available in all standard sizes.',
    specs: ['Sizes: 15 mm to 50 mm', 'Operation: Quarter Turn', 'Material: IS:319 Brass', 'Seal: PTFE'],
    image: '/images/products/brass-stopcock.jpg',
  },
  {
    name: 'Brass Pipe Fittings',
    category: 'Brass Fittings',
    desc: 'Complete range of elbows, tees, reducers, nipples, and connectors. Precision-threaded for leak-proof connections in plumbing and industrial piping.',
    specs: ['Sizes: 6 mm to 100 mm', 'Thread: BSP / NPT', 'Material: IS:319 Brass', 'Finish: Natural / Nickel'],
    image: '/images/products/brass-fittings.jpg',
  },
  {
    name: 'Gun Metal Horizontal Check Valves',
    category: 'Gun Metal Check Valves',
    desc: 'Heavy-duty gun metal check valves manufactured to IS:778 standard. Designed for high-pressure water supply, fire-fighting, and industrial applications. LTB2 gun metal construction.',
    specs: ['Sizes: 25 mm to 150 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-check-valve.jpg',
  },
  {
    name: 'Brass Union Fittings',
    category: 'Brass Unions',
    desc: 'Premium brass union fittings for easy pipe assembly and disassembly. Available in male-female, female-female, and flare configurations.',
    specs: ['Sizes: 6 mm to 50 mm', 'Seal: Brass / PTFE', 'Thread: BSP / NPT', 'Material: IS:319 Brass'],
    image: '/images/products/brass-union.jpg',
  },
]

/* ── Schema ─── */

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Zest Industries Products',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      description: p.desc,
      brand: { '@type': 'Brand', name: 'Zest Industries' },
      manufacturer: { '@type': 'Organization', name: 'Zest Industries' },
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zestvalves.com' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://zestvalves.com/products' },
  ],
}

/* ── Page ─── */

export default function Products() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="products-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 font-body text-sm text-gray-400" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="transition-colors duration-150 hover:text-brass">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brass" aria-current="page">Products</li>
            </ol>
          </nav>
          <h1 id="products-hero" className="text-balance text-4xl font-bold sm:text-5xl">
            Our <span className="text-brass">Products</span>
          </h1>
          <p className="mt-4 max-w-3xl font-body text-lg text-gray-300">
            Premium brass valves, cocks, fittings, gun metal check valves, and brass
            unions — manufactured to international quality standards in Jalandhar, India.
          </p>
        </div>
      </section>

      {/* Category pills (static — could become interactive with client component) */}
      <div className="border-b border-gray-200 bg-white" role="navigation" aria-label="Product categories">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`
                inline-flex min-h-touch items-center whitespace-nowrap rounded-full px-5 py-2
                font-heading text-sm font-semibold transition-colors duration-150
                ${i === 0 ? 'bg-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section className="bg-gray-50 py-16 sm:py-20" aria-label="Product listings">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p) => (
              <article key={p.name} className="card group overflow-hidden">
                <div className="relative -mx-6 -mt-6 mb-4 h-48 bg-navy/5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-brass/10 px-3 py-1 font-heading text-xs font-semibold text-brass">
                      {p.category}
                    </span>
                    <h2 className="mt-3 font-heading text-2xl font-bold text-navy">
                      {p.name}
                    </h2>
                  </div>
                </div>

                <p className="mt-3 font-body text-gray-600">{p.desc}</p>

                <div className="mt-4 rounded-lg bg-gray-50 p-4">
                  <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-navy">
                    Specifications
                  </h3>
                  <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-body text-sm text-gray-600">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex min-h-touch items-center font-heading text-sm font-semibold text-brass transition-colors duration-150 hover:text-brass-dark"
                  aria-label={`Request a quote for ${p.name}`}
                >
                  Request Quote
                  <span className="ml-1 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="products-cta">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="products-cta" className="text-balance font-heading text-3xl font-bold md:text-4xl">
            Need Custom Specifications?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-300">
            We manufacture brass products to your exact requirements. Contact us for custom
            orders, OEM manufacturing, and bulk pricing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
              Request a Quote
            </Link>
            <a href="tel:+911812345678" className="btn-outline text-lg !px-10 !py-4 !border-white/30 !text-white hover:!bg-white/10">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
