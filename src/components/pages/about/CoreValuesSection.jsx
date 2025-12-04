import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Integrity in Action',
    description: 'We operate with radical transparency - clarity in scope, inclusive decision making, and accountable delivery.',
  },
  {
    title: 'Invent Boldly',
    description: 'Curiosity drives us. We prototype early, test quickly, and shape new playbooks informed by data and empathy.',
  },
  {
    title: 'Elevate People',
    description: 'We invest in talent mobility, mentorship, and equitable opportunities so multidisciplinary teams thrive.',
  },
  {
    title: 'Outcomes over Output',
    description: 'Success is measured by business impact, adoption, and cultural readiness - not just code shipped.',
  },
  {
    title: 'Sustainable Delivery',
    description: 'From responsible AI guardrails to carbon-aware architectures, we build solutions that last.',
  },
  {
    title: 'Partnership Mindset',
    description: 'We co-create with clients, blending our expertise with their domain depth for shared success.',
  },
];

const CoreValuesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 overflow-hidden">
      {/* Geometric shapes background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-blue-300 rotate-45"></div>
        <div className="absolute top-40 right-20 w-48 h-48 border-2 border-red-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-56 h-56 border-2 border-blue-400 -rotate-12"></div>
        <div className="absolute bottom-10 right-1/3 w-40 h-40 border-2 border-red-400 rotate-45 rounded-full"></div>
        <svg className="absolute top-1/3 right-1/4 w-32 h-32 text-blue-300" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-1/3 left-1/3 w-28 h-28 text-red-300" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Core values</p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">Principles that guide every engagement</h2>
          </div>
          <p className="max-w-2xl text-lg text-gray-600">
            Our teams operate as extensions of our clients. We listen, we adapt, and we codify best practices into reusable accelerators that continue to deliver value long after launch.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl border border-transparent bg-white/90 p-6 text-left shadow-lg shadow-blue-100 hover:-translate-y-1 hover:border-blue-200 hover:shadow-blue-200"
            >
              <div className="text-sm font-semibold uppercase tracking-wide text-blue-500">0{index + 1}</div>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-3 text-base text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
