import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ({ submenu, isOpen, onMouseEnter, onMouseLeave }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-0 mt-6 w-80 bg-white rounded-xl shadow-2xl py-6 border border-gray-100 overflow-hidden"
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
          
          <div className="max-h-96 overflow-y-auto custom-scrollbar px-3">
            {submenu.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    to={item.path}
                    className={`relative flex items-center px-6 py-4 mx-1 my-2 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600'
                    }`}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {/* Text */}
                    <span className="flex-1 text-sm font-medium tracking-wide">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute right-4 w-1.5 h-1.5 bg-blue-600 rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover arrow */}
                    <motion.svg
                      className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
