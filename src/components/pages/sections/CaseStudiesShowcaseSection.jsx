import React from 'react';
import { motion } from 'framer-motion';

const studies = [
  {
    industry: 'Retail & Consumer',
    headline: 'Unified loyalty platform boosts CLV 33%',
    detail: 'Designed a headless experience, AI promotions engine, and in-store copilots for 2,800 stores.',
    metrics: ['8 domains modernized', '5x release cadence', '45M members migrated'],
  },
  {
    industry: 'Healthcare',
    headline: 'Virtual care fabric covers 42 hospitals',
    detail: 'Co-created patient journeys, remote monitoring dashboards, and compliance-ready AI assistants.',
    metrics: ['NPS +23', 'Clinician adoption 82%', 'Go-live in 6 months'],
  },
  {
    industry: 'Energy & Utilities',
    headline: 'Automation control tower saves 1.2M hours',
    detail: 'Built digital twins, orchestration workflows, and capability academies for field engineers.',
    metrics: ['Predictive coverage worldwide', '90-day pilot to scale', '600 employees upskilled'],
  },
];

const CaseStudiesShowcaseSection = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Proof</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Co-authored results with ambitious teams</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {studies.map((study, index) => (
          <motion.div
            key={study.headline}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col rounded-3xl border border-white bg-white p-6 shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">{study.industry}</p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">{study.headline}</h3>
            <p className="mt-4 text-sm text-gray-600 flex-1">{study.detail}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {study.metrics.map((metric) => (
                <li key={metric} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
         
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesShowcaseSection;
