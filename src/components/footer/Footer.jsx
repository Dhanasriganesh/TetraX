import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../../assets/logoob.webp';
import SkeletonImage from '../shared/SkeletonImage';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Clients', path: '/clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'Staffing', path: '/services/staffing' },
    { name: 'Training', path: '/services/training' },
    { name: 'IT Solutions', path: '/services/it-solutions' },
  ];

  const industriesLinks = [
    { name: 'Banking & Financial Services', path: '/industries' },
    { name: 'Healthcare & Life Sciences', path: '/industries' },
    { name: 'Media & Entertainment', path: '/industries' },
    { name: 'Telecommunications', path: '/industries' },
    { name: 'Energy & Utilities', path: '/industries' },
    { name: 'Oil & Gas', path: '/industries' },
    { name: 'Retail & Consumer Goods', path: '/industries' },
    { name: 'Manufacturing', path: '/industries' },
    { name: 'Transportation & Logistics', path: '/industries' },
    { name: 'Travel & Hospitality', path: '/industries' },
    { name: 'Automotive', path: '/industries' },
    { name: 'Education', path: '/industries' },
    { name: 'Government & Public Sector', path: '/industries' },
    { name: 'Insurance', path: '/industries' },
  ];

  const locations = [
    {
      region: 'USA',
      title: 'Headquarters',
      address: '11020 David Taylor Dr #100 Charlotte, NC 28262, USA',
      phone: '+1 980 737 1953',
      email: 'contact@nexusaisol.com',
      mapUrl: 'https://www.google.com/maps?q=11020+David+Taylor+Dr+%23100+Charlotte,+NC+28262',
    },
    {
      region: 'London, UK',
      title: 'London Office',
      address: 'Universal House, Bescot Industrial Estate, Woden Road West, Wednesbury, WS10 7SF, UK',
      phone: '+1 980 737 1953',
      email: 'contact@nexusaisol.com',
      mapUrl: 'https://www.google.com/maps?q=Universal+House,+Bescot+Industrial+Estate,+Woden+Road+West,+Wednesbury,+WS10+7SF,+UK',
    },
    {
      region: 'Hyderabad, India',
      title: 'Development Center',
      address: 'Ameerpet, Near by metro station, Hyderabad, Telangana, India',
      phone: '+91 9542142620',
      email: 'contact@nexusaisol.com',
      mapUrl: 'https://www.google.com/maps?q=Ameerpet,+Near+by+metro+station,+Hyderabad,+Telangana,+India',
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-white text-gray-800 overflow-hidden border-t border-gray-200">
      {/* Unique Pattern-Based Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px),
              linear-gradient(to right, #ef4444 1px, transparent 1px),
              linear-gradient(to bottom, #ef4444 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
            backgroundPosition: '0 0, 0 0, 40px 40px, 40px 40px'
          }}
        />

        {/* Radial Pattern Gradient */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, #ef4444 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, #10b981 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 120px 120px, 60px 60px',
            backgroundPosition: '0 0, 50px 50px, 25px 25px'
          }}
        />

        {/* Abstract Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-[0.02] hidden sm:block"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 10px, #3b82f6 10px, #3b82f6 20px),
              repeating-linear-gradient(-45deg, transparent, transparent 10px, #ef4444 10px, #ef4444 20px)
            `
          }}
        />

        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-[0.02] hidden sm:block"
          style={{
            backgroundImage: `
              repeating-linear-gradient(135deg, transparent, transparent 15px, #10b981 15px, #10b981 30px),
              repeating-linear-gradient(225deg, transparent, transparent 15px, #f59e0b 15px, #f59e0b 30px)
            `
          }}
        />

        {/* Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />

        {/* Wave Pattern */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M 0 50 Q 50 30 100 50 T 200 50"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
              />
              <path
                d="M 0 70 Q 50 50 100 70 T 200 70"
                fill="none"
                stroke="#ef4444"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#wave-pattern)"
            animate={{
              x: [0, 200],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.svg>

        {/* Subtle Blurred Shapes for Depth */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 sm:-right-20 top-0 h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-blue-600 blur-3xl opacity-[0.03]"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 sm:-left-20 bottom-0 h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-orange-500 blur-3xl opacity-[0.03]"
        />
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-green-500 blur-3xl opacity-[0.02] hidden sm:block"
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
          {/* Logo and Description - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 md:col-span-3 lg:col-span-3"
          >
            <div className="mb-4 sm:mb-6">
              <SkeletonImage 
                src={logoImage} 
                alt="Nexus AI Solutions Logo" 
                className="h-12 sm:h-12 md:h-16 lg:h-16 w-auto lg:w-44 object-contain"
              />
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
              Nexus AI is an independent technology company and digital transformation partner. We help businesses design, integrate, and scale their digital solutions.
            </p>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-sm">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              E-Verified Company
            </div>
          </motion.div>

          {/* Explore Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-1 md:col-span-1 lg:col-span-3"
          >
            <h4 className="text-gray-900 font-bold text-sm sm:text-base mb-4 sm:mb-6">Explore</h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="truncate">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-1 md:col-span-1 lg:col-span-2"
          >
            <h4 className="text-gray-900 font-bold text-sm sm:text-base mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:col-span-2 md:col-span-1 lg:col-span-4"
          >
            <h4 className="text-gray-900 font-bold text-sm sm:text-base mb-4 sm:mb-6">Industries</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              {industriesLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="truncate">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter/Demo Request Section - OfficeSpace Style */}
       

        {/* Location Sections */}
        <div className="border-t border-gray-200 pt-10 sm:pt-12 mb-8 sm:mb-10 md:mb-12">
          <h3 className="font-semibold text-sm uppercase tracking-[0.2em] text-gray-400 mb-8 sm:mb-10">
            Our Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            {locations.map((location, idx) => (
              <motion.div
                key={location.region}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={`space-y-4 ${idx > 0 ? 'md:border-l md:border-gray-100 md:pl-8 lg:pl-12' : ''}`}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1.5">
                    {location.region}
                  </p>
                  <h4 className="text-gray-900 font-medium text-base">{location.title}</h4>
                </div>

                <address className="not-italic">
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 leading-relaxed hover:text-gray-900 transition-colors"
                  >
                    {location.address}
                  </a>
                </address>

                <div className="space-y-1.5 text-sm text-gray-500">
                  <a
                    href={`tel:${location.phone.replace(/[^+\d]/g, '')}`}
                    className="block hover:text-gray-900 transition-colors"
                  >
                    {location.phone}
                  </a>
                  <a
                    href={`mailto:${location.email}`}
                    className="block hover:text-gray-900 transition-colors"
                  >
                    {location.email}
                  </a>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors"
                >
                  View on map
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Copyright Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-gray-200 pt-4 sm:pt-5 md:pt-6"
        >
          <div className="flex justify-center items-center">
            <p className="text-xs sm:text-sm text-gray-600 text-center px-2">© 2020 Nexus AI. All rights reserved.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <svg className="w-80 h-80" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="100" fill="currentColor" className="text-blue-600"/>
              <circle cx="60" cy="80" r="40" fill="currentColor" className="text-orange-500"/>
              <circle cx="140" cy="120" r="50" fill="currentColor" className="text-green-500"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
