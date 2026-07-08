import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto close success alert after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-grid-pattern">
      {/* Background glow bubble */}
      <div className="glow-bubble w-96 h-96 bg-emerald-500/5 bottom-0 right-0 -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit">Get In Touch</h2>
          <p className="text-gray-400 mt-2 max-w-sm mx-auto text-sm">
            Let's discuss full-time roles, collaborative projects, or general AI/ML architectures.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-bold font-outfit text-white mb-6">Contact Channels</h3>
            
            {/* Email */}
            <a
              href="mailto:deveshravichandran@gmail.com"
              className="flex items-center space-x-4 p-4 rounded-xl border border-gray-250 dark:border-gray-800 bg-white/40 dark:bg-darkBg-card/30 glassmorphism hover:border-indigo-500/30 transition-colors"
            >
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                <p className="text-sm font-semibold text-white break-all">deveshravichandran@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+917200074322"
              className="flex items-center space-x-4 p-4 rounded-xl border border-gray-250 dark:border-gray-800 bg-white/40 dark:bg-darkBg-card/30 glassmorphism hover:border-indigo-500/30 transition-colors"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone</p>
                <p className="text-sm font-semibold text-white">+91 72000 74322</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/devesh-ravichandran-333823258"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl border border-gray-250 dark:border-gray-800 bg-white/40 dark:bg-darkBg-card/30 glassmorphism hover:border-indigo-500/30 transition-colors"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">LinkedIn</p>
                <p className="text-sm font-semibold text-white">devesh-ravichandran-333823258</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/deveshravichandran"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl border border-gray-250 dark:border-gray-800 bg-white/40 dark:bg-darkBg-card/30 glassmorphism hover:border-indigo-500/30 transition-colors"
            >
              <div className="p-3 bg-gray-500/10 rounded-xl text-gray-400">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">GitHub</p>
                <p className="text-sm font-semibold text-white">deveshravichandran</p>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-gray-250 dark:border-gray-800 bg-white/50 dark:bg-darkBg-card/40 glassmorphism shadow-lg">
              <h3 className="text-xl font-bold font-outfit text-white mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-black/30 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-black/30 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-400">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI/ML Engineer role opportunities"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-black/30 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-black/30 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-1" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Success Feedback Alert */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 flex items-center space-x-2 p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-semibold"
                    >
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      <span>Thank you! Your message was sent successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
