'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white">
            AV
          </span>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Ari Vale</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-stone-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="#work" className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-stone-900">
            View work
          </Link>
          <Link href="#contact" className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-700">
            Book a call
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-full border border-stone-300 p-2 md:hidden"
          onClick={() => setOpen((state) => !state)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-stone-200 bg-stone-50 md:hidden"
          >
            <div className="container-shell flex flex-col gap-4 py-4 text-sm text-stone-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-stone-900"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-stone-900 px-4 py-2 text-center font-semibold text-white"
              >
                Book a call
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
