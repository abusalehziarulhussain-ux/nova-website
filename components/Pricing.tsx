'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$699',
    period: '/ project',
    description: 'Perfect for polishing your online presence.',
    features: ['Landing page design', 'Messaging refinement', 'Responsive layout'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$1,800',
    period: '/ project',
    description: 'For teams that need a premium digital launch.',
    features: ['Full website design', 'Brand positioning', 'Conversion optimization'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '$3,500',
    period: '/ month',
    description: 'Ongoing strategy, design, and performance support.',
    features: ['Marketing funnel support', 'Weekly optimization', 'Creative strategy sprint'],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-shell">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-black tracking-[-0.06em] md:text-5xl">Simple pricing. Real momentum.</h2>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            Choose a plan that matches your stage, then grow with expert strategy and execution behind you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`relative rounded-[28px] border p-7 ${
                plan.featured
                  ? 'border-blue/60 bg-gradient-to-b from-blue/10 to-white/[0.02] shadow-glow'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-blue/30 bg-blue/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Most Popular
                </div>
              )}

              <h3 className="mb-5 text-2xl font-semibold">{plan.name}</h3>
              <div className="mb-3 flex items-end gap-2">
                <span className="text-4xl font-black tracking-[-0.06em]">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-400">{plan.period}</span>
              </div>
              <p className="mb-6 text-slate-300">{plan.description}</p>

              <ul className="space-y-3 text-white">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`mt-8 inline-flex rounded-full px-5 py-3 font-semibold transition ${
                  plan.featured
                    ? 'bg-gradient-to-r from-blue to-accent text-[#08101d] shadow-glow'
                    : 'border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]'
                }`}
              >
                {plan.featured ? 'Book a Call' : 'Get Started'}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
