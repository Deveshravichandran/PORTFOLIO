import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Database, Search, Calculator, FileJson } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const projectsList = [
  {
    id: 'loan-risk-agent',
    title: 'Loan Portfolio Risk Agent',
    isFlagship: true,
    description: 'Agentic RAG system for credit risk analysis. Combines FAISS-based retrieval over loan documents, live web search via DuckDuckGo for real-time market signals, and Llama 3 (via Ollama) with chain-of-thought reasoning to produce structured JSON risk assessments. Includes a custom evals framework benchmarked against a curated golden dataset.',
    corePrinciple: 'Key design principle: all arithmetic runs through deterministic tools, not the LLM, to avoid hallucinated numbers in a financial context.',
    tags: ['Python', 'LangChain', 'FAISS', 'Ollama / Llama3', 'Agentic Tool Use', 'Evals'],
    github: 'https://github.com/Deveshravichandran/LOAN-PORTFOLIO-RISK-AGENT',
  },
  {
    id: 'loan-stress-monitor',
    title: 'Loan Portfolio Stress Monitor',
    description: 'Extension of the risk agent — ingests live news, runs it through a LoRA fine-tuned LLaMA classifier, and uses a ReAct agent with deterministic tools to produce Pydantic v2-validated structured output, visualized in a Streamlit dashboard.',
    tags: ['Python', 'LoRA Fine-tuning', 'ReAct Agents', 'Pydantic v2', 'Streamlit'],
    github: null,
  },
  {
    id: 'pdf-chatbot',
    title: 'PDF Chatbot',
    description: 'Document Q&A chatbot using RecursiveCharacterTextSplitter for chunking and Gemma2 via Ollama for local inference. Built to support private, on-premise enterprise file searches.',
    tags: ['Python', 'Streamlit', 'Ollama / Gemma2', 'LangChain'],
    github: 'https://github.com/Deveshravichandran/PDF-CHATBOT',
  },
  {
    id: 'enterprise-assistant',
    title: 'AI-Driven Intelligent Enterprise Assistant',
    description: 'Dual-chatbot system (Policy Bot + Employee Assistant) with PDF/image summarization via Gemini 2B, Elasticsearch-backed retrieval, and a secure microservice pipeline via API Gateway.',
    tags: ['React.js', 'Express.js', 'Ollama', 'Gemini 2B', 'Elasticsearch', 'PostgreSQL'],
    github: null,
  },
  {
    id: 'synthesight',
    title: 'Synthesight — Frame Interpolation & Explanatory Module',
    description: 'Collaborative final-year project focusing on video frame interpolation with an explainability-focused module to inspect temporal features that drive interpolation decisions.',
    tags: ['Final-Year Project', 'Deep Learning', 'XAI Techniques', 'Collaborative'],
    isTeam: true,
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-grid-pattern relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit">Featured Projects</h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Showcase of agentic architectures, local inference setups, and end-to-end machine learning pipelines.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Flagship Showcased Card */}
        {projectsList.filter(p => p.isFlagship).map(project => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 rounded-3xl p-6 sm:p-10 border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 via-darkBg-card to-emerald-950/10 shadow-[0_0_50px_rgba(99,102,241,0.1)] relative overflow-hidden"
          >
            {/* Glowing borders */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider font-outfit">
                  <StarIcon className="h-3 w-3 mr-1" /> Flagship Project
                </div>

                <h3 className="text-3xl font-extrabold font-outfit text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Core Design Principle Box */}
                <div className="flex items-start space-x-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-sm">
                  <ShieldCheck className="h-5 w-5 mt-0.5 flex-shrink-0 text-emerald-400" />
                  <p className="italic leading-relaxed">
                    {project.corePrinciple}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-lg font-medium border border-gray-700 bg-gray-900/50 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 text-white font-medium transition-all"
                    >
                      <Github className="h-4 w-4" />
                      <span>Explore Repository</span>
                      <ArrowRight className="h-4 w-4 ml-1 opacity-75" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Pipeline Diagram */}
              <div className="lg:col-span-5 border border-gray-800 bg-black/40 rounded-2xl p-5 sm:p-6 space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-outfit">
                  System Architecture Pipeline
                </h4>
                
                {/* Visual Pipeline Flows */}
                <div className="space-y-3.5 text-xs text-gray-400">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-900/50 border border-gray-800">
                    <span className="flex items-center text-gray-300 font-medium"><Database className="h-3.5 w-3.5 mr-2 text-indigo-400" /> Loan Documents</span>
                    <span className="text-[10px] text-gray-500">FAISS Storage</span>
                  </div>

                  <div className="flex items-center justify-center py-1">
                    <ArrowDownIcon className="h-4 w-4 text-indigo-500/40" />
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-900/50 border border-gray-800">
                    <span className="flex items-center text-gray-300 font-medium"><Search className="h-3.5 w-3.5 mr-2 text-sky-400" /> Market Signals</span>
                    <span className="text-[10px] text-gray-500">DuckDuckGo Search</span>
                  </div>

                  <div className="flex items-center justify-center py-1">
                    <ArrowDownIcon className="h-4 w-4 text-indigo-500/40" />
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <span className="flex items-center font-semibold"><Calculator className="h-3.5 w-3.5 mr-2 text-emerald-400" /> Deterministic Math Tool</span>
                    <span className="text-[9px] font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-300 uppercase">Anti-Hallucination</span>
                  </div>

                  <div className="flex items-center justify-center py-1">
                    <ArrowDownIcon className="h-4 w-4 text-indigo-500/40" />
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-900/50 border border-gray-800">
                    <span className="flex items-center text-gray-300 font-medium"><StarIcon className="h-3.5 w-3.5 mr-2 text-purple-400" /> LLM Reasoning</span>
                    <span className="text-[10px] text-gray-500">Ollama Llama 3</span>
                  </div>

                  <div className="flex items-center justify-center py-1">
                    <ArrowDownIcon className="h-4 w-4 text-indigo-500/40" />
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-indigo-500/5 border border-indigo-500/20 text-indigo-300">
                    <span className="flex items-center font-medium"><FileJson className="h-3.5 w-3.5 mr-2 text-indigo-400" /> Structured Assessment</span>
                    <span className="text-[9px] font-bold bg-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-300 uppercase">JSON Output</span>
                  </div>
                </div>

                <div className="text-[10px] text-gray-500 text-center italic pt-1">
                  Benchmarked via custom Evals against Golden Dataset
                </div>
              </div>

            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsList.filter(p => !p.isFlagship).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-2xl p-6 border border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-darkBg-card/40 glassmorphism hover:border-indigo-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-bold font-outfit text-gray-900 dark:text-white group-hover:text-indigo-500">
                    {project.title}
                  </h4>
                  {project.isTeam && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      Team Project
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-indigo-500 hover:text-indigo-400 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5 mr-1" />
                    <span>View Repository</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Simple Inline Icons to keep dependencies clean
function StarIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  );
}
