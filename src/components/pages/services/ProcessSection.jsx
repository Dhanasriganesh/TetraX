import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    title: 'Discover & Frame',
    description: 'Rapid research, immersion, and value modeling to align on the right problems to solve.',
    artifacts: ['Executive playback', 'Opportunity map', 'Outcome hypotheses'],
  },
  {
    title: 'Design & Validate',
    description: 'Service blueprints, technical spikes, and pilot experiences to prove feasibility and adoption.',
    artifacts: ['Experience maps', 'Pilot dashboards', 'Tech reference patterns'],
  },
  {
    title: 'Build & Launch',
    description: 'Integrated design + engineering pods deliver increments with QA, change, and adoption plans.',
    artifacts: ['Increment playbacks', 'Runbooks', 'Launch kits'],
  },
  {
    title: 'Scale & Optimize',
    description: 'Measure impact, automate operations, and embed client teams through academies and residencies.',
    artifacts: ['Impact scorecards', 'Automation backlog', 'Capability uplift roadmap'],
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">How we work</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">A proven delivery rhythm with measurable checkpoints</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Our process adapts to your governance model while preserving the rituals that keep velocity high and risk low.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur md:flex-row md:items-center md:gap-10"
            >
              <div className="md:w-1/3">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Phase {index + 1}</div>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">{phase.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{phase.description}</p>
              </div>
              <div className="flex-1 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">Deliverables</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {phase.artifacts.map((artifact) => (
                    <li key={artifact} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      <span>{artifact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
