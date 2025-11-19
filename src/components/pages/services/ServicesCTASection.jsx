import React from 'react';
import { motion } from 'framer-motion';

const commitments = [
  'Run a strategy sprint within 14 days',
  'Stand up an integrated pod in under 4 weeks',
  'Build the first AI copilot pilot in 6 weeks',
];

const ServicesCTASection = () => {
  return (
    <section className="bg-blue-950 py-20 text-white">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-800 to-purple-700 p-10 shadow-2xl"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Let's build</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Unlock your next chapter with modern services, ready-made accelerators, and teams that care.
              </h2>
              <p className="mt-4 text-lg text-white/80">
                We co-create engagement plans that meet you where you are and grow with you. No black boxes - just transparent partners focused on measurable outcomes.
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
            
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
