import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/11.png';

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
  { label: 'Industry pods shipped', value: '120+' },
  { label: 'Markets covered', value: '18' },
  { label: 'Avg. uplift', value: '24%' },
];

const floaters = [
  { top: '10%', left: '14%', size: 10, delay: 0, speed: 5.5 },
  { top: '20%', left: '72%', size: 12, delay: 0.3, speed: 6.5 },
  { top: '34%', left: '26%', size: 9, delay: 0.6, speed: 7 },
  { top: '46%', left: '54%', size: 8, delay: 1, speed: 5.8 },
  { top: '58%', left: '20%', size: 11, delay: 0.8, speed: 6.8 },
  { top: '66%', left: '76%', size: 13, delay: 0.1, speed: 7.3 },
  { top: '78%', left: '46%', size: 9, delay: 0.5, speed: 6.1 },
  { top: '28%', left: '88%', size: 8, delay: 1.2, speed: 5.6 },
];

const IndustriesHero = () => (
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
    <div className="absolute inset-0 opacity-35 pointer-events-none z-0">
      <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300/50 bg-white/80 backdrop-blur-sm px-8 py-3.5 text-sm md:text-base uppercase tracking-[0.32em] text-gray-900 shadow-sm font-semibold">
              Industries
            </div>
            <div className="rounded-3xl border border-gray-300/50 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-700 mb-3">Proof, not promises</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-gray-300/30 bg-white/60 px-4 py-4 text-center"
                  >
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-gray-700">{stat.label}</p>
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

export default IndustriesHero;
