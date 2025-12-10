import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/vectors/4703133.jpg';

const stats = [
  { label: 'AI launches', value: '320+' },
  { label: 'Median ship', value: '6 weeks' },
  { label: 'Uptime seen', value: '99.9%' },
];

const signals = [
  'E-Verified, enterprise-ready',
  'Design + data + engineering, embedded',
  
];

const floaters = [
  { top: '8%', left: '12%', size: 10, delay: 0, speed: 5 },
  { top: '18%', left: '32%', size: 9, delay: 0.2, speed: 6 },
  { top: '22%', left: '78%', size: 12, delay: 0.4, speed: 7 },
  { top: '36%', left: '56%', size: 8, delay: 0.9, speed: 5.5 },
  { top: '48%', left: '18%', size: 8, delay: 0.8, speed: 6.5 },
  { top: '58%', left: '65%', size: 14, delay: 0.2, speed: 7.5 },
  { top: '32%', left: '46%', size: 9, delay: 0.6, speed: 5.8 },
  { top: '62%', left: '28%', size: 11, delay: 1.1, speed: 6.2 },
  { top: '70%', left: '82%', size: 11, delay: 1, speed: 7.2 },
  { top: '76%', left: '54%', size: 7, delay: 0.5, speed: 5.3 },
];

const AboutHero = () => {
  return (
    <section 
      data-header-theme="hero"
      className="relative overflow-hidden py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-blue-900/60 to-purple-900/65"></div>
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-400 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-red-400 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -25, 0],
            y: [0, 25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-blue-300 blur-2xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/3 bottom-1/4 h-48 w-48 rounded-full bg-red-300 blur-2xl"
        ></motion.div>

        {/* Floating micro elements */}
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
        <div className="grid lg:grid-cols-3 gap-10 items-center py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-sm md:text-base uppercase tracking-[0.32em] text-white/90 shadow-sm font-semibold">
              About Nexus AI
            </div>
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                AI that survives real users.
              </h1>
              <p className="text-lg text-white/85 leading-relaxed">
                We build, launch, and babysit your AI in production. One embedded crew—product, design, data, and engineering—owning outcomes, not presentations.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {signals.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm shadow-sm w-fit"
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
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/25 bg-white/10 backdrop-blur-sm p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-3">Proof, not promises</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center"
                    >
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-white/80 text-sm leading-relaxed">
                “We stay on after launch—observability, drift checks, human-in-the-loop. Stable AI is a practice, not a handoff.”
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
