import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Growth & Learning',
    description: 'Annual learning budget, guilds, mentorship programs, and quarterly hack weeks focused on experimentation.',
  },
  {
    title: 'Flexibility & Wellbeing',
    description: 'Remote-first with regional studios, flexible PTO, wellness stipends, and inclusive benefits packages.',
  },
  {
    title: 'Impact & Ownership',
    description: 'Pod-based autonomy, exposure to global clients, and transparent career frameworks with shared success metrics.',
  },
];

const BenefitsSection = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Why Nexus AI</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Benefits that support your whole journey</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Our people programs are designed to keep you energized, challenged, and supported no matter where you are in your career.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-left shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900">{benefit.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
