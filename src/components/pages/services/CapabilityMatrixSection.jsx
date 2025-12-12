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
    <section className="relative bg-white py-12 sm:py-16 md:py-20 overflow-hidden">
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
      <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-300 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-gradient-to-tl from-red-300 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-200 to-red-200 rounded-full blur-3xl opacity-15 hidden sm:block"></div>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-blue-600 px-2 sm:px-0">Capabilities</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
            A unified service catalog for high-velocity teams
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
            We orchestrate multidisciplinary pods that plug into your roadmap. Each capability is modular so we can launch quickly and scale as outcomes grow.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl sm:rounded-3xl border border-gray-100 bg-gray-50 p-5 sm:p-6 md:p-8 shadow-xl"
            >
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-blue-500">0{index + 1}</div>
              <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">{capability.title}</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">{capability.description}</p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {capability.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-200 bg-white px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-blue-700">
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
