'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
}

const menuItems: MenuItem[] = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <header
      className={[
        'sticky top-0 z-40 w-full transition-colors duration-300',
        scrolled
          ? 'bg-paper/95 backdrop-blur border-b border-rule shadow-sm'
          : 'bg-paper border-b border-transparent',
      ].join(' ')}
    >
      <div className="bb-container flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          onClick={close}
          className="group flex flex-col leading-tight"
          aria-label="Bucktown Bulls Baseball — home"
        >
          <span className="font-(family-name:--font-bebas-neue) text-[1.4rem] md:text-[1.6rem] text-navy tracking-[0.03em]">
            Bucktown Bulls Baseball
          </span>
          <span className="font-(family-name:--font-inter) text-[0.7rem] md:text-[0.75rem] text-stone tracking-[0.22em] uppercase mt-0.5">
            Youth Baseball Organization
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 font-(family-name:--font-inter) text-[0.9rem] tracking-wide">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-ink/80 hover:text-red transition-colors border-b border-transparent hover:border-red pb-0.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded border border-rule px-3 py-2 text-sm text-ink/80 hover:bg-cream"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="font-(family-name:--font-inter)">{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="md:hidden border-t border-rule bg-paper"
        >
          <ul className="bb-container py-3 space-y-1 font-(family-name:--font-inter)">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block px-2 py-3 text-ink/85 hover:bg-cream rounded"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
