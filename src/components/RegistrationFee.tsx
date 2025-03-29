import React from 'react';

const RegistrationFee = () => {
  return (
    <div className="glass-card p-8 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-slate-200 mb-4">Registration Fee</h3>
      <div className="flex flex-col items-center">
        <p className="text-slate-300 mb-4">Registration Fee: ₹50 per team</p>
        <img 
          src="qr-code.png" 
          alt="Payment QR Code" 
          className="w-48 h-48 mb-4 bg-white p-2 rounded-lg"
        />
        <p className="text-slate-300 text-sm">Scan QR code to pay registration fee</p>
      </div>
      
      <a 
        href="https://chat.whatsapp.com/CfMi4rE4sqL2k4CSP2wLaV" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-6 block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-all font-medium"
      >
        Join WhatsApp Participants Group
      </a>
    </div>
  );
};

export default RegistrationFee;