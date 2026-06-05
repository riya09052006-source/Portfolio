import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './common/GlassCard';
import SectionHeading from './common/SectionHeading';
import { Github, ExternalLink, Sparkles, Filter, Car, Kanban, BarChart3, AlertCircle } from 'lucide-react';

const projectsList = [
  {
    id: 1,
    title: 'Car4U',
    tagline: 'Intelligent Car Recommendation System',
    description: 'An intelligent car recommendation system designed to match vehicles with user preferences. Evaluates key habits, budget constraints, brand preferences, and utilities using collaborative and content-based filtering logic to return ideal vehicle matches.',
    image: 'car4u',
    tech: ['Python', 'Django', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/riya09052006-source',
    demo: 'https://github.com/riya09052006-source',
    featured: true,
    category: 'ml',
    details: {
      problem: 'Consumers face information overload when comparing car specifications, pricing model variations, and feature safety packages.',
      solution: 'Developed a Python and Django web interface utilizing collaborative and content-based filtering algorithms to analyze user inputs and return personalized recommendations.',
      highlights: ['Collaborative & content-based filtering logic', 'Interactive dashboard to compare cars and ratings', 'Integrated datasets for high matching precision']
    }
  },
  {
    id: 2,
    title: 'SMARTLEARN',
    tagline: 'Web-Based E-Learning Platform',
    description: 'A dedicated web-based e-learning platform for students to access courses, notes, eBooks, and quizzes. Developed complete with user log-in gates, progress tracking, and administrative control dashboards.',
    image: 'smartlearn',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/riya09052006-source',
    demo: 'https://github.com/riya09052006-source',
    featured: false,
    category: 'fullstack',
    details: {
      problem: 'Students need a central, cohesive environment to view lectures, store eBooks, and take evaluation quizzes.',
      solution: 'Built a server-side web platform using PHP with structural MySQL database tables, managing role-based user dashboards and administrator content tools.',
      highlights: ['Secure registration & login authentication', 'Comprehensive admin dashboard for course upload', 'Course analytics & progress meters']
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="My Creations" title="Featured Projects" id="projects-heading" />

        <div className="flex justify-center gap-3 mb-12">
          {['all', 'ml', 'frontend', 'fullstack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider border transition-all duration-300 ${
                filter === cat 
                  ? 'bg-brand-violet border-brand-purple text-white shadow-glow-purple scale-[1.02]' 
                  : 'bg-slate-100 dark:bg-brand-dark border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-brand-purple/35'
              }`}
            >
              {cat === 'all' ? 'Show All' : cat === 'ml' ? 'ML & Algorithmic' : cat === 'frontend' ? 'Frontend / Glass' : 'Full Stack'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              className={`lg:col-span-4 ${project.featured && filter === 'all' ? 'lg:col-span-8' : ''}`}
            >
              <GlassCard 
                hoverEffect={true} 
                glowColor={project.category === 'ml' ? 'purple' : 'blue'}
                delay={idx * 0.1}
                className="flex flex-col h-full border border-slate-200 dark:border-white/5 p-0 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-brand-dark dark:to-brand-darker border-b border-slate-200 dark:border-white/5 flex items-center justify-center overflow-hidden p-6">
                  <div className={`absolute w-32 h-32 rounded-full ${
                    project.category === 'ml' ? 'bg-brand-purple/20' : 'bg-brand-blue/20'
                  } blur-2xl`} />

                  <div className="z-10 flex flex-col items-center gap-3">
                    {project.id === 1 ? (
                      <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple shadow-glow-purple">
                        <Car className="w-8 h-8" />
                      </div>
                    ) : project.id === 2 ? (
                      <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue shadow-glow-blue">
                        <BarChart3 className="w-8 h-8" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center text-brand-pink">
                        <Kanban className="w-8 h-8" />
                      </div>
                    )}
                    <span className="text-xs uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400 font-semibold">{project.tagline}</span>
                  </div>

                  {project.featured && (
                    <span className="absolute top-4 right-4 flex items-center gap-1 bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-glow-purple">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured Project</span>
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-slate-655 text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-200 dark:border-white/5 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-brand-purple hover:text-brand-blue flex items-center gap-1.5 focus:outline-none"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-500 hover:text-brand-purple dark:text-slate-400 dark:hover:text-brand-purple transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden glass-morphism border-brand-purple/20 p-8 text-left shadow-glow-purple max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shadow-glow-purple shrink-0">
              <Car className="w-10 h-10" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Car4U Algorithm Detail</h4>
                <span className="text-[10px] bg-brand-purple/20 border border-brand-purple/40 text-brand-purple px-2 py-0.5 rounded-full font-mono">SCIKIT-LEARN</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-light leading-relaxed max-w-2xl mb-4">
                The Car4U backend features a scoring module that maps variables (daily distance, passenger count, cargo needs, weather profiles, fuel source preferences) to standard vehicle types. In tests, the prediction engine maintains a response time under 12ms.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5"><Filter className="w-3.5 h-3.5 text-brand-purple" /> User Preference Filtering</span>
                <span className="flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5 text-brand-blue" /> Dynamic Recommendation Match</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 dark:bg-brand-darker/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', bounce: 0.15 }}
              className="w-full max-w-2xl glass-morphism-glow border-brand-purple/35 rounded-2xl overflow-hidden text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 bg-gradient-to-r from-brand-violet/20 to-brand-purple/20 border-b border-slate-200 dark:border-white/5 flex justify-between items-center">
                <div>
                  <span className="text-xs font-mono text-brand-purple uppercase tracking-widest font-bold">PROJECT DETAILS</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-lg glass-morphism border-slate-200 dark:border-white/5 hover:border-brand-purple/30 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center text-sm focus:outline-none"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                <div>
                  <h4 className="text-sm uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">The Problem</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">{selectedProject.details.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Our Solution</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">{selectedProject.details.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">Key Highlights</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.details.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light">
                        <span className="text-brand-purple mt-1">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-6 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2.5 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-white/10 hover:border-brand-purple/30 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Codebase</span>
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-brand-violet to-brand-purple text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-glow-purple hover:scale-[1.02] transition-transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Site</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;