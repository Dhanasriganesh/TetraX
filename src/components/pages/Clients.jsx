import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Users, Award, Globe, Sparkles, Zap, Target, Rocket } from 'lucide-react';

// Import logos
import accentureLogo from '../../assets/accenture.png';
import adpLogo from '../../assets/adp.png';
import appleLogo from '../../assets/apple-1.png';
import atosLogo from '../../assets/atos.png';
import capgeminiLogo from '../../assets/capgemini.png';
import deloitteLogo from '../../assets/deloitee.png';
import ibmLogo from '../../assets/ibm.png';
import infosysLogo from '../../assets/infosys.png';
import tcsLogo from '../../assets/tcs.png';
import worldMapBg from '../../assets/Worlddot.jpg';
import Wipro from '../../assets/wipro.png';
import Hcl from '../../assets/hcl.png';  
import bankofamericaLogo from '../../assets/bankofamerica.png';
import wellsfargoLogo from '../../assets/wellsfargo.png';  
import capitaloneLogo from '../../assets/capitolone.jpeg';
import creditoneLogo from '../../assets/creditone.png';
import pncbankLogo from '../../assets/pncbank.png';
import usabankLogo from '../../assets/usabank.png';
import truistLogo from '../../assets/truist.png';
import lplLogo from '../../assets/lpl.png';
import mastercardLogo from '../../assets/mastercard.png';
import freddiemacLogo from '../../assets/freddiemac.png';
import humanaLogo from '../../assets/humana.png';
import cvsLogo from '../../assets/cvs.png';
import anscesionlogo from '../../assets/anscesion.png';
import seilogo from '../../assets/sei.png';
import centerpointlogo from '../../assets/centerpoint.jpg';
import umglogo from '../../assets/umg.png';
import walmartlogo from '../../assets/wallmart.jpg';
import metalogo from '../../assets/meta.png';
import amazonlogo from '../../assets/amazon.png';
import nvidialogo from '../../assets/nvidia.png';
import htclogo from '../../assets/htc.png';
import publixLogo from '../../assets/clients2/pubixlogo.png';
import bheLogo from '../../assets/clients2/bhegt&slogo.jpg';
import swaLogo from '../../assets/clients2/swalogo.png';
import aaaLogo from '../../assets/clients2/aaalogo.png';
import mizuhoLogo from '../../assets/clients2/mizuhobanklogo.png';
import ambestLogo from '../../assets/clients2/ambestlogo.png';
import ionLogo from '../../assets/clients2/ionlogo.png';
import sanofiLogo from '../../assets/clients2/sanfoilogo.png';
import ecolabLogo from '../../assets/clients2/ecolablogo.png';
import cswholesaleLogo from '../../assets/clients2/cswholesalelogo.png';
import finishlineLogo from '../../assets/clients2/finishlinelogo.png';
import lipmanLogo from '../../assets/clients2/lipmanlogo.png';
import primetherapeuticsLogo from '../../assets/clients2/primelogo.png';
import stellantisLogo from '../../assets/clients2/stellantislogo.png';
import cricketLogo from '../../assets/clients2/cricketwirelesslogo.png';
import upsLogo from '../../assets/clients2/upslogo.png';
import cadenceLogo from '../../assets/clients2/cadencelogo.png';
import capitalgroupLogo from '../../assets/clients2/capitalgrouplogo.jpg';
import coxLogo from '../../assets/clients2/coxlogo.png';
import ttLogo from '../../assets/clients2/t&tlogo.jpg';
import commonwealthLogo from '../../assets/clients2/commonwealthlogo.png';
import intuitLogo from '../../assets/clients2/intuitlogo.png';
import healthfirstLogo from '../../assets/clients2/healthfirstlogo.png';
import epsonLogo from '../../assets/clients2/epsonlogo.png';
import libertymutualLogo from '../../assets/clients2/libertymutuallogo.png';
import morganstanleyLogo from '../../assets/clients2/morganstanleylogo.png';
import meijerLogo from '../../assets/clients2/meijerlogo.png';
import boeingLogo from '../../assets/clients2/boeing.png';
import medimpactLogo from '../../assets/clients2/medimpactlogo.png';
import jpmorganLogo from '../../assets/clients2/jpmorganlogo.png';
import frontlineLogo from '../../assets/clients2/frontlineinsurancelogo.png';

const Clients = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const clients = {
    technology: [
      { name: 'Apple', logo: appleLogo, color: 'from-gray-100 to-gray-200' },
      { name: 'IBM', logo: ibmLogo, color: 'from-blue-50 to-blue-100' },
      { name: 'Meta', logo: metalogo, color: 'from-blue-50 to-indigo-50' },
      { name: 'Amazon', logo: amazonlogo, color: 'from-orange-50 to-yellow-50' },
      { name: 'NVIDIA', logo: nvidialogo, color: 'from-green-50 to-emerald-50' },
      { name: 'HTC', logo: htclogo, color: 'from-green-50 to-teal-50' },
      { name: 'Epson America', logo: epsonLogo, color: 'from-blue-50 to-cyan-50' },
      { name: 'Cadence Design Systems', logo: cadenceLogo, color: 'from-red-50 to-orange-50' },
      { name: 'Intuit', logo: intuitLogo, color: 'from-blue-50 to-indigo-100' },
    ],
    consulting: [
      { name: 'Infosys', logo: infosysLogo, color: 'from-blue-50 to-indigo-50' },
      { name: 'Accenture', logo: accentureLogo, color: 'from-purple-50 to-pink-50' },
      { name: 'TCS', logo: tcsLogo, color: 'from-blue-50 to-purple-50' },
      { name: 'Capgemini', logo: capgeminiLogo, color: 'from-blue-50 to-cyan-50' },
      { name: 'Deloitte', logo: deloitteLogo, color: 'from-green-50 to-emerald-50' },
      { name: 'Atos', logo: atosLogo, color: 'from-blue-50 to-sky-50' },
      { name: 'Wipro', logo: Wipro, color: 'from-orange-50 to-amber-50' },
      { name: 'HCL', logo: Hcl, color: 'from-blue-50 to-indigo-50' },
    ],
    financial: [
      { name: 'Bank of America', logo: bankofamericaLogo, color: 'from-red-50 to-rose-50' },
      { name: 'Wells Fargo', logo: wellsfargoLogo, color: 'from-yellow-50 to-amber-50' },
      { name: 'Capital One', logo: capitaloneLogo, color: 'from-red-50 to-orange-50' },
      { name: 'Credit One', logo: creditoneLogo, color: 'from-blue-50 to-cyan-50' },
      { name: 'PNC Bank', logo: pncbankLogo, color: 'from-orange-50 to-red-50' },
      { name: 'US Bank', logo: usabankLogo, color: 'from-red-50 to-pink-50' },
      { name: 'Truist', logo: truistLogo, color: 'from-purple-50 to-indigo-50' },
      { name: 'LPL Financial', logo: lplLogo, color: 'from-red-50 to-rose-50' },
      { name: 'Mastercard', logo: mastercardLogo, color: 'from-red-50 to-orange-50' },
      { name: 'Freddie Mac', logo: freddiemacLogo, color: 'from-blue-50 to-indigo-50' },
      { name: 'SEI', logo: seilogo, color: 'from-yellow-50 to-orange-50' },
      { name: 'Mizuho Bank', logo: mizuhoLogo, color: 'from-red-50 to-pink-50' },
      { name: 'AM Best', logo: ambestLogo, color: 'from-blue-50 to-sky-50' },
      { name: 'Capital Group', logo: capitalgroupLogo, color: 'from-blue-50 to-indigo-50' },
      { name: 'Morgan Stanley', logo: morganstanleyLogo, color: 'from-blue-50 to-cyan-50' },
      { name: 'JP Morgan', logo: jpmorganLogo, color: 'from-blue-50 to-sky-50' },
      { name: 'Liberty Mutual', logo: libertymutualLogo, color: 'from-yellow-50 to-amber-50' },
      { name: 'Frontline Insurance', logo: frontlineLogo, color: 'from-blue-50 to-indigo-50' },
    ],
    healthcare: [
      { name: 'Humana', logo: humanaLogo, color: 'from-green-50 to-emerald-50' },
      { name: 'CVS', logo: cvsLogo, color: 'from-red-50 to-rose-50' },
      { name: 'Ascension', logo: anscesionlogo, color: 'from-blue-50 to-sky-50' },
      { name: 'Sanofi', logo: sanofiLogo, color: 'from-purple-50 to-pink-50' },
      { name: 'Prime Therapeutics', logo: primetherapeuticsLogo, color: 'from-blue-50 to-cyan-50' },
      { name: 'HealthFirst', logo: healthfirstLogo, color: 'from-blue-50 to-indigo-50' },
      { name: 'Medimpact', logo: medimpactLogo, color: 'from-orange-50 to-red-50' },
    ],
    retail: [
      { name: 'Walmart', logo: walmartlogo, color: 'from-blue-50 to-yellow-50' },
      { name: 'Publix Supermarkets', logo: publixLogo, color: 'from-green-50 to-emerald-50' },
      { name: 'Finish Line', logo: finishlineLogo, color: 'from-orange-50 to-red-50' },
      { name: 'Meijer', logo: meijerLogo, color: 'from-red-50 to-orange-50' },
      { name: 'C&S Wholesale', logo: cswholesaleLogo, color: 'from-blue-50 to-sky-50' },
    ],
    other: [
      { name: 'ADP', logo: adpLogo, color: 'from-red-50 to-rose-50' },
      { name: 'CenterPoint', logo: centerpointlogo, color: 'from-blue-50 to-cyan-50' },
      { name: 'UMG', logo: umglogo, color: 'from-purple-50 to-pink-50' },
      { name: 'BHE GT&S', logo: bheLogo, color: 'from-blue-50 to-indigo-50' },
      { name: 'SWA', logo: swaLogo, color: 'from-red-50 to-orange-50' },
      { name: 'AAA', logo: aaaLogo, color: 'from-blue-50 to-sky-50' },
      { name: 'ION', logo: ionLogo, color: 'from-purple-50 to-indigo-50' },
      { name: 'Eco Lab', logo: ecolabLogo, color: 'from-blue-50 to-cyan-50' },
      { name: 'Lipman Family Farms', logo: lipmanLogo, color: 'from-green-50 to-emerald-50' },
      { name: 'Stellantis', logo: stellantisLogo, color: 'from-gray-50 to-slate-50' },
      { name: 'Cricket Wireless', logo: cricketLogo, color: 'from-green-50 to-teal-50' },
      { name: 'UPS', logo: upsLogo, color: 'from-yellow-50 to-amber-50' },
      { name: 'Cox', logo: coxLogo, color: 'from-blue-50 to-indigo-50' },
      { name: 'T&T', logo: ttLogo, color: 'from-red-50 to-orange-50' },
      { name: 'Commonwealth Charter Academy', logo: commonwealthLogo, color: 'from-blue-50 to-sky-50' },
      { name: 'Boeing', logo: boeingLogo, color: 'from-blue-50 to-cyan-50' },
    ],
  };

  const getAllClients = () => {
    return Object.values(clients).flat();
  };

  const getFilteredClients = () => {
    if (activeCategory === 'all') {
      return getAllClients();
    }
    return clients[activeCategory] || [];
  };

  const categories = [
    { id: 'all', label: 'All', icon: Globe },
    { id: 'technology', label: 'Technology', icon: Zap },
    { id: 'consulting', label: 'Consulting', icon: Target },
    { id: 'financial', label: 'Financial', icon: TrendingUp },
    { id: 'healthcare', label: 'Healthcare', icon: Award },
    { id: 'retail', label: 'Retail', icon: Building2 },
    { id: 'other', label: 'Others', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container relative mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl"
            >
              <Rocket className="w-7 h-7 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                70+ Global Leaders
              </span>
              <br />
              <span className="text-gray-900">Trust Nexus AI</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Powering innovation for Fortune 500 companies and industry disruptors across the globe
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {[
                { value: '70+', label: 'Global Clients', icon: Building2 },
                { value: '15+', label: 'Countries', icon: Globe },
                { value: '500+', label: 'Projects', icon: Rocket },
                { value: '98%', label: 'Satisfaction', icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                    <stat.icon className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters - Animated Pills */}
      <section className="relative py-8">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative overflow-hidden px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:shadow-lg border border-gray-200'
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Showcase - Bento Grid Style */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {getFilteredClients().map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${client.color} rounded-3xl p-6 border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl h-32 flex items-center justify-center overflow-hidden`}>
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '20px 20px'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  {/* Logo */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain drop-shadow-lg"
                    />
                  </motion.div>

                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Gradient Wave */}
      <section className="relative py-24 mt-16 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
          style={{ backgroundSize: '200% 200%' }}
        />
        
        {/* Animated world map overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${worldMapBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white/20 rounded-full"
        />

        <div className="container relative mx-auto px-4 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-12 h-12 text-yellow-300" />
            </motion.div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Join the Elite?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Partner with Nexus AI and transform your business with solutions trusted by global leaders
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 rounded-full bg-white text-blue-600 font-bold text-base overflow-hidden shadow-2xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="relative group-hover:text-white transition-colors flex items-center gap-2">
                    Start Your Journey
                    <Rocket className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-base hover:bg-white/20 transition-all shadow-xl"
                >
                  Explore Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
