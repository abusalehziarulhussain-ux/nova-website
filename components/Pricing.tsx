'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Ari translated a messy product story into a clear experience. The result felt premium, easier to understand, and far more convincing to customers.',
    name: 'Maya Chen',
    role: 'CEO, Northstar',
  },
  {
    quote:
      'The design system was elegant, practical, and immediately useful. We shipped faster and our team finally had a common language for product decisions.',
    name: 'Julian Brooks',
    role: 'Product Lead, Pillar Labs',
  },
  {
    quote:
      'From strategy to front-end implementation, everything felt considered. We saw stronger engagement and a clearer narrative almost immediately.',
    name: 'Elena Ross',
    role: 'Founder, Bloom Studio',
  },
];

export default function Pricing() {
  return (
    <section id="testimonials" className="section-shell">
      <div className="container-shell">
        <div id="approach" className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Approach</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-stone-900 md:text-5xl">
            Thoughtful systems, minimal noise, clear outcomes.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border border-stone-200 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-5 text-3xl text-stone-900">“</div>
              <p className="text-base leading-7 text-stone-600">{item.quote}</p>
              <footer className="mt-6 border-t border-stone-200 pt-4">
                <div className="font-semibold text-stone-900">{item.name}</div>
                <div className="text-sm text-stone-500">{item.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
