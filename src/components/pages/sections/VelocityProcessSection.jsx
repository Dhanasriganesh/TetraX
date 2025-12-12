import React from 'react';
import { motion } from 'framer-motion';
import phasesImage from '../../../assets/home-section/phases.png';

const steps = [
  {
    phase: 'Discover',
    detail: 'Immersion, value modeling, and rapid concept validation to align executives and product teams.',
  },
  {
    phase: 'Design',
    detail: 'Blueprint customer journeys, platform architectures, and AI guardrails with measurable hypotheses.',
  },
  {
    phase: 'Build',
    detail: 'Multidisciplinary pods ship increments with automated QA, telemetry, and enablement baked in.',
  },
  {
    phase: 'Scale',
    detail: 'Launch kits, capability academies, and managed evolution ensure adoption and continuous improvement.',
  },
];

const VelocityProcessSection = () => (
  <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
    {/* Static background image with white overlay for legibility */}
    <div className="absolute inset-0">
      <img
        src={phasesImage}
        alt="Process phases"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/42" />
    </div>
    <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Delivery rhythm</p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
          Velocity without sacrificing rigor
        </h2>
      </div>
      <div className="relative mt-8 sm:mt-10 md:mt-12 lg:mt-14 max-w-5xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 sm:w-px -translate-x-0 sm:-translate-x-1/2 transform bg-gradient-to-b from-blue-600 to-red-600" />
        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative rounded-2xl sm:rounded-3xl border border-white/60 bg-gray-50 p-4 sm:p-5 md:p-6 shadow-xl ml-8 sm:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
              }`}
            >
              <span className="absolute -left-3 sm:-left-2 top-5 sm:top-6 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full border-2 sm:border-4 border-white bg-gradient-to-r from-blue-700 to-red-700 md:left-auto md:-right-2" />
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-red-700">Phase 0{index + 1}</p>
              <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">{step.phase}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VelocityProcessSection;
