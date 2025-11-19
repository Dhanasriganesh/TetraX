import React from 'react';
import { motion } from 'framer-motion';

const cultureHighlights = [
  {
    title: 'Community guilds',
    description: 'Weekly guild sessions across design, data, engineering, and delivery to share experiments and level up together.',
  },
  {
    title: 'Impact weeks',
    description: 'Company-wide events where teams focus on social impact, sustainability, and pro-bono innovation challenges.',
  },
  {
    title: 'Transparent rituals',
    description: 'Quarterly business reviews, open-source decision logs, and AMA sessions with leadership.',
  },
];

const CultureSection = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Culture</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">People-first rituals that spark innovation</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          We believe great work happens when teams feel psychologically safe, informed, and empowered to experiment.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cultureHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-left shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CultureSection;
