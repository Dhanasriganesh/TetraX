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
  <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden" data-header-theme="light">
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
      className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-300/40 to-transparent rounded-bl-full"
    ></motion.div>
    <motion.div 
      animate={{ 
        rotate: [0, -90, 0],
        scale: [1, 1.15, 1]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-red-300/40 to-transparent rounded-tr-full"
    ></motion.div>
    <motion.div 
      animate={{ 
        rotate: [45, 225, 45],
        x: [0, 20, 0],
        y: [0, -20, 0]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/3 right-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-blue-400/50 rounded-lg hidden sm:block"
      style={{ rotate: 45 }}
    ></motion.div>
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        x: [0, -15, 0],
        y: [0, 15, 0]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/3 left-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border border-red-400/50 rounded-full hidden sm:block"
    ></motion.div>
    <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Solution patterns</p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
          Modular offerings built to plug into your roadmap
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 px-2 sm:px-0">
          Select exactly what you need—strategy sprints, platform pods, AI accelerators, or managed evolution. Every capability is composable.
        </p>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-5 sm:p-6 md:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue-200"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">{solution.title}</h3>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-700 flex-shrink-0">0{index + 1}</span>
            </div>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{solution.description}</p>
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
              {solution.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-red-600 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-white group-hover:bg-blue-600 transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 sm:mt-5 md:mt-6 h-0.5 sm:h-1 w-8 sm:w-10 md:w-12 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsShowcaseSection;
