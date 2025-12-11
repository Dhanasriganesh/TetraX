import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import heroVideo from '../../../assets/videos/TetraXai.mp4';

const stats = [
  { value: 3480, suffix: '+', label: 'Projects Completed' },
  { value: 428, suffix: '+', label: 'IT Specialists' },
  { value: 6980, suffix: '+', label: 'Happy Clients' },
  { value: 256, suffix: '+', label: 'Smart Solutions' },
];

const AnimatedNumber = ({ value, suffix = '+' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: latest => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      data-header-theme="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-0  pointer-events-none"></div>

      {/* Content - Centered in middle of page */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full pointer-events-none">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-5xl mx-auto w-full">
            {/* Subtitle */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 flex justify-center"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[9px] font-medium border border-white/20">
                Next-Generation AI Solutions
              </span>
            </motion.div> */}

            {/* Main Heading */}
            {/* <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-white leading-tight"
              style={{
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '-0.01em',
                lineHeight: '1.2',
              }}
            >
              <span className="block mb-2">Shaping the Future of</span>
              <span className="block mb-2 bg-gradient-to-r from-blue-600 via-blue-500 to-red-600 bg-clip-text text-transparent">
                Business Through
              </span>
              <span className="block text-white">Innovation and Excellence</span>
            </motion.h1> */}

            {/* Description */}
          

            {/* Stats Preview */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-white/20"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center flex flex-col items-center justify-center">
                  <div className="text-sm md:text-base lg:text-lg font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[9px] text-white/80 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-[7px] font-medium uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>Scroll</span>
          <motion.svg
            className="w-5 h-5 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.div>


    </section>
  );
};

export default HeroSection;
