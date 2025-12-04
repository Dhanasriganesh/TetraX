import React from 'react';
import { motion } from 'framer-motion';

const commitments = [
  'Run a strategy sprint within 14 days',
  'Stand up an integrated pod in under 4 weeks',
  'Build the first AI copilot pilot in 6 weeks',
];

const ServicesCTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-red-950 to-blue-900 py-20 text-white overflow-hidden">
      {/* Modern tech grid pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px),
            linear-gradient(to right, #ef4444 1px, transparent 1px),
            linear-gradient(to bottom, #ef4444 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px',
          backgroundPosition: '0 0, 0 0, 40px 40px, 40px 40px'
        }}></div>
      </div>
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-600 rounded-full blur-[150px] opacity-20"></div>
      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-blue-500/20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-red-500/20"></div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-800 to-red-700 p-10 shadow-2xl"
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
