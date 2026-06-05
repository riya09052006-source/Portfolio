import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-r from-brand-violet/10 via-brand-purple/10 to-brand-blue/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 bg-brand-violet/10 border border-brand-violet/25 rounded-full text-brand-purple text-xs font-semibold tracking-wider mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OPEN FOR FULL-STACK OPPORTUNITIES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
          >
            Hi, I'm <span className="text-gradient-purple font-black">Riya Patel</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 tracking-wide"
          >
            Creating modern, intelligent <span className="text-brand-blue">Web Solutions</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-light"
          >
            I am a full stack software developer passionate about building high-fidelity web applications, incorporating fluid user experiences and machine learning intelligence like personalized recommendation systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            <button
              onClick={() => scrollTo('projects')}
              id="hero-cta-projects"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-violet to-brand-purple hover:from-brand-purple hover:to-brand-violet text-white font-medium px-8 py-4 rounded-xl shadow-glow-purple hover:scale-[1.03] transition-all duration-300 focus:outline-none"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              id="hero-cta-contact"
              className="flex items-center justify-center gap-2 glass-morphism hover:bg-slate-100 dark:hover:bg-white/5 border-slate-200 dark:border-white/10 hover:border-brand-purple/40 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 focus:outline-none"
            >
              <span>Get In Touch</span>
              <Mail className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <span className="text-xs tracking-widest text-slate-500 uppercase font-semibold">CONNECT:</span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/riya09052006-source"
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                className="w-10 h-10 rounded-xl glass-morphism border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-brand-purple/40 hover:scale-110 transition-all duration-200"
                aria-label="Visit GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/riya-patel95"
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                className="w-10 h-10 rounded-xl glass-morphism border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-purple hover:border-brand-purple/40 hover:scale-110 transition-all duration-200"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollTo('resume')}
                id="hero-social-resume"
                className="w-10 h-10 rounded-xl glass-morphism border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-blue hover:border-brand-blue/40 hover:scale-110 transition-all duration-200 focus:outline-none"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
            className="relative w-full max-w-[380px] aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-purple/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-double border-brand-blue/10 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute w-48 h-48 rounded-full bg-brand-violet/25 blur-3xl" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="glass-morphism-glow w-[310px] rounded-2xl p-6 border-brand-purple/30 z-10 shadow-glow-purple"
            >
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-200 dark:border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[10px] tracking-widest text-slate-500 uppercase font-mono">portfolio.js</div>
              </div>
              
              <div className="font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed text-left">
                <p className="text-slate-400 dark:text-slate-500">// Creative Core</p>
                <p><span className="text-brand-purple">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-500 dark:text-emerald-400">"Riya Patel"</span>,</p>
                <p className="pl-4">role: <span className="text-emerald-500 dark:text-emerald-400">"Full Stack Architect"</span>,</p>
                <p className="pl-4">passion: <span className="text-emerald-500 dark:text-emerald-400">"Interactive UX"</span>,</p>
                <p className="pl-4">skills: [</p>
                <p className="pl-8"><span className="text-brand-blue">"React"</span>, <span className="text-brand-blue">"Tailwind"</span>,</p>
                <p className="pl-8"><span className="text-brand-blue">"Framer-Motion"</span>, <span className="text-brand-blue">"Node"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4">hobbies: [<span className="text-brand-pink">"Gaming"</span>, <span className="text-brand-pink">"UI Styling"</span>]</p>
                <p>&#125;;</p>
                <p className="mt-4"><span className="text-brand-purple">console</span>.log(developer.passion);</p>
                <p className="text-slate-400 dark:text-slate-500">// Output: Interactive UX ✨</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10" onClick={() => scrollTo('about')}>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">DISCOVER</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-slate-600 flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;