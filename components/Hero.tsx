'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
  { value: '8+', label: 'years crafting interfaces' },
  { value: '42', label: 'products shipped' },
  { value: '96%', label: 'client retention rate' },
];

export default function Hero() {
  return (
    <section id="top" className="section-shell pt-16">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for select projects
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-none tracking-[-0.07em] text-stone-900 md:text-6xl lg:text-7xl">
            Designer + developer for <span className="text-stone-500">clarity</span> and <span className="text-stone-900">momentum</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            I design thoughtful digital experiences and build high-performing product interfaces for founders, teams, and ambitious brands.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#work" className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-stone-700">
              View projects
            </Link>
            <Link href="#contact" className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-900 transition hover:border-stone-900">
              Book a consult
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-stone-600">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-stone-900">{stat.value}</div>
                <div className="mt-1 text-sm">{stat.label}</div>
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
          <div className="absolute inset-0 rounded-[28px] border border-stone-200 bg-white shadow-[0_28px_70px_rgba(0,0,0,0.08)]" />
          <div className="absolute inset-5 rounded-[22px] border border-stone-200 bg-stone-100">
            <div className="flex gap-2 border-b border-stone-200 p-4">
              <span className="h-2.5 w-2.5 rounded-full bg-stone-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-400" />
            </div>

            <div className="grid h-[calc(100%-56px)] grid-cols-[1.35fr_0.65fr]">
              <div className="border-r border-stone-200 p-5">
                <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 p-4 text-white">
                  <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-stone-300">
                    <span>Focus</span>
                    <span>Q2</span>
                  </div>
                  <div className="h-28 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))] p-3">
                    <div className="flex h-full items-end gap-2">
                      {[38,58,48,72,62,88,92].map((height, index) => (
                        <span
                          key={index}
                          className="w-full rounded-t-md bg-gradient-to-t from-emerald-400 to-white/80"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-stone-500">Reach</div>
                    <div className="mt-3 text-2xl font-bold text-stone-900">24k</div>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-stone-500">ROI</div>
                    <div className="mt-3 text-2xl font-bold text-stone-900">+41%</div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-900">Latest</h3>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-900" />
                    Product design
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    UX strategy
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    Frontend dev
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
