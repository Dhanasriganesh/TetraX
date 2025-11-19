import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Mission',
    description:
      'Engineer trustworthy AI and digital ecosystems that amplify human decision-making, accelerate innovation, and drive resilient growth for our clients.',
    highlights: ['Strategy, product, and delivery under one roof', 'Outcome-focused agile governance'],
  },
  {
    title: 'Vision',
    description:
      'Be the partner enterprises trust to navigate every wave of technological disruption with purpose, clarity, and measurable impact.',
    highlights: ['Industry blueprints for faster execution', 'Embedded change enablement'],
  },
  {
    title: 'Promise',
    description:
      'Design experiences people love, platforms teams can scale, and cultures empowered to continuously learn.',
    highlights: ['Inclusive collaboration rituals', 'Transparent impact metrics'],
  },
];

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Why we exist</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Purpose that inspires action</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Beyond delivering software, we build adaptive operating models where teams, systems, and data work in sync. Every engagement blends research, experimentation, and measurable business impact.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-8 shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600">
                {pillar.title}
              </div>
              <p className="text-lg font-medium text-gray-800">{pillar.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {pillar.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
