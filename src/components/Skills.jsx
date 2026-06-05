import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './common/GlassCard';
import SectionHeading from './common/SectionHeading';
import { Layout, Server, Database, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Architecture',
    icon: Layout,
    color: 'purple',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux Toolkit', level: 80 },
      { name: 'Framer Motion', level: 88 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    color: 'blue',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 75 },
      { name: 'JWT Auth & Security', level: 85 },
      { name: 'WebSockets', level: 80 },
    ],
  },
  {
    title: 'Databases & ML',
    icon: Database,
    color: 'pink',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis Caching', level: 70 },
      { name: 'Python (Pandas/NumPy)', level: 78 },
      { name: 'Scikit-Learn', level: 75 },
      { name: 'SQL & Query Tuning', level: 84 },
    ],
  },
  {
    title: 'DevOps & Tooling',
    icon: Terminal,
    color: 'purple',
    skills: [
      { name: 'Git & GitHub Workflows', level: 90 },
      { name: 'Docker Containers', level: 78 },
      { name: 'AWS (S3/EC2)', level: 72 },
      { name: 'Firebase / Supabase', level: 85 },
      { name: 'Vercel & Netlify Deployment', level: 90 },
      { name: 'Linux CLI', level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="My Toolbox" title="Technical Expertise" id="skills-heading" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = category.icon;
            return (
              <GlassCard 
                key={category.title}
                hoverEffect={true} 
                glowColor={category.color}
                delay={catIdx * 0.1}
                className="flex flex-col h-full border border-slate-200 dark:border-white/5"
              >
                <div className="flex items-center gap-4 mb-6 border-b border-slate-200 dark:border-white/5 pb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    category.color === 'purple' ? 'bg-brand-violet/10 text-brand-purple border border-brand-violet/20 shadow-glow-purple' :
                    category.color === 'blue' ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20 shadow-glow-blue' :
                    'bg-brand-pink/10 text-brand-pink border border-brand-pink/20 shadow-glow-pink'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide text-left">{category.title}</h3>
                </div>

                <div className="space-y-5 flex-grow">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="flex flex-col text-left">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-950/60 border border-slate-300 dark:border-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + (skillIdx * 0.05) }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            category.color === 'purple' ? 'from-brand-violet to-brand-purple' :
                            category.color === 'blue' ? 'from-brand-blue to-brand-violet' :
                            'from-brand-pink to-brand-purple'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-12 max-w-3xl mx-auto"
        >
          {['Responsive UI', 'RESTful Design', 'Asynchronous JS', 'CSS Grid', 'Machine Learning', 'JWT Auth', 'SPA Architectures', 'Git Flow', 'Object-Oriented Coding'].map((badge) => (
            <span 
              key={badge} 
              className="text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-brand-dark border border-slate-200 dark:border-white/5 px-4 py-2 rounded-full hover:border-brand-purple/40 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              # {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;