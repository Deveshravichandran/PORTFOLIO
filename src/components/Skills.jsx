import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    id: 'ml',
    name: 'AI / ML & Tooling',
    skills: ['LangChain', 'LangGraph', 'FAISS', 'Ollama', 'LoRA fine-tuning', 'Agentic / ReAct systems', 'Pydantic v2', 'Deep Learning', 'Computer Vision', 'NLP', 'Explainable AI (XAI)', 'Transformers'],
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    skills: ['React.js', 'Streamlit', 'Express.js', 'Flask', 'TensorFlow', 'Keras'],
  },
  {
    id: 'languages',
    name: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'C', 'C++', 'Java', 'HTML', 'CSS'],
  },
  {
    id: 'devops',
    name: 'Cloud & DevOps',
    skills: ['AWS', 'Oracle Cloud', 'Docker', 'CI/CD pipelines', 'Infrastructure Management'],
  },
  {
    id: 'databases',
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Elasticsearch', 'NoSQL'],
  },
];

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure: Generative AI Professional',
    issuer: 'Oracle',
  },
  {
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'AWS Academy Computer Networks',
    issuer: 'Amazon Web Services',
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ml');

  return (
    <section id="skills" className="py-24 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-white uppercase tracking-tighter sticky top-24">
              Skills &<br/>Certs
            </h2>
          </div>

          <div className="md:col-span-3">
            
            {/* Brutalist Tab Controls */}
            <div className="flex flex-wrap gap-0 border-b border-white/20 mb-8">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeTab === category.id
                      ? 'border-b-2 border-white text-white'
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Skill Grid */}
            <div className="min-h-[200px] mb-16">
              <AnimatePresence mode="wait">
                {skillCategories.map((category) => {
                  if (category.id !== activeTab) return null;
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                      {category.skills.map((skill) => (
                        <div key={skill} className="border border-white/10 p-4 hover:border-white transition-colors">
                          <span className="text-sm font-bold text-white uppercase">{skill}</span>
                        </div>
                      ))}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Certifications Sub-Section */}
            <div className="border-t border-white/10 pt-16">
              <h3 className="text-2xl font-bold font-outfit text-white uppercase mb-8">
                Professional Credentials
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="border border-white/20 p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
                    <h4 className="font-bold text-lg font-outfit text-white uppercase leading-tight mb-4">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                      Issuer: <span className="text-white">{cert.issuer}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
