import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/vectors/SL-072223-61700-24.jpg';

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
    className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 text-white min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-blue-900/60 to-purple-900/65"></div>

    {/* Accent glows and floating elements */}
    <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
      <div className="absolute -left-8 sm:-left-12 md:-left-16 top-8 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-blue-500 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 rounded-full bg-purple-500 blur-[140px]"></div>
      <div className="absolute top-1/2 left-1/3 h-36 w-36 sm:h-56 sm:w-56 md:h-72 md:w-72 rounded-full bg-blue-300 blur-[120px]"></div>

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

    <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center py-8 sm:py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.28em] md:tracking-[0.32em] text-white/90 shadow-sm font-semibold">
            Careers
          </div>
          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-1">
              Join the pod that ships AI people can trust.
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed px-1">
              Cross-functional squads of designers, engineers, data scientists, and researchers building products end-to-end—backed by growth, autonomy, and inclusive rituals.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3">
            {signals.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white/90 backdrop-blur-sm shadow-sm w-fit"
              >
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_0_4px_rgba(96,165,250,0.15)] sm:shadow-[0_0_0_6px_rgba(96,165,250,0.15)]"></span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-1 mt-8 lg:mt-0"
        >
          <div className="space-y-4">
            <div className="rounded-2xl sm:rounded-3xl border border-white/25 bg-white/10 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-sm">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/70 mb-2 sm:mb-3">Proof, not promises</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-3 sm:py-4 text-center"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-white">{metric.value}</p>
                    <p className="mt-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-white/70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CareersHero;
