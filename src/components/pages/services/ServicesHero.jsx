import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Enterprise launches', value: '180+' },
  { label: 'Automation hours saved', value: '2.8M' },
  { label: 'AI accelerators', value: '25' },
  { label: 'Cloud migrations', value: '140+' },
];

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-28 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500 blur-[140px]"></div>
      </div>
      <div className="container relative mx-auto flex flex-col gap-16 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            Services
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Design, build, and scale modern businesses with AI-first services.
          </h1>
          <p className="text-lg text-white/80">
            From advisory to delivery, we unite strategy, experience, engineering, and change operations. Every engagement blends reusable accelerators with co-creation rituals that keep teams aligned and velocity high.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-900 shadow-xl">Talk to an expert</button>
            <button className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-white">View service catalog</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid w-full max-w-lg grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="text-xs uppercase tracking-wide text-white/70">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
