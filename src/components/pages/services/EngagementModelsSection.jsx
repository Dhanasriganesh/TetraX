import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    title: 'Advisory Sprints',
    description: 'Two to four week intensives to align leadership, quantify value, and provide a prioritized roadmap.',
    outcomes: ['North-star architecture', 'Investable business case', 'Operating model blueprint'],
  },
  {
    title: 'Integrated Pods',
    description: 'Cross-functional squads embedded with your teams to deliver products, AI copilots, or platform upgrades.',
    outcomes: ['Joint OKRs', 'Design + build + change expertise', 'Weekly value demos'],
  },
  {
    title: 'Managed Programs',
    description: 'Longer-term run + optimize partnerships with transparent KPIs and governance cadences.',
    outcomes: ['SLO management', 'Continuous experimentation', 'Capability uplift'],
  },
];

const EngagementModelsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Engagement models</p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">Choose the level of partnership that fits your pace</h2>
            <p className="mt-4 text-lg text-gray-600">
              We flex between strategic advisory, outcome-based pods, and managed services. Every model anchors to measurable outcomes with joint governance.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white p-6 text-sm text-gray-600 shadow-2xl">
            <p className="font-semibold text-gray-900">Co-creation commitments</p>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              <li>Transparent backlog and decision logs</li>
              <li>Integrated change and enablement plans</li>
              <li>Shared metrics and weekly value reviews</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl border border-transparent bg-white p-8 shadow-xl shadow-blue-100 hover:border-blue-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{model.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{model.description}</p>
              <div className="mt-6 space-y-3 text-sm">
                {model.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">*</span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;
