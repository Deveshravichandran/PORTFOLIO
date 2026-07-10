import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo / Tech Identity */}
          <div className="flex items-center space-x-2 text-sm font-semibold font-outfit text-zinc-400">
            <Terminal className="h-4 w-4 text-white" />
            <span>Devesh Ravichandran Portfolio</span>
          </div>

          {/* Copyright text */}
          <p className="text-xs text-zinc-500 text-center sm:text-left">
            &copy; {currentYear} Devesh Ravichandran. All rights reserved.
          </p>

          {/* Tech Stack signature */}
          <p className="text-xs text-zinc-500 text-center sm:text-right">
            Built with{' '}
            <span className="text-zinc-300 font-medium">React + Vite + Tailwind CSS</span>
          </p>
          
        </div>
      </div>
    </footer>
  );
}
