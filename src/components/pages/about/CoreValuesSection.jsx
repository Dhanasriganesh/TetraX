import React from 'react';
import { motion } from 'framer-motion';
import valuesImage from '../../../assets/about-section/core.jpg';
import teamworkImage from '../../../assets/banners/webbanner.png';
import integrityImage from '../../../assets/about-section/int.png';
import innovationImage from '../../../assets/about-section/invent.jpg';
import peopleImage from '../../../assets/about-section/elevate.jpg';
import outcomesImage from '../../../assets/banners/sponsership.jpg';
import sustainabilityImage from '../../../assets/banners/mediabanner.png';
import partnershipImage from '../../../assets/about-section/partnership.jpg';

const values = [
  {
    title: 'Integrity in Action',
    description: 'We operate with radical transparency - clarity in scope, inclusive decision making, and accountable delivery.',
    image: integrityImage,
  },
  {
    title: 'Invent Boldly',
    description: 'Curiosity drives us. We prototype early, test quickly, and shape new playbooks informed by data and empathy.',
    image: innovationImage,
  },
  {
    title: 'Elevate People',
    description: 'We invest in talent mobility, mentorship, and equitable opportunities so multidisciplinary teams thrive.',
    image: peopleImage,
  },
  {
    title: 'Outcomes over Output',
    description: 'Success is measured by business impact, adoption, and cultural readiness - not just code shipped.',
    image: outcomesImage,
  },
  {
    title: 'Sustainable Delivery',
    description: 'From responsible AI guardrails to carbon-aware architectures, we build solutions that last.',
    image: sustainabilityImage,
  },
  {
    title: 'Partnership Mindset',
    description: 'We co-create with clients, blending our expertise with their domain depth for shared success.',
    image: partnershipImage,
  },
];

const CoreValuesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 overflow-hidden">
      {/* Geometric shapes background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-64 h-64 border-2 border-blue-300"
          style={{ rotate: 45 }}
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-48 h-48 border-2 border-red-300 rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ 
            rotate: [-12, 168, -12],
            x: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-56 h-56 border-2 border-blue-400"
          style={{ rotate: -12 }}
        ></motion.div>
        <motion.div 
          animate={{ 
            rotate: [45, 405, 45],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/3 w-40 h-40 border-2 border-red-400 rounded-full"
          style={{ rotate: 45 }}
        ></motion.div>
        <motion.svg 
          animate={{ 
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-32 h-32 text-blue-300" 
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/>
        </motion.svg>
        <motion.svg 
          animate={{ 
            rotate: [0, -360],
            y: [0, 20, 0]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/3 w-28 h-28 text-red-300" 
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/>
        </motion.svg>
      </div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Core values</p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">Principles that guide every engagement</h2>
          </div>
          <motion.div
            className="relative flex-1 max-w-md rounded-3xl overflow-hidden shadow-2xl group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={valuesImage}
              alt="Core Values"
              className="w-full  object-cover"
              whileHover={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative rounded-3xl border border-transparent bg-white/90 p-6 text-left shadow-lg shadow-blue-100 hover:-translate-y-1 hover:border-blue-200 hover:shadow-blue-200 overflow-hidden"
            >
              {/* Background Image on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-out overflow-hidden"
                initial={false}
              >
                <motion.img
                  src={value.image}
                  alt={value.title}
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
              <div className="text-sm font-semibold uppercase tracking-wide text-blue-500">0{index + 1}</div>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-3 text-base text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
