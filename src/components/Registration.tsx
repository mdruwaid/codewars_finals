
import React from 'react';
import { motion } from 'framer-motion';

const Registration = () => {
  return (
    <section id="register" className="hackathon-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-hackathon-primary/10">Important Information</span>
          <h2 className="section-heading">Contact Details</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            For any queries regarding the hackathon, please reach out to our coordinators.
          </p>
        </motion.div>
        
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-200 mb-4">Contact Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="font-medium text-slate-200 min-w-28">Email:</span>
              <span className="text-slate-300">nivetha.ravi91@gmail.com</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium text-slate-200 min-w-28">Phone:</span>
              <span className="text-slate-300">+91 98808 45652</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium text-slate-200 min-w-28">Location:</span>
              <span className="text-slate-300">CE Department, Main Building, BTI</span>
            </li>
          </ul>
          
          <a 
            href="https://chat.whatsapp.com/CfMi4rE4sqL2k4CSP2wLaV" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-all font-medium"
          >
            Join WhatsApp Participants Group
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registration;
