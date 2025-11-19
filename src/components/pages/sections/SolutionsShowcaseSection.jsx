import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Customer Blueprinting',
    description: 'Full-funnel research, journey orchestration, and service blueprinting to unlock new value pools.',
    tags: ['Research', 'Service Design', 'Experimentation'],
  },
  {
    title: 'AI Copilot Studio',
    description: 'Rapid ideation, guardrail design, and deployment of trustworthy AI copilots for every team.',
    tags: ['GenAI', 'Safety', 'Enablement'],
  },
  {
    title: 'Modern Platform Fabric',
    description: 'Composable architectures, API ecosystems, and automation that connect legacy and cloud.',
    tags: ['Platforms', 'Integration', 'Automation'],
  },
  {
    title: 'Intelligent Operations',
    description: 'Telemetry-driven ops, FinOps, and continuous improvement programs keeping releases fast and safe.',
    tags: ['SRE', 'FinOps', 'Observability'],
  },
];

const SolutionsShowcaseSection = () => (
  <section className="bg-gray-50 py-20" data-header-theme="light">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Solution patterns</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Modular offerings built to plug into your roadmap</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Select exactly what you needâ€”strategy sprints, platform pods, AI accelerators, or managed evolution. Every capability is composable.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">0{index + 1}</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">{solution.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {solution.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsShowcaseSection;
