
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookOpen } from 'lucide-react';

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  canvas: HTMLCanvasElement;
  
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.color = `rgba(${120 + Math.random() * 40}, ${180 + Math.random() * 40}, ${220 + Math.random() * 35}, ${0.3 + Math.random() * 0.4})`;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > this.canvas.width) this.x = 0;
    else if (this.x < 0) this.x = this.canvas.width;
    
    if (this.y > this.canvas.height) this.y = 0;
    else if (this.y < 0) this.y = this.canvas.height;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesArrayRef = useRef<Particle[]>([]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    const numberOfParticles = 30;
    
    const connect = () => {
      const maxDistance = 100;
      
      for (let a = 0; a < particlesArrayRef.current.length; a++) {
        for (let b = a; b < particlesArrayRef.current.length; b++) {
          const dx = particlesArrayRef.current[a].x - particlesArrayRef.current[b].x;
          const dy = particlesArrayRef.current[a].y - particlesArrayRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(150, 200, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArrayRef.current[a].x, particlesArrayRef.current[a].y);
            ctx.lineTo(particlesArrayRef.current[b].x, particlesArrayRef.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const init = () => {
      particlesArrayRef.current = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArrayRef.current.push(new Particle(canvas));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(1, '#1e293b');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particlesArrayRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      connect();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('overview');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 -mt-32"
          >
            <img 
              src="/codewars-logo.png"
              alt="CodeWars Logo"
              className="w-96 h-96 mx-auto mb-4"
              loading="lazy"
            />
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-300 inline-block">
              Coming Soon • Registration Opens April 01, 2025
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-slate-100 mb-6 tracking-tight"
          >
            CODEWARS <span className="text-cyan-400">2025</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg text-slate-300 mb-10 max-w-3xl mx-auto font-serif font-bold"
          >
            Unleash your creativity and coding skills in this intensive competition.
            <br />
            Build innovative solutions that make a difference.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <button
              onClick={() => scrollToSection('rules')}
              className="px-6 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Read Guidelines
            </button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
