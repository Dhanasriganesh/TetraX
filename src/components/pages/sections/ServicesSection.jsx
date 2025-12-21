import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Snowfall from 'react-snowfall';
import consultingImg from '../../../assets/about-section/consulting.png';
import staffingImg from '../../../assets/about-section/staffing.png';
import trainingImg from '../../../assets/about-section/training.png';
import itSolutionsImg from '../../../assets/about-section/itsolutions.png';
import visaSponsorshipImg from '../../../assets/about-section/vs.png';
import SkeletonImage from '../../shared/SkeletonImage';

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({ 
    threshold: 0.3, 
    triggerOnce: false,
    rootMargin: '-50px 0px'
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 },
        y: { duration: 0.8 },
        scale: { duration: 0.8 }
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.15 + 0.2,
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative"
    >
      <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-0 shadow-lg border border-white/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/15">
        {/* Image header */}
        <div className="relative h-32 sm:h-36 md:h-40 w-full overflow-hidden">
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
          >
            <SkeletonImage
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-70" />
          <div className="absolute left-3 bottom-2 sm:left-4 sm:bottom-3 rounded-full bg-white/20 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white shadow border border-white/30">
            {service.title}
          </div>
        </div>

        <div className="relative z-10 p-4 sm:p-5 md:p-6">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `linear-gradient(135deg, 
                ${index % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(239, 68, 68, 0.1)'} 0%, 
                transparent 50%, 
                ${index % 2 === 0 ? 'rgba(168, 85, 247, 0.1)' : 'rgba(59, 130, 246, 0.1)'} 100%)`
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Title */}
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-white/80 transition-colors duration-300"
            >
              {service.title}
            </motion.h4>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
              className="text-white leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-3 sm:line-clamp-4"
            >
              {service.description}
            </motion.p>

            {/* Read More Link */}
            <motion.a
              href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 text-white font-semibold text-xs sm:text-sm group/link overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                Read More
                <motion.span
                  className="text-lg sm:text-xl"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/80 to-white/50"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      title: 'Consulting',
      description:
        'At Nexus AI Solutions, we bring cutting-edge artificial intelligence and deep industry expertise to help your business navigate complex challenges and unlock new opportunities.',
      image: consultingImg,
    },
    {
      title: 'Staffing',
      description:
        "In today's competitive landscape, having the right talent is crucial for success. Our staffing solutions connect you with top-tier professionals who can drive your business forward.",
      image: staffingImg,
    },
    {
      title: 'Training',
      description:
        'Stay ahead of the technology curve with our comprehensive training programs designed to upskill your team and keep them at the forefront of industry innovations.',
      image: trainingImg,
    },
    {
      title: 'IT Solutions',
      description:
        'Transform your business with our comprehensive suite of IT solutions tailored to meet your unique needs and drive digital transformation.',
      image: itSolutionsImg,
    },
    {
      title: 'Visa Sponsorship',
      description:
        'Navigate your visa sponsorship journey with confidence through our dedicated in-house immigration team. We provide comprehensive H1B, OPT, CPT, and Green Card support.',
      image: visaSponsorshipImg,
    },
  ];

  return (
    <section 
      id="services" 
      data-header-theme="light"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-blue-950 overflow-hidden"
    >
      {/* Snowfall Effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Snowfall
          color="#ffffff"
          snowflakeCount={150}
          speed={[1.0, 3.0]}
          wind={[-0.5, 2.0]}
          radius={[0.5, 3.0]}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        />
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-20 z-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-5 sm:top-20 sm:left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-white/20 rounded-full blur-3xl z-10"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white/20 rounded-full blur-3xl z-10"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-semibold border border-white/30"
          >
            What We're Offering
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-white leading-tight">
            Our Services
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '100px' } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-white/50 to-white/30 mx-auto rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
