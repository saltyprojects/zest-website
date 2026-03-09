import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zest Industries — Brass Valves & Fittings Manufacturer | Jalandhar, India',
  description: 'Premium brass valves, cocks, fittings, gun metal check valves & unions. Manufacturing excellence since 1998 from Jalandhar, Punjab. Trusted supplier to India & UAE.',
}

const products = [
  { name: 'Brass Valves', desc: 'High-quality brass ball valves, gate valves, and globe valves for industrial and domestic use.', icon: '🔧' },
  { name: 'Brass Cocks', desc: 'Precision-engineered brass cocks for reliable flow control in plumbing systems.', icon: '🚰' },
  { name: 'Brass Fittings', desc: 'Complete range of brass fittings including elbows, tees, nipples, and connectors.', icon: '⚙️' },
  { name: 'Gun Metal Check Valves', desc: 'Heavy-duty gun metal check valves designed for high-pressure applications.', icon: '🛡️' },
  { name: 'Brass Unions', desc: 'Premium brass unions for easy pipe connections and maintenance.', icon: '🔗' },
]

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '5000+', label: 'Products Delivered' },
  { value: '500+', label: 'Happy Clients' },
  { value: '2', label: 'Countries Served' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-brass font-semibold mb-2 tracking-wider uppercase text-sm">Established 1998 • Jalandhar, India</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium <span className="text-brass">Brass Valves</span> & Fittings Manufacturer
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Zest Industries delivers precision-engineered brass valves, cocks, fittings, and unions trusted by industries across India and the UAE for over 25 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-brass hover:bg-brass-dark text-white font-bold px-8 py-3 rounded-lg transition-colors">
                View Products
              </Link>
              <Link href="/contact" className="border-2 border-brass text-brass hover:bg-brass hover:text-white font-bold px-8 py-3 rounded-lg transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brass text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
              <div className="text-sm mt-1 opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-gray-50" id="products">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">Our Product Range</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Comprehensive range of brass valves and fittings manufactured to the highest quality standards.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map(p => (
              <div key={p.name} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <Link href="/products" className="text-brass font-semibold hover:underline">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Why Choose Zest Industries?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Quality Assured', desc: 'Every product undergoes rigorous quality testing to meet international standards.', icon: '✅' },
              { title: 'Competitive Pricing', desc: 'Direct manufacturer pricing with no middlemen, ensuring the best value.', icon: '💰' },
              { title: 'Timely Delivery', desc: 'Efficient manufacturing and logistics for on-time delivery across India & UAE.', icon: '🚚' },
            ].map(f => (
              <div key={f.title} className="text-center p-6">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source Quality Brass Products?</h2>
          <p className="text-gray-300 mb-8 text-lg">Get in touch with our team for bulk orders, custom specifications, and competitive quotes.</p>
          <Link href="/contact" className="bg-brass hover:bg-brass-dark text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
