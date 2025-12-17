import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DesktopNavigation from './DesktopNavigation';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import logonImage from '../../assets/logoob.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 3; // minimum scroll distance to trigger hide/show

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide header if we're at the top
      if (currentScrollY < 50) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Check scroll direction
      if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ 
        duration: 0.2, 
        ease: [0.4, 0, 0.2, 1],
        type: "tween"
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white shadow-md border-b border-gray-200"
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-16 lg:h-20 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src={logonImage} 
                alt="Nexus AI Solutions Logo" 
                className="h-12 sm:h-12 md:h-16 lg:h-16 w-auto lg:w-44 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex justify-center hidden lg:block">
            <DesktopNavigation isTextWhite={false} />
          </div>

          {/* Get Started Button - Desktop Only */}
          <div className="hidden lg:flex flex-shrink-0">
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 lg:px-6 py-2 lg:py-2.5 text-xs lg:text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-shrink-0 lg:hidden">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isTextWhite={false}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.header>
  );
}

export default Header;
