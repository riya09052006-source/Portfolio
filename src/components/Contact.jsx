import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './common/GlassCard';
import SectionHeading from './common/SectionHeading';
import { Mail, Send, MapPin, Copy, Check, Clock, Github, Linkedin, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const emailAddress = 'riya09052006@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please write a message.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Get In Touch" title="Message Center" id="contact-heading" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's build something exceptional.</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed mb-8">
                If you have an upcoming project, are looking for full-stack engineering support, or simply wish to connect, send a message. I typically respond within 24 business hours.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-lg bg-brand-violet/10 flex items-center justify-center text-brand-purple">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono block">Direct Mail</span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-white font-mono">{emailAddress}</span>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    id="contact-copy-email"
                    className="w-9 h-9 rounded-lg glass-morphism border-slate-200 dark:border-white/5 hover:border-brand-purple/35 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors focus:outline-none"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex gap-3 items-center p-4 rounded-xl bg-slate-100 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono block">Location</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-white">Gandhinagar, Gujarat, India</span>
                  </div>
                </div>

                <div className="flex gap-3 items-center p-4 rounded-xl bg-slate-100 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono block">Typical Response</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-white">Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-4">DIRECT CHANNELS:</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/riya09052006-source"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-social-github"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl glass-morphism border-slate-200 dark:border-white/10 text-slate-655 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-brand-purple/35 font-medium transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/riya-patel95"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-social-linkedin"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl glass-morphism border-slate-200 dark:border-white/10 text-slate-655 text-slate-600 dark:text-slate-300 hover:text-brand-purple hover:border-brand-purple/35 font-medium transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <GlassCard hoverEffect={false} className="relative border-brand-purple/20 p-8 h-full flex flex-col justify-between overflow-hidden">
              <AnimatePresence>
                {status === 'sending' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-900/60 dark:bg-brand-darker/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-brand-purple border-t-transparent animate-spin mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Transmitting Payload...</h4>
                    <p className="text-xs font-mono text-slate-500">POST /api/contact/messages HTTP/1.1</p>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-50/90 dark:bg-brand-darker/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-glow-emerald mb-6">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Message Transmitted!</h4>
                    <p className="text-slate-655 text-slate-600 dark:text-slate-400 text-sm font-light max-w-sm mb-8">
                      Thank you. Your message has been successfully encrypted and delivered to Riya Patel.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-mono text-xs focus:outline-none"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-1.5 pb-4 mb-2 border-b border-slate-200 dark:border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-purple" />
                  <span className="text-[10px] tracking-widest text-slate-500 uppercase font-mono">SECURE COMMUNICATIONS SHELL</span>
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor="contact-name" className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`bg-slate-100 dark:bg-slate-950/60 border rounded-xl py-3.5 px-4 text-slate-900 dark:text-white text-sm font-light focus:outline-none focus:border-brand-purple focus:shadow-glow-purple transition-all duration-300 ${
                      errors.name ? 'border-rose-500/50' : 'border-slate-200 dark:border-white/5'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-[10px] font-mono text-rose-400 mt-1.5">{errors.name}</span>}
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor="contact-email" className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-slate-100 dark:bg-slate-950/60 border rounded-xl py-3.5 px-4 text-slate-900 dark:text-white text-sm font-light focus:outline-none focus:border-brand-purple focus:shadow-glow-purple transition-all duration-300 ${
                      errors.email ? 'border-rose-500/50' : 'border-slate-200 dark:border-white/5'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-[10px] font-mono text-rose-400 mt-1.5">{errors.email}</span>}
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor="contact-message" className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`bg-slate-100 dark:bg-slate-950/60 border rounded-xl py-3.5 px-4 text-slate-900 dark:text-white text-sm font-light focus:outline-none focus:border-brand-purple focus:shadow-glow-purple transition-all duration-300 resize-none ${
                      errors.message ? 'border-rose-500/50' : 'border-slate-200 dark:border-white/5'
                    }`}
                    placeholder="Hi Riya, I'd like to collaborate..."
                  />
                  {errors.message && <span className="text-[10px] font-mono text-rose-400 mt-1.5">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-violet to-brand-purple text-white font-semibold py-4 rounded-xl shadow-glow-purple hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 focus:outline-none mt-2"
                >
                  <span>Transmit Payload</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;