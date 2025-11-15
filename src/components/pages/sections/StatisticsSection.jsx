import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Counter from './Counter';

const StatisticsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const stats = [
    { number: 15, suffix: '+', label: 'Years of experience' },
    { number: 440, suffix: '+', label: 'Full-Time AI Professionals' },
    { number: 20, suffix: '+', label: 'Projects executed' },
    { number: 70, suffix: '+', label: 'Customers worldwide' },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                {inView ? <Counter end={stat.number} suffix={stat.suffix} /> : '0'}
              </div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

