import React from 'react';
import { motion } from 'framer-motion';

const ContactDetails = () => {
  return (
    <div className="glass-card p-8 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-slate-200 mb-6 text-center">Contact Information</h3>
      <ul className="space-y-6">
        <li className="flex items-center gap-4">
          <span className="font-medium text-slate-200 w-24">Email:</span>
          <span className="text-slate-300 text-lg">nivetha.ravi91@gmail.com</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="font-medium text-slate-200 w-24">Phone:</span>
          <span className="text-slate-300 text-lg">+91 98808 45652</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="font-medium text-slate-200 w-24">Place:</span>
          <span className="text-slate-300 text-lg">Computer Engineering Department, BTI</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;