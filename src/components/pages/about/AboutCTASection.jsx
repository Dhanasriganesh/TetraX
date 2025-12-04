import React from 'react';
import { motion } from 'framer-motion';

const commitments = [
  'Co-create a 90-day transformation roadmap',
  'Stand up a blended team in under 3 weeks',
  'Prototype AI copilots with measurable ROI',
];

const AboutCTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-red-50 py-20 overflow-hidden">
      {/* Grid mesh background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.08
      }}></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.05
      }}></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-20"></div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[40px] bg-gradient-to-r from-blue-600 via-red-600 to-blue-700 p-10 text-white shadow-2xl"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Partner with us</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Ready to design the next chapter of your business?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-white/80">
                We meet you where you are - kickstarting transformation with strategy sprints, capability academies, and pod-based delivery models tuned to your outcomes.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6">
              <ul className="space-y-4 text-sm text-white/90">
                {commitments.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">+</span>
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

export default AboutCTASection;
