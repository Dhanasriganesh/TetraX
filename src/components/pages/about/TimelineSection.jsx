import React from 'react';
import { motion } from 'framer-motion';
import growthImage from '../../../assets/banners/industrybanner.png';
import journeyImage from '../../../assets/wolrdlocation.jpg';

const milestones = [
  {
    year: '2010',
    title: 'Founded in Charlotte',
    description: 'Launched with a focus on cloud-native engineering for financial services.',
  },
  {
    year: '2015',
    title: 'Global delivery hubs',
    description: 'Opened innovation labs in Toronto and Lisbon, expanding 24/6 coverage.',
  },
  {
    year: '2018',
    title: 'Experience & Data studio',
    description: 'Merged design research, data science, and AI engineering under one practice.',
  },
  {
    year: '2022',
    title: 'Responsible AI framework',
    description: 'Published our Responsible Intelligence playbook adopted by Fortune 500 partners.',
  },
  {
    year: '2025',
    title: 'Adaptive enterprise platform',
    description: 'Launched modular platform accelerators powering retail, healthcare, and energy clients.',
  },
];

const TimelineSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-red-50/20 to-white py-20 overflow-hidden">
      {/* Abstract network/connection pattern - continuous flow */}
      <div className="absolute inset-0 opacity-20">
        <motion.svg 
          className="absolute w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <pattern id="connection-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Blue connections */}
              <motion.line 
                x1="0" y1="0" x2="50" y2="50" 
                stroke="#1e40af" 
                strokeWidth="1.5" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.line 
                x1="50" y1="50" x2="100" y2="30" 
                stroke="#1e40af" 
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.line 
                x1="100" y1="30" x2="150" y2="70" 
                stroke="#991b1b" 
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
              <motion.line 
                x1="150" y1="70" x2="200" y2="50" 
                stroke="#991b1b" 
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              />
              {/* Red connections */}
              <motion.line 
                x1="0" y1="100" x2="60" y2="120" 
                stroke="#991b1b" 
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              />
              <motion.line 
                x1="60" y1="120" x2="120" y2="100" 
                stroke="#1e40af" 
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
              <motion.line 
                x1="120" y1="100" x2="180" y2="130" 
                stroke="#991b1b" 
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              />
              {/* Nodes - pulsing */}
              <motion.circle 
                cx="50" cy="50" r="4" 
                fill="#1e40af"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="100" cy="30" r="4" 
                fill="#991b1b"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.circle 
                cx="150" cy="70" r="4" 
                fill="#1e40af"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
              <motion.circle 
                cx="60" cy="120" r="4" 
                fill="#991b1b"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              />
              <motion.circle 
                cx="120" cy="100" r="4" 
                fill="#1e40af"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              />
            </pattern>
          </defs>
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#connection-pattern)"
            animate={{ 
              x: [0, 200],
              y: [0, 200]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </motion.svg>
      </div>
      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full blur-3xl opacity-10"
      ></motion.div>
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-800 to-red-900 rounded-full blur-3xl opacity-10"
      ></motion.div>
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-900 rounded-full blur-3xl opacity-5"
      ></motion.div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Journey</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Momentum built year after year</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Growth driven by long-term partnerships, not project volume. Every milestone represents a new capability that clients leverage today.
          </p>
        </div>

        {/* Timeline Image Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-3xl overflow-hidden shadow-2xl group max-w-5xl mx-auto"
        >
          <motion.img
            src={journeyImage}
            alt="Our Journey"
            className="w-full h-64 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute inset-y-0 left-5 w-px bg-gradient-to-b from-blue-500/40 to-red-500/40 sm:left-8"></div>
          <div className="space-y-10 border-l border-transparent pl-12 sm:pl-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl overflow-hidden"
              >
                {/* Background Image on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  initial={false}
                >
                  <motion.img
                    src={growthImage}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.2, rotate: 3 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
                
                <div className="relative z-10">
                <span className="absolute -left-9 top-6 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-red-500 text-xs font-semibold text-white">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900">{milestone.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
