
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Flag, Clock, XCircle } from 'lucide-react';

const CompetitionFormat = () => {
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
          <span className="section-tag bg-hackathon-primary/10">How It Works</span>
          <h2 className="section-heading">Competition Format</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            Understand the structure and flow of our hackathon competition.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col bg-slate-800/80 rounded-xl border-2 border-cyan-400/30 shadow-xl shadow-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cyan-400/20">
              <Layers className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">Multiple Rounds</h3>
            <p className="text-slate-300 mb-4">
              The competition consists of three progressive rounds, each focusing on different aspects of development.
            </p>
            <ul className="space-y-2 text-slate-300 flex-grow">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>Round 1:</strong> Core programming and algorithmic challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-hackathon-primary mr-2">•</span>
                <span><strong>Round 2:</strong> Database implementation and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-hackathon-primary mr-2">•</span>
                <span><strong>Round 3:</strong> Front-end development and UI design</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col bg-slate-800/80 rounded-xl border-2 border-cyan-400/30 shadow-xl shadow-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cyan-400/20">
              <XCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">Elimination Stages</h3>
            <p className="text-slate-300 mb-4">
              Each round includes an elimination process to narrow down the competition.
            </p>
            <ul className="space-y-2 text-slate-300 flex-grow">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Teams with the lowest scores will be eliminated after each round</span>
              </li>
              <li className="flex items-start">
                <span className="text-hackathon-primary mr-2">•</span>
                <span>Elimination criteria will be clearly explained before each round</span>
              </li>
              <li className="flex items-start">
                <span className="text-hackathon-primary mr-2">•</span>
                <span>The final round will determine the top three winning teams</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col bg-slate-800/80 rounded-xl border-2 border-cyan-400/30 shadow-xl shadow-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cyan-400/20">
              <Flag className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">Problem Statements</h3>
            <p className="text-slate-300 mb-4">
              All challenges will be revealed during the competition.
            </p>
            <ul className="space-y-2 text-slate-300 flex-grow">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Problem statements will be provided on the spot</span>
              </li>
              <li className="flex items-start">
                <span className="text-hackathon-primary mr-2">•</span>
                <span>No prior information about challenges will be shared</span>
              </li>
              <li className="flex items-start">
                <span className="text-hackathon-primary mr-2">•</span>
                <span>Problems will test various aspects of programming and problem-solving</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionFormat;
