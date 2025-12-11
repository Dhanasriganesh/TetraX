import React from 'react';
import { motion } from 'framer-motion';
import whyImage from '../../../assets/home-section/why.png';

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
  <section className="relative bg-gradient-to-br from-blue-100 via-blue-50/50 to-red-100 py-20 overflow-hidden" data-header-theme="light">
    {/* Decorative circles */}
    <motion.div 
      animate={{ 
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 right-10 w-64 h-64 bg-blue-300/40 rounded-full blur-3xl"
    ></motion.div>
    <motion.div 
      animate={{ 
        x: [0, -30, 0],
        y: [0, 30, 0],
        scale: [1, 1.15, 1]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-20 left-10 w-80 h-80 bg-red-300/40 rounded-full blur-3xl"
    ></motion.div>
    <motion.div 
      animate={{ 
        x: [0, -20, 0],
        y: [0, 20, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl"
    ></motion.div>
    <div className="container relative z-10 mx-auto grid gap-10 px-4 lg:grid-cols-[2fr_3fr] lg:px-12">
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
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
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
        className="rounded-[32px] border border-blue-200 bg-white p-4 shadow-2xl overflow-hidden"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-gradient-to-br from-blue-50 to-red-50">
            <img
              src={whyImage}
              alt="Why teams choose us"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/15" />
          </div>
          <div className="space-y-6 p-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl bg-gray-50 p-5 shadow">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">{pillar.title}</p>
                <p className="mt-3 text-sm text-gray-800">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default StrategicHighlightsSection;
