import React from 'react';
import { motion } from 'framer-motion';

const ContactDetails = () => {
  return (
    <div className="glass-card p-8 max-w-2xl mx-auto mb-8">
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
    </div>
  );
};

export default ContactDetails;