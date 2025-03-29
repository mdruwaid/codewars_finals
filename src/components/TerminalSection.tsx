
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Database } from 'lucide-react';

const TerminalSection = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [commandIndex, setCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const terminalCommands = [
    { prompt: "user@hackathon:~$", command: "npm run start-hackathon", delay: 500 },
    { prompt: ">", command: "Loading hackathon environment...", delay: 700 },
    { prompt: ">", command: "Checking team eligibility...", delay: 500 },
    { prompt: ">", command: "4 team members detected ✓", delay: 400 },
    { prompt: ">", command: "College ID verification complete ✓", delay: 400 },
    { prompt: ">", command: "Preparing challenge database...", delay: 600 },
    { prompt: ">", command: "Initializing competition rounds...", delay: 500 },
    { prompt: ">", command: "Hackathon system ready! Good luck teams! 🚀", delay: 0 },
  ];

  useEffect(() => {
    if (commandIndex >= terminalCommands.length) return;
    
    setIsTyping(true);
    const timer = setTimeout(() => {
      setTerminalText(prev => [...prev, terminalCommands[commandIndex].command]);
      setIsTyping(false);
      
      const nextCommandTimer = setTimeout(() => {
        setCommandIndex(prev => prev + 1);
      }, 500);
      
      return () => clearTimeout(nextCommandTimer);
    }, terminalCommands[commandIndex].delay);
    
    return () => clearTimeout(timer);
  }, [commandIndex]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalText]);

  const handleTerminalClick = () => {
    setTerminalText([]);
    setCommandIndex(0);
  };

  return (
    <section className="hackathon-section bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-cyan-500/20 text-cyan-400">Terminal</span>
          <h2 className="section-heading text-white">Hackathon Terminal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Watch as your hackathon journey unfolds through our interactive terminal.
            <span className="block mt-2 text-sm text-cyan-400">(Click to restart animation)</span>
          </p>
        </motion.div>
      
        <motion.div 
          ref={terminalRef}
          onClick={handleTerminalClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black/80 backdrop-blur-xl border border-cyan-900/30 rounded-xl p-6 font-mono text-sm md:text-base overflow-hidden cursor-pointer shadow-2xl hover:border-cyan-700/50 transition-all duration-300 min-h-[200px]"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-slate-500 text-sm">hackathon-terminal</span>
          </div>
          {terminalText.map((text, index) => (
            <div key={index} className="text-slate-300 leading-relaxed">
              <span className="text-cyan-400 mr-2">{text.split(' ')[0]}</span>
              <span className="text-emerald-400">{text.split(' ').slice(1).join(' ')}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
