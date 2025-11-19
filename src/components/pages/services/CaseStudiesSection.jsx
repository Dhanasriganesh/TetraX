import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    industry: 'Retail & Consumer',
    headline: 'AI-driven forecasting trims inventory costs by 19%',
    summary: 'Partnered with a global retailer to build a unified data fabric, predictive demand models, and store associate copilots.',
    impact: ['8 week pilot to nationwide rollout', '35k associates enabled', ' working capital unlocked'],
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
    impact: ['90 day roadmap to production', '5x more releases', 'Enterprise academy for 600 employees'],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Proof</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Outcomes shipped with ambitious clients</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Every story is co-authored. We share playbooks, embed teams, and leave behind systems clients can grow without us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">{item.industry}</p>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900">{item.headline}</h3>
              <p className="mt-4 flex-1 text-sm text-gray-600">{item.summary}</p>
              <div className="mt-6 space-y-2 text-sm text-gray-700">
                {item.impact.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                    <span>{point}</span>
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
