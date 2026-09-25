'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-28">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[30px] border border-white/10 bg-gradient-to-r from-blue/10 via-white/[0.02] to-accent/10 p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.06em] md:text-5xl">Let’s build something remarkable.</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
                Tell us what you’re launching and we’ll help shape a digital presence that feels premium, clear, and ready to grow.
              </p>
            </div>

            <form className="glass-panel rounded-[24px] p-5">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-white/10 bg-[#0d1529] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue/60"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-xl border border-white/10 bg-[#0d1529] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue/60"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your project"
                  className="resize-none rounded-xl border border-white/10 bg-[#0d1529] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue/60"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-blue to-accent px-5 py-3 font-semibold text-[#08101d] shadow-glow"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
