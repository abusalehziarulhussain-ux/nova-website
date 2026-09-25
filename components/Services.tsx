'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, MonitorSmartphone, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Brand Strategy',
    text: 'Clarify your positioning, sharpen your message, and build a story customers remember and trust.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web Design',
    text: 'Elegant, responsive experiences built to convert visitors into leads, customers, and returning brand advocates.',
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    text: 'Launch campaigns and landing pages designed to turn attention into measurable results and sustained growth.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-4xl font-black tracking-[-0.06em] md:text-5xl">
            Everything your brand needs to grow.
          </h2>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            From positioning and design to optimization and launch, we build a digital foundation
            that supports serious growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="glass-panel rounded-3xl p-7 shadow-glow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/20 to-accent/20 text-blue">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
                <p className="text-base leading-7 text-slate-300">{service.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80">
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
