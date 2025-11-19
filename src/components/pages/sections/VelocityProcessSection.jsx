import React from 'react';
import { motion } from 'framer-motion';

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
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Delivery rhythm</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Velocity without sacrificing rigor</h2>
      </div>
      <div className="relative mt-14">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-100 to-purple-100 md:left-1/2" />
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative rounded-3xl border border-white/60 bg-gray-50 p-6 shadow-xl md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
              }`}
            >
              <span className="absolute -left-2 top-6 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 md:left-auto md:-right-2" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">Phase 0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{step.phase}</h3>
              <p className="mt-3 text-sm text-gray-600">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VelocityProcessSection;
