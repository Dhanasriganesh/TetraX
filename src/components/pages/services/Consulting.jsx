import React from 'react';
import { motion } from 'framer-motion';
import consultingHero from '../../../assets/about-section/consulting.png';

const valueLevers = [
  {
    title: 'Enterprise assessments',
    description: '360Â° reviews across customer journeys, data assets, technology stacks, and talent capabilities to prioritize investments.',
  },
  {
    title: 'AI & digital strategy',
    description: 'Quantify value pools, architect future-state blueprints, and define responsible AI guardrails tied to your risk posture.',
  },
  {
    title: 'Change orchestration',
    description: 'Leadership alignment, funding models, and storytelling that accelerate adoption and clear decision bottlenecks.',
  },
];

const approach = [
  {
    phase: 'Frame & align',
    detail: 'Immersion workshops, stakeholder interviews, and data-backed diagnostics to frame the opportunity.',
  },
  {
    phase: 'Model & design',
    detail: 'Scenario modeling, operating-model design, and initiative roadmaps sequenced around measurable value.',
  },
  {
    phase: 'Mobilize & govern',
    detail: 'Playbooks, KPI frameworks, and governance cadences that keep cross-functional teams in sync.',
  },
];

const impactStories = [
  {
    industry: 'Financial services',
    result: 'Unified credit decisioning strategy reduced risk review time by 41% and unlocked  in new lending capacity.',
  },
  {
    industry: 'Healthcare',
    result: 'Designed AI governance program and service blueprints powering virtual care expansion within 6 months.',
  },
  {
    industry: 'Energy & utilities',
    result: 'Operational blueprint for predictive maintenance saved 18M field hours and funded automation at scale.',
  },
];

const Consulting = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Subtle floating background accents */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-red-200/20 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -8, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 bottom-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-300/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <section className="relative overflow-hidden pt-24">
        <motion.img
          initial={{ opacity: 0.6, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={consultingHero}
          alt="Consulting"
          className="w-full h-auto max-h-[360px] object-cover rounded-3xl shadow-2xl border border-white/50"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-900/20 via-transparent to-red-800/15 pointer-events-none" />
      </section>

      <section className="relative overflow-hidden bg-white/80 backdrop-blur-sm py-20">
        {/* Subtle moving accents */}
        <motion.div
          className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full bg-blue-200/25 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, 12, 0], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute -right-16 bottom-12 h-40 w-40 rounded-full bg-red-200/20 blur-3xl"
          animate={{ y: [0, -14, 0], x: [0, -10, 0], opacity: [0.28, 0.42, 0.28] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative z-10 mx-auto px-4 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">What we deliver</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Strategy that moves seamlessly into execution</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Engagements are staffed with strategists, researchers, data scientists, and change partners who work side-by-side with your leaders.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valueLevers.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item.description}</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50/80 via-white to-red-50/80 py-20">
        {/* Subtle moving accents */}
        <motion.div
          className="pointer-events-none absolute -left-10 top-8 h-44 w-44 rounded-full bg-blue-200/20 blur-3xl"
          animate={{ y: [0, 16, 0], x: [0, 10, 0], opacity: [0.28, 0.4, 0.28] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute right-6 bottom-6 h-52 w-52 rounded-full bg-red-200/18 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, -12, 0], opacity: [0.26, 0.38, 0.26] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative z-10 mx-auto px-4 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Engagement rhythm</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">How we partner</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {approach.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500 group-hover:text-red-600 transition-colors duration-300">Phase {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{step.phase}</h3>
                <p className="mt-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{step.detail}</p>
                <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white/85 backdrop-blur-sm py-20">
        {/* Subtle moving accents */}
        <motion.div
          className="pointer-events-none absolute -left-16 top-12 h-40 w-40 rounded-full bg-blue-200/18 blur-3xl"
          animate={{ y: [0, 14, 0], x: [0, 8, 0], opacity: [0.25, 0.36, 0.25] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute right-0 bottom-10 h-48 w-48 rounded-full bg-red-200/18 blur-3xl"
          animate={{ y: [0, -12, 0], x: [0, -10, 0], opacity: [0.24, 0.35, 0.24] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative z-10 mx-auto px-4 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Impact</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Proof from the field</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {impactStories.map((story) => (
              <motion.div
                key={story.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-blue-500 group-hover:text-red-600 transition-colors duration-300">{story.industry}</p>
                <p className="mt-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{story.result}</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
