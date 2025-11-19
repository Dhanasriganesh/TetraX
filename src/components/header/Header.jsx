import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DesktopNavigation from './DesktopNavigation';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import logonImage from '../../assets/logon.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('light'); // 'light', 'gradient'
  const location = useLocation();
  const tickingRef = useRef(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Observe sections to change header theme
  useEffect(() => {
    const sections = document.querySelectorAll('[data-header-theme]');
    
    const updateTheme = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        // Check which section is in view
        let currentTheme = 'light';
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          
          // If section is in view (with some threshold)
          if (sectionTop <= 100 && sectionBottom >= 100) {
            const theme = section.getAttribute('data-header-theme');
            if (theme) {
              currentTheme = theme;
            }
          }
        });

        setHeaderTheme(currentTheme);
        tickingRef.current = false;
      });
    };

    // Initial check
    updateTheme();

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-header-theme');
            if (theme) {
              setHeaderTheme(theme);
            }
          }
        });
      },
      {
        threshold: [0, 0.1, 0.3, 0.5],
        rootMargin: '-80px 0px 0px 0px',
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Also listen to scroll for theme detection
    window.addEventListener('scroll', updateTheme, { passive: true });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', updateTheme);
    };
  }, [location.pathname]);

  // Determine header classes based on theme
  const getHeaderClasses = () => {
    switch (headerTheme) {
      case 'gradient':
        return {
          bg: 'bg-white/95 backdrop-blur-md',
          text: false, // dark text
          shadow: 'shadow-lg',
        };
      case 'light':
      default:
        return {
          bg: 'bg-white',
          text: false, // dark text
          shadow: 'shadow-md border-b border-gray-200',
        };
    }
  };

  const headerClasses = getHeaderClasses();
  const isTextWhite = headerClasses.text;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses.bg} ${headerClasses.shadow}`}
    >
      <nav className="container mx-auto px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src={logonImage} 
                alt="Nexus AI Solutions Logo" 
                className="h-16 lg:h-12 lg:w-40"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex justify-center">
            <DesktopNavigation isTextWhite={isTextWhite} />
          </div>

          {/* Get Started Button - Desktop Only */}
          <div className="hidden lg:flex flex-shrink-0">
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
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
