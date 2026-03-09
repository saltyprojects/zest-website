import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zest Industries — Brass Valves & Fittings Manufacturer | Jalandhar, India',
  description:
    'Premium brass valves, cocks, fittings, gun metal check valves & unions. Manufacturing excellence since 1998 from Jalandhar, Punjab. Trusted supplier to India & UAE.',
}

/* ── Data ─────────────────────────────────────────── */

const products = [
  {
    name: 'Brass Valves',
    desc: 'High-quality brass ball valves, gate valves, and globe valves for industrial and domestic use.',
    icon: '/icons/valve.svg',
    emoji: '🔧',
  },
  {
    name: 'Brass Cocks',
    desc: 'Precision-engineered brass cocks for reliable flow control in plumbing systems.',
    icon: '/icons/cock.svg',
    emoji: '🚰',
  },
  {
    name: 'Brass Fittings',
    desc: 'Complete range of brass fittings including elbows, tees, nipples, and connectors.',
    icon: '/icons/fitting.svg',
    emoji: '⚙️',
  },
  {
    name: 'Gun Metal Check Valves',
    desc: 'Heavy-duty gun metal check valves designed for high-pressure applications.',
    icon: '/icons/check.svg',
    emoji: '🛡️',
  },
  {
    name: 'Brass Unions',
    desc: 'Premium brass unions for easy pipe connections and maintenance.',
    icon: '/icons/union.svg',
    emoji: '🔗',
  },
]

const stats = [
  { value: '25+', label: 'Years of Excellence', suffix: '' },
  { value: '5,000+', label: 'Products Delivered', suffix: '' },
  { value: '500+', label: 'Happy Clients', suffix: '' },
  { value: '2', label: 'Countries Served', suffix: '' },
]

const certifications = ['ISO 9001:2015', 'IS 778', 'BS 5154', 'DIN 3357']

const testimonials = [
  {
    quote: 'Zest Industries has been our trusted brass valve supplier for over 10 years. Consistent quality and reliable delivery every time.',
    author: 'Rajesh Kumar',
    role: 'Procurement Head, Delhi Plumbing Works',
  },
  {
    quote: 'Their gun metal check valves perform exceptionally well in our high-pressure systems. We have had zero failures in 5 years.',
    author: 'Ahmed Al-Rashid',
    role: 'Operations Manager, Dubai Industrial Supplies',
  },
  {
    quote: 'Excellent product range and competitive pricing. Zest Industries is our go-to manufacturer for all brass fittings requirements.',
    author: 'Suresh Patel',
    role: 'Director, Gujarat Valve Distributors',
  },
]

const whyChoose = [
  {
    title: 'Quality Assured',
    desc: 'Every product undergoes rigorous quality testing — pressure tested, dimensionally inspected, and material verified.',
    emoji: '✅',
  },
  {
    title: 'Competitive Pricing',
    desc: 'Direct manufacturer pricing with no middlemen. Best value for bulk and recurring orders.',
    emoji: '💰',
  },
  {
    title: 'Timely Delivery',
    desc: 'Efficient manufacturing and logistics for on-time delivery across India and UAE.',
    emoji: '🚚',
  },
  {
    title: 'Custom Manufacturing',
    desc: 'OEM capabilities — we manufacture to your exact drawings and specifications.',
    emoji: '📐',
  },
  {
    title: '25+ Years Experience',
    desc: 'Quarter-century of brass manufacturing expertise from the industrial heart of India.',
    emoji: '🏭',
  },
  {
    title: 'Export Ready',
    desc: 'International standard compliance and export documentation for seamless global trade.',
    emoji: '🌍',
  },
]

/* ── Page ─────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-navy" aria-labelledby="hero-heading">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-dark/95" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            {/* Trust badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-brass animate-pulse" aria-hidden="true" />
              <span className="font-heading text-sm font-semibold uppercase tracking-wider text-brass">
                Established 1998 · Jalandhar, India
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-balance text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            >
              Premium{' '}
              <span className="text-brass">Brass Valves</span> &amp; Fittings
              Manufacturer
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl" style={{ maxWidth: '60ch' }}>
              Zest Industries delivers precision-engineered brass valves, cocks, fittings,
              and unions trusted by industries across India and the UAE for over 25&nbsp;years.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary text-lg !px-10 !py-4">
                View Products
              </Link>
              <Link href="/contact" className="btn-outline text-lg !px-10 !py-4 !border-white/30 !text-white hover:!bg-white/10">
                Get a Quote
              </Link>
            </div>

            {/* Inline trust signals */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
              {certifications.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-brass" aria-hidden="true">✓</span>
                  <span>{c} Certified</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-brass" aria-label="Company statistics">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-3xl font-bold text-white md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 font-body text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRODUCT SHOWCASE ─── */}
      <section className="bg-gray-50 py-20 sm:py-24" aria-labelledby="products-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="products-heading" className="section-heading">
            Our Product Range
          </h2>
          <p className="section-subheading">
            Comprehensive range of brass valves and fittings manufactured to the highest
            international quality standards.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.name} className="card group">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brass/10 text-3xl transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {p.emoji}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">{p.name}</h3>
                <p className="mt-2 font-body text-gray-600">{p.desc}</p>
                <Link
                  href="/products"
                  className="mt-4 inline-flex min-h-touch items-center font-heading text-sm font-semibold text-brass transition-colors duration-150 hover:text-brass-dark"
                  aria-label={`Learn more about ${p.name}`}
                >
                  Learn More
                  <span className="ml-1 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 sm:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="why-heading" className="section-heading">
            Why Choose Zest Industries?
          </h2>
          <p className="section-subheading">
            Trusted by 500+ clients across India and the UAE for quality, reliability, and value.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-3xl" aria-hidden="true">
                  {f.emoji}
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 font-body text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS / SOCIAL PROOF ─── */}
      <section className="bg-gray-50 py-20 sm:py-24" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-heading" className="section-heading">
            Trusted by Industry Leaders
          </h2>
          <p className="section-subheading">
            What our clients say about working with Zest Industries.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="card flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1 text-brass" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-gray-600 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-gray-100 pt-4">
                  <cite className="not-italic">
                    <div className="font-heading text-sm font-bold text-navy">{t.author}</div>
                    <div className="font-body text-xs text-gray-500">{t.role}</div>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-navy py-20 sm:py-24" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="text-balance font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to Source Quality Brass Products?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-300">
            Get in touch with our team for bulk orders, custom specifications, and competitive quotes.
            We respond within 24&nbsp;hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
              Contact Us Today
            </Link>
            <a
              href="tel:+911812345678"
              className="btn-outline text-lg !px-10 !py-4 !border-white/30 !text-white hover:!bg-white/10"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
