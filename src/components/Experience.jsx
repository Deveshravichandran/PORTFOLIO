import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'DevOps Intern',
    company: 'CaratLane — A Tanishq Partnership',
    period: 'Jan 2025 – Apr 2026',
    bullets: [
      'Designed and deployed a proof-of-concept for AWS Client VPN, enabling secure remote access to internal infrastructure and reducing dependency on on-premise VPN solutions.',
      'Developed a User Access Review (UAR) tool to automate and streamline periodic access audits across internal systems.',
      'Automated Freshservice ticket workflows using scripting and integration pipelines.',
      'Gained production-level exposure to CI/CD pipelines, containerisation (Docker), and infrastructure management.'
    ],
    highlights: ['AWS VPN', 'UAR Automation', 'CI/CD & Docker']
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
    highlights: ['RAG System', 'Contextual Summarization', 'FAISS']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brutalist Heading */}
          <div className="md:col-span-1">
            <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-white uppercase tracking-tighter sticky top-24">
              Experience
            </h2>
          </div>

          <div className="md:col-span-3">
            <div className="border-t border-white/10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="py-12 border-b border-white/10 grid grid-cols-1 sm:grid-cols-12 gap-8"
                >
                  {/* Period & Company */}
                  <div className="sm:col-span-4">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-white uppercase leading-none">{exp.company}</h3>
                    <p className="text-sm font-medium text-zinc-400 mt-2">{exp.role}</p>
                  </div>
                  
                  {/* Details */}
                  <div className="sm:col-span-8">
                    <ul className="space-y-4 text-sm sm:text-base text-zinc-400">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start">
                          <span className="text-white mr-3 mt-1 text-xs">■</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Minimal Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.highlights.map((high, hIdx) => (
                        <span key={hIdx} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/20 text-white">
                          {high}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
