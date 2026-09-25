'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="#top" className="flex items-center gap-3">
          <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-blue to-accent shadow-[0_0_18px_rgba(124,156,255,0.9)]" />
          <span className="text-sm font-bold tracking-[0.2em] text-white">NOVA</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="#contact" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]">
            Contact
          </Link>
          <Link href="#pricing" className="rounded-full bg-gradient-to-r from-blue to-accent px-4 py-2 text-sm font-semibold text-[#08101d] shadow-glow transition hover:brightness-110">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-full border border-white/10 p-2 md:hidden"
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
            className="border-t border-white/10 bg-[#0b1020] md:hidden"
          >
            <div className="container-shell flex flex-col gap-4 py-4 text-sm text-slate-300">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-blue to-accent px-4 py-2 text-center font-semibold text-[#08101d]"
              >
                Book a Call
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
