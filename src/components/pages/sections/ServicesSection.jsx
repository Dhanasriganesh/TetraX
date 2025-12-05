import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      title: 'Consulting',
      description:
        'At Nexus AI Solutions, we bring cutting-edge artificial intelligence and deep industry expertise to help your business navigate complex challenges and unlock new opportunities.',
      icon: '🧭',
    },
    {
      title: 'Staffing',
      description:
        "In today's competitive landscape, having the right talent is crucial for success. Our staffing solutions connect you with top-tier professionals who can drive your business forward.",
      icon: '🤝',
    },
    {
      title: 'Training',
      description:
        'Stay ahead of the technology curve with our comprehensive training programs designed to upskill your team and keep them at the forefront of industry innovations.',
      icon: '🎓',
    },
    {
      title: 'IT Solutions',
      description:
        'Transform your business with our comprehensive suite of IT solutions tailored to meet your unique needs and drive digital transformation.',
      icon: '🖥️',
    },
  ];

  return (
    <section 
      id="services" 
      data-header-theme="light"
      ref={ref} 
      className="relative py-20 bg-gradient-to-tr from-red-100 via-red-50/50 to-blue-100 overflow-hidden"
    >
      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0 opacity-50">
        <motion.div 
          animate={{ 
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full" 
          style={{
          backgroundImage: 'linear-gradient(45deg, transparent 49%, rgba(59, 130, 246, 0.15) 49%, rgba(59, 130, 246, 0.15) 51%, transparent 51%), linear-gradient(-45deg, transparent 49%, rgba(239, 68, 68, 0.15) 49%, rgba(239, 68, 68, 0.15) 51%, transparent 51%)',
          backgroundSize: '60px 60px'
          }}
        ></motion.div>
      </div>
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            What We're Offering
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-red-700">
            Our Services
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-red-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-red-600 text-3xl transition-transform duration-500 group-hover:scale-105">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              </div>
              <a
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative inline-flex items-center text-blue-700 font-semibold transition-all duration-300 group-hover:gap-2"
              >
                Read More
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
