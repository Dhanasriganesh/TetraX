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
        className="pointer-events-none absolute -left-12 sm:-left-16 md:-left-24 top-10 h-40 w-40 sm:h-56 sm:w-56 md:h-80 md:w-80 rounded-full bg-blue-200/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-12 sm:-right-16 md:-right-24 top-40 h-36 w-36 sm:h-52 sm:w-52 md:h-72 md:w-72 rounded-full bg-red-200/20 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -8, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 bottom-10 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 -translate-x-1/2 rounded-full bg-blue-300/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.img
          initial={{ opacity: 0.6, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={consultingHero}
          alt="Consulting"
          className="w-full h-auto max-h-[200px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[360px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50"
        />
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/20 via-transparent to-red-800/15 pointer-events-none" />
      </section>

      <section className="relative overflow-hidden bg-white/80 backdrop-blur-sm py-12 sm:py-16 md:py-20">
        {/* Subtle moving accents */}
        <motion.div
          className="pointer-events-none absolute -left-12 sm:-left-16 md:-left-24 top-10 h-24 w-24 sm:h-36 sm:w-36 md:h-48 md:w-48 rounded-full bg-blue-200/25 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, 12, 0], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute -right-8 sm:-right-12 md:-right-16 bottom-12 h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full bg-red-200/20 blur-3xl"
          animate={{ y: [0, -14, 0], x: [0, -10, 0], opacity: [0.28, 0.42, 0.28] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">What we deliver</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">Strategy that moves seamlessly into execution</h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 px-4">
              Engagements are staffed with strategists, researchers, data scientists, and change partners who work side-by-side with your leaders.
            </p>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {valueLevers.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl sm:rounded-3xl border border-blue-100 bg-white/90 p-4 sm:p-5 md:p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{item.description}</p>
                <div className="mt-3 sm:mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50/80 via-white to-red-50/80 py-12 sm:py-16 md:py-20">
        {/* Subtle moving accents */}
        <motion.div
          className="pointer-events-none absolute -left-5 sm:-left-8 md:-left-10 top-8 h-28 w-28 sm:h-32 sm:w-32 md:h-44 md:w-44 rounded-full bg-blue-200/20 blur-3xl"
          animate={{ y: [0, 16, 0], x: [0, 10, 0], opacity: [0.28, 0.4, 0.28] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute right-3 sm:right-5 md:right-6 bottom-6 h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 rounded-full bg-red-200/18 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, -12, 0], opacity: [0.26, 0.38, 0.26] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-6 sm:mb-8 md:mb-10 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Engagement rhythm</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">How we partner</h2>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {approach.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl sm:rounded-3xl border border-blue-100 bg-white/90 p-4 sm:p-5 md:p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
              >
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 group-hover:text-red-600 transition-colors duration-300">Phase {index + 1}</p>
                <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{step.phase}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{step.detail}</p>
                <div className="mt-3 sm:mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white/85 backdrop-blur-sm py-12 sm:py-16 md:py-20">
        {/* Subtle moving accents */}
        <motion.div
          className="pointer-events-none absolute -left-8 sm:-left-12 md:-left-16 top-12 h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full bg-blue-200/18 blur-3xl"
          animate={{ y: [0, 14, 0], x: [0, 8, 0], opacity: [0.25, 0.36, 0.25] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute right-0 bottom-10 h-24 w-24 sm:h-36 sm:w-36 md:h-48 md:w-48 rounded-full bg-red-200/18 blur-3xl"
          animate={{ y: [0, -12, 0], x: [0, -10, 0], opacity: [0.24, 0.35, 0.24] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Impact</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">Proof from the field</h2>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {impactStories.map((story) => (
              <motion.div
                key={story.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl sm:rounded-3xl border border-blue-100 bg-white/90 p-4 sm:p-5 md:p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
              >
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 group-hover:text-red-600 transition-colors duration-300">{story.industry}</p>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">{story.result}</p>
                <div className="mt-3 sm:mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
