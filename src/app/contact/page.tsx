import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Quote for Brass Valves & Fittings',
  description: 'Contact Zest Industries for brass valves, fittings & custom manufacturing quotes. Located in Jalandhar, Punjab, India. Call +91-181-234-5678 or email info@zestvalves.com.',
  alternates: { canonical: 'https://zestvalves.com/contact' },
}

export default function Contact() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zestvalves.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://zestvalves.com/contact' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brass">Home</Link> <span className="mx-2">/</span> <span className="text-brass">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-brass">Us</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl">Get in touch for product inquiries, bulk orders, or custom manufacturing requirements.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
            <form className="space-y-4" action="https://formspree.io/f/placeholder" method="POST">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brass focus:border-brass outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brass focus:border-brass outline-none" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brass focus:border-brass outline-none" placeholder="+91-XXXXX-XXXXX" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select id="subject" name="subject" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brass focus:border-brass outline-none">
                    <option value="">Select a topic</option>
                    <option value="quote">Request a Quote</option>
                    <option value="product">Product Inquiry</option>
                    <option value="custom">Custom Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea id="message" name="message" required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brass focus:border-brass outline-none" placeholder="Tell us about your requirements..." />
              </div>
              <button type="submit" className="bg-brass hover:bg-brass-dark text-white font-bold px-8 py-3 rounded-lg transition-colors w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-navy">Address</h3>
                    <address className="text-gray-600 not-italic">Industrial Area, Jalandhar<br />Punjab 144001, India</address>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-bold text-navy">Phone</h3>
                    <a href="tel:+911812345678" className="text-gray-600 hover:text-brass">+91-181-234-5678</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-bold text-navy">Email</h3>
                    <a href="mailto:info@zestvalves.com" className="text-gray-600 hover:text-brass">info@zestvalves.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h3 className="font-bold text-navy">Business Hours</h3>
                    <p className="text-gray-600">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="font-bold text-navy mb-3">Our Location</h3>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.7!2d75.5!3d31.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74dee4e6d572c80!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zest Industries location - Jalandhar, Punjab, India"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
