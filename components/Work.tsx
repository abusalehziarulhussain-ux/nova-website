'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    name: 'Northstar',
    category: 'SaaS redesign',
    summary: 'Reframed a B2B product from feature-heavy to product-led, raising demo requests and improving product comprehension across onboarding.',
    result: '+64% demo conversion',
  },
  {
    name: 'Bloom Studio',
    category: 'Brand system',
    summary: 'Developed a refined visual identity and experience architecture for a creative studio launching a premium offering.',
    result: '3x retention lift',
  },
  {
    name: 'Pillar Labs',
    category: 'Web platform',
    summary: 'Built a cleaner, faster marketing site and product narrative for a research company entering a new market segment.',
    result: '2.5x lead quality',
  },
];

export default function Work() {
  return (
    <section id="work" className="section-shell bg-stone-100">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-black tracking-[-0.06em] text-stone-900 md:text-5xl">Selected work.</h2>
          <p className="max-w-xl text-base leading-7 text-stone-600">
            A few projects where design clarity and product thinking improved adoption, trust, and growth.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-[28px] border border-stone-200 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500">{study.category}</span>
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-stone-900">{study.name}</h3>
              <p className="text-base leading-7 text-stone-600">{study.summary}</p>

              <div className="mt-6 border-t border-stone-200 pt-4 text-sm font-semibold uppercase tracking-[0.14em] text-stone-700">
                {study.result}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
