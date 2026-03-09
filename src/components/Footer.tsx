import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg text-brass mb-3">Zest Industries</h3>
          <p className="text-gray-300 text-sm">Leading manufacturer of brass valves & fittings since 1998. Quality products trusted across India and the UAE.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-brass mb-3">Quick Links</h3>
          <nav aria-label="Footer navigation" className="flex flex-col gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-brass transition-colors">Home</Link>
            <Link href="/products" className="hover:text-brass transition-colors">Products</Link>
            <Link href="/about" className="hover:text-brass transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-brass transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-bold text-lg text-brass mb-3">Contact</h3>
          <address className="text-sm text-gray-300 not-italic space-y-1">
            <p>Industrial Area, Jalandhar</p>
            <p>Punjab 144001, India</p>
            <p>Phone: <a href="tel:+911812345678" className="hover:text-brass">+91-181-234-5678</a></p>
            <p>Email: <a href="mailto:info@zestvalves.com" className="hover:text-brass">info@zestvalves.com</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-navy-light text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Zest Industries. All rights reserved.
      </div>
    </footer>
  )
}
