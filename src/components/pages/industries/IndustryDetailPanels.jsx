import React from 'react';
import { motion } from 'framer-motion';

const details = [
  {
    name: 'Product Design',
    focus: 'Customer and employee experiences',
    deliverables: ['Vision sprints + prototypes', 'Multi-channel design systems', 'Experimentation + analytics rituals'],
    quote: 'The Nexus AI design guild rebuilt our product strategy and design ops in 10 weeks.',
  },
  {
    name: 'Smart Vision',
    focus: 'Edge-to-cloud intelligence',
    deliverables: ['Sensor strategy + labeling ops', 'MLOps pipelines + monitors', 'Integration with OT and safety systems'],
    quote: 'We moved from pilot to 600+ active cameras with measurable compliance wins.',
  },
  {
    name: 'Web Development',
    focus: 'Growth-ready web platforms',
    deliverables: ['Composable front-ends + CMS', 'Performance + accessibility tuning', 'Growth experiments + SEO playbooks'],
    quote: 'Site speed doubled and conversion lifted 28% within two quarters.',
  },
  {
    name: 'Platform Integration',
    focus: 'Unified ecosystems',
    deliverables: ['API marketplaces', 'Workflow orchestration', 'Partner onboarding accelerators'],
    quote: 'Our legacy and SaaS stack now feels like one cohesive platform.',
  },
  {
    name: 'Tech Solutions',
    focus: 'Modern engineering + automation',
    deliverables: ['Product + platform squads', 'Automation control towers', 'Runbooks, enablement, and managed evolution'],
    quote: 'We gained a 5x release cadence with full observability.',
  },
];

const IndustryDetailPanels = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">How we work inside each industry</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Specialized pods, measurable outcomes</h2>
      </div>
      <div className="mt-14 space-y-6">
        {details.map((detail, index) => (
          <motion.div
            key={detail.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col gap-6 rounded-[32px] border border-white/80 bg-white p-8 shadow-xl lg:flex-row"
          >
            <div className="lg:w-1/3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">{detail.name}</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{detail.focus}</h3>
              <p className="mt-4 text-sm text-gray-600">{detail.quote}</p>
            </div>
            <div className="flex-1 rounded-3xl border border-blue-100 bg-blue-50/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">What we deliver</p>
              <ul className="mt-4 grid gap-3 text-sm text-gray-800 md:grid-cols-2">
                {detail.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                    <span>{item}</span>
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

export default IndustryDetailPanels;
