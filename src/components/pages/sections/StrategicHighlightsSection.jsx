import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'AI-native launches', value: '280+' },
  { label: 'Design systems deployed', value: '42' },
  { label: 'Experience score uplift', value: '37%' },
];

const pillars = [
  {
    title: 'Strategy x Delivery',
    description: 'Integrated pods bring strategists, designers, engineers, and change partners to every engagement.',
  },
  {
    title: 'Responsible Intelligence',
    description: 'Guardrails, data governance, and explainability baked into every AI solution.',
  },
  {
    title: 'Adaptive Operations',
    description: 'Telemetry, automation, and playbooks ensure programs keep evolving after launch.',
  },
];

const StrategicHighlightsSection = () => (
  <section className="bg-white py-20" data-header-theme="light">
    <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[2fr_3fr] lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Why teams choose Nexus AI</p>
        <h2 className="text-4xl font-bold text-gray-900">
          Operating models, products, and platforms built for constant reinvention.
        </h2>
        <p className="text-lg text-gray-600">
          We combine vision-led consulting with relentless product delivery. Our studios co-create with your teams, transferring playbooks so you keep scaling long after launch.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-[32px] border border-gray-100 bg-gradient-to-b from-blue-50 to-purple-50 p-10 shadow-2xl"
      >
        <div className="space-y-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl bg-white/90 p-6 shadow">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">{pillar.title}</p>
              <p className="mt-3 text-sm text-gray-700">{pillar.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StrategicHighlightsSection;
