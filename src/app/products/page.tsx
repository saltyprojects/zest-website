import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products — Brass Valves, Cocks, Fittings & Unions',
  description: 'Explore our complete range of brass valves, brass cocks, brass fittings, gun metal check valves, and brass unions. Premium quality, manufactured in Jalandhar, India.',
  alternates: { canonical: 'https://zestvalves.com/products' },
}

const products = [
  {
    name: 'Brass Ball Valves',
    category: 'Brass Valves',
    desc: 'Full bore and reduced bore brass ball valves available in sizes from ½" to 4". Ideal for water, gas, and oil applications. Chrome-plated and nickel-plated options available.',
    specs: ['Sizes: ½" to 4"', 'Pressure: Up to 600 WOG', 'Temperature: -20°C to 180°C', 'Thread: BSP / NPT'],
  },
  {
    name: 'Brass Gate Valves',
    category: 'Brass Valves',
    desc: 'Heavy-duty brass gate valves for full-flow applications. Non-rising stem design with hand wheel operation. Suitable for water supply and distribution systems.',
    specs: ['Sizes: ½" to 3"', 'Pressure: PN16', 'Body: Forged Brass', 'End Connection: Threaded'],
  },
  {
    name: 'Brass Bibcocks',
    category: 'Brass Cocks',
    desc: 'Premium brass bibcocks with polished chrome finish. Available in various designs for domestic and commercial plumbing installations.',
    specs: ['Sizes: ½" and ¾"', 'Finish: Chrome / Natural Brass', 'Cartridge: Ceramic Disc', 'Warranty: 5 Years'],
  },
  {
    name: 'Brass Stopcocks',
    category: 'Brass Cocks',
    desc: 'Precision-machined brass stopcocks for main water supply control. Quarter-turn operation for quick shut-off.',
    specs: ['Sizes: ½" to 2"', 'Operation: Quarter Turn', 'Seal: PTFE', 'Application: Water Supply'],
  },
  {
    name: 'Brass Pipe Fittings',
    category: 'Brass Fittings',
    desc: 'Complete range of brass pipe fittings including elbows, tees, reducers, nipples, bushings, and connectors. Precision-threaded for leak-proof connections.',
    specs: ['Sizes: ⅛" to 4"', 'Thread: BSP / NPT', 'Material: CZ121 / CW614N', 'Finish: Natural / Nickel Plated'],
  },
  {
    name: 'Brass Compression Fittings',
    category: 'Brass Fittings',
    desc: 'High-quality brass compression fittings for copper and plastic pipe systems. Easy installation without soldering.',
    specs: ['Pipe Sizes: 8mm to 54mm', 'Standard: EN 1254', 'O-Ring: EPDM', 'Application: Plumbing / Heating'],
  },
  {
    name: 'Gun Metal Check Valves',
    category: 'Gun Metal Check Valves',
    desc: 'Heavy-duty gun metal (bronze) check valves designed for high-pressure and corrosive environments. Spring-loaded and swing type available.',
    specs: ['Sizes: ½" to 6"', 'Pressure: PN25', 'Material: LG2 / CC491K', 'Type: Swing / Spring'],
  },
  {
    name: 'Brass Union Fittings',
    category: 'Brass Unions',
    desc: 'Premium brass union fittings for easy pipe assembly and disassembly. Available in male-female, female-female, and flare configurations.',
    specs: ['Sizes: ¼" to 2"', 'Seal: Brass-to-Brass / PTFE', 'Thread: BSP / NPT', 'Application: Industrial / Plumbing'],
  },
]

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

export default function Products() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brass">Home</Link> <span className="mx-2">/</span> <span className="text-brass">Products</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-brass">Products</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl">Premium brass valves, cocks, fittings, gun metal check valves, and brass unions — manufactured to international quality standards.</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map(p => (
              <article key={p.name} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <span className="text-sm font-semibold text-brass bg-brass/10 px-3 py-1 rounded-full">{p.category}</span>
                <h2 className="text-2xl font-bold text-navy mt-3 mb-2">{p.name}</h2>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-navy mb-2">Specifications</h3>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                    {p.specs.map(s => <li key={s} className="flex items-start gap-1"><span className="text-brass">•</span>{s}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Specifications?</h2>
          <p className="text-gray-300 mb-8">We manufacture brass products to your exact requirements. Contact us for custom orders and bulk pricing.</p>
          <Link href="/contact" className="bg-brass hover:bg-brass-dark text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg inline-block">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
