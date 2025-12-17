import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/14.png';

const metrics = [
  { label: 'Studios worldwide', value: '6' },
  { label: 'Team members', value: '420+' },
  { label: 'Employee engagement', value: '82%' },
];

const signals = [
  'Hybrid-first: hubs + remote-friendly pods',
  'Learning budget, guilds, and mentorship',
  'Inclusive rituals and transparent growth paths',
];

const floaters = [
  { top: '12%', left: '16%', size: 10, delay: 0, speed: 5.5 },
  { top: '22%', left: '68%', size: 12, delay: 0.3, speed: 6.5 },
  { top: '34%', left: '28%', size: 9, delay: 0.6, speed: 7 },
  { top: '46%', left: '54%', size: 8, delay: 1, speed: 5.8 },
  { top: '60%', left: '20%', size: 11, delay: 0.8, speed: 6.8 },
  { top: '66%', left: '76%', size: 13, delay: 0.1, speed: 7.3 },
  { top: '78%', left: '46%', size: 9, delay: 0.5, speed: 6.1 },
  { top: '30%', left: '86%', size: 8, delay: 1.1, speed: 5.6 },
];

const CareersHero = () => (
  <section
    data-header-theme="hero"
    className="relative overflow-hidden py-16"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Accent glows and floating elements */}
    <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
      <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500 blur-[140px]"></div>
      <div className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-blue-300 blur-[120px]"></div>

      {floaters.map((item, idx) => (
        <motion.span
          key={idx}
          className="absolute rounded-full bg-white/70 mix-blend-screen"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
          }}
          animate={{
            y: [0, -16, 6, -12, 0],
            x: [0, 8, -4, 10, 0],
            opacity: [0.25, 0.9, 0.35, 0.85, 0.25],
            rotate: [0, 6, -4, 8, 0],
          }}
          transition={{
            duration: item.speed,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="grid lg:grid-cols-3 gap-10 items-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-300/50 bg-white/80 backdrop-blur-sm px-8 py-3.5 text-sm md:text-base uppercase tracking-[0.32em] text-gray-900 shadow-sm font-semibold">
            Careers
          </div>
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Join the pod that ships AI people can trust.
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              Cross-functional squads of designers, engineers, data scientists, and researchers building products end-to-end—backed by growth, autonomy, and inclusive rituals.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {signals.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300/50 bg-white/80 px-4 py-2 text-sm text-gray-900 backdrop-blur-sm shadow-sm w-fit"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_0_6px_rgba(96,165,250,0.15)]"></span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-1"
        >
        
        </motion.div>
      </div>
    </div>
  </section>
);

export default CareersHero;
