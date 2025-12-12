import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from './menuItems';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const location = useLocation();

  const toggleItem = (index) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-14 sm:top-16 md:top-16 lg:top-20 right-0 bottom-0 w-full sm:w-80 sm:max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4">
              {menuItems.map((item, index) => {
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const isExpanded = expandedItems.includes(index);
                const isActive = location.pathname === item.path ||
                  (hasSubmenu && item.submenu.some(subItem => location.pathname === subItem.path));

                return (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-3 sm:pb-3.5 md:pb-4">
                    {/* Main Menu Item */}
                    <Link
                      to={item.path || '#'}
                      onClick={() => {
                        if (!hasSubmenu) {
                          onClose();
                        } else {
                          toggleItem(index);
                        }
                      }}
                      className={`flex items-center justify-between px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg transition-all duration-200 group ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      <span className="font-medium text-sm sm:text-base tracking-wide">{item.name}</span>
                      {hasSubmenu && (
                        <motion.svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}
                    </Link>

                    {/* Submenu Items */}
                    <AnimatePresence>
                      {hasSubmenu && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 sm:pl-6 md:pl-8 pr-2 sm:pr-4 py-2 sm:py-3 md:py-4 space-y-1.5 sm:space-y-2"
                        >
                          {item.submenu.map((subItem, subIndex) => {
                            const isSubActive = location.pathname === subItem.path;
                            return (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                onClick={onClose}
                                className={`block px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
                                  isSubActive
                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                }`}
                                style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.01em' }}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="p-4 sm:p-6 md:p-8 border-t border-gray-200 mt-4 sm:mt-5 md:mt-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transform hover:scale-105 transition-all duration-200 tracking-wide"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
