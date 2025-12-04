import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Mission',
    description:
      'Engineer trustworthy AI and digital ecosystems that amplify human decision-making, accelerate innovation, and drive resilient growth for our clients.',
    highlights: ['Strategy, product, and delivery under one roof', 'Outcome-focused agile governance'],
  },
  {
    title: 'Vision',
    description:
      'Be the partner enterprises trust to navigate every wave of technological disruption with purpose, clarity, and measurable impact.',
    highlights: ['Industry blueprints for faster execution', 'Embedded change enablement'],
  },
  {
    title: 'Promise',
    description:
      'Design experiences people love, platforms teams can scale, and cultures empowered to continuously learn.',
    highlights: ['Inclusive collaboration rituals', 'Transparent impact metrics'],
  },
];

const MissionVisionSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-20 overflow-hidden">
      {/* Curved flowing shapes background */}
      <div className="absolute inset-0 opacity-40">
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
      </div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
      <div className="container relative mx-auto px-4 lg:px-12">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Why we exist</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Purpose that inspires action</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Beyond delivering software, we build adaptive operating models where teams, systems, and data work in sync. Every engagement blends research, experimentation, and measurable business impact.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-8 shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600">
                {pillar.title}
              </div>
              <p className="text-lg font-medium text-gray-800">{pillar.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {pillar.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
