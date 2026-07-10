import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Database, Search, Calculator, FileJson, Activity, Bot, Eye, HelpCircle, PlayCircle, Loader2, Upload, Send, MessageSquare } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// --- Risk Simulator Subcomponent ---
function RiskSimulator() {
  const [creditScore, setCreditScore] = useState(680);
  const [dti, setDti] = useState(35);
  const [loanAmount, setLoanAmount] = useState(150000);
  
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState([]);
  const [result, setResult] = useState(null);
  
  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, result]);

  const runSimulation = () => {
    setIsSimulating(true);
    setLogs([]);
    setResult(null);
    
    const steps = [
      "Initializing Risk Agent...",
      "[1] FAISS: Querying credit risk historical indexes...",
      "[2] WebSearch: Scraping live market indicators...",
      `[3] ToolUse: Deterministic evaluation of DTI=${dti}% and Score=${creditScore}...`,
      "Synthesizing chain-of-thought...",
      "Generating final structured JSON..."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setLogs(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        
        let tier = 'Medium';
        let riskScore = 0.52;
        let colorClass = 'text-amber-400';
        let bgClass = 'bg-amber-500/10 border-amber-500/30';
        
        if (creditScore >= 740 && dti <= 30) {
          tier = 'Low';
          riskScore = 0.12;
          colorClass = 'text-emerald-400';
          bgClass = 'bg-emerald-500/10 border-emerald-500/30';
        } else if (creditScore < 620 || dti > 45) {
          tier = 'High';
          riskScore = 0.89;
          colorClass = 'text-red-400';
          bgClass = 'bg-red-500/10 border-red-500/30';
        }

        setResult({
          tier,
          riskScore,
          colorClass,
          bgClass,
          decision: tier === 'High' ? 'REJECTED' : 'APPROVED',
          approvedAmount: tier === 'High' ? 0 : loanAmount
        });
        setIsSimulating(false);
      }
    }, 600);
  };

  return (
    <div className="border border-gray-800 bg-gray-950/80 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col h-full">
      <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
        <Calculator size={80} />
      </div>
      
      <div className="flex items-center justify-between mb-4 relative z-10">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-outfit flex items-center">
          <Activity className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
          Live Agent Sandbox
        </h4>
        <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${isSimulating ? 'bg-indigo-500/20 text-indigo-300 animate-pulse' : 'bg-gray-800 text-gray-500'}`}>
          {isSimulating ? 'SIMULATING...' : 'IDLE'}
        </div>
      </div>

      {/* Input Sliders */}
      <div className="space-y-4 mb-5 relative z-10">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Credit Score</span>
            <span className="text-indigo-400 font-mono font-bold">{creditScore}</span>
          </div>
          <input 
            type="range" min="300" max="850" step="5"
            value={creditScore} onChange={(e) => setCreditScore(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            disabled={isSimulating}
          />
        </div>
        
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Debt-to-Income (DTI)</span>
            <span className="text-emerald-400 font-mono font-bold">{dti}%</span>
          </div>
          <input 
            type="range" min="10" max="80" step="1"
            value={dti} onChange={(e) => setDti(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            disabled={isSimulating}
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Loan Amount</span>
            <span className="text-purple-400 font-mono font-bold">${loanAmount.toLocaleString()}</span>
          </div>
          <input 
            type="range" min="10000" max="500000" step="5000"
            value={loanAmount} onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            disabled={isSimulating}
          />
        </div>
      </div>

      {/* Run Button */}
      <button 
        onClick={runSimulation}
        disabled={isSimulating}
        className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4"
      >
        {isSimulating ? <Loader2 className="w-4 h-4 animate-spin" /> : <PlayCircle className="w-4 h-4" />}
        <span>{isSimulating ? 'Processing...' : 'Run Evaluation'}</span>
      </button>

      {/* Terminal Output Screen */}
      <div className="flex-1 bg-black/60 rounded-xl border border-gray-800/80 p-3 font-mono text-[10px] overflow-y-auto min-h-[140px] max-h-[180px]">
        {logs.length === 0 && !result && (
          <div className="text-gray-600 h-full flex items-center justify-center italic">
            Adjust sliders and click run to simulate agent inference.
          </div>
        )}
        
        {logs.map((log, idx) => (
          <div key={idx} className="text-gray-400 mb-1 leading-relaxed">
            <span className="text-indigo-500 mr-2">{'>'}</span>{log}
          </div>
        ))}
        
        {result && (
          <div className={`mt-3 p-2 rounded border ${result.bgClass}`}>
            <div className="text-gray-300 mb-1">{"{"}</div>
            <div className="pl-4 text-gray-300">
              <span className="text-sky-300">"risk_tier"</span>: <span className={`font-bold ${result.colorClass}`}>"{result.tier}"</span>,<br/>
              <span className="text-sky-300">"risk_score"</span>: <span className="text-orange-300">{result.riskScore}</span>,<br/>
              <span className="text-sky-300">"decision"</span>: <span className={`font-bold ${result.colorClass}`}>"{result.decision}"</span>,<br/>
              <span className="text-sky-300">"approved_amount"</span>: <span className="text-emerald-300">${result.approvedAmount.toLocaleString()}</span>
            </div>
            <div className="text-gray-300 mt-1">{"}"}</div>
          </div>
        )}
        <div ref={logEndRef} />
      </div>
    </div>
  );
}

// --- PDF Chat Simulator Subcomponent ---
function PdfChatSimulator() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am the local Gemma2 agent. Upload a mock PDF to begin.' }
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [isPdfReady, setIsPdfReady] = useState(false);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsPdfReady(true);
      setMessages(prev => [
        ...prev,
        { role: 'system', text: '[System]: PDF parsed successfully.' },
        { role: 'system', text: '[System]: 42 chunks embedded into local FAISS vector store.' },
        { role: 'assistant', text: 'Document ingested! Ask me anything about its contents.' }
      ]);
    }, 2500);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || !isPdfReady || isThinking) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      setMessages(prev => [
        ...prev,
        { role: 'system', text: '[Retrieval]: FAISS top-k=3 chunks retrieved based on semantic similarity.' },
        { role: 'assistant', text: `Based on the document context retrieved, this is a simulated local response from Gemma2 running entirely offline to guarantee data privacy.` }
      ]);
    }, 1800);
  };

  return (
    <div className="border border-gray-800 bg-gray-950/80 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col h-full min-h-[400px]">
      <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
        <MessageSquare size={80} />
      </div>
      
      <div className="flex items-center justify-between mb-4 relative z-10">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-outfit flex items-center">
          <Database className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
          Local Inference UI
        </h4>
        <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${isPdfReady ? 'bg-sky-500/20 text-sky-300' : 'bg-gray-800 text-gray-500'}`}>
          {isPdfReady ? 'MODEL LOADED' : 'WAITING FOR DOC'}
        </div>
      </div>

      {!isPdfReady && (
        <div className="flex-1 flex flex-col items-center justify-center space-y-4 relative z-10">
          <button 
            onClick={handleUpload}
            disabled={isUploading}
            className="px-6 py-3 rounded-xl border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-sm font-semibold flex items-center transition-all disabled:opacity-50"
          >
            {isUploading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Upload className="w-5 h-5 mr-2" />}
            {isUploading ? 'Chunking & Embedding...' : 'Upload Mock PDF'}
          </button>
          {isUploading && (
            <div className="w-48 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-sky-500" 
                initial={{ width: 0 }} 
                animate={{ width: '100%' }} 
                transition={{ duration: 2.5 }} 
              />
            </div>
          )}
        </div>
      )}

      {isPdfReady && (
        <div className="flex-1 flex flex-col relative z-10 bg-black/40 rounded-xl border border-gray-800/80 overflow-hidden">
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-[220px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-sky-600 text-white rounded-br-sm' 
                    : msg.role === 'system'
                    ? 'bg-gray-900 border border-gray-800 text-emerald-400 font-mono text-[10px] w-full text-center'
                    : 'bg-gray-800 text-gray-200 rounded-bl-sm border border-gray-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-gray-800 rounded-xl rounded-bl-sm px-4 py-3 border border-gray-700 flex items-center space-x-1">
                  <motion.div className="w-1.5 h-1.5 bg-gray-500 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.div className="w-1.5 h-1.5 bg-gray-500 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.div className="w-1.5 h-1.5 bg-gray-500 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-2 bg-gray-900 border-t border-gray-800 flex items-center space-x-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about the PDF..."
              disabled={isThinking}
              className="flex-1 bg-black/50 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500 disabled:opacity-50"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isThinking}
              className="p-2 rounded-lg bg-sky-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-500 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
// ------------------------------------

const projectsList = [
  {
    id: 'loan-risk-agent',
    title: 'Loan Portfolio Risk Agent',
    isFlagship: true,
    simulator: RiskSimulator,
    description: 'Agentic RAG system for credit risk analysis. Combines FAISS-based retrieval over loan documents, live web search via DuckDuckGo for real-time market signals, and Llama 3 (via Ollama) with chain-of-thought reasoning to produce structured JSON risk assessments. Includes a custom evals framework benchmarked against a curated golden dataset.',
    corePrinciple: 'Key design principle: all arithmetic runs through deterministic tools, not the LLM, to avoid hallucinated numbers in a financial context.',
    tags: ['Python', 'LangChain', 'FAISS', 'Ollama / Llama3', 'Agentic Tool Use', 'Evals'],
    github: 'https://github.com/Deveshravichandran/LOAN-PORTFOLIO-RISK-AGENT',
  },
  {
    id: 'pdf-chatbot',
    title: 'PDF Document Q&A Chatbot',
    isFlagship: true,
    simulator: PdfChatSimulator,
    description: 'Document Q&A chatbot using LangChain\'s RecursiveCharacterTextSplitter for token-optimized document chunking, FAISS for dense vector retrieval, and Google Gemma2 via Ollama for entirely local inference.',
    corePrinciple: 'Privacy-First Architecture: 100% of document embedding and LLM inference executes locally, guaranteeing zero data leakage for sensitive enterprise PDFs.',
    tags: ['Python', 'Streamlit', 'Ollama / Gemma2', 'LangChain', 'FAISS'],
    github: 'https://github.com/Deveshravichandran/PDF-CHATBOT',
  },
  {
    id: 'loan-stress-monitor',
    title: 'Loan Portfolio Stress Monitor',
    icon: Activity,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
    description: 'Extension of the risk agent designed to run stress tests under dynamic economic scenarios.',
    bullets: [
      'Ingests live financial news feeds and articles for real-time market risk signal detection.',
      'Classifies news sentiment and impact severity using a custom LoRA fine-tuned LLaMA model.',
      'Orchestrates decisions using a ReAct agent linked to deterministic mathematical calculation tools.',
      'Outputs structured data validated by Pydantic v2 schemas into a Streamlit dashboard.'
    ],
    tags: ['Python', 'LoRA Fine-tuning', 'ReAct Agents', 'Pydantic v2', 'Streamlit'],
    github: null,
  },
  {
    id: 'enterprise-assistant',
    title: 'AI-Driven Intelligent Enterprise Assistant',
    icon: Bot,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    description: 'Dual-chatbot system (Policy Bot + Employee Assistant) with PDF/image summarization via Gemini 2B, Elasticsearch-backed retrieval, and a secure microservice pipeline via API Gateway.',
    bullets: [
      'Constructed a dual-bot framework (Policy Bot for HR rules & Employee Assistant for technical Q&A).',
      'Integrated Gemini 2B for multi-modal image analysis and document summarization.',
      'Backed retrieval with Elasticsearch to enable high-throughput full-text search across documentation.',
      'Secured communication pipelines between microservices utilizing an Express.js API Gateway.'
    ],
    tags: ['React.js', 'Express.js', 'Ollama', 'Gemini 2B', 'Elasticsearch', 'PostgreSQL'],
    github: null,
  },
  {
    id: 'synthesight',
    title: 'Synthesight — Frame Interpolation & Explanatory Module',
    icon: Eye,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    description: 'Collaborative final-year project focusing on video frame interpolation with an explainability-focused module.',
    bullets: [
      'Co-developed a deep learning pipeline generating intermediate frames from sparse video inputs.',
      'Integrated Explainable AI (XAI) modules to dissect which temporal motion features drive model decisions.',
      'Extended explainability frameworks beyond static images into the video time-series domain.',
      'Marked clearly as collaborative, utilizing PyTorch and advanced visualization tools.'
    ],
    tags: ['Final-Year Project', 'Deep Learning', 'XAI Techniques', 'Collaborative'],
    isTeam: true,
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black relative border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white">Featured Projects</h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Showcase of agentic architectures, local inference setups, and end-to-end machine learning pipelines.
          </p>
          <div className="w-12 h-1 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Flagship Showcased Card */}
        {projectsList.filter(p => p.isFlagship).map(project => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 minimal-card p-6 sm:p-10 relative overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-semibold uppercase tracking-wider font-outfit self-start">
                  <StarIcon className="h-3 w-3 mr-1" /> Flagship Project
                </div>

                <h3 className="text-3xl font-extrabold font-outfit text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Core Design Principle Box */}
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm">
                  <ShieldCheck className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
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

              {/* Right Column: Interactive Simulator */}
              <div className="lg:col-span-5 h-full">
                {project.simulator && <project.simulator />}
              </div>

            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsList.filter(p => !p.isFlagship).map((project, idx) => {
            const IconComponent = project.icon || HelpCircle;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="minimal-card p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Header with Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl ${project.iconBg} ${project.iconColor} flex-shrink-0`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-bold font-outfit text-white leading-tight">
                        {project.title}
                      </h4>
                    </div>
                    {project.isTeam && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex-shrink-0">
                        Team Project
                      </span>
                    )}
                  </div>

                  {/* Intro Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-outfit">
                    {project.description}
                  </p>

                  {/* Implementation Bullets */}
                  {project.bullets && (
                    <ul className="space-y-2 pt-2 border-t border-white/5">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs text-zinc-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-zinc-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-4 mt-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] rounded font-medium border border-gray-700 bg-gray-950 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-indigo-500 hover:text-indigo-400 transition-colors pt-1"
                    >
                      <Github className="h-3.5 w-3.5 mr-1.5" />
                      <span>View Repository</span>
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
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
