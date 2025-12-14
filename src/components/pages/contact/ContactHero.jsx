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
    className="relative overflow-hidden min-h-screen py-16 sm:py-20 md:py-24 lg:py-28 text-white"
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
      <div className="absolute -left-8 sm:-left-16 top-8 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-blue-600 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 rounded-full bg-purple-600 blur-[140px]"></div>
    </div>
    <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/80 px-2">Contact</p>
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-2">
          Share your goal. We'll move fast together.
        </h1>
        <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6">
          Strategy, design, and engineering teams ready to collaborate and ship outcomes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center px-4">
          <a 
            href="tel:+917793992217" 
            className="rounded-full bg-white/90 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-blue-900 shadow-xl hover:shadow-2xl transition inline-block"
          >
            Schedule a call
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactHero;
