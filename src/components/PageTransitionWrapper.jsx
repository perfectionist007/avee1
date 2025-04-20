'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('entering');

  useEffect(() => {
    setTransitionStage('exiting');
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage('entering');
    }, 500); // ⏳ Match this to exit animation duration

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
          exit={{
            opacity: 0,
            y: -20,
            filter: 'blur(8px)',
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
        >
          {displayChildren}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
