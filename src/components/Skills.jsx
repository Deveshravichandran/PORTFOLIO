import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code2, Database, Cloud, Brain, Shield, Terminal, ArrowUpRight, Cpu } from 'lucide-react';

const skillCategories = [
  {
    id: 'ml',
    name: 'AI / ML & Tooling',
    icon: Brain,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    skills: ['LangChain', 'LangGraph', 'FAISS', 'Ollama', 'LoRA fine-tuning', 'Agentic / ReAct systems', 'Pydantic v2', 'Deep Learning', 'Computer Vision', 'NLP', 'Explainable AI (XAI)', 'Transformers'],
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    icon: Code2,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    skills: ['React.js', 'Streamlit', 'Express.js', 'Flask', 'TensorFlow', 'Keras'],
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: Terminal,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    skills: ['Python', 'SQL', 'JavaScript', 'C', 'C++', 'Java', 'HTML', 'CSS'],
  },
  {
    id: 'devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10',
    skills: ['AWS', 'Oracle Cloud', 'Docker', 'CI/CD pipelines', 'Infrastructure Management'],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: Database,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    skills: ['MySQL', 'PostgreSQL', 'Elasticsearch', 'NoSQL'],
  },
];

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure: Generative AI Professional',
    issuer: 'Oracle',
    badgeColor: 'border-amber-500/30 bg-amber-500/5 text-amber-400',
  },
  {
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    badgeColor: 'border-orange-500/30 bg-orange-500/5 text-orange-400',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    badgeColor: 'border-sky-500/30 bg-sky-500/5 text-sky-450',
  },
  {
    title: 'AWS Academy Computer Networks',
    issuer: 'Amazon Web Services',
    badgeColor: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ml');

  return (
    <section id="skills" className="py-20 relative bg-gray-950/20 dark:bg-darkBg/10 border-t border-gray-200 dark:border-gray-800/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit">Skills & Certifications</h2>
          <p className="text-gray-400 mt-2 max-w-md mx-auto text-sm">
            My technical toolkit and verified credentials across AI, cloud computing, and DevOps.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'border-indigo-500/40 bg-indigo-500/10 text-white font-semibold'
                    : 'border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-darkBg-card/20 text-gray-400 hover:text-gray-200 hover:border-gray-700'
                }`}
              >
                <Icon className={`h-4 w-4 ${category.color}`} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Grid with Animation */}
        <div className="min-h-[160px] mb-16">
          <AnimatePresence mode="wait">
            {skillCategories.map((category) => {
              if (category.id !== activeTab) return null;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-darkBg-card/30 glassmorphism hover:border-indigo-500/30 transition-colors flex items-center space-x-3"
                    >
                      <div className={`p-2 rounded-lg ${category.bgColor} ${category.color} flex-shrink-0`}>
                        <Cpu className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium font-outfit text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Certifications Sub-Section */}
        <div className="border-t border-gray-200 dark:border-gray-800/60 pt-16">
          <div className="mb-10 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-outfit flex items-center justify-center sm:justify-start gap-2">
              <Award className="h-6 w-6 text-indigo-500" />
              <span>Professional Credentials</span>
            </h3>
            <p className="text-sm text-gray-400 mt-1">Verified industry certifications in cloud architecture and machine learning.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`p-5 rounded-2xl border ${cert.badgeColor} flex items-start space-x-4`}
              >
                <div className="p-2.5 bg-white/10 rounded-xl">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base font-outfit text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Issued by: {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
