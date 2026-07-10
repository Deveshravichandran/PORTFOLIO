import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Cpu } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome to Devesh Ravichandran OS v1.0.0' },
    { type: 'output', text: 'Type "help" or click the tags below for available commands.' },
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const executeCommand = (cmd) => {
    const rawCmd = cmd.trim().toLowerCase();
    let response = '';

    if (rawCmd === 'help') {
      response = 'Available commands: [about] [skills] [projects] [clear]';
    } else if (rawCmd === 'about') {
      response = 'Devesh Ravichandran - B.Tech CSE (AI/ML) Graduate (SRM IST, CGPA 7.85). Focused on agentic RAG, LoRA finetuning, and production DevOps pipelines. Former DevOps Intern at CaratLane and AI/ML Intern at ONGC.';
    } else if (rawCmd === 'skills') {
      response = 'Languages: Python, SQL, C++, JS. AI/ML: LangChain, FAISS, Ollama, ReAct. Cloud/DevOps: AWS, Docker, CI/CD.';
    } else if (rawCmd === 'projects') {
      response = 'Flagship: Loan Portfolio Risk Agent (Agentic RAG). Also built: Stress Monitor, Gemma2 PDF Chat, Enterprise Assistant, Synthesight.';
    } else if (rawCmd === 'clear') {
      setTerminalHistory([]);
      return;
    } else if (rawCmd === '') {
      return;
    } else {
      response = `Command "${cmd}" not recognized. Type "help" for a list of commands.`;
    }

    setTerminalHistory((prev) => [
      ...prev,
      { type: 'input', text: cmd },
      { type: 'output', text: response },
    ]);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    executeCommand(terminalInput);
    setTerminalInput('');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 overflow-hidden bg-black">

      <div className="relative max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs sm:text-sm font-semibold font-outfit"
            >
              <Cpu className="h-4 w-4" />
              <span>Open to AI/ML & Applied AI Engineer Roles</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold font-outfit tracking-tight text-white"
            >
              Hi, I'm{' '}
              <span className="text-white">
                Devesh Ravichandran
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-medium text-gray-500 dark:text-gray-400 font-outfit"
            >
              AI/ML Engineer & Applied AI Builder
            </motion.h2>

            {/* Pitch */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
            >
              Building agentic AI systems for real-world domains — from credit risk analysis to document intelligence. Bridging the gap between robust machine learning and production DevOps deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              {/* Resume Button */}
              <motion.a
                href="/Devesh_Ravichandran_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 font-medium transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FileText className="h-5 w-5" />
                <span>Download Resume</span>
                <ArrowUpRight className="h-4 w-4 opacity-75" />
              </motion.a>

              {/* Profile links */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <motion.a
                  href="https://github.com/deveshravichandran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 flex-1 sm:flex-initial px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/devesh-ravichandran-333823258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 flex-1 sm:flex-initial px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive AI Terminal */}
          <motion.div
            className="lg:col-span-5 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="border border-white/10 rounded-2xl bg-zinc-950 shadow-2xl overflow-hidden font-mono text-left">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-black border-b border-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  devesh_agent_session
                </div>
                <div className="w-8"></div>
              </div>

              {/* Terminal Logs Output */}
              <div className="p-4 h-[240px] overflow-y-auto space-y-2 text-xs sm:text-[13px] text-emerald-400">
                {terminalHistory.map((item, idx) => (
                  <div key={idx}>
                    {item.type === 'input' ? (
                      <div className="flex items-center text-gray-400">
                        <span className="text-indigo-400 mr-1.5">guest@devesh:~$</span>
                        <span>{item.text}</span>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap leading-relaxed text-emerald-400/95">
                        {item.text}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* CLI Interactive Input */}
              <form
                onSubmit={handleTerminalSubmit}
                className="flex items-center px-4 py-2 bg-gray-950/40 border-t border-gray-800/60"
              >
                <span className="text-indigo-400 mr-2 text-xs">guest@devesh:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type help..."
                  className="flex-grow bg-transparent text-emerald-400 focus:outline-none text-xs font-mono"
                  autoComplete="off"
                />
              </form>

              {/* Interactive Quick-Action Tags */}
              <div className="px-4 pb-4 pt-2 bg-black flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] text-zinc-500 font-bold uppercase mr-1">Quick Run:</span>
                {['about', 'skills', 'projects', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded text-[10px] bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white transition-all font-semibold font-mono"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
