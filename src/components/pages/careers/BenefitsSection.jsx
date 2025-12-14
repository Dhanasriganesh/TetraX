import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Growth & Learning',
    description: 'Annual learning budget, guilds, mentorship programs, and quarterly hack weeks focused on experimentation.',
  },
  {
    title: 'Flexibility & Wellbeing',
    description: 'Remote-first with regional studios, flexible paid time off, wellness stipends, and inclusive benefits packages.',
  },
  {
    title: 'Impact & Ownership',
    description: 'Pod-based autonomy, exposure to global clients, and transparent career frameworks with shared success metrics.',
  },
];

const BenefitsSection = () => (
  <section className="relative bg-gradient-to-br from-red-100 via-white to-blue-100 py-12 sm:py-16 md:py-20 overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl"></div>
    </div>
    <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Why Nexus AI</p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">Benefits that support your whole journey</h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 px-4">
          Our people programs are designed to keep you energized, challenged, and supported no matter where you are in your career.
        </p>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-2xl sm:rounded-3xl border border-gray-100 bg-gray-50 p-4 sm:p-5 md:p-6 text-left shadow-lg"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">{benefit.title}</h3>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
