import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start py-16 bg-black overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Massive Typographic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 md:space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold font-outfit tracking-tighter text-white uppercase leading-[0.9]">
            Devesh
            <br />
            <span className="text-zinc-500">Ravichandran</span>
          </h1>
        </motion.div>

        {/* Divider Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="w-full h-[1px] bg-white/20 my-8 origin-left"
        />

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Role</h2>
            <p className="text-xl sm:text-2xl font-medium text-white font-outfit">
              AI/ML Engineer &<br />Applied AI Builder
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:col-span-2 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Building deterministic AI systems for real-world domains. Bridging the gap between robust machine learning models and production DevOps infrastructure.
            </p>
            
            {/* Minimalist CTA */}
            <a
              href="/Devesh_Ravichandran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 border-b border-white pb-1 text-white hover:text-zinc-400 hover:border-zinc-400 transition-colors duration-300 whitespace-nowrap"
            >
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider">View Resume</span>
              <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
