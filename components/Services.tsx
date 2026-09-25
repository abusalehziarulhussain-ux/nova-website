'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Figma, Palette, Workflow, Code2 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand & UX strategy',
    text: 'Positioning, messaging, and product thinking that help teams sell clearly and design confidently.',
  },
  {
    icon: Figma,
    title: 'Interface design',
    text: 'High-end product and marketing experiences shaped around clarity, usability, and conversion.',
  },
  {
    icon: Code2,
    title: 'Frontend development',
    text: 'Responsive, performant interfaces built in modern stacks with a polished visual language.',
  },
  {
    icon: Workflow,
    title: 'Design systems',
    text: 'Reusable components, tokens, and process systems that scale across teams and launches.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-stone-900 md:text-5xl">
            Strategy, design, and front-end thinking in one partner.
          </h2>
          <p className="max-w-xl text-base leading-7 text-stone-600">
            I help teams simplify complexity, craft better experiences, and launch confidently.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-stone-200 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-stone-900">{service.title}</h3>
                <p className="text-base leading-7 text-stone-600">{service.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-700">
                  Learn more <ArrowRight size={16} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
