import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndustriesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const industries = [
    {
      title: 'Automobile & Mobility',
      icon: '🚗',
      accent: 'from-orange-500/10 to-orange-500/5',
    },
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
      <motion.div 
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
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
      </motion.div>
      
      {/* Soft gradient orbs */}
      <motion.div 
        animate={{ 
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"
      ></motion.div>
      
      {/* Minimal dots accent */}
      <motion.div 
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-1/4 w-2 h-2 bg-blue-600/40 rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-1/4 w-2 h-2 bg-red-600/40 rounded-full"
      ></motion.div>
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Domain depth</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Industries we power
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From mobility to media, every program is tailored with industry-specific playbooks, controls, and partners.
          </p>
        </motion.div>



        {/* Grid for all industries */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-5 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-red-600 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
              <div className="relative flex items-center gap-3">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-red-100 text-2xl transition-all duration-500 group-hover:bg-white group-hover:scale-110 ${industry.accent || ''}`}>
                  {industry.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-gray-900 transition-colors duration-500 group-hover:text-blue-700">{industry.title}</h4>
                  <p className="text-xs text-gray-500">Use-case accelerators ready to deploy.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
