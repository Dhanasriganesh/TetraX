import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    title: 'Advisory Sprints',
    description: 'Two to four week intensives to align leadership, quantify value, and provide a prioritized roadmap.',
    outcomes: ['North-star architecture', 'Investable business case', 'Operating model blueprint'],
  },
  {
    title: 'Integrated Pods',
    description: 'Cross-functional squads embedded with your teams to deliver products, AI copilots, or platform upgrades.',
    outcomes: ['Joint OKRs', 'Design + build + change expertise', 'Weekly value demos'],
  },
  {
    title: 'Managed Programs',
    description: 'Longer-term run + optimize partnerships with transparent KPIs and governance cadences.',
    outcomes: ['SLO management', 'Continuous experimentation', 'Capability uplift'],
  },
];

const EngagementModelsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Striped waves pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="blueWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
            </linearGradient>
            <linearGradient id="redWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#ef4444', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path d="M0,100 Q300,50 600,100 T1200,100 L1200,150 Q900,200 600,150 T0,150 Z" fill="url(#blueWave)"/>
          <path d="M0,300 Q300,250 600,300 T1200,300 L1200,350 Q900,400 600,350 T0,350 Z" fill="url(#redWave)"/>
          <path d="M0,500 Q300,450 600,500 T1200,500 L1200,550 Q900,600 600,550 T0,550 Z" fill="url(#blueWave)"/>
        </svg>
      </div>
      <div className="absolute -top-10 sm:-top-20 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-10 sm:-bottom-20 left-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-red-300 rounded-full blur-3xl opacity-20"></div>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-blue-600">Engagement models</p>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-1 sm:px-0">
              Choose the level of partnership that fits your pace
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              We flex between strategic advisory, outcome-based pods, and managed services. Every model anchors to measurable outcomes with joint governance.
            </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-blue-100 bg-white p-4 sm:p-5 md:p-6 text-xs sm:text-sm text-gray-600 shadow-2xl lg:flex-shrink-0 lg:w-80">
            <p className="font-semibold text-gray-900">Co-creation commitments</p>
            <ul className="mt-3 sm:mt-4 list-disc space-y-1 sm:space-y-1.5 pl-4 sm:pl-5 leading-relaxed">
              <li>Transparent backlog and decision logs</li>
              <li>Integrated change and enablement plans</li>
              <li>Shared metrics and weekly value reviews</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl sm:rounded-3xl border border-transparent bg-white p-5 sm:p-6 md:p-8 shadow-xl shadow-blue-100 hover:border-blue-200"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">{model.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">{model.description}</p>
              <div className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm">
                {model.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2 sm:gap-3">
                    <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm flex-shrink-0">*</span>
                    <span className="leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;
