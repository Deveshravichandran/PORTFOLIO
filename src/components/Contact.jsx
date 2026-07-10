import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const submissionData = {
      access_key: "3d94e995-e06d-4385-aca0-56b464c74aa9",
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submissionData)
      });
      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setErrorMsg(result.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-white uppercase tracking-tighter sticky top-24">
              Contact
            </h2>
          </div>

          <div className="md:col-span-3">
            <div className="grid lg:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">Get In Touch</h3>
                  <p className="text-sm text-zinc-400 max-w-sm">
                    Let's discuss full-time roles, collaborative projects, or general AI/ML architectures.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:deveshravichandran@gmail.com" className="block border border-white/20 p-4 hover:border-white transition-colors group">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1 group-hover:text-white transition-colors">Email</p>
                    <p className="text-sm font-bold text-white uppercase break-all">deveshravichandran@gmail.com</p>
                  </a>
                  
                  <a href="tel:+917200074322" className="block border border-white/20 p-4 hover:border-white transition-colors group">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1 group-hover:text-white transition-colors">Phone</p>
                    <p className="text-sm font-bold text-white uppercase">+91 72000 74322</p>
                  </a>

                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://linkedin.com/in/devesh-ravichandran-333823258" target="_blank" rel="noopener noreferrer" className="block border border-white/20 p-4 hover:border-white transition-colors group text-center">
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1 group-hover:text-white transition-colors">LinkedIn</p>
                      <p className="text-sm font-bold text-white uppercase">Profile</p>
                    </a>
                    
                    <a href="https://github.com/deveshravichandran" target="_blank" rel="noopener noreferrer" className="block border border-white/20 p-4 hover:border-white transition-colors group text-center">
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1 group-hover:text-white transition-colors">GitHub</p>
                      <p className="text-sm font-bold text-white uppercase">Profile</p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitSuccess && (
                    <div className="bg-white text-black p-4 text-xs font-bold uppercase tracking-widest text-center">
                      Message Sent Successfully.
                    </div>
                  )}
                  {errorMsg && (
                    <div className="bg-zinc-900 border border-red-500 text-red-500 p-4 text-xs font-bold uppercase tracking-widest text-center">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Full Name</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-black border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-white transition-colors" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Email Address</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-black border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-white transition-colors" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Subject</label>
                      <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full bg-black border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-white transition-colors" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Message</label>
                      <textarea id="message" name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full bg-black border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full border border-white text-white font-bold uppercase tracking-widest text-xs py-4 hover:bg-white hover:text-black transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
