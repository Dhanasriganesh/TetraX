import React from 'react';
import { motion } from 'framer-motion';

const channels = [
  {
    title: 'Partnerships & Sales',
    description: 'Exploring new initiatives, co-innovation, or platform builds.',
    email: 'careers@nexusaisol.com',
    response: '2 business days',
  },
  {
    title: 'Support & Client Delivery',
    description: 'Active engagement support, production issues, or roadmap planning.',
    email: 'careers@nexusaisol.com',
    response: 'Same day',
  },
  {
    title: 'Talent & Media',
    description: 'Careers, speaking opportunities, or media inquiries.',
    email: 'careers@nexusaisol.com',
    response: '3 business days',
  },
];

const SupportChannelsSection = () => (
  <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Channels</p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">Route your request</h2>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {channels.map((channel, index) => (
          <motion.div
            key={channel.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-2xl sm:rounded-3xl border border-white bg-white p-4 sm:p-5 md:p-6 shadow-xl"
          >
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-500">{channel.response} response</p>
            <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">{channel.title}</h3>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">{channel.description}</p>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-blue-700 break-all">{channel.email}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SupportChannelsSection;
