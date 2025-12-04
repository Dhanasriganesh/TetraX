import React from 'react';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: 'Jordan Patel',
    role: 'Chief Executive Officer',
    focus: 'Guides our multi-market expansion strategy and champions responsible AI adoption.',
  },
  {
    name: 'Mia Thompson',
    role: 'Chief Experience Officer',
    focus: 'Leads research, service design, and product innovation studios globally.',
  },
  {
    name: 'Emilio Navarro',
    role: 'Chief Technology Officer',
    focus: 'Architects our modern engineering, cloud-native, and data platform practices.',
  },
  {
    name: 'Avery Chen',
    role: 'SVP, People & Culture',
    focus: 'Builds inclusive talent ecosystems and continuous learning programs.',
  },
];

const LeadershipSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-red-50/20 to-white py-20 overflow-hidden">
      {/* Abstract network/connection pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="connection-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Blue connections */}
              <line x1="0" y1="0" x2="50" y2="50" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
              <line x1="50" y1="50" x2="100" y2="30" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
              <line x1="100" y1="30" x2="150" y2="70" stroke="#ef4444" strokeWidth="1.5" opacity="0.4"/>
              <line x1="150" y1="70" x2="200" y2="50" stroke="#ef4444" strokeWidth="1.5" opacity="0.4"/>
              {/* Red connections */}
              <line x1="0" y1="100" x2="60" y2="120" stroke="#ef4444" strokeWidth="1.5" opacity="0.4"/>
              <line x1="60" y1="120" x2="120" y2="100" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
              <line x1="120" y1="100" x2="180" y2="130" stroke="#ef4444" strokeWidth="1.5" opacity="0.4"/>
              {/* Nodes */}
              <circle cx="50" cy="50" r="4" fill="#3b82f6" opacity="0.6"/>
              <circle cx="100" cy="30" r="4" fill="#ef4444" opacity="0.6"/>
              <circle cx="150" cy="70" r="4" fill="#3b82f6" opacity="0.6"/>
              <circle cx="60" cy="120" r="4" fill="#ef4444" opacity="0.6"/>
              <circle cx="120" cy="100" r="4" fill="#3b82f6" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#connection-pattern)" />
        </svg>
      </div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-300 to-red-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-5"></div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Leadership</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Meet the team shaping what is next</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            A collective of strategists, technologists, researchers, and change leaders who collaborate with clients every day - not hidden behind layers of account management.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl"
            >
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-red-500 text-2xl font-bold text-white">
                  {leader.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{leader.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">{leader.role}</p>
                <p className="mt-4 text-sm text-gray-600">{leader.focus}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Connect <span aria-hidden="true">-></span>
                </button>
              </div>
              <div className="absolute inset-0 rounded-3xl border border-white/40 bg-gradient-to-br from-white via-transparent to-red-50 opacity-0 transition group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
