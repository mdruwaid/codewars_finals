
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, X, Check } from 'lucide-react';

const Rules = () => {
  return (
    <section id="rules" className="hackathon-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-hackathon-primary/10">Guidelines</span>
          <h2 className="section-heading">Rules and Regulations</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            All participants must adhere to these rules throughout the competition.
          </p>
        </motion.div>
        
        <div className="glass-card p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 pb-8 border-b border-gray-100/20"
          >
            <div className="bg-red-500/10 rounded-full p-3 flex-shrink-0 shadow-lg shadow-red-500/30">
              <AlertTriangle className="w-6 h-6 text-red-400 drop-shadow-[0_0_12px_rgba(248,113,113,0.8)] animate-pulse-slow" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-1 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">Code of Conduct</h3>
              <p className="text-slate-300">
                The use of the internet, AI tools, or any form of copying is strictly prohibited. 
                Any team found violating this rule will be immediately disqualified.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 pb-8 border-b border-gray-100/20"
          >
            <div className="bg-amber-500/10 rounded-full p-3 flex-shrink-0 shadow-lg shadow-amber-500/30">
              <Clock className="w-6 h-6 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-pulse-slow" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-1 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">Time Management</h3>
              <p className="text-slate-300">
                No extra time will be given beyond the allocated duration for each round. 
                Teams must submit their solutions within the specified time limit.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            <div className="bg-blue-500/10 rounded-full p-3 flex-shrink-0 shadow-lg shadow-green-500/30">
              <Check className="w-6 h-6 text-green-400 drop-shadow-[0_0_12px_rgba(74,222,128,0.8)] animate-pulse-slow" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-1 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">Identification</h3>
              <p className="text-slate-300">
                All participants must carry their college ID cards, as it is mandatory for verification.
                No entry will be permitted without proper identification.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 glass-card p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">Additional Guidelines</h3>
            <ul className="space-y-3 text-hackathon-secondary/70">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span>Systems will provided in the campus</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <span>No internet access will be provided during the competition.</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <span>Food will not be provided during the hackathon; participants must arrange their own meals or purchase food from the canteen.</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <span>Communication with other teams during the competition is not allowed</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <span>Use of pre-written code or templates is strictly prohibited</span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-amber-700 text-sm">
                <strong>Note:</strong> By participating in the hackathon, all students agree to abide by these rules. 
                Any violation may result in immediate disqualification without prior warning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
