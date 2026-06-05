import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './common/GlassCard';
import SectionHeading from './common/SectionHeading';
import { Download, Briefcase, GraduationCap, Calendar, FileText, ArrowRight, User } from 'lucide-react';

const experienceList = [
  {
    role: 'Data Science and Machine Learning Intern',
    company: 'BrainyBeam',
    period: 'Jul 2023 - Aug 2023',
    description: 'Completed a comprehensive internship focusing on Python programming, exploratory data analysis, and machine learning models. Gained hands-on experience in building, executing, and testing algorithmic models.',
    highlights: ['Built and tested foundational machine learning models', 'Practiced Python-based data manipulation', 'Gained practical insight into ML testing cycles']
  },
  {
    role: 'Python Django Developer Intern',
    company: 'BrainyBeam',
    period: 'Sep 2022 - Oct 2022',
    description: 'Developed backend utilities, database interfaces, and RESTful APIs using Python and Django. Integrated database models and performed object-relational mapping (ORM) optimizations.',
    highlights: ['Created database-integrated backend scripts', 'Developed modular REST APIs', 'Optimized Django ORM querying operations']
  }
];

const educationList = [
  {
    degree: 'Bachelor of Engineering - Computer Engineering',
    institution: 'KSV University, Gandhinagar, Gujarat',
    period: '2024 - 2027 (Pursuing)',
    description: 'Core curriculum covering computer system architectures, software engineering principles, algorithm designs, and database administrations.',
    highlights: ['Current CPI: 8.63', 'Gandhinagar campus, Gujarat', 'KSV University affiliated']
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'VPMP Polytechnic, Gandhinagar, Gujarat',
    period: '2021 - 2024',
    description: 'Foundational training in programming paradigms, computer networking protocols, database management systems, and hardware configurations.',
    highlights: ['CGPA: 9.73', 'Gandhinagar, Gujarat', 'VPMP Polytechnic']
  }
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Riya_Patel_Resume.docx';
    link.download = 'Riya_Patel_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-brand-violet/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="My Background" title="Resume & Career Timeline" id="resume-heading" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <GlassCard hoverEffect={true} glowColor="purple" className="relative p-8 border border-slate-200 dark:border-white/5 text-left h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/10 blur-2xl rounded-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-violet/10 border border-brand-violet/25 flex items-center justify-center text-brand-purple mb-6 shadow-glow-purple">
                  <FileText className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Download CV Portfolio</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed mb-8">
                  Get a complete and comprehensive offline version of my career path, core skill ratings, credentials, and full-stack achievements in a printable and structured document.
                </p>

                <div className="border border-slate-200 dark:border-white/10 rounded-xl p-4 bg-slate-100 dark:bg-slate-950/40 relative mb-8">
                  <div className="flex gap-3 items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-violet/20 flex items-center justify-center text-brand-purple">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-none">Riya Patel</h4>
                      <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">riya09052006@gmail.com</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 font-mono text-[9px] text-slate-500">
                    <div className="w-full h-1 bg-slate-200 dark:bg-white/5 rounded-full" />
                    <div className="w-5/6 h-1 bg-slate-200 dark:bg-white/5 rounded-full" />
                    <div className="w-4/5 h-1 bg-slate-200 dark:bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownload}
                id="resume-download-btn"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-violet to-brand-purple text-white font-medium py-4 px-6 rounded-xl shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </button>
            </GlassCard>
          </div>

          <div className="lg:col-span-7">
            <div className="flex bg-slate-200 dark:bg-slate-950/60 p-1.5 rounded-xl border border-slate-300 dark:border-white/5 mb-8 max-w-sm">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  activeTab === 'experience'
                    ? 'bg-brand-violet text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  activeTab === 'education'
                    ? 'bg-brand-violet text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </button>
            </div>

            <div className="relative border-l border-slate-200 dark:border-white/10 pl-6 ml-3 space-y-8 text-left">
              <AnimatePresence mode="wait">
                {activeTab === 'experience' ? (
                  <motion.div
                    key="experience-timeline"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {experienceList.map((exp, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-50 dark:bg-brand-dark border-2 border-brand-purple group-hover:bg-brand-purple transition-colors duration-200 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-50 dark:bg-brand-dark" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors duration-200">
                              {exp.role}
                            </h4>
                            <span className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2.5 py-0.5 rounded-md">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{exp.period}</span>
                            </span>
                          </div>
                          
                          <span className="text-sm font-semibold text-brand-blue block mb-3">
                            {exp.company}
                          </span>
                          
                          <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          <ul className="space-y-2 pl-1">
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="flex gap-2 items-start text-xs text-slate-700 dark:text-slate-300 font-light">
                                <ArrowRight className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="education-timeline"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {educationList.map((edu, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-50 dark:bg-brand-dark border-2 border-brand-purple group-hover:bg-brand-purple transition-colors duration-200 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-50 dark:bg-brand-dark" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors duration-200">
                              {edu.degree}
                            </h4>
                            <span className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2.5 py-0.5 rounded-md">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{edu.period}</span>
                            </span>
                          </div>
                          
                          <span className="text-sm font-semibold text-brand-blue block mb-3">
                            {edu.institution}
                          </span>
                          
                          <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed mb-4">
                            {edu.description}
                          </p>

                          <ul className="space-y-2 pl-1">
                            {edu.highlights.map((h, i) => (
                              <li key={i} className="flex gap-2 items-start text-xs text-slate-700 dark:text-slate-300 font-light">
                                <ArrowRight className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;