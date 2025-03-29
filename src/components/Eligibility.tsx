
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
          <h2 className="section-heading">Eligibility Criteria</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            Check if you meet the requirements to participate in our hackathon.
          </p>
        </motion.div>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 w-full max-w-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="bg-hackathon-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400">Student Status</h3>
            </div>

            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">Who Can Participate:</span> Students of BTI college
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">Semester:</span> II, IV, VI and VIII Sem
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">Branch:</span> Any Branch of Engineering
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <div>
                  <span className="font-medium text-cyan-400">Skill Levels:</span> Both beginners and experienced coders
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
