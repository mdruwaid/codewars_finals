
import React, { useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';

// Lazy load components that aren't immediately visible
const TeamComposition = lazy(() => import('@/components/TeamComposition'));
const TerminalSection = lazy(() => import('@/components/TerminalSection'));
const Eligibility = lazy(() => import('@/components/Eligibility'));
const CompetitionFormat = lazy(() => import('@/components/CompetitionFormat'));
const Rules = lazy(() => import('@/components/Rules'));
const Prizes = lazy(() => import('@/components/Prizes'));
const Registration = lazy(() => import('@/components/Registration'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-hackathon-primary"></div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "CodeWars 2025";
    
    // Improved smooth scroll functionality with proper cleanup
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    };
    
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Proper cleanup function
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        <Overview />
        <Suspense fallback={<LoadingFallback />}>
          <TeamComposition />
          <TerminalSection />
          <Eligibility />
          <CompetitionFormat />
          <Rules />
          <Prizes />
          <Registration />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
};

export default Index;
