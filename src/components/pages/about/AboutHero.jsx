import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of excellence', value: '15+' },
  { label: 'Global delivery hubs', value: '6' },
  { label: 'Client retention', value: '94%' },
  { label: 'Innovation programs', value: '32' },
];

const differentiators = [
  'AI-first consulting models across every engagement',
  'Embedded design, engineering, and change management squads',
  'Transparent playbooks that accelerate time-to-value',
];

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-purple-200 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto grid gap-16 px-4 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            Human + AI | Future-ready organizations
          </div>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            We are the strategy, engineering, and experience partner for ambitious teams.
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Nexus AI unites award-winning strategists, product leaders, data scientists, and cloud engineers to build adaptive enterprises. We design operating models, deploy scalable platforms, and empower people with intelligent tools that spark measurable business outcomes.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur">
              <p className="text-sm uppercase tracking-wide text-gray-500">What sets us apart</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-blue-900/90 p-6 text-white shadow-xl">
              <p className="text-sm uppercase tracking-wide text-white/70">Impact snapshot</p>
              <p className="mt-4 text-3xl font-semibold">.4B+</p>
              <p className="text-sm text-white/80">client value delivered since 2010</p>
              <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-white/80">
                "Nexus AI reimagined our operating model and launched an AI-powered service fabric that now runs across 14 countries."
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-[32px] border border-white/50 bg-white/80 p-10 shadow-2xl backdrop-blur"
        >
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">Inside Nexus AI</p>
              <h2 className="mt-2 text-3xl font-semibold text-gray-900">Purpose-built studios</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                We operate specialized studios for customer experience, platforms, AI transformation, and talent velocity. Every team blends product strategy, research, UX, engineering, and change enablement so initiatives launch faster and scale responsibly.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <p className="text-sm uppercase tracking-wide text-white/70">Certified Partnerships</p>
              <p className="text-lg font-semibold">Microsoft AI Cloud | AWS Advanced | Google Cloud Build | NVIDIA Inception</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
