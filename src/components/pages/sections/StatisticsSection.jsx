import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Snowfall from 'react-snowfall';
import Counter from './Counter';
import statsImage from '../../../assets/home-section/statistics.webp';

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
      className="relative bg-blue-950 py-12 sm:py-16 md:py-20 text-white overflow-hidden"
    >
      {/* Snowfall Effect (matching other blue sections) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Snowfall
          color="#ffffff"
          snowflakeCount={150}
          speed={[1.0, 3.0]}
          wind={[-0.5, 2.0]}
          radius={[0.5, 3.0]}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Optional subtle overlay/background image */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute inset-0" />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center px-2 sm:px-0"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1.5 sm:mb-2 text-white">
                {inView ? <Counter end={stat.number} suffix={stat.suffix} /> : '0'}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl opacity-90 leading-tight text-white/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
