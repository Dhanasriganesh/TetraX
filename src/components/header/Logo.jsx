import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = ({ isTextWhite = false }) => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-5 group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Logo Icon/Shape */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <span className="text-white font-bold text-xl tracking-tight">T</span>
        </div>
        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      
      {/* Logo Text */}
      <div className="flex flex-col leading-tight">
        <motion.div
          className={`text-2xl md:text-3xl font-bold tracking-tight ${
            isTextWhite
              ? 'text-white drop-shadow-lg'
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-gradient'
          }`}
          whileHover={{ scale: 1.02 }}
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          TetraX AI
        </motion.div>
        <div className={`text-xs md:text-sm font-medium tracking-wide uppercase mt-1 ${
          isTextWhite ? 'text-gray-200' : 'text-gray-600'
        }`}>
          Solutions
        </div>
      </div>
    </Link>
  );
};

export default Logo;
