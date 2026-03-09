'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Close on Escape
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onKey])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg p-1 transition-opacity duration-150 hover:opacity-90"
          aria-label="Zest Industries — Home"
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brass font-heading text-lg font-bold text-navy"
            aria-hidden="true"
          >
            Z
          </div>
          <div className="hidden sm:block">
            <div className="font-heading text-lg font-bold leading-tight">
              Zest Industries
            </div>
            <div className="text-xs font-medium text-brass">
              Est. 1998 · Jalandhar, India
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {nav.map((n) => {
            const active = pathname === n.href
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`
                  relative min-h-touch min-w-touch flex items-center px-4 py-2 rounded-lg
                  font-heading text-sm font-semibold transition-colors duration-150
                  ${active ? 'text-brass' : 'text-white/90 hover:text-brass hover:bg-white/5'}
                `}
                aria-current={active ? 'page' : undefined}
              >
                {n.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brass" aria-hidden="true" />
                )}
              </Link>
            )
          })}
          <Link href="/contact" className="btn-primary ml-3 text-sm !px-5 !py-2">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button — 44×44 minimum touch target */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors duration-150 hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[60px] z-30 bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            className="fixed left-0 right-0 top-[60px] z-40 animate-fade-in border-t border-white/10 bg-navy-dark px-4 pb-6 pt-2 md:hidden"
            aria-label="Mobile navigation"
          >
            {nav.map((n) => {
              const active = pathname === n.href
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`
                    flex min-h-touch items-center rounded-lg px-4 py-3 font-heading text-base font-semibold
                    transition-colors duration-150
                    ${active ? 'bg-white/10 text-brass' : 'text-white/90 hover:bg-white/5 hover:text-brass'}
                  `}
                  aria-current={active ? 'page' : undefined}
                >
                  {n.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="btn-primary mt-3 w-full text-center"
            >
              Get a Quote
            </Link>
          </nav>
        </>
      )}
    </header>
  )
}
