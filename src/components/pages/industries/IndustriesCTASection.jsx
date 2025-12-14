import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const commitments = [
  'Stand up an industry discovery sprint in 14 days',
  'Launch a pilot with measurable KPIs in 8 weeks',
  'Embed blended pods with training for your teams',
];

const IndustriesCTASection = () => (
  <section className="bg-blue-950 py-12 sm:py-16 md:py-20 text-white">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl sm:rounded-3xl md:rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-800 to-purple-700 p-6 sm:p-8 md:p-10 shadow-2xl"
      >
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/60">Partner with us</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight px-1">Ready to accelerate in your industry?</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              We co-create engagement models that fit your regulatory landscape and ambition level. Let us show you the art of the possible.
            </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl bg-white/10 p-4 sm:p-5 md:p-6">
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/90">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3">
                  <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/20 text-[10px] sm:text-xs flex-shrink-0 mt-0.5">*</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
              <Link to="/contact"><button className="rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-blue-800 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">Schedule briefing</button></Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default IndustriesCTASection;
