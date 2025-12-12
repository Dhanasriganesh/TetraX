import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    industry: 'Retail & Consumer',
    headline: 'AI-driven forecasting trims inventory costs by 19%',
    summary: 'Partnered with a global retailer to build a unified data fabric, predictive demand models, and store associate copilots.',
    impact: ['8 week pilot to nationwide rollout', '35k associates enabled', '$50M working capital unlocked'],
  },
  {
    industry: 'Healthcare',
    headline: 'Virtual care platform expands access across 42 hospitals',
    summary: 'Designed patient journeys, integrated EHR APIs, and implemented remote monitoring with clinician insights.',
    impact: ['NPS up 23 points', '82% clinician adoption', 'Launch in 6 months'],
  },
  {
    industry: 'Energy & Utilities',
    headline: 'Automation control tower saves 1.2M field hours',
    summary: 'Built a secure automation platform with digital twins, workflow orchestration, and workforce enablement programs.',
    impact: ['90 day roadmap to production', '5 times more releases', 'Enterprise academy for 600 employees'],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-red-50/30 to-blue-50/30 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Scattered dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 60% 20%, #ef4444 3px, transparent 3px),
            radial-gradient(circle at 80% 60%, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 30% 80%, #ef4444 2px, transparent 2px),
            radial-gradient(circle at 90% 40%, #3b82f6 3px, transparent 3px),
            radial-gradient(circle at 40% 50%, #ef4444 2px, transparent 2px),
            radial-gradient(circle at 15% 70%, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 70% 85%, #ef4444 3px, transparent 3px)
          `,
          backgroundSize: '300px 300px',
          backgroundPosition: '0 0'
        }}></div>
      </div>
      {/* Gradient overlays */}
      <div className="absolute top-10 right-10 w-56 h-56 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-25"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-red-200 to-transparent rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-1/3 left-1/2 w-40 h-40 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-blue-100 to-red-100 rounded-full blur-3xl opacity-20 hidden sm:block"></div>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-blue-600 px-2 sm:px-0">Proof</p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
            Outcomes shipped with ambitious clients
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
            Every story is co-authored. We share playbooks, embed teams, and leave behind systems clients can grow without us.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col rounded-2xl sm:rounded-3xl border border-gray-100 bg-gray-50 p-4 sm:p-5 md:p-6 shadow-lg"
            >
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-blue-500">{item.industry}</p>
              <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">{item.headline}</h3>
              <p className="mt-3 sm:mt-4 flex-1 text-xs sm:text-sm text-gray-600 leading-relaxed">{item.summary}</p>
              <div className="mt-4 sm:mt-5 md:mt-6 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                {item.impact.map((point) => (
                  <div key={point} className="flex items-center gap-2 sm:gap-3">
                    <span className="inline-block h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
          
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
