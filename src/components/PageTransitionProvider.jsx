'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    if (!isAnimating) {
      setCurrentChildren(children);
    }
  }, [children, isAnimating]);

  return (
    <TransitionContext.Provider value={{ isAnimating, setIsAnimating }}>
      {currentChildren}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}

/* 

// src/components/PageTransitionProvider.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransitionProvider({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('entering');

  useEffect(() => {
    const handleStart = () => {
      setTransitionStage('exiting');
    };

    window.addEventListener('pageTransitionStart', handleStart);
    return () => window.removeEventListener('pageTransitionStart', handleStart);
  }, []);

  useEffect(() => {
    if (transitionStage === 'entering') setDisplayChildren(children);
  }, [children, transitionStage]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        onAnimationComplete={() => {
          if (transitionStage === 'exiting') {
            setTransitionStage('entering');
          }
        }}
      >
        {displayChildren}
      </motion.div>
    </AnimatePresence>
  );
}

*/