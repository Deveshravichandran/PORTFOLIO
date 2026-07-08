import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, FileText, Eye } from 'lucide-react';

const publications = [
  {
    title: 'Comparative Analysis on BERT Models: ALBERT and RoBERTa',
    authors: 'Tashin Khan, Thejal Ravichandran, Devesh Ravichandran',
    type: 'Conference / Research Paper',
    description: 'A comprehensive comparative analysis detailing the architectures, performance, tokenization methods, and parameter efficiency of A Lite BERT (ALBERT) versus Robustly Optimized BERT Approach (RoBERTa). Examines downstream NLP accuracy under resource constraints.',
    tags: ['NLP', 'BERT', 'ALBERT', 'RoBERTa', 'Transformers'],
  },
  {
    title: 'Attention-Guided Multi-Scale Feature Fusion for Skin Disease Classification',
    authors: 'Devesh Ravichandran (Individual Research Portfolio)',
    type: 'Explainable AI Research',
    description: 'Designed a Convolutional Neural Network (CNN) with attention gates for dermatological image classification, allowing the model to learn and focus on diagnostically important regions. Integrated Explainable AI frameworks (Grad-CAM and LIME) to provide visual interpretability, achieving a 91% classification accuracy.',
    tags: ['Computer Vision', 'Deep Learning', 'Explainable AI (XAI)', 'Grad-CAM', 'LIME'],
    hasVisualizer: true,
  }
];

// --- Interactive Grad-CAM Subcomponent ---
function GradCamVisualizer() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mt-5 p-5 border border-gray-800 bg-gray-950/60 rounded-xl relative overflow-hidden flex flex-col sm:flex-row items-center gap-6">
      
      {/* Left side: Canvas/Image mock */}
      <div className="relative w-40 h-40 bg-[#1c1816] rounded-xl border border-gray-800 overflow-hidden flex-shrink-0 shadow-inner">
        {/* Base Image Mock (Skin texture pattern) */}
        <div 
          className="absolute inset-0 opacity-60" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 30% 40%, #3a2a22 0%, transparent 50%), radial-gradient(circle at 70% 60%, #2c1e18 0%, transparent 50%)' 
          }}
        ></div>
        
        {/* Abstract "Lesion" area */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-10 bg-[#4a1f18] rounded-[40%_60%_70%_30%] blur-[2px]"></div>

        {/* Grad-CAM Heatmap Overlay */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255,0,0,0.85) 0%, rgba(255,165,0,0.7) 20%, rgba(255,255,0,0.4) 35%, rgba(0,255,0,0.1) 55%, rgba(0,0,255,0.05) 75%, transparent 100%)',
                mixBlendMode: 'screen'
              }}
            />
          )}
        </AnimatePresence>

        {/* Scanning Line Animation when active */}
        {isActive && (
          <motion.div 
            className="absolute left-0 right-0 h-0.5 bg-white/40 blur-[1px] shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>

      {/* Right side: Controls & Description */}
      <div className="flex-1 space-y-3">
        <div>
          <h4 className="text-sm font-bold text-gray-200 font-outfit flex items-center mb-1">
            <Eye className="w-4 h-4 mr-1.5 text-indigo-400" />
            Interactive XAI Module
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Click below to toggle the <span className="text-amber-400 font-semibold">Grad-CAM Heatmap</span> overlay. 
            This visualizes the spatial regions where the CNN\'s attention gates place the most convolutional weight when diagnosing potential anomalies.
          </p>
        </div>
        
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg border transition-all ${
            isActive 
            ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]' 
            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          {isActive ? 'Hide Attention Map' : 'Visualize CNN Attention'}
        </button>
      </div>

    </div>
  );
}
// ------------------------------------------

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-950/20 dark:bg-darkBg/10 border-y border-gray-200 dark:border-gray-800/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit">Publications & Research</h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm">
            Academic papers and explainable deep learning research focused on transformer efficiency and neural network interpretability.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-darkBg-card/40 glassmorphism hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-3 flex-1 w-full">
                  
                  {/* Type Badge */}
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                    <FileText className="h-3 w-3 mr-1" /> {pub.type}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-outfit text-white leading-snug">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <div className="flex items-center text-xs text-gray-400 gap-1.5">
                    <Users className="h-3.5 w-3.5 text-gray-500" />
                    <span><span className="text-gray-500">Authors:</span> {pub.authors}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed pt-1">
                    {pub.description}
                  </p>

                  {/* Optional Interactive Visualizer */}
                  {pub.hasVisualizer && (
                    <GradCamVisualizer />
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {pub.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] rounded-md font-medium border border-gray-700 bg-gray-900/40 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Book Icon Accent */}
                <div className="hidden sm:block p-3 bg-gray-950/30 dark:bg-darkBg/40 border border-gray-800 rounded-xl text-gray-400 self-start flex-shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
