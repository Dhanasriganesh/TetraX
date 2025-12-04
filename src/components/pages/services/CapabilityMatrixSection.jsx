import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Strategy & Advisory',
    description: 'Operating model design, value stream mapping, capability roadmaps, and responsible AI governance.',
    tags: ['AI strategy', 'Enterprise architecture', 'Value acceleration'],
  },
  {
    title: 'Digital Product & Experience',
    description: 'End-to-end product incubation combining research, UX, design systems, and experimentation frameworks.',
    tags: ['Service design', 'Product leadership', 'Growth experiments'],
  },
  {
    title: 'Data, AI & Automation',
    description: 'Modern data platforms, MLOps, GenAI copilots, and automation programs built with guardrails.',
    tags: ['Data fabric', 'Responsible AI', 'Intelligent automation'],
  },
  {
    title: 'Cloud & Platforms',
    description: 'Cloud native engineering, DevSecOps, platform reliability, and ecosystem integrations.',
    tags: ['Cloud transformation', 'Platform ops', 'APIs'],
  },
  {
    title: 'Talent & Enablement',
    description: 'Capability academies, change orchestration, and embedded pods that upskill teams while delivering value.',
    tags: ['Agile coaching', 'Academies', 'Embedded squads'],
  },
  {
    title: 'Managed Evolution',
    description: 'Run and optimize digital programs with continuous improvement, FinOps, and reliability SLAs.',
    tags: ['SRE', 'FinOps', 'Lifecycle support'],
  },
];

const CapabilityMatrixSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50px 50px, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 150px 100px, #ef4444 2px, transparent 2px),
            radial-gradient(circle at 100px 150px, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 200px 50px, #ef4444 2px, transparent 2px)
          `,
          backgroundSize: '200px 200px',
          backgroundPosition: '0 0, 50px 25px, 100px 50px, 0 75px'
        }}></div>
      </div>
      {/* Floating gradient shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-300 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-red-300 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200 to-red-200 rounded-full blur-3xl opacity-15"></div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Capabilities</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">A unified service catalog for high-velocity teams</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            We orchestrate multidisciplinary pods that plug into your roadmap. Each capability is modular so we can launch quickly and scale as outcomes grow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-xl"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">0{index + 1}</div>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900">{capability.title}</h3>
              <p className="mt-3 text-gray-600">{capability.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capability.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
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
};

export default CapabilityMatrixSection;
