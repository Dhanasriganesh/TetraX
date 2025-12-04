import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    phase: 'Discover',
    detail: 'Immersion, value modeling, and rapid concept validation to align executives and product teams.',
  },
  {
    phase: 'Design',
    detail: 'Blueprint customer journeys, platform architectures, and AI guardrails with measurable hypotheses.',
  },
  {
    phase: 'Build',
    detail: 'Multidisciplinary pods ship increments with automated QA, telemetry, and enablement baked in.',
  },
  {
    phase: 'Scale',
    detail: 'Launch kits, capability academies, and managed evolution ensure adoption and continuous improvement.',
  },
];

const VelocityProcessSection = () => (
  <section className="relative bg-gradient-to-br from-blue-100 via-blue-50/40 to-red-100 py-20 overflow-hidden">
    {/* Diagonal flowing lines representing velocity and movement */}
    <div className="absolute inset-0 opacity-60">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'rgb(29, 78, 216)', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: 'rgb(29, 78, 216)', stopOpacity: 0.1}} />
          </linearGradient>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'rgb(185, 28, 28)', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: 'rgb(185, 28, 28)', stopOpacity: 0.1}} />
          </linearGradient>
        </defs>
        {/* Diagonal speed lines - blue */}
        <line x1="0" y1="0" x2="200" y2="150" stroke="url(#blueGrad)" strokeWidth="2"/>
        <line x1="100" y1="0" x2="400" y2="200" stroke="url(#blueGrad)" strokeWidth="1.5"/>
        <line x1="250" y1="0" x2="600" y2="250" stroke="url(#blueGrad)" strokeWidth="2"/>
        <line x1="400" y1="0" x2="800" y2="300" stroke="url(#blueGrad)" strokeWidth="1.5"/>
        <line x1="600" y1="0" x2="1000" y2="350" stroke="url(#blueGrad)" strokeWidth="2"/>
        <line x1="800" y1="0" x2="1200" y2="400" stroke="url(#blueGrad)" strokeWidth="1.5"/>
        <line x1="1000" y1="0" x2="1400" y2="450" stroke="url(#blueGrad)" strokeWidth="2"/>
        
        {/* Diagonal speed lines - red */}
        <line x1="1920" y1="0" x2="1720" y2="150" stroke="url(#redGrad)" strokeWidth="2"/>
        <line x1="1820" y1="0" x2="1520" y2="200" stroke="url(#redGrad)" strokeWidth="1.5"/>
        <line x1="1670" y1="0" x2="1320" y2="250" stroke="url(#redGrad)" strokeWidth="2"/>
        <line x1="1520" y1="0" x2="1120" y2="300" stroke="url(#redGrad)" strokeWidth="1.5"/>
        <line x1="1320" y1="0" x2="920" y2="350" stroke="url(#redGrad)" strokeWidth="2"/>
        <line x1="1120" y1="0" x2="720" y2="400" stroke="url(#redGrad)" strokeWidth="1.5"/>
        <line x1="920" y1="0" x2="520" y2="450" stroke="url(#redGrad)" strokeWidth="2"/>
        
        {/* Bottom section */}
        <line x1="0" y1="1080" x2="300" y2="850" stroke="url(#blueGrad)" strokeWidth="1.5"/>
        <line x1="200" y1="1080" x2="550" y2="800" stroke="url(#blueGrad)" strokeWidth="2"/>
        <line x1="500" y1="1080" x2="900" y2="750" stroke="url(#blueGrad)" strokeWidth="1.5"/>
        
        <line x1="1920" y1="1080" x2="1620" y2="850" stroke="url(#redGrad)" strokeWidth="1.5"/>
        <line x1="1720" y1="1080" x2="1370" y2="800" stroke="url(#redGrad)" strokeWidth="2"/>
        <line x1="1420" y1="1080" x2="1020" y2="750" stroke="url(#redGrad)" strokeWidth="1.5"/>
      </svg>
    </div>
    
    {/* Connected nodes pattern representing process flow */}
    <div className="absolute inset-0 opacity-50">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Network nodes - blue side */}
        <circle cx="15%" cy="20%" r="4" fill="rgb(29, 78, 216)" opacity="0.8"/>
        <circle cx="25%" cy="40%" r="3" fill="rgb(29, 78, 216)" opacity="0.8"/>
        <circle cx="20%" cy="60%" r="3.5" fill="rgb(29, 78, 216)" opacity="0.8"/>
        <circle cx="30%" cy="80%" r="3" fill="rgb(29, 78, 216)" opacity="0.8"/>
        
        {/* Network nodes - red side */}
        <circle cx="85%" cy="20%" r="4" fill="rgb(185, 28, 28)" opacity="0.8"/>
        <circle cx="75%" cy="40%" r="3" fill="rgb(185, 28, 28)" opacity="0.8"/>
        <circle cx="80%" cy="60%" r="3.5" fill="rgb(185, 28, 28)" opacity="0.8"/>
        <circle cx="70%" cy="80%" r="3" fill="rgb(185, 28, 28)" opacity="0.8"/>
        
        {/* Connection lines */}
        <line x1="15%" y1="20%" x2="25%" y2="40%" stroke="rgb(29, 78, 216)" strokeWidth="1.5" opacity="0.7"/>
        <line x1="25%" y1="40%" x2="20%" y2="60%" stroke="rgb(29, 78, 216)" strokeWidth="1.5" opacity="0.7"/>
        <line x1="20%" y1="60%" x2="30%" y2="80%" stroke="rgb(29, 78, 216)" strokeWidth="1.5" opacity="0.7"/>
        
        <line x1="85%" y1="20%" x2="75%" y2="40%" stroke="rgb(185, 28, 28)" strokeWidth="1.5" opacity="0.7"/>
        <line x1="75%" y1="40%" x2="80%" y2="60%" stroke="rgb(185, 28, 28)" strokeWidth="1.5" opacity="0.7"/>
        <line x1="80%" y1="60%" x2="70%" y2="80%" stroke="rgb(185, 28, 28)" strokeWidth="1.5" opacity="0.7"/>
      </svg>
    </div>
    
    {/* Glowing orbs for depth */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"></div>
    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Delivery rhythm</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Velocity without sacrificing rigor</h2>
      </div>
      <div className="relative mt-14">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-600 to-red-600 md:left-1/2" />
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative rounded-3xl border border-white/60 bg-gray-50 p-6 shadow-xl md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
              }`}
            >
              <span className="absolute -left-2 top-6 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-blue-700 to-red-700 md:left-auto md:-right-2" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">Phase 0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{step.phase}</h3>
              <p className="mt-3 text-sm text-gray-600">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VelocityProcessSection;
