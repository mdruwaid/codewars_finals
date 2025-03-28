
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Database } from 'lucide-react';

const TerminalSection = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [commandIndex, setCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const terminalCommands = [
    { prompt: "user@hackathon:~$", command: "npm run start-hackathon", delay: 1000 },
    { prompt: ">", command: "Loading hackathon environment...", delay: 1500 },
    { prompt: ">", command: "Checking team eligibility...", delay: 1000 },
    { prompt: ">", command: "4 team members detected ✓", delay: 800 },
    { prompt: ">", command: "College ID verification complete ✓", delay: 800 },
    { prompt: ">", command: "Preparing challenge database...", delay: 1200 },
    { prompt: ">", command: "Initializing competition rounds...", delay: 1000 },
    { prompt: ">", command: "Hackathon system ready! Good luck teams!", delay: 0 },
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
    // Reset the terminal animation
    setTerminalText([]);
    setCommandIndex(0);
  };

  return (
    <section className="hackathon-section dark-terminal-theme matrix-bg px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="section-tag bg-hackathon-primary/20 text-hackathon-primary">Hackathon Terminal</span>
          <h2 className="section-heading text-white text-2xl sm:text-3xl lg:text-4xl">Interactive Experience</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Get a taste of our hackathon environment with this interactive terminal and 3D elements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
            onClick={handleTerminalClick}
          >
            <div className="terminal h-64 sm:h-96 shadow-2xl shadow-cyan-500/20 border border-cyan-400/20">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                </div>
                <div className="ml-4 text-xs opacity-70 text-cyan-100">hackathon-terminal</div>
              </div>
              <div className="terminal-body h-52 sm:h-80 shadow-inner shadow-cyan-400/10 text-sm sm:text-base p-3 sm:p-4" ref={terminalRef}>
                {terminalText.map((text, index) => (
                  <div key={index} className="terminal-line">
                    <span className="terminal-prompt text-cyan-400/80">{terminalCommands[index].prompt}</span>
                    <span className={text.includes('✓') ? 'terminal-success drop-shadow-[0_0_2px_rgba(34,211,238,0.3)]' : 'drop-shadow-[0_0_2px_rgba(34,211,238,0.2)]'}>{text}</span>
                  </div>
                ))}
                {isTyping && commandIndex < terminalCommands.length && (
                  <div className="terminal-line">
                    <span className="terminal-prompt">{terminalCommands[commandIndex].prompt}</span>
                    <span className="terminal-command terminal-typing">
                      {terminalCommands[commandIndex].command}
                    </span>
                    <span className="animate-cursor-blink ml-0.5">|</span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2 sm:mt-3 text-white/50 text-center text-xs sm:text-sm">Click terminal to restart animation</div>
          </motion.div>
          
          {/* 3D Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { 
                icon: <Code className="w-6 h-6 text-cyan-400" />, 
                title: "Coding Challenge", 
                description: "Solve algorithmic problems and optimize your solutions." 
              },
              { 
                icon: <Database className="w-6 h-6 text-cyan-400" />, 
                title: "Database Management", 
                description: "Design and optimize MySQL database schemas and queries for efficient data handling." 
              },
              { 
                icon: <Laptop className="w-6 h-6 text-cyan-400" />, 
                title: "Front-end Development", 
                description: "Create intuitive and responsive web interfaces using modern frameworks." 
              },
              { 
                icon: <Database className="w-6 h-6 text-cyan-400" />, 
                title: "Data Structures", 
                description: "Implement and optimize complex data structures." 
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-3d-container h-32 sm:h-40"
              >
                <div className="card-3d h-full">
                  <div className="card-3d-content flex flex-col justify-center items-center h-full text-center bg-slate-800/80 rounded-xl border-2 border-cyan-400/30 shadow-xl shadow-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/40 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 p-2 sm:p-4">
                    <div className="bg-cyan-400/20 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 animate-pulse-glow shadow-inner shadow-cyan-400/30">
                      {card.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-1 glow-text drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">{card.title}</h3>
                    <p className="text-cyan-100 text-xs sm:text-sm px-2 sm:px-4 drop-shadow-[0_0_2px_rgba(34,211,238,0.2)]">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 3D Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-16 text-center"
        >
          <a 
            href="#register" 
            className="bg-hackathon-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all inline-block glow-button"
          >
            Enter the Hackathon
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
