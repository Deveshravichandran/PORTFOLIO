import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

const experiences = [
  {
    role: 'DevOps Intern',
    company: 'CaratLane — A Tanishq Partnership',
    period: 'Jan 2025 – Apr 2026',
    bullets: [
      'Designed and deployed a proof-of-concept for AWS Client VPN, enabling secure remote access to internal infrastructure and reducing dependency on on-premise VPN solutions.',
      'Developed a User Access Review (UAR) tool to automate and streamline periodic access audits across internal systems — reducing manual review effort and improving compliance coverage.',
      'Automated Freshservice ticket workflows using scripting and integration pipelines, reducing manual ticket handling time and improving IT operations efficiency.',
      'Gained production-level exposure to CI/CD pipelines, containerisation (Docker), and infrastructure management, building a strong deployment and monitoring mindset for AI model delivery.'
    ],
    highlights: ['AWS VPN', 'UAR Automation', 'CI/CD & Docker', 'Freshservice Scripting']
  },
  {
    role: 'AI/ML Intern',
    company: 'ONGC',
    period: 'Dec 2024 – Jan 2025',
    bullets: [
      'Built a RAG-based PDF summarising chatbot and intelligent query bot for internal document retrieval.',
      'Integrated LLM for contextual summarisation — improved document processing speed by 60% and query response accuracy by 95%.',
      'Engineered a Streamlit UI with error handling, text cleaning, and FAISS-based semantic search.'
    ],
    highlights: ['RAG System', 'Contextual Summarization', '60% Processing Speedup', '95% Query Accuracy']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient light */}
      <div className="glow-bubble w-80 h-80 bg-indigo-500/5 top-1/2 left-0 -translate-y-1/2 -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit">Professional Experience</h2>
          <p className="text-gray-400 mt-2 max-w-md mx-auto text-sm">
            Bridging AI models with DevOps infrastructure for secure, scalable systems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-2 sm:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-500 bg-darkBg group-hover:bg-indigo-500 transition-colors duration-300"></div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-darkBg-card/40 glassmorphism hover:border-indigo-500/30 transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-200 dark:border-gray-800/50 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-outfit group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-500 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center text-xs font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-850 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800">
                    <Calendar className="h-3.5 w-3.5 mr-1" /> {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <ChevronRight className="h-4 w-4 mr-2 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlights badges */}
                <div className="flex flex-wrap gap-1.5 border-t border-gray-200 dark:border-gray-850 pt-4">
                  {exp.highlights.map((high, hIdx) => {
                    const isMetric = high.includes('%') || high.includes('Speedup') || high.includes('Accuracy');
                    return (
                      <span
                        key={hIdx}
                        className={`inline-flex items-center text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md border ${
                          isMetric
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        }`}
                      >
                        {isMetric && <Zap className="h-3 w-3 mr-1 animate-pulse" />}
                        {high}
                      </span>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
