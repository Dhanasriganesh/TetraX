import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/abt-hero.png';

// Preload hero image since it's above the fold
const preloadHeroImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Preload on component mount
if (typeof window !== 'undefined') {
  preloadHeroImage(backgroundImage);
}

const stats = [
  { label: 'AI launches', value: '320+' },
  { label: 'Median ship', value: '6 weeks' },
  { label: 'Uptime seen', value: '99.9%' },
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
      className="relative overflow-hidden py-12 sm:py-14 md:py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 sm:-right-40 top-10 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full bg-blue-400 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-8 sm:-left-16 bottom-0 h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full bg-red-400 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -25, 0],
            y: [0, 25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute right-1/4 top-1/2 h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full bg-blue-300 blur-2xl hidden sm:block"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/3 bottom-1/4 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full bg-red-300 blur-2xl hidden sm:block"
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center py-6 sm:py-8 md:py-10">
          {/* Heading positioned exactly in the middle top between left and right sections */}
          <div className="absolute top-8 left-[50%] -translate-x-1/2 z-20 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center rounded-full border border-gray-300/50 bg-white/95 backdrop-blur-sm px-3 sm:px-4 md:px-4 py-1.5 sm:py-1.5 md:py-2 shadow-md"
            >
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-900 uppercase tracking-[0.25em] whitespace-nowrap">
                About Nexus AI
              </h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5 sm:space-y-6 md:space-y-8"
          >
          

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-2xl sm:rounded-3xl border border-gray-300/50 bg-white/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-sm">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-700 mb-2 sm:mb-3">Proof, not promises</p>
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl sm:rounded-2xl border border-gray-300/30 bg-white/60 px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 text-center"
                    >
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-gray-700 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl sm:rounded-3xl border border-gray-300/50 bg-white/80 backdrop-blur-sm p-3 sm:p-4 text-gray-800 text-xs sm:text-sm leading-relaxed">
                "We stay on after launch—observability, drift checks, human-in-the-loop. Stable AI is a practice, not a handoff."
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
