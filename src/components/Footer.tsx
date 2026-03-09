import Link from 'next/link'

const footerNav = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

const productLinks = [
  'Brass Valves',
  'Brass Cocks',
  'Brass Fittings',
  'Gun Metal Check Valves',
  'Brass Unions',
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brass font-heading text-lg font-bold text-navy"
                aria-hidden="true"
              >
                Z
              </div>
              <span className="font-heading text-lg font-bold">Zest Industries</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-gray-300" style={{ maxWidth: '30ch' }}>
              Leading manufacturer of brass valves &amp; fittings since 1998. Quality products trusted across India and the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-brass">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-1">
              {footerNav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="inline-flex min-h-touch items-center font-body text-sm text-gray-300 transition-colors duration-150 hover:text-brass"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-brass">
              Products
            </h3>
            <nav aria-label="Product categories" className="flex flex-col gap-1">
              {productLinks.map((p) => (
                <Link
                  key={p}
                  href="/products"
                  className="inline-flex min-h-touch items-center font-body text-sm text-gray-300 transition-colors duration-150 hover:text-brass"
                >
                  {p}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-brass">
              Contact
            </h3>
            <address className="flex flex-col gap-3 font-body text-sm not-italic text-gray-300">
              <div className="flex gap-3">
                <span aria-hidden="true" className="text-brass">📍</span>
                <span>Industrial Area, Jalandhar<br />Punjab 144001, India</span>
              </div>
              <div className="flex gap-3">
                <span aria-hidden="true" className="text-brass">📞</span>
                <a
                  href="tel:+911812345678"
                  className="min-h-touch inline-flex items-center transition-colors duration-150 hover:text-brass"
                >
                  +91-181-234-5678
                </a>
              </div>
              <div className="flex gap-3">
                <span aria-hidden="true" className="text-brass">✉️</span>
                <a
                  href="mailto:info@zestvalves.com"
                  className="min-h-touch inline-flex items-center transition-colors duration-150 hover:text-brass"
                >
                  info@zestvalves.com
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center font-body text-xs text-gray-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Zest Industries. All rights reserved.</p>
          <p>Brass Valves &amp; Fittings Manufacturer — Jalandhar, India</p>
        </div>
      </div>
    </footer>
  )
}
