import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Skills & Certs', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audioEl = document.getElementById('bg-audio');
    if (!audioEl) return;
    
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play().catch(e => console.log('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <a href="#" className="text-xl font-bold font-outfit text-white tracking-tighter uppercase">
            Devesh.R
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={toggleAudio}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isPlaying ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              [ AUDIO: {isPlaying ? 'ON' : 'OFF'} ]
            </button>
            <audio id="bg-audio" src="/audio.mp3" loop preload="none"></audio>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={toggleAudio}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isPlaying ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              [ {isPlaying ? 'ON' : 'OFF'} ]
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
