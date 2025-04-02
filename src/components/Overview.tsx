
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Calendar, Clock } from 'lucide-react';

const Overview = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "Team Formation",
      description: "Form a team of 1-4 members with a mix of seniors and juniors to enhance collaborative learning."
    },
    {
      icon: <Award className="w-6 h-6 text-hackathon-primary" />,
      title: "Exciting Prizes",
      description: "Win cash prizes up to ₹1000 and certificates for your achievements."
    },
    {
      icon: <Calendar className="w-6 h-6 text-cyan-400" />,
      title: "Multiple Rounds",
      description: "Navigate through elimination rounds with increasing difficulty levels."
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: "Time-Bound Challenges",
      description: "Test your efficiency with strict time constraints for each problem."
    }
  ];

  return (
    <section id="overview" className="hackathon-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-hackathon-primary/10">About the Event</span>
          <h2 className="section-heading">Event Overview</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            Our college hackathon is designed to challenge your coding skills, foster teamwork, 
            and inspire innovative solutions to real-world problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.1 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-md transition-all border border-slate-200/20 shadow-lg hover:shadow-cyan-500/20 hover:border-slate-100/30 backdrop-blur-sm"
            >
              <motion.div 
                className="bg-hackathon-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 glow-effect"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{feature.title}</h3>
              <p className="text-hackathon-secondary/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
