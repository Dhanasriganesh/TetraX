import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Studios worldwide', value: '6' },
  { label: 'Team members', value: '420+' },
  { label: 'Employee engagement', value: '82%' },
];

const CareersHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 py-28 text-white">
    <div className="absolute inset-0 opacity-40">
      <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500 blur-[140px]"></div>
    </div>
    <div className="container relative mx-auto grid gap-16 px-4 lg:grid-cols-2 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/70">Careers</p>
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          Build meaningful products, platforms, and AI solutions with people who care.
        </h1>
        <p className="text-base text-white/80">
          At Nexus AI, designers, engineers, researchers, and strategists co-create with ambitious clients. We invest in growth, autonomy, and inclusive rituals so everyone thrives.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-xs font-semibold text-blue-900 shadow-xl">View open roles</button>
          <button className="rounded-full border border-white/40 px-6 py-3 text-xs font-semibold text-white/90">Meet the team</button>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Life at Nexus AI</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center">
              <p className="text-2xl font-semibold">{metric.value}</p>
              <p className="text-[10px] uppercase tracking-wide text-white/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CareersHero;
