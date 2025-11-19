import React from 'react';
import { motion } from 'framer-motion';

const commitments = [
  'Stand up an industry discovery sprint in 14 days',
  'Launch a pilot with measurable KPIs in 8 weeks',
  'Embed blended pods with training for your teams',
];

const IndustriesCTASection = () => (
  <section className="bg-blue-950 py-20 text-white">
    <div className="container mx-auto px-4 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-800 to-purple-700 p-10 shadow-2xl"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Partner with us</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight">Ready to accelerate in your industry?</h2>
            <p className="mt-4 text-lg text-white/80">
              We co-create engagement models that fit your regulatory landscape and ambition level. Let us show you the art of the possible.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6">
            <ul className="space-y-4 text-sm text-white/90">
              {commitments.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">*</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-lg">Schedule briefing</button>
              <button className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white">View industry cases</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default IndustriesCTASection;
