import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-outfit text-white uppercase tracking-tighter">
              Devesh Ravichandran
            </h2>
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-2">
              AI/ML Engineer & Applied AI Builder
            </p>
          </div>

          <div className="text-xs font-bold text-zinc-600 uppercase tracking-widest text-center md:text-right">
            &copy; {currentYear} ALL RIGHTS RESERVED.
            <br />
            <span className="text-[9px]">ENGINEERED IN PURE CSS & REACT</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
