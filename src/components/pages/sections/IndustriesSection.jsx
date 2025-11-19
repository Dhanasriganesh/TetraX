import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndustriesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const industries = [
    {
      title: 'Product Design',
      icon: '🧠',
    },
    {
      title: 'Smart Vision',
      icon: '🎯',
    },
    {
      title: 'Web Development',
      icon: '🛠️',
    },
    {
      title: 'Platform Integration',
      icon: '♾️',
    },
    {
      title: 'Financial Services',
      icon: '💹',
    },
    {
      title: 'Healthcare',
      icon: '⚕️',
    },
    {
      title: 'Media, Entertainment & Gaming',
      icon: '📺',
    },
    {
      title: 'Technology Enablement',
      icon: '📡',
    },
    {
      title: 'Telecommunications',
      icon: '📶',
    },
    {
      title: 'Energy',
      icon: '⚡',
    },
    {
      title: 'Consumer & Industrial Products',
      icon: '🏭',
    },
    {
      title: 'Transportation & Travel',
      icon: '✈️',
    },
  ];

  return (
    <section 
      id="industries" 
      data-header-theme="light"
      ref={ref} 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Industries
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">
            We Deal Industries
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-5 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-2xl transition-transform duration-500 group-hover:scale-110">
                  {industry.icon}
                </div>
                <h4 className="text-base font-bold text-gray-800">{industry.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
