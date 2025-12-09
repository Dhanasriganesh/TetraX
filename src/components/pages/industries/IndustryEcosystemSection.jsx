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
  <section className="bg-gradient-to-b from-white to-blue-50 py-20">
    <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[3fr_2fr] lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Partner ecosystem</p>
        <h2 className="text-4xl font-bold text-gray-900">We surround every engagement with experts and partners</h2>
        <div className="space-y-4">
          {ecosystem.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/70 bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-[32px] border border-blue-100 bg-white p-8 shadow-xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">Impact by the numbers</p>
        <div className="mt-6 space-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-blue-50 p-4 text-center">
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-blue-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default IndustryEcosystemSection;
