import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, Star } from 'lucide-react';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 bg-black border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white">About Me</h2>
          <div className="w-12 h-1 bg-white mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education/Internship Stats Cards */}
          <div className="md:col-span-5 space-y-4">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="minimal-card p-6 flex items-start space-x-4 hover:border-white/20 transition-colors duration-300"
            >
              <div className="p-3 bg-white/5 rounded-xl text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Education</h3>
                <p className="font-outfit font-bold text-lg mt-1 text-zinc-200">SRM IST</p>
                <p className="text-sm text-zinc-400">B.Tech CSE (AI & ML)</p>
                <p className="text-xs text-zinc-500 mt-1">2022 – 2026 | CGPA: 7.85</p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="minimal-card p-6 flex items-start space-x-4 hover:border-white/20 transition-colors duration-300"
            >
              <div className="p-3 bg-white/5 rounded-xl text-white">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">DevOps Experience</h3>
                <p className="font-outfit font-bold text-lg mt-1 text-zinc-200">CaratLane</p>
                <p className="text-sm text-zinc-400">DevOps Intern</p>
                <p className="text-xs text-zinc-500 mt-1">Jan 2025 – Apr 2026</p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="minimal-card p-6 flex items-start space-x-4 hover:border-white/20 transition-colors duration-300"
            >
              <div className="p-3 bg-white/5 rounded-xl text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Research & Evals</h3>
                <p className="font-outfit font-bold text-lg mt-1 text-zinc-200">Published Author</p>
                <p className="text-sm text-zinc-400">BERT & Explainable AI</p>
                <p className="text-xs text-zinc-500 mt-1">Co-authored Publications</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Narrative */}
          <motion.div
            className="md:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-zinc-400 leading-relaxed text-base">
              <p>
                I am a B.Tech Computer Science Engineering graduate specializing in Artificial Intelligence and Machine Learning from <span className="font-semibold text-white">SRM Institute of Science and Technology (2022–2026)</span>. 
                Recently, I worked as a <span className="font-semibold text-zinc-200">DevOps Intern at CaratLane</span> (a Tanishq Partnership) till April 2026.
              </p>
              <p>
                My objective is to bridge the gap between heavy ML/LLM scripting and production infrastructure. Through my experience, I've gained a production-level exposure to Docker containerization, AWS, CI/CD pipelines, and infrastructure management. This allows me to build and deploy intelligent model pipelines with a deployment and monitoring mindset.
              </p>
              <p>
                My projects are heavily focused on <span className="font-semibold text-zinc-200">agentic RAG systems</span>, LLM tooling, and production-relevant AI applications—particularly in the credit/lending and document intelligence domains. 
                I'm a strong advocate of structured inputs/outputs (Pydantic v2 validation) and deterministic tool usage to prevent LLM hallucinations in sensitive settings.
              </p>
            </div>

            {/* Quote block */}
            <div className="border-l-4 border-zinc-700 bg-white/5 p-4 rounded-r-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Star className="h-3 w-3 fill-zinc-300" /> Core philosophy
              </p>
              <p className="text-sm italic text-zinc-400 mt-1.5">
                "AI systems should not just be smart; they must be deterministic, validated, and safely packaged for production. No hallucinations where numbers matter."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
