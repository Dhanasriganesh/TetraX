import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const exploreLinks = [
      { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
  ];

  const technologiesLinks = [
    { name: 'AI', path: '/technologies/ai' },
    { name: 'Cloud Computing', path: '/technologies/cloud' },
    { name: 'DevOps', path: '/technologies/devops' },
    { name: 'Big Data Technologies', path: '/technologies/big-data' },
    { name: 'Web Development', path: '/technologies/web' },
    { name: 'IoT', path: '/technologies/iot' },
    { name: 'Android Developer', path: '/technologies/android' },
    { name: 'Java/Python Full Stack', path: '/technologies/full-stack' },
    { name: 'ServiceNow', path: '/technologies/servicenow' },
    { name: 'Business/Data Analyst', path: '/technologies/analyst' },
    { name: 'QA Engineer', path: '/technologies/qa' },
    { name: 'Data Science', path: '/technologies/data-science' },
    { name: 'Salesforce', path: '/technologies/salesforce' },
  ];

  const industriesLinks = [
    { name: 'Financial Services', path: '/industries/financial' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Media, Entertainment & Gaming', path: '/industries/media' },
    { name: 'Technology Enablement', path: '/industries/technology' },
    { name: 'Telecommunications', path: '/industries/telecom' },
    { name: 'Energy', path: '/industries/energy' },
    { name: 'Consumer and Industrial Products', path: '/industries/consumer' },
    { name: 'Transportation and Travel', path: '/industries/transportation' },
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
          className="absolute inset-0 opacity-[0.03]"
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
          className="absolute top-0 right-0 w-96 h-96 opacity-[0.02]"
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
          className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.02]"
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
          className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-blue-600 blur-3xl opacity-[0.03]"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-orange-500 blur-3xl opacity-[0.03]"
        />
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-green-500 blur-3xl opacity-[0.02]"
        />
      </div>

      <div className="container relative mx-auto px-4 lg:px-12 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo and Description - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="mb-6">
              <h3 className="text-gray-900 font-bold text-3xl mb-2">
                NEXUS <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">AI</span>
              </h3>
              <p className="text-xs text-gray-500 italic">
                Because if your AI solutions can't handle disruption, neither will your business.
            </p>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Nexus AI is an independent technology company and digital transformation partner. We help businesses design, integrate, and scale their digital solutions.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
            className="lg:col-span-2"
          >
            <h4 className="text-gray-900 font-bold text-base mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="text-gray-900 font-bold text-base mb-6">Technologies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <ul className="space-y-3">
                {technologiesLinks.slice(0, 7).map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            <ul className="space-y-3">
                {technologiesLinks.slice(7).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          </motion.div>

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="text-gray-900 font-bold text-base mb-6">Industries</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <ul className="space-y-3">
                {industriesLinks.slice(0, 4).map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {industriesLinks.slice(4).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          </motion.div>
        </div>

        {/* Newsletter/Demo Request Section - OfficeSpace Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 p-10 relative overflow-hidden border border-gray-200"
        >
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#footer-grid)" />
            </svg>
          </div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded mb-3 uppercase tracking-wide">
                Demo
              </div>
              <h3 className="text-gray-900 font-bold text-3xl mb-4">Request a Demo</h3>
              <p className="text-gray-600 text-sm">
                Experience the power of Nexus AI. See how our intelligent solutions can transform your business operations and drive growth.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="flex-1 px-5 py-3 rounded-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Placeholder for illustrations - Can add images here */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" fill="currentColor" className="text-blue-600"/>
              <circle cx="60" cy="80" r="40" fill="currentColor" className="text-orange-500"/>
              <circle cx="140" cy="120" r="50" fill="currentColor" className="text-green-500"/>
            </svg>
          </div>
        </motion.div>

        {/* Location Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Headquarters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative pl-6 border-l-4 border-yellow-500"
          >
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-gray-900 font-bold text-lg mb-2">Nexus AI Headquarters</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Nexus AI, 11020 David Taylor Dr, Charlotte, NC 28262, USA
                </p>
                <div className="space-y-2">
                  <a href="tel:+19807819639" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                    +1 (980) 781-9639
                  </a>
                  <a href="mailto:info@nexusaisol.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                    info@nexusaisol.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Development Center */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative pl-6 border-l-4 border-yellow-500"
          >
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-gray-900 font-bold text-lg mb-2">Nexus AI Development Center</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Unit no. 1020, 9th floor, Vasavi MPM Grand, Ameerpet, Near by metro station, Hyderabad, Telangana, India
                </p>
                <div className="space-y-2">
                  <a href="tel:+917793992217" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 77939 92217
                  </a>
                  <a href="mailto:info@nexusaisol.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@nexusaisol.com
                  </a>
                    </div>
              </div>
            </div>
        </motion.div>
        </div>

        {/* Bottom Bar - Copyright Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-600">© {currentYear} Nexus AI. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
