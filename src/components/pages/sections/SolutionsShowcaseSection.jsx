import React from 'react';
import { motion } from 'framer-motion';
import solutionsImage from '../../../assets/home-section/solutions.png';

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
  <section className="relative py-20 overflow-hidden" data-header-theme="light">
    {/* Full background image with legibility overlay */}
    <div className="absolute inset-0">
      <img
        src={solutionsImage}
        alt="Solutions in action"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/80 to-white/55" />
    </div>

    {/* Geometric shapes */}
    <motion.div 
      animate={{ 
        rotate: [0, 90, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-transparent rounded-bl-full"
    ></motion.div>
    <motion.div 
      animate={{ 
        rotate: [0, -90, 0],
        scale: [1, 1.15, 1]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-300/40 to-transparent rounded-tr-full"
    ></motion.div>
    <motion.div 
      animate={{ 
        rotate: [45, 225, 45],
        x: [0, 20, 0],
        y: [0, -20, 0]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/3 right-1/4 w-32 h-32 border border-blue-400/50 rounded-lg"
      style={{ rotate: 45 }}
    ></motion.div>
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        x: [0, -15, 0],
        y: [0, 15, 0]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-red-400/50 rounded-full"
    ></motion.div>
    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Solution patterns</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Modular offerings built to plug into your roadmap</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Select exactly what you need—strategy sprints, platform pods, AI accelerators, or managed evolution. Every capability is composable.
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
            whileHover={{ y: -8, scale: 1.01 }}
            className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{solution.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">0{index + 1}</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{solution.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {solution.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white group-hover:bg-blue-600 transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsShowcaseSection;
