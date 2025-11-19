import React from 'react';
import { motion } from 'framer-motion';

const heroMetrics = [
  { label: 'Strategic programs launched', value: '80+' },
  { label: 'Average ROI uplift', value: '22%' },
  { label: 'Operating model playbooks', value: '30+' },
];

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
    <div className="bg-gray-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-28 text-white">
        <div className="container relative mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Consulting</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Architect strategies grounded in data, design, and responsible AI.</h1>
            <p className="text-lg text-white/80">
              Our consulting practice synchronizes business vision with operating models, measurable value cases, and cultural readiness so transformation programs launch with confidence.
            </p>
        
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Snapshot</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <p className="text-3xl font-semibold">{metric.value}</p>
                  <p className="text-xs uppercase tracking-wide text-white/70">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">What we deliver</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Strategy that moves seamlessly into execution</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Engagements are staffed with strategists, researchers, data scientists, and change partners who work side-by-side with your leaders.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valueLevers.map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Engagement rhythm</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">How we partner</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {approach.map((step, index) => (
              <motion.div key={step.phase} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-3xl border border-white bg-white p-6 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">Phase {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">{step.phase}</h3>
                <p className="mt-3 text-sm text-gray-600">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Impact</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Proof from the field</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {impactStories.map((story) => (
              <motion.div key={story.industry} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-500">{story.industry}</p>
                <p className="mt-3 text-sm text-gray-700">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
