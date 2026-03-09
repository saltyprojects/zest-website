import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Quote for Brass Valves & Fittings',
  description:
    'Contact Zest Industries for brass valves, fittings & custom manufacturing quotes. Located in Jalandhar, Punjab, India. Call +91-181-234-5678 or email info@zestvalves.com.',
  alternates: { canonical: 'https://zestvalves.com/contact' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zestvalves.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://zestvalves.com/contact' },
  ],
}

const contactInfo = [
  {
    icon: '📍',
    label: 'Address',
    content: 'Industrial Area, Jalandhar',
    sub: 'Punjab 144001, India',
    href: undefined as string | undefined,
  },
  {
    icon: '📞',
    label: 'Phone',
    content: '+91-181-234-5678',
    sub: 'Mon–Sat, 9 AM – 6 PM IST',
    href: 'tel:+911812345678',
  },
  {
    icon: '✉️',
    label: 'Email',
    content: 'info@zestvalves.com',
    sub: 'We respond within 24 hours',
    href: 'mailto:info@zestvalves.com',
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    content: 'Monday – Saturday',
    sub: '9:00 AM – 6:00 PM IST',
    href: undefined as string | undefined,
  },
]

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="contact-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 font-body text-sm text-gray-400" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="transition-colors duration-150 hover:text-brass">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brass" aria-current="page">Contact</li>
            </ol>
          </nav>
          <h1 id="contact-hero" className="text-balance text-4xl font-bold sm:text-5xl">
            Contact <span className="text-brass">Us</span>
          </h1>
          <p className="mt-4 max-w-3xl font-body text-lg text-gray-300">
            Get in touch for product inquiries, bulk orders, or custom manufacturing
            requirements. We respond within 24&nbsp;hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-b border-gray-200 bg-white" aria-label="Contact information overview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4">
            {contactInfo.map((c) => (
              <div key={c.label} className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-center">
                <div className="mb-2 text-2xl" aria-hidden="true">{c.icon}</div>
                <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-navy">
                  {c.label}
                </h2>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-1 block min-h-touch font-body text-sm font-semibold text-brass transition-colors duration-150 hover:text-brass-dark"
                  >
                    {c.content}
                  </a>
                ) : (
                  <p className="mt-1 font-body text-sm font-semibold text-navy">{c.content}</p>
                )}
                <p className="font-body text-xs text-gray-500">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 sm:py-20" aria-labelledby="form-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 id="form-heading" className="font-heading text-2xl font-bold text-navy">
                Send Us a Message
              </h2>
              <p className="mt-2 font-body text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form
                className="mt-8 space-y-5"
                action="https://formspree.io/f/placeholder"
                method="POST"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block font-heading text-sm font-semibold text-navy">
                      Full Name <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1.5 block min-h-touch w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-base outline-none transition-colors duration-150 focus:border-brass focus:ring-2 focus:ring-brass/20"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-heading text-sm font-semibold text-navy">
                      Email <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="mt-1.5 block min-h-touch w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-base outline-none transition-colors duration-150 focus:border-brass focus:ring-2 focus:ring-brass/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block font-heading text-sm font-semibold text-navy">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="mt-1.5 block min-h-touch w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-base outline-none transition-colors duration-150 focus:border-brass focus:ring-2 focus:ring-brass/20"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-heading text-sm font-semibold text-navy">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="mt-1.5 block min-h-touch w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-base outline-none transition-colors duration-150 focus:border-brass focus:ring-2 focus:ring-brass/20"
                    >
                      <option value="">Select a topic</option>
                      <option value="quote">Request a Quote</option>
                      <option value="product">Product Inquiry</option>
                      <option value="custom">Custom Manufacturing</option>
                      <option value="export">Export / UAE Orders</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-heading text-sm font-semibold text-navy">
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 block w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-base outline-none transition-colors duration-150 focus:border-brass focus:ring-2 focus:ring-brass/20"
                    placeholder="Tell us about your requirements — products, quantities, specifications..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-lg sm:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map + extra info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy">Our Location</h2>
                <p className="mt-2 font-body text-gray-600">
                  Visit our manufacturing facility in Jalandhar, the brass capital of India.
                </p>
              </div>

              {/* Map — reserved height to prevent CLS */}
              <div className="overflow-hidden rounded-xl border border-gray-200" style={{ height: 350 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.7!2d75.5!3d31.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74dee4e6d572c80!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zest Industries location — Jalandhar, Punjab, India"
                />
              </div>

              {/* Additional contact details */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-heading text-lg font-bold text-navy">
                  Serving India &amp; UAE
                </h3>
                <p className="mt-2 font-body text-sm text-gray-600">
                  We supply brass valves and fittings across India with specialized export
                  services to Dubai and the UAE. Our logistics team ensures timely delivery
                  with complete export documentation.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['India', 'Dubai', 'Abu Dhabi', 'Sharjah', 'UAE'].map((loc) => (
                    <span
                      key={loc}
                      className="rounded-full bg-brass/10 px-3 py-1 font-heading text-xs font-semibold text-brass"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="contact-cta">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="contact-cta" className="text-balance font-heading text-3xl font-bold md:text-4xl">
            Prefer to Talk Directly?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-300">
            Call us for immediate assistance with orders, product specifications, or pricing.
          </p>
          <a href="tel:+911812345678" className="btn-primary mt-8 text-lg !px-10 !py-4">
            📞 Call +91-181-234-5678
          </a>
        </div>
      </section>
    </>
  )
}
