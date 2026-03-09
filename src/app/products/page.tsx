import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Products — Brass Valves, Cocks, Fittings & Unions | Zest Industries',
  description:
    'Explore our complete range of brass valves, gun metal check valves, brass cocks, fittings, and unions. Premium quality, manufactured in Jalandhar, India since 1998.',
  alternates: { canonical: 'https://zestvalves.com/products' },
}

/* ── Product Data (Real Zest Industries catalogue) ─── */

const categories = [
  'All',
  'Gun Metal Valves',
  'Gun Metal Cocks',
  'Brass Valves',
  'Brass Cocks',
  'Brass Fittings',
]

const products = [
  {
    name: 'Gun Metal Check Valve (Screwed)',
    category: 'Gun Metal Valves',
    desc: 'Compact screwed-end gun metal check valve for service connections and branch lines. Swing-type disc for low pressure drop. ZEST branded with threaded BSP ends.',
    specs: ['Sizes: 15 mm – 80 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-check-valve.jpg',
  },
  {
    name: 'Gun Metal Horizontal Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty horizontal check valve manufactured to IS:778 standard. Designed for high-pressure water supply, fire-fighting, and industrial applications.',
    specs: ['Sizes: 25 mm – 150 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-horizontal-check-valve.jpg',
  },
  {
    name: 'Gun Metal Vertical Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Vertical lift check valve in gun metal LTB2 for riser pipe installations. Gravity-assisted disc closure prevents backflow in vertical pipelines.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-vertical-check-valve.jpg',
  },
  {
    name: 'Gun Metal Horizontal O-Ring Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Horizontal check valve with O-ring seal technology for enhanced leak-tightness. Ideal for waterworks and fire protection systems.',
    specs: ['Sizes: 25 mm – 100 mm', 'Seal: O-Ring', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/horizontal-oring-valve.jpg',
  },
  {
    name: 'Gun Metal Vertical O-Ring Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Vertical check valve with O-ring sealing for enhanced leak prevention in riser installations. Suitable for water supply and fire protection systems.',
    specs: ['Sizes: 25 mm – 80 mm', 'Seal: O-Ring', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-vertical-oring.jpg',
  },
  {
    name: 'Gun Metal Flanged Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Flanged-end gun metal check valve for large-diameter pipeline installations. Bolted bonnet allows in-line maintenance. For waterworks, pumping stations, and fire mains.',
    specs: ['Sizes: 50 mm – 200 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778 / IS:5312'],
    image: '/images/products/gun-metal-check-valve-flanged.jpg',
  },
  {
    name: 'Gun Metal Angle Valve',
    category: 'Gun Metal Valves',
    desc: 'Gun metal angle valve for 90-degree flow direction change. Ideal for fire hydrant connections, boiler installations, and high-pressure industrial piping.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Connection: Screwed BSP'],
    image: '/images/products/gun-metal-angle-valve.jpg',
  },
  {
    name: 'Gun Metal Gate Valve',
    category: 'Gun Metal Valves',
    desc: 'Rugged gun metal gate valve for municipal water supply and distribution networks. Non-rising stem with hand wheel operation. Flanged or screwed ends.',
    specs: ['Sizes: 25 mm – 150 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Ends: Flanged / Screwed'],
    image: '/images/products/gun-metal-gate-valve.jpg',
  },
  {
    name: 'Gun Metal Ball Valve',
    category: 'Gun Metal Valves',
    desc: 'Full bore gun metal ball valve for high-pressure industrial and marine applications. Quarter-turn operation with blow-out proof stem and PTFE seats.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Seat: PTFE'],
    image: '/images/products/gun-metal-ball-valve.jpg',
  },
  {
    name: 'Gun Metal Wheel Valve',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty gun metal wheel valve for industrial and marine applications. Hand wheel operated globe-type design for precise flow throttling.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gun-metal-wheel-valve.jpg',
  },
  {
    name: 'Gun Metal Regulating Valve',
    category: 'Gun Metal Valves',
    desc: 'Precision gun metal regulating valve for accurate flow control and throttling. Globe-type design with fine adjustment capability for stable downstream flow.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gunmetal-regulating-valve.jpg',
  },
  {
    name: 'Gun Metal Pressure Reducing Valve',
    category: 'Gun Metal Valves',
    desc: 'Adjustable pressure reducing valve in gun metal for downstream pressure regulation. Diaphragm-operated with adjustable spring setting.',
    specs: ['Sizes: 15 mm – 50 mm', 'Inlet: Up to 25 bar', 'Material: Gun Metal LTB2', 'Outlet: 1–6 bar adjustable'],
    image: '/images/products/gun-metal-pressure-reducing-valve.jpg',
  },
  {
    name: 'Gun Metal Tanker Valve',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty gun metal tanker valve for water tanker and storage tank applications. Quick-opening lever operation with large flow capacity.',
    specs: ['Sizes: 50 mm – 100 mm', 'Pressure: PN10 / PN16', 'Material: Gun Metal LTB2', 'Operation: Lever'],
    image: '/images/products/gun-metal-tanker-valve.jpg',
  },
  {
    name: 'Gun Metal Foot Valve',
    category: 'Gun Metal Valves',
    desc: 'Gun metal foot valve with strainer for pump suction lines. Prevents loss of prime in centrifugal pump installations. Heavy-duty construction for bore well and sump use.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN10 / PN16', 'Material: Gun Metal LTB2', 'Type: Flanged / Screwed'],
    image: '/images/products/gun-metal-foot-valve.jpg',
  },
  {
    name: 'Gun Metal Union Cap',
    category: 'Gun Metal Valves',
    desc: 'Precision-machined gun metal union cap for pipeline end closure and maintenance access. Three-piece design for easy disassembly.',
    specs: ['Sizes: 15 mm – 100 mm', 'Material: Gun Metal LTB2', 'Thread: BSP', 'Seal: Metal-to-Metal'],
    image: '/images/products/gun-metal-union-cap.jpg',
  },
  {
    name: 'Gun Metal Bib Ferrule Valve',
    category: 'Gun Metal Valves',
    desc: 'Combined bib and ferrule valve in gun metal for compact service connections. Integrates shut-off and metering functions in a single unit.',
    specs: ['Sizes: 15 mm & 20 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gun-metal-bib-ferrule-valve.jpg',
  },
  {
    name: 'Gun Metal Ferrule Cock',
    category: 'Gun Metal Cocks',
    desc: 'Precision gun metal ferrule cock for water meter connections and service line shut-off. Tamper-proof design with lock-shield option for utility installations.',
    specs: ['Sizes: 15 mm – 25 mm', 'Operation: Quarter Turn', 'Material: Gun Metal LTB2', 'Standard: IS:2692'],
    image: '/images/products/gun-metal-ferrule-cock.jpg',
  },
  {
    name: 'Gun Metal Flush Cock',
    category: 'Gun Metal Cocks',
    desc: 'Self-closing gun metal flush cock for urinal and WC flushing systems. Adjustable flow rate with time-delay shut-off for water conservation.',
    specs: ['Sizes: 25 mm & 32 mm', 'Type: Self-Closing', 'Material: Gun Metal LTB2', 'Flow: Adjustable'],
    image: '/images/products/gun-metal-flush-cock.jpg',
  },
  {
    name: 'Gun Metal Main Cock',
    category: 'Gun Metal Cocks',
    desc: 'Robust gun metal main cock for mains water supply isolation. For underground and above-ground service connections with corrosion-resistant construction.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gun-metal-main-cock.jpg',
  },
  {
    name: 'Brass Wheel Valve',
    category: 'Brass Valves',
    desc: 'Precision brass wheel valve for flow regulation in plumbing and industrial pipelines. Hand wheel operated with rising stem for visual position indication.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16 / PN25', 'Material: IS:319 Brass', 'Thread: BSP / NPT'],
    image: '/images/products/brass-wheel-valve.jpg',
  },
  {
    name: 'Brass Bib Cock',
    category: 'Brass Cocks',
    desc: 'Durable brass bib cock for outdoor and utility plumbing connections. Hose union type with wall-mount flange. Chrome or natural brass finish.',
    specs: ['Sizes: 15 mm & 20 mm', 'Finish: Chrome / Natural', 'Material: IS:319 Brass', 'Type: Hose Union'],
    image: '/images/products/brass-bib-cock.jpg',
  },
  {
    name: 'Brass Gate Valve',
    category: 'Brass Valves',
    desc: 'Heavy-duty brass gate valve for full-bore isolation in plumbing, water supply, and industrial piping systems. Rising stem with hand wheel operation.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16 / PN25', 'Material: IS:319 Brass', 'Thread: BSP / NPT'],
    image: '/images/products/brass-gate-valve.jpg',
  },
  {
    name: 'Brass Ball Valve',
    category: 'Brass Valves',
    desc: 'Full-bore brass ball valve with quarter-turn lever operation. Chrome-plated ball with PTFE seats ensures leak-free shut-off in water and gas systems.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass', 'Seat: PTFE'],
    image: '/images/products/brass-ball-valve.jpg',
  },
  {
    name: 'Brass Angle Valve',
    category: 'Brass Valves',
    desc: 'Precision brass angle valve for 90-degree flow direction change in plumbing and heating installations. Wall-mount or in-line configuration.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Thread: BSP'],
    image: '/images/products/brass-angle-valve.jpg',
  },
  {
    name: 'Brass Check Valve',
    category: 'Brass Valves',
    desc: 'Compact brass spring-loaded check valve for backflow prevention. Low cracking pressure with silent closing action for residential and commercial plumbing.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Type: Spring-Loaded'],
    image: '/images/products/brass-check-valve.jpg',
  },
  {
    name: 'Brass Stop Cock',
    category: 'Brass Cocks',
    desc: 'Premium brass stop cock for mains water isolation. Compression or screwed ends with chrome or natural brass finish. Suitable for underground and above-ground installations.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Finish: Chrome / Natural'],
    image: '/images/products/brass-stopcock.jpg',
  },
  {
    name: 'Brass Union',
    category: 'Brass Valves',
    desc: 'Three-piece brass union for easy pipeline disassembly and maintenance. Precision machined threads with metal-to-metal or fibre washer seal.',
    specs: ['Sizes: 15 mm – 50 mm', 'Material: IS:319 Brass', 'Thread: BSP / NPT', 'Seal: Metal / Fibre'],
    image: '/images/products/brass-union.jpg',
  },
  {
    name: 'Brass Fittings Assortment',
    category: 'Brass Valves',
    desc: 'Complete range of brass pipe fittings including elbows, tees, reducers, nipples, and bushings. Precision threaded to BSP and NPT standards.',
    specs: ['Sizes: 6 mm – 50 mm', 'Material: IS:319 Brass', 'Thread: BSP / NPT', 'Types: Elbows, Tees, Reducers'],
    image: '/images/products/brass-fittings.jpg',
  },
  {
    name: 'Gun Metal Football Valve',
    category: 'Gun Metal Valves',
    desc: 'Traditional football-type gun metal valve for water distribution networks. Robust spherical body design with hand wheel operation for reliable isolation.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gunmetal-football-valve-im.jpg',
  },
  {
    name: 'Industrial Angle Valve',
    category: 'Brass Valves',
    desc: 'Heavy-duty industrial angle valve for high-pressure process piping. Forged brass body with stainless steel trim for extended service life.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass', 'Trim: SS'],
    image: '/images/products/industrial-angle-valve-ti.jpg',
  },
  {
    name: 'Industrial Ball Valve',
    category: 'Brass Valves',
    desc: 'Heavy-duty industrial brass ball valve for process piping and utility systems. Full-bore design minimises pressure drop. Suitable for water, gas, and compressed air.',
    specs: ['Sizes: 15 mm – 100 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass', 'Seat: PTFE / Reinforced'],
    image: '/images/products/industrial-ball-valve-im.jpg',
  },
  {
    name: 'Gun Metal Ferrule Valve',
    category: 'Gun Metal Valves',
    desc: 'Precision-machined gun metal ferrule valve for water meter installations and service line connections. Tamper-proof spindle with locking arrangement for utility use.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:2692'],
    image: '/images/products/gunmetal-ferrule-valve-im.jpg',
  },
  {
    name: 'Gun Metal Vertical Check Valve (Heavy Pattern)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-pattern vertical check valve with reinforced body and guided disc for high-rise water supply systems. Enhanced seat design for positive sealing at low differential pressures.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gunmetal-vertical-check-im.jpg',
  },
  {
    name: 'Gun Metal Ball Valve (Industrial)',
    category: 'Gun Metal Valves',
    desc: 'Industrial-grade gun metal ball valve with blow-out proof stem and anti-static device. Full bore design for marine, fire protection, and heavy industrial applications.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: Gun Metal LTB2', 'Seat: PTFE'],
    image: '/images/products/gunmetal-ball-valve-im.jpg',
  },
  {
    name: 'Brass Bib Cock (Heavy Duty)',
    category: 'Brass Cocks',
    desc: 'Heavy-duty brass bib cock with reinforced body for commercial and industrial plumbing. Extended spindle with T-head handle for easy operation. Wall-mount with backplate.',
    specs: ['Sizes: 15 mm & 20 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Finish: Chrome / Natural'],
    image: '/images/products/brass-bibcock.jpg',
  },
  {
    name: 'Ball Gate Valve',
    category: 'Gun Metal Valves',
    desc: 'Combined ball-gate valve in gun metal for versatile pipeline isolation. Compact design integrates ball valve mechanism with gate valve body for space-constrained installations.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Operation: Hand Wheel'],
    image: '/images/products/ball-gate-valve-im.jpg',
  },
  {
    name: 'Gun Metal Angle Valve (Heavy Pattern)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-pattern gun metal angle valve for fire hydrant risers and boiler connections. Reinforced body with integral strainer option for demanding service conditions.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gun-metal-angle-valve-im.jpg',
  },
  {
    name: 'Gun Metal Ball Valve (Marine Grade)',
    category: 'Gun Metal Valves',
    desc: 'Marine-grade gun metal ball valve tested for seawater applications. Quarter-turn lever operation with corrosion-resistant internals for shipboard and offshore installations.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Seat: PTFE / Delrin'],
    image: '/images/products/gun-metal-ball-valve-im.jpg',
  },
  {
    name: 'Gun Metal Ferrule Valve (Utility Pattern)',
    category: 'Gun Metal Valves',
    desc: 'Utility-pattern gun metal ferrule valve with lock-shield spindle for water authority installations. Tamper-proof locking cap prevents unauthorised operation.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:2692'],
    image: '/images/products/gun-metal-ferrule-valve-im2.jpg',
  },
  {
    name: 'Gun Metal Vertical Check Valve (Utility)',
    category: 'Gun Metal Valves',
    desc: 'Utility-grade vertical check valve with reinforced disc guide for consistent backflow prevention. Suitable for water supply risers and pump discharge lines.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-vertical-check-im2.jpg',
  },
  {
    name: 'Brass Ball Valve (Economy)',
    category: 'Brass Valves',
    desc: 'Economy-series brass ball valve for residential and light commercial plumbing. Nickel-plated body with chrome ball and PTFE seats for reliable shut-off.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16 / PN25', 'Material: IS:319 Brass', 'Seat: PTFE'],
    image: '/images/products/brass-ball-valve-im2.jpg',
  },
  {
    name: 'Gun Metal Football Valve (Heavy)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty football-type gun metal valve for underground water mains. Spherical body provides full bore flow with minimal turbulence. Hand wheel or key operation.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-football-valve-im2.jpg',
  },
  {
    name: 'Industrial Ball Valve (Heavy Duty)',
    category: 'Brass Valves',
    desc: 'Heavy-duty industrial ball valve for chemical process and utility applications. Reinforced body with anti-blow-out stem and fire-safe design certification.',
    specs: ['Sizes: 15 mm – 100 mm', 'Pressure: PN40', 'Material: IS:319 Brass / Gun Metal', 'Seat: Reinforced PTFE'],
    image: '/images/products/industrial-ball-valve-im2.jpg',
  },
  {
    name: 'Industrial Angle Valve (Forged)',
    category: 'Brass Valves',
    desc: 'Forged brass industrial angle valve with fine-finish machining for high-pressure steam and process piping. Integral backseat and replaceable disc for extended service life.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Forged Brass', 'Trim: SS'],
    image: '/images/products/industrial-angle-valve-ti2.jpg',
  },
  {
    name: 'Industrial Angle Valve (Fine Finish)',
    category: 'Brass Valves',
    desc: 'Fine-finish industrial angle valve with precision-machined body and alloy internals. Designed for high-cycle industrial applications with superior corrosion resistance.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass Alloy', 'Finish: Fine Machined'],
    image: '/images/products/industrial-angle-valve-fp.jpg',
  },
  {
    name: 'Gun Metal Horizontal O-Ring Valve (Heavy Pattern)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-pattern horizontal check valve with O-ring seal for enhanced leak prevention. Reinforced body design for high-pressure municipal water and fire protection systems.',
    specs: ['Sizes: 25 mm – 100 mm', 'Seal: O-Ring', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/horizontal-oring-valve-ti.jpg',
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
            46 premium brass and gun metal products — valves, cocks, and fittings manufactured
            to IS:778, IS:319, and BS:5154 standards in our Jalandhar facility since 1998.
          </p>
        </div>
      </section>

      {/* Category pills */}
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.name} className="card group overflow-hidden">
                <div className="relative -mx-6 -mt-6 mb-4 h-56 bg-white">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-brass/10 px-3 py-1 font-heading text-xs font-semibold text-brass">
                    {p.category}
                  </span>
                  <h2 className="mt-3 font-heading text-lg font-bold text-navy">
                    {p.name}
                  </h2>
                </div>

                <p className="mt-2 font-body text-sm text-gray-600">{p.desc}</p>

                <div className="mt-4 rounded-lg bg-gray-50 p-3">
                  <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-navy">
                    Specifications
                  </h3>
                  <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-body text-xs text-gray-600">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-start gap-1.5">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brass" aria-hidden="true" />
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
            We manufacture brass and gun metal products to your exact requirements.
            Contact us for custom orders, OEM manufacturing, and bulk pricing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
              Request a Quote
            </Link>
            <a href="tel:+911812345678" className="btn-outline text-lg !px-10 !py-4 !border-white/30 !text-white hover:!bg-white/10">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
