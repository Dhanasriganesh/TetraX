import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Industry launches', value: '120+' },
  { label: 'Countries served', value: '18' },
  { label: 'Avg. ROI uplift', value: '24%' },
];

const IndustriesHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-purple-900 py-28 text-white">
    <div className="absolute inset-0 opacity-40">
      <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500 blur-[140px]"></div>
    </div>
    <div className="container relative mx-auto grid gap-14 px-4 lg:grid-cols-[3fr_2fr] lg:px-12">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Industries</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          We partner with visionary teams across products, platforms, and intelligent operations.
        </h1>
        <p className="text-lg text-white/80">
          Each industry pod blends strategists, designers, engineers, and data scientists who understand your regulatory context and customer expectations.
        </p>
     
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">Snapshot</p>
        <div className="mt-6 grid gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="text-xs uppercase tracking-wide text-white/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default IndustriesHero;
