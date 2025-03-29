
import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck } from 'lucide-react';

const TeamComposition = () => {
  return (
    <section className="hackathon-section bg-hackathon-accent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-hackathon-primary/10">Team Structure</span>
          <h2 className="section-heading">Team Composition</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            Building the right team is crucial for success. Here's what you need to know about 
            forming your team for the hackathon.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col h-full hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 border border-slate-700/50"
          >
            <div className="bg-hackathon-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Team Size</h3>
            <p className="text-hackathon-secondary/70 mb-4">
              Teams must follow the composition guidelines to ensure balanced participation.
            </p>
            <ul className="space-y-2 text-hackathon-secondary/70 flex-grow">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span>Flexible team size (1-4 members)</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span>Diverse skills across the team</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span>Team must include members from different years (not all from same year)</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col h-full hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 border border-slate-700/50"
          >
            <div className="bg-hackathon-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Team Leader</h3>
            <p className="text-hackathon-secondary/70 mb-4">
              One member must be designated as the team leader who will be responsible for communication and coordination.
            </p>
            <ul className="space-y-2 text-hackathon-secondary/70 flex-grow">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span>Acts as the primary point of contact</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span>Submits the final solution</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </span>
                <span>Represents the team during judging</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamComposition;
