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
    <section className="relative bg-gradient-to-b from-white via-blue-50/50 to-red-50/50 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Connected nodes pattern - representing process flow */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-flow" x="0" y="0" width="300" height="200" patternUnits="userSpaceOnUse">
              {/* Flow lines */}
              <path d="M50,50 L150,50" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
              <path d="M150,50 L250,50" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
              <path d="M100,100 L200,100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.4"/>
              {/* Nodes */}
              <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
              <circle cx="150" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
              <circle cx="250" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
              <circle cx="100" cy="100" r="5" fill="#ef4444" opacity="0.5"/>
              <circle cx="200" cy="100" r="5" fill="#3b82f6" opacity="0.5"/>
              {/* Arrows */}
              <polygon points="145,48 145,52 155,50" fill="#ef4444" opacity="0.5"/>
              <polygon points="245,48 245,52 255,50" fill="#3b82f6" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-flow)" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-300 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tl from-red-300 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-blue-600 px-2 sm:px-0">How we work</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
            A proven delivery rhythm with measurable checkpoints
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
            Our process adapts to your governance model while preserving the rituals that keep velocity high and risk low.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 space-y-4 sm:space-y-5 md:space-y-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4 sm:gap-5 md:gap-6 rounded-2xl sm:rounded-3xl border border-white/70 bg-white/80 p-5 sm:p-6 md:p-8 shadow-xl backdrop-blur md:flex-row md:items-center md:gap-8 lg:gap-10"
            >
              <div className="md:w-1/3">
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-blue-500">Phase {index + 1}</div>
                <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">{phase.title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
              <div className="flex-1 rounded-xl sm:rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5 md:p-6">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-blue-800">Deliverables</p>
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                  {phase.artifacts.map((artifact) => (
                    <li key={artifact} className="flex items-center gap-2 sm:gap-3">
                      <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span className="leading-relaxed">{artifact}</span>
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
