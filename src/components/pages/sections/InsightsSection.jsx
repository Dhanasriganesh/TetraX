import React from 'react';
import { motion } from 'framer-motion';

const insights = [
  {
    title: 'Building trustworthy AI copilots across regulated industries',
    category: 'Perspective',
    author: 'Priya Nair',
    time: '6 min read',
  },
  {
    title: 'Design systems as operating systems for omni-channel brands',
    category: 'Playbook',
    author: 'Matthew Cole',
    time: '8 min read',
  },
  {
    title: 'Telemetry-first DevOps: how to scale releases without burnout',
    category: 'Guide',
    author: 'Nora Valdez',
    time: '7 min read',
  },
];

const InsightsSection = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Insights</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Latest thinking from our studios</h2>
        </div>
       
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {insights.map((insight, index) => (
          <motion.article
            key={insight.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">{insight.category}</p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">{insight.title}</h3>
            <p className="mt-4 text-sm text-gray-600">{insight.author} â€¢ {insight.time}</p>
           
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;
