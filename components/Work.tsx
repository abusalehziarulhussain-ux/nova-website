'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    name: 'Northstar Labs',
    summary: 'Rebranded a B2B SaaS startup and launched a high-clarity landing page that increased demo requests by 64%.',
  },
  {
    name: 'Verve Commerce',
    summary: 'Redesigned their storefront experience to improve onboarding, brand trust, and average order value.',
  },
  {
    name: 'Alora Studio',
    summary: 'Built a premium portfolio presence for a creative consultancy to attract higher-value client work.',
  },
];

export default function Work() {
  return (
    <section id="work" className="section-shell">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-black tracking-[-0.06em] md:text-5xl">Selected wins.</h2>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            We build digital experiences that create trust, generate interest, and help brands launch with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-panel rounded-3xl p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/20 to-accent/20 text-sm font-bold text-white">
                0{index + 1}
              </div>
              <h3 className="mb-3 text-2xl font-semibold">{study.name}</h3>
              <p className="text-base leading-7 text-slate-300">{study.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
