import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
        
        if (creditScore >= 740 && dti <= 30) {
          tier = 'Low';
          riskScore = 0.12;
        } else if (creditScore < 620 || dti > 45) {
          tier = 'High';
          riskScore = 0.89;
        }

        setResult({
          tier,
          riskScore,
          decision: tier === 'High' ? 'REJECTED' : 'APPROVED',
          approvedAmount: tier === 'High' ? 0 : loanAmount
        });
        setIsSimulating(false);
      }
    }, 400);
  };

  return (
    <div className="border border-white/20 bg-black p-6 flex flex-col h-full font-mono">
      <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
        <h4 className="text-sm font-bold text-white uppercase tracking-widest">
          Agent Sandbox
        </h4>
        <div className={`px-2 py-0.5 text-[10px] font-bold border ${isSimulating ? 'border-white text-white animate-pulse' : 'border-zinc-700 text-zinc-500'}`}>
          {isSimulating ? 'SIMULATING...' : 'IDLE'}
        </div>
      </div>

      <div className="space-y-6 mb-8 text-xs text-zinc-400">
        <div>
          <div className="flex justify-between mb-2 uppercase tracking-widest">
            <span>Credit Score</span>
            <span className="text-white font-bold">{creditScore}</span>
          </div>
          <input 
            type="range" min="300" max="850" step="5"
            value={creditScore} onChange={(e) => setCreditScore(parseInt(e.target.value))}
            className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-white"
            disabled={isSimulating}
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2 uppercase tracking-widest">
            <span>Debt-to-Income</span>
            <span className="text-white font-bold">{dti}%</span>
          </div>
          <input 
            type="range" min="10" max="80" step="1"
            value={dti} onChange={(e) => setDti(parseInt(e.target.value))}
            className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-white"
            disabled={isSimulating}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2 uppercase tracking-widest">
            <span>Loan Amount</span>
            <span className="text-white font-bold">${loanAmount.toLocaleString()}</span>
          </div>
          <input 
            type="range" min="10000" max="500000" step="5000"
            value={loanAmount} onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-white"
            disabled={isSimulating}
          />
        </div>
      </div>

      <button 
        onClick={runSimulation}
        disabled={isSimulating}
        className="w-full border border-white hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-widest py-3 transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white mb-6"
      >
        {isSimulating ? 'Processing...' : 'Run Evaluation'}
      </button>

      <div className="flex-1 bg-black border border-white/20 p-4 text-[10px] overflow-y-auto min-h-[160px] max-h-[200px]">
        {logs.length === 0 && !result && (
          <div className="text-zinc-600 h-full flex items-center justify-center uppercase tracking-widest">
            Awaiting input
          </div>
        )}
        
        {logs.map((log, idx) => (
          <div key={idx} className="text-zinc-400 mb-1">
            <span className="text-white mr-2">{'>'}</span>{log}
          </div>
        ))}
        
        {result && (
          <div className="mt-4 border-t border-white/20 pt-4">
            <div className="text-zinc-500 mb-1">{"{"}</div>
            <div className="pl-4">
              <span className="text-zinc-400">"risk_tier"</span>: <span className="text-white font-bold">"{result.tier}"</span>,<br/>
              <span className="text-zinc-400">"risk_score"</span>: <span className="text-white">{result.riskScore}</span>,<br/>
              <span className="text-zinc-400">"decision"</span>: <span className="text-white font-bold">"{result.decision}"</span>,<br/>
              <span className="text-zinc-400">"approved_amount"</span>: <span className="text-white">${result.approvedAmount.toLocaleString()}</span>
            </div>
            <div className="text-zinc-500 mt-1">{"}"}</div>
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
    { role: 'system', text: 'GEMMA2 AGENT INITIALIZED. UPLOAD DOC TO BEGIN.' }
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
        { role: 'system', text: 'PARSING PDF...' },
        { role: 'system', text: '42 CHUNKS EMBEDDED TO LOCAL FAISS STORE.' },
        { role: 'assistant', text: 'READY FOR QUERIES.' }
      ]);
    }, 2000);
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

      if (userMsg.toLowerCase().includes('kanye')) {
        setMessages(prev => [
          ...prev,
          { role: 'system', text: 'EASTER EGG DETECTED.' },
          { role: 'assistant', text: "TOP 3 ALBUMS: \n1. My Beautiful Dark Twisted Fantasy\n2. Yeezus\n3. The College Dropout" }
        ]);
        return;
      }

      setMessages(prev => [
        ...prev,
        { role: 'system', text: 'FAISS TOP-K=3 RETRIEVED.' },
        { role: 'assistant', text: 'This is a simulated local response from Gemma2 running entirely offline.' }
      ]);
    }, 1500);
  };

  return (
    <div className="border border-white/20 bg-black p-6 flex flex-col h-full font-mono min-h-[450px]">
      <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
        <h4 className="text-sm font-bold text-white uppercase tracking-widest">
          Local Inference
        </h4>
        <div className={`px-2 py-0.5 text-[10px] font-bold border ${isPdfReady ? 'border-white text-white' : 'border-zinc-700 text-zinc-500'}`}>
          {isPdfReady ? 'MODEL LOADED' : 'AWAITING DOC'}
        </div>
      </div>

      {!isPdfReady && (
        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
          <button 
            onClick={handleUpload}
            disabled={isUploading}
            className="border border-white text-white text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-white hover:text-black transition-colors disabled:opacity-50"
          >
            {isUploading ? 'EMBEDDING...' : 'UPLOAD MOCK PDF'}
          </button>
          {isUploading && (
            <div className="w-48 h-1 bg-zinc-800 overflow-hidden">
              <motion.div 
                className="h-full bg-white" 
                initial={{ width: 0 }} 
                animate={{ width: '100%' }} 
                transition={{ duration: 2 }} 
              />
            </div>
          )}
        </div>
      )}

      {isPdfReady && (
        <div className="flex-1 flex flex-col border border-white/20">
          <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[250px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-xs ${msg.role === 'user' ? 'text-white text-right' : msg.role === 'system' ? 'text-zinc-600 uppercase tracking-widest' : 'text-zinc-400'}`}>
                {msg.role === 'assistant' && <span className="text-white font-bold mr-2">{'>'}</span>}
                {msg.text}
              </div>
            ))}
            {isThinking && <div className="text-zinc-500 text-xs uppercase tracking-widest">{'>>'} PROCESSING...</div>}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSend} className="border-t border-white/20 flex">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="QUERY DOC..."
              disabled={isThinking}
              className="flex-1 bg-black px-4 py-3 text-xs text-white uppercase placeholder-zinc-700 focus:outline-none"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isThinking}
              className="px-6 border-l border-white/20 text-white text-xs font-bold hover:bg-white hover:text-black transition-colors disabled:opacity-50"
            >
              SEND
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
    description: 'Agentic RAG system for credit risk analysis. Combines FAISS-based retrieval over loan documents, live web search for real-time market signals, and Llama 3 with chain-of-thought reasoning to produce structured JSON risk assessments.',
    corePrinciple: 'All arithmetic runs through deterministic tools, not the LLM, to avoid hallucinated numbers in a financial context.',
    tags: ['Python', 'LangChain', 'FAISS', 'Ollama / Llama3', 'Agentic Tool Use', 'Evals'],
    github: 'https://github.com/Deveshravichandran/LOAN-PORTFOLIO-RISK-AGENT',
  },
  {
    id: 'pdf-chatbot',
    title: 'PDF Document Q&A Chatbot',
    isFlagship: true,
    simulator: PdfChatSimulator,
    description: 'Document Q&A chatbot using LangChain\'s RecursiveCharacterTextSplitter for token-optimized document chunking, FAISS for dense vector retrieval, and Google Gemma2 via Ollama for entirely local inference.',
    corePrinciple: '100% of document embedding and LLM inference executes locally, guaranteeing zero data leakage for sensitive enterprise PDFs.',
    tags: ['Python', 'Streamlit', 'Ollama / Gemma2', 'LangChain', 'FAISS'],
    github: 'https://github.com/Deveshravichandran/PDF-CHATBOT',
  },
  {
    id: 'loan-stress-monitor',
    title: 'Loan Portfolio Stress Monitor',
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
    title: 'Intelligent Enterprise Assistant',
    description: 'Dual-chatbot system (Policy Bot + Employee Assistant) with PDF/image summarization via Gemini 2B, Elasticsearch-backed retrieval, and a secure microservice pipeline via API Gateway.',
    bullets: [
      'Constructed a dual-bot framework.',
      'Integrated Gemini 2B for multi-modal image analysis and document summarization.',
      'Backed retrieval with Elasticsearch to enable high-throughput full-text search.',
      'Secured communication pipelines utilizing an Express.js API Gateway.'
    ],
    tags: ['React.js', 'Express.js', 'Ollama', 'Gemini 2B', 'Elasticsearch'],
    github: null,
  },
  {
    id: 'synthesight',
    title: 'Synthesight — Frame Interpolation',
    description: 'Collaborative final-year project focusing on video frame interpolation with an explainability-focused module.',
    bullets: [
      'Co-developed a deep learning pipeline generating intermediate frames from sparse video inputs.',
      'Integrated Explainable AI (XAI) modules to dissect which temporal motion features drive model decisions.',
      'Extended explainability frameworks beyond static images into the video time-series domain.'
    ],
    tags: ['Deep Learning', 'XAI Techniques', 'Collaborative'],
    isTeam: true,
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brutalist Heading */}
          <div className="md:col-span-1">
            <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-white uppercase tracking-tighter sticky top-24">
              Projects
            </h2>
          </div>

          <div className="md:col-span-3">
            
            {/* Flagship Projects */}
            <div className="border-t border-white/10">
              {projectsList.filter(p => p.isFlagship).map(project => (
                <div key={project.id} className="py-12 border-b border-white/10">
                  <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    
                    {/* Details */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-700 px-2 py-1">Flagship</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white uppercase leading-none">{project.title}</h3>
                      <p className="text-base text-zinc-400">{project.description}</p>
                      
                      <div className="border-l-2 border-white pl-4 py-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Architecture Note</p>
                        <p className="text-sm text-white italic">{project.corePrinciple}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/20 text-zinc-300">{tag}</span>
                        ))}
                      </div>

                      {project.github && (
                        <div className="pt-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block border-b border-white pb-1 text-xs font-bold uppercase tracking-widest text-white hover:text-zinc-400 hover:border-zinc-400 transition-colors">
                            View Repository
                          </a>
                        </div>
                      )}
                    </div>
                    
                    {/* Simulator */}
                    <div>
                      {project.simulator && <project.simulator />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 gap-8 pt-12">
              {projectsList.filter(p => !p.isFlagship).map((project) => (
                <div key={project.id} className="border border-white/10 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold text-white uppercase leading-tight pr-4">{project.title}</h4>
                      {project.isTeam && <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-700 px-1 py-0.5 whitespace-nowrap">Team</span>}
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
                    {project.bullets && (
                      <ul className="space-y-2 pt-4 border-t border-white/10">
                        {project.bullets.map((b, i) => (
                          <li key={i} className="flex items-start text-xs text-zinc-400">
                            <span className="text-white mr-2">■</span> {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-[9px] font-bold uppercase tracking-widest border border-white/10 text-zinc-500">{tag}</span>
                      ))}
                    </div>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block border-b border-white/50 pb-0.5 text-[10px] font-bold uppercase tracking-widest text-white hover:text-zinc-400 hover:border-zinc-400 transition-colors">
                        View Repository
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
