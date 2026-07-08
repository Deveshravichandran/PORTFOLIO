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
    <section id="about" className="py-20 bg-gray-950/20 dark:bg-darkBg/10 border-y border-gray-200 dark:border-gray-800/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education/Internship Stats Cards */}
          <div className="md:col-span-5 space-y-4">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glassmorphic rounded-2xl p-6 glassmorphism border shadow-sm flex items-start space-x-4 hover:border-indigo-500/50 transition-colors duration-300"
            >
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Education</h3>
                <p className="font-outfit font-bold text-lg mt-1">SRM IST</p>
                <p className="text-sm text-gray-400">B.Tech CSE (AI & ML)</p>
                <p className="text-xs text-gray-500 mt-1">2022 – 2026 | CGPA: 7.85</p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glassmorphic rounded-2xl p-6 glassmorphism border shadow-sm flex items-start space-x-4 hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Current Internship</h3>
                <p className="font-outfit font-bold text-lg mt-1">CaratLane</p>
                <p className="text-sm text-gray-400">DevOps Intern</p>
                <p className="text-xs text-gray-500 mt-1">Jan 2025 – Present</p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glassmorphic rounded-2xl p-6 glassmorphism border shadow-sm flex items-start space-x-4 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Research & Evals</h3>
                <p className="font-outfit font-bold text-lg mt-1">Published Author</p>
                <p className="text-sm text-gray-400">BERT & Explainable AI</p>
                <p className="text-xs text-gray-500 mt-1">Co-authored Publications</p>
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
            <div className="space-y-4 text-gray-500 dark:text-gray-300 leading-relaxed text-base">
              <p>
                I am a B.Tech Computer Science Engineering graduate specializing in Artificial Intelligence and Machine Learning from <span className="font-semibold text-gray-900 dark:text-white">SRM Institute of Science and Technology (2022–2026)</span>. 
                Currently, I am working as a <span className="font-semibold text-indigo-500">DevOps Intern at CaratLane</span> (a Tanishq Partnership).
              </p>
              <p>
                My objective is to bridge the gap between heavy ML/LLM scripting and production infrastructure. Through my experience, I've gained a production-level exposure to Docker containerization, AWS, CI/CD pipelines, and infrastructure management. This allows me to build and deploy intelligent model pipelines with a deployment and monitoring mindset.
              </p>
              <p>
                My projects are heavily focused on <span className="font-semibold text-emerald-500">agentic RAG systems</span>, LLM tooling, and production-relevant AI applications—particularly in the credit/lending and document intelligence domains. 
                I'm a strong advocate of structured inputs/outputs (Pydantic v2 validation) and deterministic tool usage to prevent LLM hallucinations in sensitive settings.
              </p>
            </div>

            {/* Quote block */}
            <div className="border-l-4 border-indigo-500 bg-indigo-500/5 p-4 rounded-r-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Star className="h-3 w-3 fill-indigo-400" /> Core philosophy
              </p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-1.5">
                "AI systems should not just be smart; they must be deterministic, validated, and safely packaged for production. No hallucinations where numbers matter."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
