
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building } from 'lucide-react';

const Eligibility = () => {
  return (
    <section id="eligibility" className="hackathon-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-hackathon-primary/10">Who Can Participate</span>
          <h2 className="section-heading">Eligibility Criteria</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            Check if you meet the requirements to participate in our hackathon.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-hackathon-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400">Student Status</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Participation is open to students from any semester or branch within our college.
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">Any Semester:</span> Students from first year to final year are welcome
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">Any Branch:</span> Engineering, science, arts, or any other discipline
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">All Skill Levels:</span> Both beginners and experienced coders are encouraged
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-hackathon-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400">College Affiliation</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Only students currently enrolled in our college are eligible to participate.
            </p>
            <ul className="space-y-3 text-hackathon-secondary/70">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">Valid ID Required:</span> All participants must carry college ID cards for verification
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm">✕</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">External Students:</span> Students from other colleges cannot participate
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">Active Enrollment:</span> Must be a currently enrolled student
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
