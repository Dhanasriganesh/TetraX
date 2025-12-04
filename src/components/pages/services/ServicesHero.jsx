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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-slate-700 to-red-700 py-28 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-400 blur-[140px]"></div>
        <div className="absolute top-1/2 left-1/3 h-80 w-80 rounded-full bg-blue-300 blur-[120px]"></div>
      </div>
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, #ef4444 0, #ef4444 2px, transparent 2px, transparent 20px)',
          backgroundSize: '100% 100%'
        }}></div>
      </div>
      <div className="container relative mx-auto flex flex-col gap-16 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/50 bg-white/15 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-blue-200">
            Services
          </div>
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl text-white">
            Design, build, and scale modern businesses with AI-first services.
          </h1>
          <p className="text-base text-white/80">
            From advisory to delivery, we unite strategy, experience, engineering, and change operations. Every engagement blends reusable accelerators with co-creation rituals that keep teams aligned and velocity high.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-red-500 px-8 py-3 text-xs font-semibold text-white shadow-xl hover:shadow-2xl transition">Talk to an expert</button>
            <button className="rounded-full border-2 border-white/40 bg-white/15 backdrop-blur-sm px-8 py-3 text-xs font-semibold text-white hover:bg-white/25 transition">View service catalog</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid w-full max-w-lg grid-cols-2 gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="text-[10px] uppercase tracking-wide text-white/80">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
