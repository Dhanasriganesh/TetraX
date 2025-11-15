import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Inclusive', 'Inspiring', 'Innovative'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
          opacity: 0.7,
        }}
      />
      
      {/* Simple dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            <span className="block">TetraX AI</span>
            <span className="block">Solutions</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="text-white drop-shadow-lg">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ${
                    index === currentWord
                      ? 'opacity-100 scale-110'
                      : 'opacity-0 absolute'
                  }`}
                >
                  {word}
                </span>
              ))}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
          >
            Next Generation AI & Software Development to Enable Businesses to Reinvent The Future With Cutting Edge Digital Transformation & Rapid Innovation
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Explore Us
          </motion.a>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
