import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Skills & Certs', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.body.classList.add('light-theme');
    } else {
      setIsLight(false);
      document.body.classList.remove('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <motion.a
            href="#"
            className="flex items-center text-xl font-bold font-outfit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Devesh.R
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-indigo-500 duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-700 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Theme"
            >
              {isLight ? (
                <Moon className="h-4 w-4 text-indigo-600" />
              ) : (
                <Sun className="h-4 w-4 text-amber-400" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu & Toggle Button */}
          <div className="flex items-center md:hidden space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-700 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle Theme"
            >
              {isLight ? (
                <Moon className="h-4 w-4 text-indigo-600" />
              ) : (
                <Sun className="h-4 w-4 text-amber-400" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-gray-700 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
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
            className="md:hidden border-t border-gray-200 dark:border-gray-800/50 glassmorphism"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-indigo-500"
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
