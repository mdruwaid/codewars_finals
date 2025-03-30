import React from 'react';

const RegistrationFee = () => {
  return (
    <div className="glass-card p-8 flex flex-col h-full w-full max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold text-slate-200 mb-8 text-center">Registration Fee</h3>
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="text-slate-300 w-full md:w-auto">
          <h4 className="text-lg font-medium text-cyan-400 mb-4 text-center md:text-left">Team Size & Fees</h4>
          <ul className="space-y-3 min-w-[250px]">
            <li className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/30"></span>
              <span>Single Person: ₹50</span>
            </li>
            <li className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/30"></span>
              <span>Team of 2: ₹100</span>
            </li>
            <li className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/30"></span>
              <span>Team of 3: ₹150</span>
            </li>
            <li className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/30"></span>
              <span>Team of 4: ₹200</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-cyan-400/80 text-center md:text-left">(₹50 per person)</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white p-4 rounded-xl shadow-lg aspect-square flex items-center justify-center">
            <img 
              src="qr-code.png" 
              alt="Payment QR Code" 
              className="w-44 h-44 object-contain"
            />
          </div>
          <div className="text-center md:text-left mt-4 space-y-2">
            <p className="text-slate-300 text-sm">Scan QR code to pay</p>
            <p className="text-cyan-400/80 text-sm">Please take a screenshot of your payment for verification</p>
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-8 flex flex-col items-center">
        <p className="text-slate-300 mb-3 text-center">Join the participants group for event updates</p>
        <a 
          href="https://chat.whatsapp.com/CfMi4rE4sqL2k4CSP2wLaV" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium gap-2"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Join WhatsApp Group
        </a>
      </div>
    </div>
  );
};

export default RegistrationFee;