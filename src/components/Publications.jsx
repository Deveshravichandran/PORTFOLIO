import React, { useState } from 'react';

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
    authors: 'Devesh Ravichandran',
    type: 'Explainable AI Research',
    description: 'Designed a CNN with attention gates for dermatological image classification. Integrated Explainable AI frameworks (Grad-CAM and LIME) to provide visual interpretability, achieving a 91% classification accuracy.',
    tags: ['Computer Vision', 'Deep Learning', 'Explainable AI (XAI)', 'Grad-CAM', 'LIME'],
    hasVisualizer: true,
  }
];

function GradCamVisualizer() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mt-8 border border-white/20 p-6 flex flex-col sm:flex-row items-start gap-8 bg-black">
      {/* Abstract Mock Canvas */}
      <div className="relative w-32 h-32 bg-zinc-900 border border-zinc-700 flex-shrink-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMTgxODE4Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzZjNmNGYiLz4KPC9zdmc+')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-10 border border-white/30 rounded-[40%_60%_70%_30%]"></div>
        
        {isActive && (
          <div className="absolute inset-0 mix-blend-screen bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_20%,transparent_60%)]"></div>
        )}
      </div>

      <div className="flex-1">
        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Interactive XAI Module</h4>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          Toggle the Attention Map overlay. This stark visualization demonstrates spatial regions where the CNN's attention gates place the most convolutional weight during diagnosis.
        </p>
        
        <button
          onClick={() => setIsActive(!isActive)}
          className={`border text-xs font-bold uppercase tracking-widest px-6 py-2 transition-colors ${
            isActive 
            ? 'bg-white text-black border-white' 
            : 'bg-black text-white border-white hover:bg-zinc-900'
          }`}
        >
          {isActive ? 'Hide Attention Map' : 'Visualize Attention'}
        </button>
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-white uppercase tracking-tighter sticky top-24">
              Research
            </h2>
          </div>

          <div className="md:col-span-3">
            <div className="border-t border-white/10">
              {publications.map((pub, idx) => (
                <div key={idx} className="py-12 border-b border-white/10">
                  <div className="space-y-4">
                    <span className="inline-block border border-zinc-700 text-zinc-500 text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-2">
                      {pub.type}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">
                      Authors: <span className="text-white">{pub.authors}</span>
                    </p>
                    <p className="text-base text-zinc-400 leading-relaxed pt-2">
                      {pub.description}
                    </p>

                    {pub.hasVisualizer && <GradCamVisualizer />}

                    <div className="flex flex-wrap gap-2 pt-6">
                      {pub.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/10 text-zinc-500">
                          {tag}
                        </span>
                      ))}
                    </div>
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
