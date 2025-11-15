import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine header background based on page and scroll position
  const getHeaderClasses = () => {
    if (isHomePage) {
      // On home page: transparent when at top, white when scrolled
      return isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
        : 'bg-transparent';
    } else {
      // On other pages: always white
      return 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100';
    }
  };

  // Determine if text should be white (only on home page when not scrolled)
  const isTextWhite = isHomePage && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}
    >
      <nav className="container mx-auto px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo isTextWhite={isTextWhite} />
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex justify-center">
            <DesktopNavigation isTextWhite={isTextWhite} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-shrink-0">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isTextWhite={isTextWhite}
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
