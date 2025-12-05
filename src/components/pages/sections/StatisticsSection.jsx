import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Counter from './Counter';

const StatisticsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: 3480, suffix: '', label: 'Projects Completed' },
    { number: 428, suffix: '', label: 'IT Specialists' },
    { number: 6980, suffix: '', label: 'Happy Clients' },
    { number: 256, suffix: '', label: 'Smart Solutions' },
  ];

  return (
    <section 
      id="statistics" 
      data-header-theme="gradient"
      ref={ref} 
      className="py-20 bg-gradient-to-r from-blue-700 to-red-700 text-white"
    >
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
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {inView ? <Counter end={stat.number} suffix={stat.suffix} /> : '0'}
              </div>
              <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
