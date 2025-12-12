import React from 'react';
import { motion } from 'framer-motion';
import partnershipImage from '../../../assets/banners/fullstackbanner.png';

const commitments = [
  'Co-create a 90-day transformation roadmap',
  'Stand up a blended team in under 3 weeks',
  'Prototype AI copilots with measurable ROI',
];

const AboutCTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-red-50 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Grid mesh background */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0 0', '80px 80px']
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.08
        }}
      ></motion.div>
      <motion.div 
        animate={{ 
          backgroundPosition: ['0 0', '20px 20px']
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.05
        }}
      ></motion.div>
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
      ></motion.div>
      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-red-200 rounded-full blur-3xl opacity-20"
      ></motion.div>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl sm:rounded-3xl md:rounded-[40px] bg-gradient-to-r from-blue-600 via-red-600 to-blue-700 p-6 sm:p-8 md:p-10 text-white shadow-2xl overflow-hidden group"
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            initial={false}
          >
            <motion.img
              src={partnershipImage}
              alt="Partnership"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-red-900/80 to-blue-900/80" />
          </motion.div>
          
          <div className="relative z-10 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/70">Partner with us</p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight px-1 sm:px-0">
                Ready to design the next chapter of your business?
              </h2>
              <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                We meet you where you are - kickstarting transformation with strategy sprints, capability academies, and pod-based delivery models tuned to your outcomes.
              </p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-white/10 p-4 sm:p-5 md:p-6 lg:flex-shrink-0 lg:w-80">
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/90">
                {commitments.map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3">
                    <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/20 text-xs flex-shrink-0">+</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
