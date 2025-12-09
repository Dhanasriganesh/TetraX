import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/vectors/SL_122319_26350_22.jpg';

const metrics = [
  { label: 'Average response time', value: '<24h' },
  { label: 'Global clients supported', value: '350+' },
  { label: 'Support satisfaction', value: '4.9/5' },
];

const ContactHero = () => (
  <section 
    data-header-theme="hero"
    className="relative overflow-hidden min-h-screen py-28 text-white"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900/45 to-purple-900/50"></div>
    <div className="absolute inset-0 opacity-40">
      <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-blue-600 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-600 blur-[140px]"></div>
    </div>
    <div className="container relative mx-auto px-4 lg:px-12 min-h-[70vh] flex items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-4xl mx-auto space-y-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/80">Contact</p>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
          Share your goal. We'll move fast together.
        </h1>
        <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto">
          Strategy, design, and engineering teams ready to collaborate and ship outcomes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="rounded-full bg-white/90 px-6 py-3 text-xs font-semibold text-blue-900 shadow-xl hover:shadow-2xl transition">Schedule a call</button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactHero;
