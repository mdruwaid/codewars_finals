
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Registration = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

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
          <span className="section-tag bg-hackathon-primary/10">Join Us</span>
          <h2 className="section-heading">Register Your Team</h2>
          <p className="text-hackathon-secondary/80 max-w-2xl mx-auto">
            Secure your spot in the hackathon by registering your team now.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold text-cyan-600 mb-6">Registration Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Team Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white"
                  placeholder="Enter your team name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Team Leader Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                  placeholder="Enter team leader's full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                  placeholder="Enter contact email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                  placeholder="Enter contact phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Team Members (including leader)</label>
                <textarea 
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white h-24"
                  placeholder="List all 4 team members with their names and student IDs"
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="rules" 
                  required
                  className="mt-1 mr-2"
                />
                <label htmlFor="rules" className="text-sm text-slate-700">
                  I confirm that all team members meet the eligibility criteria and agree to abide by the hackathon rules and regulations.
                </label>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-all font-medium"
              >
                Register Now
              </button>
            </form>
          </motion.div>
          
          <motion.div className="flex flex-col space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">Important Dates</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-hackathon-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-slate-200 text-sm">1</span>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-200">Registration Deadline</span>
                    <span className="text-slate-300">April 15, 2025 at 11:59 PM</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-hackathon-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-slate-200 text-sm">2</span>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-200">Team Confirmation</span>
                    <span className="text-slate-300">April 16, 2025</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-hackathon-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-slate-200 text-sm">3</span>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-200">Hackathon Day</span>
                    <span className="text-slate-300">April 19, 2025</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">Contact Information</h3>
              <p className="text-slate-300 mb-4">
                If you have any questions or need assistance with the registration process, 
                please don't hesitate to contact us.
              </p>
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
                  <span className="text-slate-300">AIML Department, Main Building,BTI</span>
                </li>
              </ul>
              
              <a 
                href="https://chat.whatsapp.com/your-group-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-all font-medium"
              >
                Join WhatsApp Participants Group
              </a>
            </div>

            <div className="glass-card p-8 border-2 border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-cyan-900/30">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                Event Coordinator
              </h3>
              <div className="text-center space-y-2">
                <p className="text-xl font-semibold text-slate-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                  Mrs. Nivetha
                </p>
                <p className="text-lg text-cyan-200">
                  Assistant Professor
                </p>
                <p className="text-slate-300">
                  AIML Department, BTI
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
