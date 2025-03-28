
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Registration = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    phoneNumber: '',
    teamMember1: '',
    teamMember2: '',
    teamMember3: '',
    teamMember4: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // First check for duplicates
      const checkDuplicateResponse = await fetch('https://script.google.com/macros/s/AKfycbwTIlA7E1QLan7MsKYTwDOyNj1CCtJxtLbQszuo0m7ov_9TicrmM78rVVoLRjIKf7Pe/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          action: 'checkDuplicate',
          email: formData.leaderEmail,
          phone: formData.phoneNumber
        })
      });

      // Wait a bit to ensure the check is complete
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Proceed with registration
      const formDataWithAction = {
        ...formData,
        action: 'register',
        registrationTime: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'long'
        })
      };

      const response = await fetch('https://script.google.com/macros/s/AKfycbwTIlA7E1QLan7MsKYTwDOyNj1CCtJxtLbQszuo0m7ov_9TicrmM78rVVoLRjIKf7Pe/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        mode: 'no-cors',
        body: JSON.stringify(formDataWithAction)
      });

      setFormSubmitted(true);
      alert('Registration successful! Thank you for registering.');
      setFormData({
        teamName: '',
        leaderName: '',
        leaderEmail: '',
        phoneNumber: '',
        teamMember1: '',
        teamMember2: '',
        teamMember3: '',
        teamMember4: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Registration failed. Please try again or contact the coordinator.');
    } finally {
      setIsLoading(false);
    }
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
          {error && (
            <div className="text-red-500 text-sm mb-4 bg-red-100/10 p-3 rounded-lg">
              {error}
            </div>
          )}
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
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-black"
                  placeholder="Enter your team name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Team Leader Name</label>
                <input 
                  type="text" 
                  name="leaderName"
                  value={formData.leaderName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-black"
                  placeholder="Enter team leader's full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Team Leader Email</label>
                <input 
                  type="email" 
                  name="leaderEmail"
                  value={formData.leaderEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-black"
                  placeholder="Enter contact email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-black"
                  placeholder="Enter contact phone number"
                />
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm font-medium text-white mb-3">Team Members</label>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Team Member 1 (Leader)</label>
                  <input 
                    type="text" 
                    name="teamMember1"
                    value={formData.teamMember1}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-black"
                    placeholder="Enter name (Sem and Department)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Team Member 2</label>
                  <input 
                    type="text" 
                    name="teamMember2"
                    value={formData.teamMember2}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-black"
                    placeholder="Enter name (Sem and Department) - Optional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Team Member 3</label>
                  <input 
                    type="text" 
                    name="teamMember3"
                    value={formData.teamMember3}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-black"
                    placeholder="Enter name (Sem and Department) - Optional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Team Member 4</label>
                  <input 
                    type="text" 
                    name="teamMember4"
                    value={formData.teamMember4}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 bg-black"
                    placeholder="Enter name (Sem and Department) - Optional"
                  />
                </div>
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
                disabled={isLoading}
                className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-all font-medium disabled:bg-cyan-800 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Registering...
                  </>
                ) : formSubmitted ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Registration Complete
                  </>
                ) : (
                  'Register Now'
                )}
              </button>
              
              {error && (
                <div className="text-red-500 text-sm mt-4 bg-red-100/10 p-3 rounded-lg">
                  {error}
                </div>
              )}
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
                  <span className="text-slate-300">CE Department, Main Building,BTI</span>
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

            <div className="glass-card p-8 border-2 border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-cyan-900/30">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                Event Coordinator
              </h3>
              <div className="text-center space-y-2">
                <p className="text-xl font-semibold text-slate-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                  K. Nivetha
                </p>
                <p className="text-lg text-cyan-200">
                  Assistant Professor
                </p>
                <p className="text-slate-300">
                  CE Department, BTI
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
