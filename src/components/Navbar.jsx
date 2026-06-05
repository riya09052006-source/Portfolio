import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Cpu, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-4 shadow-lg shadow-brand-darker/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => scrollTo('home')}
            id="nav-logo"
            className="flex items-center gap-2 group text-slate-900 dark:text-white font-extrabold text-xl tracking-wider uppercase focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-violet to-brand-purple flex items-center justify-center shadow-glow-purple group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span>RIYA<span className="text-brand-purple group-hover:text-brand-blue transition-colors duration-200"> PATEL</span></span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    id={`nav-link-${link.id}`}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                      activeSection === link.id 
                        ? 'text-slate-900 dark:text-white' 
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-purple to-brand-blue"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800" />

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/riya09052006-source"
                target="_blank"
                rel="noreferrer"
                id="social-nav-github"
                className="text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors duration-200 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/riya-patel95"
                target="_blank"
                rel="noreferrer"
                id="social-nav-linkedin"
                className="text-slate-400 hover:text-brand-purple transition-colors duration-200 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-200/50 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 dark:hover:text-white transition-all duration-200 focus:outline-none"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-200/50 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 dark:hover:text-white transition-all duration-200 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="text-slate-800 dark:text-white hover:text-brand-purple focus:outline-none p-1"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 w-full z-40 glass-nav shadow-2xl border-t border-brand-purple/10 flex flex-col p-6 gap-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    id={`mobile-nav-link-${link.id}`}
                    className={`w-full text-left py-2 px-3 rounded-lg text-base font-semibold transition-colors duration-200 focus:outline-none flex justify-between items-center ${
                      activeSection === link.id 
                        ? 'bg-gradient-to-r from-brand-violet/20 to-brand-purple/20 text-brand-purple dark:text-white border-l-2 border-brand-purple' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {activeSection === link.id && <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />}
                  </button>
                </li>
              ))}
            </ul>

            <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

            <div className="flex justify-center gap-8 py-2">
              <a
                href="https://github.com/riya09052006-source"
                target="_blank"
                rel="noreferrer"
                id="mobile-social-github"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 font-medium"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/riya-patel95"
                target="_blank"
                rel="noreferrer"
                id="mobile-social-linkedin"
                className="text-slate-600 dark:text-slate-300 hover:text-brand-purple flex items-center gap-2 font-medium"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;