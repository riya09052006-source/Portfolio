import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './common/GlassCard';
import SectionHeading from './common/SectionHeading';
import { Award, Code2, Heart, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Coding Experience', value: '3+ Years', icon: Code2, color: 'text-brand-purple' },
  { label: 'Completed Projects', value: '15+', icon: Award, color: 'text-brand-blue' },
  { label: 'Core Dedication', value: 'Full Stack', icon: Heart, color: 'text-brand-pink' },
];

const pillars = [
  {
    title: 'Aesthetics & Accessibility',
    description: 'Creating high-fidelity web experiences that are not only beautiful but accessible to all users.',
    icon: Sparkles,
  },
  {
    title: 'Performance & Optimization',
    description: 'Writing clean, asynchronous code that loads instantly and ranks high on page audits.',
    icon: Code2,
  },
  {
    title: 'Structured Engineering',
    description: 'Using modern patterns, robust type safety where needed, and structured project hierarchies.',
    icon: GraduationCap,
  }
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-violet/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Who I Am" title="About Riya Patel" id="about-heading" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <GlassCard hoverEffect={true} glowColor="purple" className="relative p-0 overflow-hidden">
              <div className="bg-gradient-to-r from-brand-violet/20 via-brand-purple/20 to-brand-blue/20 p-8 flex flex-col items-center border-b border-slate-200 dark:border-white/5">
                <div className="relative w-32 h-32 rounded-full bg-slate-950 flex items-center justify-center p-1.5 border border-brand-purple/40 shadow-glow-purple mb-4">
                  <img src="/profile.jpg" alt="Riya Patel" className="w-full h-full rounded-full object-cover" />
                  <span className="absolute bottom-2 right-2 w-4.5 h-4.5 rounded-full bg-emerald-500 border-2 border-slate-50 dark:border-brand-dark flex items-center justify-center animate-pulse" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Riya Patel</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-purple" />
                  <span>Gandhinagar, Gujarat</span>
                </p>
              </div>

              <div className="p-6 font-mono text-xs text-slate-600 dark:text-slate-400 space-y-3.5 text-left bg-black/5 dark:bg-black/20">
                <div className="flex justify-between border-b border-slate-200 dark:border-white/5 pb-2">
                  <span className="text-slate-500">Degree</span>
                  <span className="text-slate-800 dark:text-white text-right">Computer Engineering</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 dark:border-white/5 pb-2">
                  <span className="text-slate-500">Active Work</span>
                  <span className="text-slate-800 dark:text-white text-right">React & Node Stack</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 dark:border-white/5 pb-2">
                  <span className="text-slate-500">Research Focus</span>
                  <span className="text-slate-800 dark:text-white text-right">Intelligent Recommenders</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Availability</span>
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span>Full-Time</span>
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                Passionate about designing and deploying <span className="text-gradient-blue font-black">next-gen interfaces</span>.
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 font-light leading-relaxed mb-6">
                I specialize in building full-stack web architectures. My engineering journey centers on translating complex client requirements into delightful web applications. With a foundation in computer science and modern front-end frameworks, I am focused on creating highly optimized digital systems.
              </p>

              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
                In my work, I blend functional interface design with backend APIs and custom recommendation systems like Car4U. I believe in clean code, strong architectural foundations, and continuous improvement.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-4 rounded-xl glass-morphism border-slate-200 dark:border-white/5 flex flex-col items-center justify-center text-center shadow-inner"
                  >
                    <IconComponent className={`w-6 h-6 mb-2 ${stat.color}`} />
                    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-none mb-1">{stat.value}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{stat.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="space-y-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200 dark:border-white/5 hover:border-brand-purple/20 transition-all duration-300 text-left"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-purple">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{pillar.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-light mt-1">{pillar.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;