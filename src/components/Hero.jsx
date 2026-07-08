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
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 overflow-hidden bg-grid-pattern">
      {/* Ambient Glow Bubbles */}
      <div className="glow-bubble w-96 h-96 bg-indigo-600 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="glow-bubble w-96 h-96 bg-emerald-600 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>

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
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-indigo-500/30 dark:border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs sm:text-sm font-semibold font-outfit"
            >
              <Cpu className="h-4 w-4 animate-pulse" />
              <span>Open to AI/ML & Applied AI Engineer Roles</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold font-outfit tracking-tight text-gray-900 dark:text-white"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(99,102,241,0.25)]">
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
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-200"
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
                  className="flex items-center justify-center space-x-2 flex-1 sm:flex-initial px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-800 bg-white/30 dark:bg-black/10 hover:bg-gray-150 dark:hover:bg-gray-800/40 font-medium transition-all duration-200"
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
                  className="flex items-center justify-center space-x-2 flex-1 sm:flex-initial px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-800 bg-white/30 dark:bg-black/10 hover:bg-gray-150 dark:hover:bg-gray-800/40 font-medium transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Linkedin className="h-5 w-5 text-blue-500" />
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
            <div className="border border-gray-300 dark:border-gray-800 rounded-2xl bg-gray-900/90 dark:bg-black/80 shadow-2xl overflow-hidden font-mono text-left">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-950/80 border-b border-gray-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
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
              <div className="px-4 pb-4 pt-2 bg-gray-950/20 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] text-gray-500 font-bold uppercase mr-1">Quick Run:</span>
                {['about', 'skills', 'projects', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/10 hover:bg-indigo-500/25 border border-indigo-500/20 text-indigo-400 hover:text-white transition-all font-semibold font-mono"
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
