import React from 'react';
import { motion } from 'framer-motion';
import missionImage from '../../../assets/banners/cloudbanner.jpg';
import visionImage from '../../../assets/banners/databanner.png';
import promiseImage from '../../../assets/banners/devopsbanner.png';
import featuredImage from '../../../assets/ppl/girl2.jpg';
import whyImage from '../../../assets/about-section/why.jpg';
const pillars = [
  {
    title: 'Mission',
    description:
      'Engineer trustworthy AI and digital ecosystems that amplify human decision-making, accelerate innovation, and drive resilient growth for our clients.',
    highlights: ['Strategy, product, and delivery under one roof', 'Outcome-focused agile governance'],
    image: missionImage,
  },
  {
    title: 'Vision',
    description:
      'Be the partner enterprises trust to navigate every wave of technological disruption with purpose, clarity, and measurable impact.',
    highlights: ['Industry blueprints for faster execution', 'Embedded change enablement'],
    image: visionImage,
  },
  {
    title: 'Promise',
    description:
      'Design experiences people love, platforms teams can scale, and cultures empowered to continuously learn.',
    highlights: ['Inclusive collaboration rituals', 'Transparent impact metrics'],
    image: promiseImage,
  },
];

const MissionVisionSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Curved flowing shapes background */}
      <motion.div 
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path d="M 0 200 Q 300 100 600 200 T 1200 200 L 1200 0 L 0 0 Z" fill="url(#grad1)" />
          <path d="M 0 800 Q 300 700 600 800 T 1200 800 L 1200 600 L 0 600 Z" fill="url(#grad2)" />
        </svg>
      </motion.div>
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 hidden sm:block"></div>
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className='flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6'>
          <div className="mb-8 sm:mb-10 md:mb-14 text-center lg:text-left lg:flex-1">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-blue-500">Why we exist</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
              Purpose that inspires action
            </h2>
            <p className="mx-auto lg:mx-0 mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
              Beyond delivering software, we build adaptive operating models where teams, systems, and data work in sync. Every engagement blends research, experimentation, and measurable business impact.
            </p>
          
          </div>
          <div className="lg:w-80 lg:flex-shrink-0">
            <motion.img
                src={whyImage}
                alt="Why we exist"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-full lg:max-h-64 object-cover rounded-xl sm:rounded-2xl"
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl sm:rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-5 sm:p-6 md:p-8 shadow-xl overflow-hidden"
            >
              {/* Background Image on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-out overflow-hidden"
                initial={false}
              >
                <motion.img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    filter: 'brightness(0.95) contrast(1.05) saturate(1.1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
              </motion.div>
              
              <div className="relative z-10">
              <div className="mb-4 sm:mb-5 md:mb-6 inline-flex rounded-full bg-blue-50 px-3 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold text-blue-600">
                {pillar.title}
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">{pillar.description}</p>
              <ul className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                {pillar.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 sm:gap-3">
                    <span className="mt-0.5 sm:mt-1 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Large Featured Image */}
      
      </div>
    </section>
  );
};

export default MissionVisionSection;
