'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
  { value: '120+', label: 'projects launched' },
  { value: '4.9/5', label: 'client satisfaction' },
  { value: '3x', label: 'avg conversion lift' },
];

export default function Hero() {
  return (
    <section id="top" className="section-shell">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(110,231,216,0.9)]" />
            Digital growth for modern brands
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-none tracking-[-0.06em] md:text-6xl lg:text-7xl">
            Build a <span className="gradient-text">bolder</span> digital presence.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We design high-converting websites, digital experiences, and brand systems that help
            startups and growing businesses stand out with clarity and confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#contact" className="rounded-full bg-gradient-to-r from-blue to-accent px-6 py-3 font-semibold text-[#08101d] shadow-glow transition hover:brightness-110">
              Book a Call
            </Link>
            <Link href="#work" className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.08]">
              View Work
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-slate-300">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative min-h-[520px]"
        >
          <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.03] shadow-glow" />
          <div className="absolute inset-5 rounded-[22px] border border-white/10 bg-[#0d1529]">
            <div className="flex gap-2 border-b border-white/10 p-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            </div>

            <div className="grid h-[calc(100%-56px)] grid-cols-[1.35fr_0.65fr]">
              <div className="border-r border-white/10 p-5">
                <div className="h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-blue/20 to-accent/10 p-4">
                  <div className="h-full w-full rounded-xl bg-[linear-gradient(120deg,rgba(124,156,255,0.25),rgba(110,231,216,0.22))]" style={{ clipPath: 'polygon(0% 72%, 15% 65%, 27% 50%, 38% 58%, 55% 30%, 70% 42%, 100% 8%, 100% 100%, 0% 100%)' }} />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-slate-400">Revenue</div>
                    <div className="mt-3 text-2xl font-bold">$86k</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-slate-400">Growth</div>
                    <div className="mt-3 text-2xl font-bold">+38%</div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">Campaign</h3>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                    Website Design
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    Social Ads
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                    Branding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
