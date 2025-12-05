import React from 'react';
import { motion } from 'framer-motion';

const HomeCTASection = () => (
  <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-red-800 py-20 text-white" data-header-theme="gradient">
    <div className="container mx-auto px-4 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-[40px] border border-white/20 bg-white/5 p-10 shadow-2xl"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Let's build</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight">Ready to design the next chapter of your business?</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Kick off with a strategy sprint, AI co-creation workshop, or platform modernization plan. We'll tailor the first 90 days to your outcomes.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeCTASection;
