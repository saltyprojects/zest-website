'use client'
import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brass rounded-full flex items-center justify-center font-bold text-navy text-lg">Z</div>
          <div>
            <div className="font-bold text-lg leading-tight">Zest Industries</div>
            <div className="text-xs text-brass">Est. 1998 • Jalandhar, India</div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6" aria-label="Main navigation">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="hover:text-brass transition-colors font-medium">{n.label}</Link>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-navy-dark border-t border-navy-light px-4 pb-4" aria-label="Mobile navigation">
          {nav.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 hover:text-brass transition-colors">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  )
}
