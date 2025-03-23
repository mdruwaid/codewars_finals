
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const Prizes = () => {
  const prizeCards = [
    {
      position: "First Prize",
      amount: "₹1000",
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200",
      textColor: "text-yellow-700",
      iconBg: "bg-yellow-100"
    },
    {
      position: "Second Prize",
      amount: "₹700",
      icon: <Award className="w-12 h-12 text-slate-500" />,
      color: "bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200",
      textColor: "text-slate-700",
      iconBg: "bg-slate-100"
    },
    {
      position: "Third Prize",
      amount: "₹500",
      icon: <Medal className="w-12 h-12 text-amber-500" />,
      color: "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200",
      textColor: "text-amber-700",
      iconBg: "bg-amber-100"
    }
  ];

  return (
    <section id="prizes" className="hackathon-section bg-hackathon-accent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-hackathon-primary/10">Rewards</span>
          <h2 className="section-heading">Prizes & Recognition</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            Compete for exciting prizes and recognition for your skills and innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizeCards.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 text-center border ${prize.color} transition-all hover:shadow-md`}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-full ${prize.iconBg} flex items-center justify-center`}>
                  {prize.icon}
                </div>
              </div>
              <h3 className={`text-xl font-semibold mb-1 ${prize.textColor}`}>{prize.position}</h3>
              <p className="text-3xl font-bold text-hackathon-dark mb-4">{prize.amount}</p>
              <p className="text-slate-700">
                Cash prize and certificate of excellence
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-8 text-center border-2 border-slate-700/20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,var(--tw-gradient-stops))] from-blue-100 via-slate-100 to-cyan-100 animate-pulse-slow"></div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-cyan-600 mb-4">For All Participants</h3>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <p className="text-slate-700 max-w-2xl mx-auto">
              All participants will receive a certificate of participation, regardless of their final ranking. 
              This certificate recognizes your commitment, skills, and involvement in the hackathon.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-cyan-600 mb-4 drop-shadow-[0_0_3px_rgba(34,211,238,0.3)]">Judging Criteria</h3>
          <p className="text-hackathon-secondary/70 max-w-2xl mx-auto mb-8">
            Winners will be declared based on a comprehensive points table system that evaluates 
            multiple aspects of your solution.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="font-semibold text-hackathon-dark mb-1">Code Quality</div>
              <p className="text-sm text-slate-700">Clean, efficient, and well-structured code</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="font-semibold text-hackathon-dark mb-1">Innovation</div>
              <p className="text-sm text-slate-700">Creativity and uniqueness of the solution</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="font-semibold text-hackathon-dark mb-1">Functionality</div>
              <p className="text-sm text-slate-700">How well the solution solves the problem</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="font-semibold text-hackathon-dark mb-1">Presentation</div>
              <p className="text-sm text-slate-700">Clear explanation of your approach</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
