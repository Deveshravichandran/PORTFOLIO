import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code2, Database, Cloud, Brain, Shield, Terminal, ArrowUpRight, Cpu, Activity } from 'lucide-react';

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

// --- Telemetry Dashboard Subcomponent ---
function TelemetryDashboard() {
  const [latency, setLatency] = useState(242);
  const [dockerContainers, setDockerContainers] = useState(8);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly fluctuate latency between 235 and 255
      setLatency(235 + Math.floor(Math.random() * 20));
      // Pulse animation
      setPulse(p => !p);
      // Occasionally a container scales down or up
      if (Math.random() > 0.9) {
        setDockerContainers(prev => (prev === 8 ? 7 : 8));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 mb-16 minimal-card p-6 overflow-hidden relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold font-outfit text-white flex items-center">
          <Activity className="h-5 w-5 mr-2 text-white" />
          Live MLOps Telemetry
        </h3>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${pulse ? 'bg-white' : 'bg-zinc-500'} transition-colors duration-500`}></div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-300">System Online</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-gray-800/60 bg-black/40">
          <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Inference Latency</div>
          <div className="text-2xl font-mono font-bold text-indigo-400">{latency}ms</div>
          <div className="text-[10px] text-gray-500 mt-1">Avg: 240ms (Llama 3)</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-800/60 bg-black/40">
          <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">FAISS Recall</div>
          <div className="text-2xl font-mono font-bold text-emerald-400">98.6%</div>
          <div className="text-[10px] text-gray-500 mt-1">Top-k=5 Retrieval</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-800/60 bg-black/40">
          <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Golden Evals</div>
          <div className="text-2xl font-mono font-bold text-amber-400">97.8%</div>
          <div className="text-[10px] text-gray-500 mt-1">Risk Assessment Acc.</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-800/60 bg-black/40">
          <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Docker Swarm</div>
          <div className="text-2xl font-mono font-bold text-sky-400">{dockerContainers} / 8</div>
          <div className="text-[10px] text-gray-500 mt-1">Active (AWS EC2)</div>
        </div>
      </div>
    </div>
  );
}
// ----------------------------------------

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ml');

  return (
    <section id="skills" className="py-20 relative bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white">Skills & Certifications</h2>
          <p className="text-zinc-400 mt-2 max-w-md mx-auto text-sm">
            My technical toolkit and verified credentials across AI, cloud computing, and DevOps.
          </p>
          <div className="w-12 h-1 bg-white mx-auto mt-4 rounded-full"></div>
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
                    ? 'border-white/20 bg-white/10 text-white font-semibold'
                    : 'border-white/5 bg-transparent text-zinc-500 hover:text-white hover:border-white/10'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Grid with Animation */}
        <div className="min-h-[160px] mb-8">
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
                      className="p-4 rounded-xl border border-white/5 bg-zinc-950 hover:border-white/20 transition-colors flex items-center space-x-3"
                    >
                      <div className={`p-2 rounded-lg bg-white/5 flex-shrink-0 text-white`}>
                        <Cpu className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium font-outfit text-white">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Live MLOps Telemetry Dashboard */}
        <TelemetryDashboard />

        {/* Certifications Sub-Section */}
        <div className="border-t border-white/5 pt-16">
          <div className="mb-10 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-outfit flex items-center justify-center sm:justify-start gap-2 text-white">
              <Award className="h-6 w-6 text-white" />
              <span>Professional Credentials</span>
            </h3>
            <p className="text-sm text-zinc-400 mt-1">Verified industry certifications in cloud architecture and machine learning.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`minimal-card p-5 flex items-start space-x-4 hover:border-white/20`}
              >
                <div className="p-2.5 bg-white/10 rounded-xl text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base font-outfit text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
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
