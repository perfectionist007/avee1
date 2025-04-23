// src/components/ProgressBar.jsx
'use client';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setVisible(true);
      controls.start({
        width: "100%",
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    };

    const handleEnd = () => {
        controls.start({
          opacity: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        }).then(() => {
          setVisible(false);
          controls.set({ width: "0%", opacity: 1 }); // Reset for next transition
        });
      };
      
    window.addEventListener("pageTransitionStart", handleStart);
    window.addEventListener("pageTransitionEnd", handleEnd);

    return () => {
      window.removeEventListener("pageTransitionStart", handleStart);
      window.removeEventListener("pageTransitionEnd", handleEnd);
    };
  }, [controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-orange-500 z-[9999]"
      initial={{ width: "0%" }}
      animate={controls}
      style={{ opacity: visible ? 1 : 0 }}
    />
  );
}
