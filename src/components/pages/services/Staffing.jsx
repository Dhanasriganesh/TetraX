import React from 'react';
import { motion } from 'framer-motion';
import staffingHero from '../../../assets/about-section/staffing.png';

const talentModels = [
  {
    title: 'Embedded pods',
    description: 'Cross-functional teams (product, design, engineering, data) that plug into your backlog with shared OKRs.',
  },
  {
    title: 'Specialist augmentation',
    description: 'Rapid access to cleared architects, analysts, SREs, and program leads for high-priority initiatives.',
  },
  {
    title: 'Managed squads',
    description: 'Outcome-based delivery teams with velocity dashboards, quality guardrails, and integrated change support.',
  },
];

const enablement = [
  'Capability benchmarking and skill-gap analysis',
  'Talent playbooks including onboarding rituals and tooling',
  'Shared growth plans, coaching, and certification support',
];

const successHighlights = [
  {
    client: 'Global retailer',
    detail: 'Launched an omnichannel pod in 18 days, shipping 40+ experiments per quarter with 32% revenue lift.',
  },
  {
    client: 'Healthcare network',
    detail: 'Embedded data and automation engineers to modernize clinical workflows, reducing cycle time by 45%.',
  },
  {
    client: 'Energy enterprise',
    detail: 'SRE and platform squads improved reliability to 99.97% while coaching internal teams on DevSecOps.',
  },
];

const Staffing = () => {
  return (
    <div className="bg-gradient-to-br from-blue-300 via-white to-red-800">
      <section className="relative overflow-hidden pt-24">
        <motion.img
          initial={{ opacity: 0.6, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={staffingHero}
          alt="Staffing in management"
          className="w-full h-auto max-h-[360px] object-cover rounded-3xl shadow-2xl border border-white/50"
        />
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Talent models</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Flexible teams designed around your goals</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {talentModels.map((model) => (
              <motion.div key={model.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900">{model.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-white bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Enablement</p>
            <h3 className="mt-3 text-3xl font-semibold text-gray-900">More than staff aug</h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-700">
              {enablement.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-3xl border border-white bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Transparency</p>
            <h3 className="mt-3 text-3xl font-semibold text-gray-900">Radical visibility</h3>
            <p className="mt-4 text-sm text-gray-600">
              Weekly scorecards share throughput, quality, enablement, and retention metrics so you always know how pods are performing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Impact</p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Talent that delivers outcomes</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {successHighlights.map((highlight) => (
              <motion.div key={highlight.client} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-500">{highlight.client}</p>
                <p className="mt-3 text-sm text-gray-700">{highlight.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staffing;
