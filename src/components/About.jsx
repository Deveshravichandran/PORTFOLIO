import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brutalist Heading */}
          <div className="md:col-span-1">
            <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-white uppercase tracking-tighter sticky top-24">
              About
            </h2>
          </div>

          <div className="md:col-span-3 space-y-16">
            
            {/* Core Narrative */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg sm:text-2xl text-zinc-400 leading-tight font-outfit max-w-3xl"
            >
              I am a B.Tech Computer Science Engineering graduate specializing in Artificial Intelligence and Machine Learning from <span className="text-white">SRM Institute of Science and Technology</span>. 
              My objective is to bridge the gap between heavy ML/LLM scripting and production infrastructure.
            </motion.div>

            {/* Stark Stats / Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/10 pt-8 gap-8">
              <div>
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Education</h3>
                <p className="text-xl font-bold text-white uppercase">SRM IST</p>
                <p className="text-sm text-zinc-400 mt-1">B.Tech CSE (AI & ML)<br/>CGPA: 7.85</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Experience</h3>
                <p className="text-xl font-bold text-white uppercase">CaratLane</p>
                <p className="text-sm text-zinc-400 mt-1">DevOps Intern<br/>2025 – 2026</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Research</h3>
                <p className="text-xl font-bold text-white uppercase">Published Author</p>
                <p className="text-sm text-zinc-400 mt-1">BERT & Explainable AI<br/>Computer Vision</p>
              </div>
            </div>

            {/* Brutalist Quote Block */}
            <div className="border-l-2 border-white pl-6 py-2">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Core Philosophy</p>
              <p className="text-lg sm:text-xl text-white font-medium italic">
                "AI systems should not just be smart; they must be deterministic, validated, and safely packaged for production."
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
