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
    <section className="relative bg-gradient-to-br from-blue-100 via-red-50 to-blue-50 py-24 text-gray-900 overflow-hidden">
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
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full  blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/3 -right-1/4 w-[900px] h-[900px] rounded-full  blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
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
        className="absolute top-20 right-1/4 w-32 h-32 border-2 border-blue-900/50 rounded-lg backdrop-blur-sm"
        style={{ rotate: 12 }}
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -25, 0],
          y: [0, 25, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-red-900/50 rounded-full backdrop-blur-sm"
      ></motion.div>
      <motion.div 
        animate={{ 
          rotate: [-45, 315, -45],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-20 w-24 h-24 border-2 border-blue-900/40 backdrop-blur-sm"
        style={{ rotate: -45 }}
      ></motion.div>
      <div className="container relative mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {/* Culture Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={cultureImage}
              alt="Culture & Impact"
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         
          </motion.div>
          
          <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Culture & Impact</p>
          <h2 className="mt-4 text-4xl font-bold leading-snug text-gray-900">
            Built for people. Grounded in ethics. Driven by measurable impact.
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            We invest 5% of annual revenue into internal R&D, learning, and community impact. Our teams co-create with clients, pairing their domain expertise with our modern delivery playbooks.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-blue-200 bg-white/60 backdrop-blur-sm p-6">
              <p className="text-4xl font-semibold text-gray-900">82%</p>
              <p className="text-sm uppercase tracking-wide text-gray-600">employee engagement</p>
            </div>
            <div className="rounded-3xl border border-red-200 bg-white/60 backdrop-blur-sm p-6">
              <p className="text-4xl font-semibold text-gray-900">1200+</p>
              <p className="text-sm uppercase tracking-wide text-gray-600">hours of pro-bono advisory</p>
            </div>
          </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-[32px] border border-blue-200 bg-white/60 p-8 backdrop-blur overflow-hidden group"
        >

          
          <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Our commitments</p>
          <ul className="mt-6 space-y-5 text-base text-gray-800">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-2 inline-block h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-3xl border border-blue-200 bg-white/50 p-6 text-sm text-gray-700">
            "Our partnership with Nexus AI accelerated our sustainability roadmap while equipping our teams with the skills to own the change."
            <p className="mt-3 font-semibold text-gray-900">VP of Digital Strategy, Global Energy Leader</p>
          </div>
          <motion.img
              src={commit}
              alt="Culture & Impact"
              className="w-full h-56 mt-4 object-cover rounded-2xl"
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
