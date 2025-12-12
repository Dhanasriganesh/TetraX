import React from 'react';
import { motion } from 'framer-motion';
import insightsImage from '../../../assets/home-section/insights.png';

const insights = [
  {
    title: 'Building trustworthy AI copilots across regulated industries',
    category: 'Perspective',
    author: 'Priya Nair',
  },
  {
    title: 'Design systems as operating systems for omni-channel brands',
    category: 'Playbook',
    author: 'Matthew Cole',
  },
  {
    title: 'Telemetry-first DevOps: how to scale releases without burnout',
    category: 'Guide',
    author: 'Nora Valdez',
  },
];

const InsightsSection = () => (
  <section className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-12 sm:py-16 md:py-20 overflow-hidden">
    <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-2xl sm:rounded-3xl md:rounded-[32px] overflow-hidden opacity-50">
      <img
        src={insightsImage}
        alt="Insights visual"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 to-white/20" />
    </div>
    {/* Minimal radiating lines from corners */}
    <motion.div 
      animate={{ 
        opacity: [0.35, 0.55, 0.35],
        rotate: [0, 5, 0]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0"
      style={{ transformOrigin: 'center' }}
    >
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Lines from top-right (blue) */}
        <line x1="100%" y1="0" x2="80%" y2="20%" stroke="rgba(29, 78, 216, 0.3)" strokeWidth="1"/>
        <line x1="100%" y1="0" x2="70%" y2="15%" stroke="rgba(29, 78, 216, 0.25)" strokeWidth="0.8"/>
        <line x1="100%" y1="0" x2="75%" y2="25%" stroke="rgba(29, 78, 216, 0.2)" strokeWidth="0.8"/>
        
        {/* Lines from bottom-left (red) */}
        <line x1="0" y1="100%" x2="20%" y2="80%" stroke="rgba(185, 28, 28, 0.3)" strokeWidth="1"/>
        <line x1="0" y1="100%" x2="15%" y2="70%" stroke="rgba(185, 28, 28, 0.25)" strokeWidth="0.8"/>
        <line x1="0" y1="100%" x2="25%" y2="75%" stroke="rgba(185, 28, 28, 0.2)" strokeWidth="0.8"/>
      </svg>
    </motion.div>
    
    {/* Soft corner gradients */}
    <motion.div 
      animate={{ 
        scale: [1, 1.4, 1],
        x: [0, 30, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-300/15 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"
    ></motion.div>
    <motion.div 
      animate={{ 
        scale: [1, 1.4, 1],
        x: [0, -30, 0],
        y: [0, 30, 0]
      }}
      transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-red-300/15 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"
    ></motion.div>
    
    {/* Simple accent circle */}
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-blue-600/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden sm:block"
    ></motion.div>
    <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Insights</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
            Latest thinking from our studios
          </h2>
        </div>
       
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
        {insights.map((insight, index) => (
          <motion.article
            key={insight.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-2xl sm:rounded-3xl border border-gray-100 bg-gray-50 p-4 sm:p-5 md:p-6 shadow-lg"
          >
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-red-700">{insight.category}</p>
            <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">{insight.title}</h3>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">{insight.author}</p>
           
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;
