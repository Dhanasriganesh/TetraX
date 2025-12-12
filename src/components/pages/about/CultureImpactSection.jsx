import React from 'react';
import { motion } from 'framer-motion';
import cultureImage from '../../../assets/about-section/culture.jpg';
import impactImage from '../../../assets/banners/transportbanner.png';
import commit from '../../../assets/about-section/commit.png';
const commitments = [
  'Diversity, equity, and inclusion targets tied to leadership OKRs',
  'Pro-bono innovation programs for nonprofits driving social impact',
  'Carbon-aware architecture guidelines baked into every technical review',
  'Talent exchanges and residencies that upskill client teams in real time',
];

const CultureImpactSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-red-50 to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24 text-gray-900 overflow-hidden">
      {/* Modern layered gradient shapes */}
      <div className="absolute inset-0">
        {/* Large flowing gradients */}
        <motion.div 
          animate={{ 
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/3 -right-1/4 w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] md:w-[900px] md:h-[900px] rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] rounded-full blur-3xl hidden sm:block"
        ></motion.div>
      </div>
      
      {/* Geometric overlay pattern */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          backgroundPosition: ['0 0', '80px 80px']
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #1e3a8a 1px, transparent 1px),
            linear-gradient(to bottom, #1e3a8a 1px, transparent 1px),
            linear-gradient(to right, #7f1d1d 1px, transparent 1px),
            linear-gradient(to bottom, #7f1d1d 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 60px 60px, 60px 60px',
          backgroundPosition: '0 0, 0 0, 50px 50px, 50px 50px'
        }}></div>
      </motion.div>

      {/* Floating accent shapes */}
      <motion.div 
        animate={{ 
          rotate: [12, 192, 12],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 border-blue-900/50 rounded-lg backdrop-blur-sm hidden sm:block"
        style={{ rotate: 12 }}
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -25, 0],
          y: [0, 25, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-2 border-red-900/50 rounded-full backdrop-blur-sm hidden sm:block"
      ></motion.div>
      <motion.div 
        animate={{ 
          rotate: [-45, 315, -45],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-blue-900/40 backdrop-blur-sm hidden md:block"
        style={{ rotate: -45 }}
      ></motion.div>
      <div className="container relative mx-auto grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 sm:space-y-5 md:space-y-6"
        >
          {/* Culture Image */}
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={cultureImage}
              alt="Culture & Impact"
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         
          </motion.div>
          
          <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Culture & Impact</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-snug text-gray-900 px-1 sm:px-0">
            Built for people. Grounded in ethics. Driven by measurable impact.
          </h2>
          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            We invest 5% of annual revenue into internal R&D, learning, and community impact. Our teams co-create with clients, pairing their domain expertise with our modern delivery playbooks.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
            <div className="rounded-2xl sm:rounded-3xl border border-blue-200 bg-white/60 backdrop-blur-sm p-4 sm:p-5 md:p-6">
              <p className="text-3xl sm:text-4xl font-semibold text-gray-900">82%</p>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-600 mt-1">employee engagement</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl border border-red-200 bg-white/60 backdrop-blur-sm p-4 sm:p-5 md:p-6">
              <p className="text-3xl sm:text-4xl font-semibold text-gray-900">1200+</p>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-600 mt-1">hours of pro-bono advisory</p>
            </div>
          </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl sm:rounded-3xl md:rounded-[32px] border border-blue-200 bg-white/60 p-5 sm:p-6 md:p-8 backdrop-blur overflow-hidden group"
        >

          
          <div className="relative z-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Our commitments</p>
          <ul className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base text-gray-800">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <span className="mt-1 sm:mt-1.5 md:mt-2 inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex-shrink-0"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:mt-8 md:mt-10 rounded-2xl sm:rounded-3xl border border-blue-200 bg-white/50 p-4 sm:p-5 md:p-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
            "Our partnership with Nexus AI accelerated our sustainability roadmap while equipping our teams with the skills to own the change."
            <p className="mt-2 sm:mt-3 font-semibold text-gray-900 text-xs sm:text-sm">VP of Digital Strategy, Global Energy Leader</p>
          </div>
          <motion.img
              src={commit}
              alt="Culture & Impact"
              className="w-full h-40 sm:h-48 md:h-56 mt-3 sm:mt-4 object-cover rounded-xl sm:rounded-2xl"
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureImpactSection;
