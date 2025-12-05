import React from 'react';
import { motion } from 'framer-motion';

const studies = [
  {
    industry: 'Retail & Consumer',
    headline: 'Unified loyalty platform boosts CLV 33%',
    detail: 'Designed a headless experience, AI promotions engine, and in-store copilots for 2,800 stores.',
    metrics: ['8 domains modernized', '5x release cadence', '45M members migrated'],
  },
  {
    industry: 'Healthcare',
    headline: 'Virtual care fabric covers 42 hospitals',
    detail: 'Co-created patient journeys, remote monitoring dashboards, and compliance-ready AI assistants.',
    metrics: ['NPS +23', 'Clinician adoption 82%', 'Go-live in 6 months'],
  },
  {
    industry: 'Energy & Utilities',
    headline: 'Automation control tower saves 1.2M hours',
    detail: 'Built digital twins, orchestration workflows, and capability academies for field engineers.',
    metrics: ['Predictive coverage worldwide', '90-day pilot to scale', '600 employees upskilled'],
  },
];

const CaseStudiesShowcaseSection = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 overflow-hidden">
    {/* Minimal ascending bars (representing growth/success) */}
    <motion.div 
      animate={{ 
        opacity: [0.3, 0.5, 0.3],
        y: [0, -10, 0]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0"
    >
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Blue bars - left side ascending */}
        <rect x="5%" y="70%" width="1.5" height="100" fill="rgba(29, 78, 216, 0.3)" rx="1"/>
        <rect x="8%" y="60%" width="1.5" height="150" fill="rgba(29, 78, 216, 0.35)" rx="1"/>
        <rect x="11%" y="50%" width="1.5" height="200" fill="rgba(29, 78, 216, 0.3)" rx="1"/>
        
        {/* Red bars - right side ascending */}
        <rect x="89%" y="70%" width="1.5" height="100" fill="rgba(185, 28, 28, 0.3)" rx="1"/>
        <rect x="92%" y="60%" width="1.5" height="150" fill="rgba(185, 28, 28, 0.35)" rx="1"/>
        <rect x="95%" y="50%" width="1.5" height="200" fill="rgba(185, 28, 28, 0.3)" rx="1"/>
        
        {/* Success path line (subtle upward curve) */}
        <path d="M 20%,80% Q 50%,30% 80%,40%" 
          fill="none" 
          stroke="rgba(29, 78, 216, 0.15)" 
          strokeWidth="1.5"
          strokeDasharray="5,5"/>
      </svg>
    </motion.div>
    
    {/* Soft gradient corners */}
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        x: [0, -20, 0],
        y: [0, -20, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"
    ></motion.div>
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        x: [0, 20, 0],
        y: [0, 20, 0]
      }}
      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-0 right-0 w-72 h-72 bg-red-300/15 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"
    ></motion.div>
    
    {/* Subtle achievement stars */}
    <motion.div 
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.5, 1]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-24 right-20 text-blue-600/15 text-3xl"
    >★</motion.div>
    <motion.div 
      animate={{ 
        rotate: [0, -360],
        scale: [1, 1.5, 1]
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-32 left-24 text-red-600/15 text-2xl"
    >★</motion.div>
    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Proof</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Co-authored results with ambitious teams</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {studies.map((study, index) => (
          <motion.div
            key={study.headline}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col rounded-3xl border border-white bg-white p-6 shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">{study.industry}</p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">{study.headline}</h3>
            <p className="mt-4 text-sm text-gray-600 flex-1">{study.detail}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {study.metrics.map((metric) => (
                <li key={metric} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-700"></span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
         
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesShowcaseSection;
