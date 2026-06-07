import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './common/GlassCard';
import SectionHeading from './common/SectionHeading';
import { ShieldCheck, Award, ExternalLink, Cpu } from 'lucide-react';

const certificationsList = [
  {
    id: 'cert-1',
    title: 'Python for Data Science',
    subtitle: 'NPTEL Elite Certification',
    issuer: 'IIT Madras / NPTEL',
    date: 'Aug 2025',
    credentialId: 'NPTEL25CS104S335400452',
    verifyUrl: 'https://archive.nptel.ac.in/noc/',
    skillsVerified: ['Python Programming', 'Data Science', 'Data Analysis', 'Data Visualization'],
  },
  {
    id: 'cert-2',
    title: 'HP Foundation Credentials',
    subtitle: 'AI, Data Science, and Security',
    issuer: 'HP LIFE',
    date: 'May 2026',
    credentialId: 'a8b83c8f-80f8-4395-accc-27ac04da2f9b',
    verifyUrl: 'https://www.life-global.org/',
    skillsVerified: ['AI for Beginners', 'Data Science & Analytics', 'Introduction to Cybersecurity'],
  },
  {
    id: 'cert-3',
    title: 'Quantum Computing Training',
    subtitle: 'Principles, Algorithms & Applications',
    issuer: 'GUJCOST & IEEE SPS',
    date: 'Jan 2026',
    credentialId: 'GUJCOST-QC-2026',
    verifyUrl: 'https://gujcost.gujarat.gov.in/',
    skillsVerified: ['Quantum Computing', 'Quantum Algorithms', 'Applications'],
  },
  {
    id: 'cert-4',
    title: 'Amazon Web Services Workshop',
    subtitle: 'AWS Training & Cloud Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
    credentialId: 'AWS-WS-2025',
    verifyUrl: 'https://aws.amazon.com/',
    skillsVerified: ['Cloud Computing', 'AWS Core Services', 'Server Operations'],
  },
  {
    id: 'cert-5',
    title: 'Academic Excellence Honors',
    subtitle: 'Institute Performance Honors',
    issuer: 'VPMP & KSV',
    date: '2021 - 2027',
    credentialId: 'ACAD-EXC-RIYA',
    verifyUrl: '',
    skillsVerified: ['9.73 CGPA (Diploma)', '8.63 CPI (BE Computer Engineering)', 'Consistent Performance'],
  }
];

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Verified Credentials" title="Achievements & Certifications" id="certifications-heading" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsList.map((cert, idx) => (
            <div key={cert.id} onClick={() => setActiveCert(cert)} className="cursor-pointer">
              <GlassCard 
                hoverEffect={true} 
                glowColor="pink"
                delay={idx * 0.1}
                className="flex flex-col h-full border border-slate-200 dark:border-white/5 text-left p-6 relative group"
              >
                <div className="absolute inset-0 rounded-2xl border border-brand-purple/0 group-hover:border-brand-purple/20 transition-all duration-300 pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-pink/10 border border-brand-pink/25 flex items-center justify-center text-brand-pink shadow-glow-pink">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors duration-200 line-clamp-1">{cert.title}</h3>
                  <p className="text-xs text-brand-blue font-medium mt-1 mb-3">{cert.issuer}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6 line-clamp-2">
                    Verified competence in {cert.skillsVerified.slice(0, 3).join(', ')} and more.
                  </p>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200">
                  <span className="font-mono text-[10px]">ID: {cert.credentialId}</span>
                  <span className="text-brand-purple flex items-center gap-1">
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 dark:bg-brand-darker/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', bounce: 0.15 }}
              className="w-full max-w-lg glass-morphism-glow border-brand-pink/35 rounded-2xl overflow-hidden text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 bg-gradient-to-r from-brand-violet/20 via-brand-purple/10 to-brand-pink/20 border-b border-slate-200 dark:border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-pink uppercase tracking-widest font-bold">CREDENTIAL VERIFICATION</span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">{activeCert.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-9 h-9 rounded-lg glass-morphism border-slate-200 dark:border-white/5 hover:border-brand-pink/30 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center text-sm focus:outline-none"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4 bg-slate-100 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200 dark:border-white/5 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div>
                    <span className="text-slate-500 block mb-0.5">ISSUER</span>
                    <span className="text-slate-800 dark:text-white font-sans font-semibold">{activeCert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5">DATE OF ISSUE</span>
                    <span className="text-slate-800 dark:text-white font-sans font-semibold">{activeCert.date}</span>
                  </div>
                  <div className="col-span-2 border-t border-slate-200 dark:border-white/5 pt-3 mt-1 flex justify-between items-center">
                    <div>
                      <span className="text-slate-500 block mb-0.5">CREDENTIAL ID</span>
                      <span className="text-brand-purple font-mono font-bold">{activeCert.credentialId}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full font-sans font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>ACTIVE</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-brand-pink" />
                    <span>Skills Verified & Mastered</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCert.skillsVerified.map((skill) => (
                      <span key={skill} className="text-xs font-medium text-slate-600 dark:text-slate-200 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-brand-pink" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-6 flex justify-end">
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-brand-purple to-brand-pink text-white text-xs font-semibold px-6 py-3 rounded-xl shadow-glow-pink hover:scale-[1.02] transition-transform duration-200"
                  >
                    <span>Verify Credential Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
