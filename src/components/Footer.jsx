import React from 'react';
import { Cpu, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-brand-darker border-t border-slate-200 dark:border-white/5 py-12 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-brand-violet/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <button 
            onClick={() => scrollTo('home')}
            id="footer-logo"
            className="flex items-center gap-2 group text-slate-900 dark:text-white font-extrabold text-lg tracking-wider uppercase mb-3 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-brand-purple flex items-center justify-center shadow-glow-purple">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span>RIYA<span className="text-brand-purple"> PATEL</span></span>
          </button>
          <p className="text-xs text-slate-500 font-light leading-relaxed max-w-xs">
            Designing and deploying premium digital environments with clean structure and high-performance scalability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          {['about', 'skills', 'projects', 'certifications', 'resume', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              id={`footer-link-${section}`}
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 capitalize transition-colors duration-200 focus:outline-none"
            >
              {section}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/riya09052006-source"
              target="_blank"
              rel="noreferrer"
              id="footer-social-github"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/riya-patel95"
              target="_blank"
              rel="noreferrer"
              id="footer-social-linkedin"
              className="text-slate-500 hover:text-brand-purple transition-colors duration-200"
              aria-label="LinkedIn Link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={() => scrollTo('contact')}
              id="footer-social-contact"
              className="text-slate-500 hover:text-brand-blue transition-colors duration-200 focus:outline-none"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
          <span className="text-[10px] text-slate-500 dark:text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} Riya Patel. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;