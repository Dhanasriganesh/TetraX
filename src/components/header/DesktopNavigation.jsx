import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuItems } from './menuItems';
import DropdownMenu from './DropdownMenu';

const DesktopNavigation = ({ isTextWhite = false }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path || 
          (item.submenu && item.submenu.some(subItem => location.pathname === subItem.path));
        const hasSubmenu = item.submenu && item.submenu.length > 0;

        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => hasSubmenu && setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* Main Menu Item */}
            <Link
              to={item.path || '#'}
              className={`relative px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 group ${
                isActive
                  ? isTextWhite ? 'text-white' : 'text-blue-600'
                  : isTextWhite ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-blue-600'
              }`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.01em' }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="tracking-wide whitespace-nowrap">{item.name}</span>
                {hasSubmenu && (
                  <motion.svg
                    className="w-4 h-4 ml-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                )}
              </span>
              
              {/* Hover background effect */}
              <motion.div
                className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 ${
                  isTextWhite 
                    ? 'bg-white/20' 
                    : 'bg-gradient-to-r from-blue-50 to-purple-50'
                }`}
                initial={false}
                transition={{ duration: 0.2 }}
              />
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className={`absolute bottom-1 left-2 right-2 h-0.5 rounded-full ${
                    isTextWhite
                      ? 'bg-white'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>

            {/* Dropdown Menu */}
            {hasSubmenu && (
              <DropdownMenu
                submenu={item.submenu}
                isOpen={activeDropdown === index}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNavigation;
