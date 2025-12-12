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
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 sm:py-16 md:py-20 overflow-hidden" id="service-details">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-56 h-56 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tl from-red-400 to-red-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-blue-300 to-red-300 rounded-full blur-3xl opacity-70 hidden sm:block"></div>
      </div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#3b82f6 1.5px, transparent 1.5px), linear-gradient(90deg, #ef4444 1.5px, transparent 1.5px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-blue-600 px-2 sm:px-0">Consulting · Staffing · Training · IT Solutions</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
            Depth across every service line
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
            Each offering includes strategy, experience, engineering, and change partners so we can move from idea to scaled value without handoffs.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 space-y-6 sm:space-y-8 md:space-y-10">
          {offerings.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6 sm:gap-7 md:gap-8 rounded-2xl sm:rounded-3xl md:rounded-[32px] border border-gray-100 bg-gray-50/70 p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl lg:flex-row"
            >
              <div className="lg:w-1/2">
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-blue-500">{service.title}</div>
                <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">{service.headline}</h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm text-gray-700">
                  {service.pillars.map((pillar) => (
                    <li key={pillar} className="flex items-start gap-2 sm:gap-3">
                      <span className="mt-1 sm:mt-1.5 md:mt-2 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span className="leading-relaxed">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 rounded-2xl sm:rounded-3xl border border-white/80 bg-white p-4 sm:p-5 md:p-6 shadow-lg">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500">Snapshot metrics</p>
                <div className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl sm:rounded-2xl bg-gray-50 p-3 sm:p-4 text-center">
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">{metric.value}</p>
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs uppercase tracking-wide text-gray-500 leading-tight">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={`/services/${service.id}`}
                  className="mt-6 sm:mt-7 md:mt-8 block w-full rounded-full bg-blue-600 px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 text-center text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
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
