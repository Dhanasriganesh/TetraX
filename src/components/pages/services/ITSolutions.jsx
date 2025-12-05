import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Cloud transformations', value: '140+' },
  { label: 'Automation hours saved', value: '2.8M' },
  { label: 'Platform availability', value: '99.97%' },
];

const pillars = [
  {
    title: 'Platform modernization',
    description: 'Re-architect legacy estates with domain-driven design, event backbones, and zero-downtime migration strategies.',
  },
  {
    title: 'AI & automation engineering',
    description: 'Deploy copilots, intelligent workflows, and decision automation powered by trustworthy data foundations.',
  },
  {
    title: 'Run & evolve',
    description: 'SRE, FinOps, and continuous improvement pods that keep platforms reliable, secure, and cost efficient.',
  },
];

const stackHighlights = [
  'Cloud-native blueprints for AWS, Azure, and GCP',
  'DevSecOps accelerators with policy-as-code',
  'Observability, AIOps, and incident response automation',
  'API ecosystems and partner integrations',
];

const caseResults = [
  {
    client: 'Global retailer',
    result: 'Headless commerce platform launched across 14 countries with 5 times release cadence and 35% faster performance.',
  },
  {
    client: 'Healthcare network',
    result: 'Secure data fabric and AI triage copilots reduced care coordination time by 38%.',
  },
  {
    client: 'Energy company',
    result: 'Automation control tower orchestrated 1.2M field hours saved and predictive maintenance coverage worldwide.',
  },
];

const ITSolutions = () => (
  <div className="bg-gray-50">
    <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-28 text-white">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">IT Solutions</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Engineer resilient platforms with embedded intelligence.</h1>
          <p className="text-lg text-white/80">
            We pair modern cloud-native engineering with automation and change enablement so platforms stay secure, observable, and loved by users.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-xl">Plan a migration</button>
            <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90">Review playbooks</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center">
                <p className="text-2xl font-semibold">{metric.value}</p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Offerings</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Full-stack delivery for mission-critical systems</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">{pillar.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-white bg-white p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Stack</p>
          <h3 className="mt-3 text-3xl font-semibold text-gray-900">Reference accelerators</h3>
          <ul className="mt-6 space-y-4 text-sm text-gray-700">
            {stackHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-3xl border border-white bg-white p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Operations</p>
          <h3 className="mt-3 text-3xl font-semibold text-gray-900">Reliability by design</h3>
          <p className="mt-4 text-sm text-gray-600">
            Embedded SRE, SecOps, and FinOps practices ensure SLAs hold while costs stay optimized. We transition ownership with live runbooks and enablement sessions.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Proof</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Platforms delivering measurable impact</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseResults.map((caseStudy) => (
            <motion.div key={caseStudy.client} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-500">{caseStudy.client}</p>
              <p className="mt-3 text-sm text-gray-700">{caseStudy.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ITSolutions;
