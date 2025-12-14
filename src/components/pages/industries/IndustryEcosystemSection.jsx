import React from 'react';
import { motion } from 'framer-motion';

const ecosystem = [
  {
    title: 'Research & Insight Labs',
    description: 'Trend scanning, ethnography, and data partnerships that keep us plugged into changing behaviors.',
  },
  {
    title: 'Technology Alliances',
    description: 'Deep partnerships with hyperscalers, design platforms, and AI innovators to accelerate delivery.',
  },
  {
    title: 'Regulatory & Compliance Network',
    description: 'Advisors covering healthcare, finance, retail, manufacturing, automotive, and public sector guardrails.',
  },
];

const stats = [
  { label: 'Industry advisors', value: '40+' },
  { label: 'Co-innovation partners', value: '25' },
  { label: 'Joint accelerators', value: '18' },
];

const IndustryEcosystemSection = () => (
  <section className="bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16 md:py-20">
    <div className="container mx-auto grid gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[3fr_2fr] lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="space-y-4 sm:space-y-5 md:space-y-6"
      >
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Partner ecosystem</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-1">We surround every engagement with experts and partners</h2>
        <div className="space-y-3 sm:space-y-4">
          {ecosystem.map((item) => (
            <div key={item.title} className="rounded-2xl sm:rounded-3xl border border-white/70 bg-white p-4 sm:p-5 md:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-2xl sm:rounded-3xl md:rounded-[32px] border border-blue-100 bg-white p-5 sm:p-6 md:p-8 shadow-xl mt-6 lg:mt-0"
      >
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-500">Impact by the numbers</p>
        <div className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl sm:rounded-2xl bg-blue-50 p-3 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-wide text-blue-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default IndustryEcosystemSection;
