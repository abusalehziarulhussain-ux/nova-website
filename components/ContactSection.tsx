'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          project: formData.get('project'),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Something went wrong.');
      }

      setStatus('success');
      setMessage(data.message || 'Thanks! I’ll be in touch shortly.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  return (
    <section id="contact" className="section-shell bg-stone-900 pb-24">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 rounded-[32px] bg-stone-950 p-8 text-white md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Let’s work together</p>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">Have a product, launch, or redesign in mind?</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-stone-300">
              Share a few details and I’ll get back to you with next steps, timeline, and scope.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[24px] border border-stone-700 bg-stone-900/70 p-5">
            <div className="grid gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none placeholder:text-stone-500 focus:border-stone-400"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none placeholder:text-stone-500 focus:border-stone-400"
              />
              <textarea
                name="project"
                rows={5}
                placeholder="Tell me about your project"
                required
                className="resize-none rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none placeholder:text-stone-500 focus:border-stone-400"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-full bg-white px-5 py-3 font-semibold text-stone-900 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending...' : 'Send inquiry'}
              </button>
              {message && (
                <p className={`text-sm ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {message}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
