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
      className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-red-50 overflow-hidden"
    >
      {/* Minimal curved arcs */}
      <div className="absolute inset-0 opacity-40">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Blue arc top-left */}
          <path d="M 0,200 Q 200,50 400,200" 
            fill="none" 
            stroke="rgba(29, 78, 216, 0.3)" 
            strokeWidth="1.5"/>
          <path d="M 0,250 Q 250,80 500,250" 
            fill="none" 
            stroke="rgba(29, 78, 216, 0.2)" 
            strokeWidth="1"/>
          
          {/* Red arc bottom-right */}
          <path d="M 100%,80% Q 80%,90% 100%,100%" 
            fill="none" 
            stroke="rgba(185, 28, 28, 0.3)" 
            strokeWidth="1.5"/>
          <path d="M 95%,75% Q 75%,88% 95%,100%" 
            fill="none" 
            stroke="rgba(185, 28, 28, 0.2)" 
            strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Soft gradient orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"></div>
      
      {/* Minimal dots accent */}
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-blue-600/40 rounded-full"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-red-600/40 rounded-full"></div>
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Industries
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-red-700">
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
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-5 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-red-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-red-100 text-2xl transition-all duration-500 group-hover:bg-white group-hover:scale-110">
                  {industry.icon}
                </div>
                <h4 className="text-base font-bold text-gray-800 transition-colors duration-500 group-hover:text-white">{industry.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
