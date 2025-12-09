import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/vectors/3281395.jpg';

const stats = [
  { label: 'AI builds delivered', value: '180+' },
  { label: 'Median launch', value: '6 wks' },
  { label: 'Reusable accelerators', value: '25' },
  { label: 'Cloud migrations', value: '140+' },
];

const signals = [
  'Product + data + engineering in one pod',
  'Launch, observe, and iterate — no handoffs',
  'Safety, privacy, and compliance baked in',
];

const floaters = [
  { top: '10%', left: '14%', size: 10, delay: 0, speed: 5.5 },
  { top: '18%', left: '70%', size: 12, delay: 0.3, speed: 6.5 },
  { top: '32%', left: '24%', size: 9, delay: 0.6, speed: 7 },
  { top: '42%', left: '52%', size: 8, delay: 1, speed: 5.8 },
  { top: '60%', left: '18%', size: 11, delay: 0.8, speed: 6.8 },
  { top: '64%', left: '74%', size: 13, delay: 0.1, speed: 7.3 },
  { top: '78%', left: '46%', size: 9, delay: 0.5, speed: 6.1 },
  { top: '26%', left: '88%', size: 8, delay: 1.2, speed: 5.6 },
];

const ServicesHero = () => {
  return (
    <section
      data-header-theme="hero"
      className="relative overflow-hidden py-16 text-white"
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
      <div className="absolute inset-0 opacity-35 pointer-events-none z-0">
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-400 blur-[140px]"></div>
        <div className="absolute top-1/2 left-1/3 h-80 w-80 rounded-full bg-blue-300 blur-[120px]"></div>

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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-sm md:text-base uppercase tracking-[0.32em] text-white/90 shadow-sm font-semibold">
              Our Services
            </div>
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                AI services built to land in production.
              </h1>
              <p className="text-lg text-white/85 leading-relaxed">
                One embedded pod—product, design, data, and engineering—shipping with observability, guardrails, and accelerators so you move faster without breaking things.
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
