import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuItems } from './menuItems';
import DropdownMenu from './DropdownMenu';

const DesktopNavigation = ({ isTextWhite = false }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center gap-3">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path || 
          (item.submenu && item.submenu.some(subItem => location.pathname === subItem.path));
        const hasSubmenu = item.submenu && item.submenu.length > 0;

        const activeText = isTextWhite
          ? 'text-white'
          : 'text-gray-900';
        const inactiveText = isTextWhite
          ? 'text-white/85 hover:text-white'
          : 'text-gray-700 hover:text-blue-700';
        const labelClass = isActive
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold'
          : `${inactiveText} font-medium`;

        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => hasSubmenu && setActiveDropdown(index)}
            onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
          >
            {/* Main Menu Item */}
            <Link
              to={item.path || '#'}
              className={`group relative inline-flex items-center gap-2 px-3 py-1.5 transition-all duration-200 text-sm no-underline ${activeText}`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.01em' }}
            >
              {isActive && (
                <motion.span
                  layoutId="navDot"
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                />
              )}
              {!isActive && (
                <span className="h-2 w-2 rounded-full bg-transparent group-hover:bg-blue-200 transition-colors" />
              )}
              <span className="relative z-10 flex items-center space-x-1">
                <span className={`tracking-wide whitespace-nowrap transition-colors ${labelClass}`}>
                  {item.name}
                </span>
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
