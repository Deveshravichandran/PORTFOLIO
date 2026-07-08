import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, FileText, CheckCircle2 } from 'lucide-react';

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
  }
];

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
                <div className="space-y-3 flex-1">
                  
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

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
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

                {/* Left Book Icon Accent */}
                <div className="hidden sm:block p-3 bg-gray-950/30 dark:bg-darkBg/40 border border-gray-800 rounded-xl text-gray-400 self-start">
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
