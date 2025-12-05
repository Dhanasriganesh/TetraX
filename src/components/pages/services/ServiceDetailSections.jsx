import React from 'react';
import { motion } from 'framer-motion';

const offerings = [
  {
    id: 'consulting',
    title: 'Consulting',
    headline: 'Shape resilient strategies and operating models.',
    description:
      'Our consulting teams blend industry strategists, data scientists, and product leaders to craft future-ready roadmaps, investment cases, and responsible AI guardrails.',
    pillars: [
      'Enterprise assessments & value models',
      'Customer and employee journey re-imagination',
      'Responsible AI playbooks and policy design',
    ],
    metrics: [
      { label: 'Programs launched', value: '60+' },
      { label: 'Avg. value uplift', value: '18%' },
    ],
  },
  {
    id: 'staffing',
    title: 'Staffing',
    headline: 'Deploy elite hybrid teams, on demand.',
    description:
      'We provide cleared, certified engineers, designers, analysts, and delivery leads who plug directly into your squads with transparent velocity metrics.',
    pillars: [
      'Flexible pods with SLAs and velocity dashboards',
      'Curated talent network across 12 countries',
      'Knowledge transfer baked into every engagement',
    ],
    metrics: [
      { label: 'Time to deploy', value: '3 weeks' },
      { label: 'Retention', value: '96%' },
    ],
  },
  {
    id: 'training',
    title: 'Training',
    headline: 'Upskill teams with hands-on academies.',
    description:
      'Capability academies pair live instruction with battle-tested accelerators so teams internalize modern delivery disciplines and AI best practices.',
    pillars: [
      'Custom curricula for leaders, makers, and operators',
      'Sandbox environments with real datasets',
      'Coaching circles and certification pathways',
    ],
    metrics: [
      { label: 'Learners certified', value: '4,000+' },
      { label: 'Skill uplift', value: '+32 points' },
    ],
  },
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    headline: 'Engineer platforms that scale responsibly.',
    description:
      'We design and run secure, cloud-native platforms with observability, DevSecOps, and automation baked in from day one.',
    pillars: [
      'Modernization & cloud migration accelerators',
      'AI copilots, workflow automation, and integrations',
      'Site reliability, FinOps, and managed evolution',
    ],
    metrics: [
      { label: 'Deployments per year', value: '120+' },
      { label: 'Release acceleration', value: '5 times' },
    ],
  },
];

const ServiceDetailSections = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 overflow-hidden" id="service-details">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-red-400 to-red-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-300 to-red-300 rounded-full blur-3xl opacity-70"></div>
      </div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#3b82f6 1.5px, transparent 1.5px), linear-gradient(90deg, #ef4444 1.5px, transparent 1.5px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Consulting · Staffing · Training · IT Solutions</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Depth across every service line</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Each offering includes strategy, experience, engineering, and change partners so we can move from idea to scaled value without handoffs.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {offerings.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-8 rounded-[32px] border border-gray-100 bg-gray-50/70 p-8 shadow-xl lg:flex-row lg:p-10"
            >
              <div className="lg:w-1/2">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">{service.title}</div>
                <h3 className="mt-3 text-3xl font-semibold text-gray-900">{service.headline}</h3>
                <p className="mt-4 text-base text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {service.pillars.map((pillar) => (
                    <li key={pillar} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 rounded-3xl border border-white/80 bg-white p-6 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Snapshot metrics</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-gray-50 p-4 text-center">
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                      <p className="text-xs uppercase tracking-wide text-gray-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={`/services/${service.id}`}
                  className="mt-8 block w-full rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg"
                >
                  Explore {service.title}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSections;
