
import React from 'react';
import { motion } from 'framer-motion';
import ContactDetails from './ContactDetails';
import RegistrationFee from './RegistrationFee';

const Registration = () => {
  return (
    <section id="register" className="hackathon-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-tag bg-hackathon-primary/10">Important Information</span>
          <h2 className="section-heading">Registration Details</h2>
          <p className="text-hackathon-secondary/80 max-w-xl mx-auto">
            For any queries regarding the hackathon, please reach out to our coordinators.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          <div className="w-full max-w-2xl mx-auto lg:max-w-none">
            <RegistrationFee />
          </div>
          <div className="w-full max-w-2xl mx-auto lg:max-w-none">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
