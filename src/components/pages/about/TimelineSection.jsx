import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2010',
    title: 'Founded in Charlotte',
    description: 'Launched with a focus on cloud-native engineering for financial services.',
  },
  {
    year: '2015',
    title: 'Global delivery hubs',
    description: 'Opened innovation labs in Toronto and Lisbon, expanding 24/6 coverage.',
  },
  {
    year: '2018',
    title: 'Experience & Data studio',
    description: 'Merged design research, data science, and AI engineering under one practice.',
  },
  {
    year: '2022',
    title: 'Responsible AI framework',
    description: 'Published our Responsible Intelligence playbook adopted by Fortune 500 partners.',
  },
  {
    year: '2025',
    title: 'Adaptive enterprise platform',
    description: 'Launched modular platform accelerators powering retail, healthcare, and energy clients.',
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Journey</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Momentum built year after year</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Growth driven by long-term partnerships, not project volume. Every milestone represents a new capability that clients leverage today.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute inset-y-0 left-5 w-px bg-gradient-to-b from-blue-500/40 to-purple-500/40 sm:left-8"></div>
          <div className="space-y-10 border-l border-transparent pl-12 sm:pl-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl"
              >
                <span className="absolute -left-9 top-6 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-semibold text-white">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900">{milestone.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
