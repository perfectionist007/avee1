"use client"

import { motion } from "framer-motion"

export default function TechLogo({ type, primaryColor, secondaryColor, size = 100 }) {
    const renderLogo = () => {
    switch (type) {
      case "cloud":
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              d="M155 110C155 137.614 132.614 160 105 160H60C46.1929 160 35 148.807 35 135C35 121.193 46.1929 110 60 110C60 82.3858 82.3858 60 110 60C137.614 60 155 82.3858 155 110Z"
              fill={primaryColor}
              stroke="white"
              strokeWidth="4"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              cx="110"
              cy="85"
              r="15"
              fill={secondaryColor}
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              cx="135"
              cy="110"
              r="10"
              fill={secondaryColor}
            />
          </svg>
        )
      case "ai":
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              d="M100 40V160M40 100H160"
              stroke={primaryColor}
              strokeWidth="12"
              strokeLinecap="round"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              cx="100"
              cy="100"
              r="60"
              stroke={primaryColor}
              strokeWidth="8"
              fill="none"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              cx="100"
              cy="100"
              r="20"
              fill={secondaryColor}
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              cx="70"
              cy="70"
              r="8"
              fill={secondaryColor}
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              cx="130"
              cy="70"
              r="8"
              fill={secondaryColor}
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              cx="70"
              cy="130"
              r="8"
              fill={secondaryColor}
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              cx="130"
              cy="130"
              r="8"
              fill={secondaryColor}
            />
          </svg>
        )
      case "security":
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              d="M100 40L40 60V100C40 131.371 65.8172 160 100 160C134.183 160 160 131.371 160 100V60L100 40Z"
              fill={primaryColor}
              stroke="white"
              strokeWidth="4"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              d="M85 100L95 110L115 90"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              cx="100"
              cy="100"
              r="30"
              fill={secondaryColor}
              fillOpacity="0.6"
            />
          </svg>
        )
      case "consulting":
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              x="50"
              y="50"
              width="100"
              height="100"
              rx="10"
              fill={primaryColor}
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              d="M70 80L130 80M70 100L110 100M70 120L90 120"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              cx="150"
              cy="50"
              r="20"
              fill={secondaryColor}
            />
          </svg>
        )
      case "iot":
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              cx="100"
              cy="100"
              r="60"
              fill={primaryColor}
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              d="M100 40V60M160 100H140M100 160V140M40 100H60"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
              d="M135 65L120 80M135 135L120 120M65 135L80 120M65 65L80 80"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              cx="100"
              cy="100"
              r="20"
              fill={secondaryColor}
            />
          </svg>
        )
      case "mobile":
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect
              initial={{ height: 0, opacity: 0, y: 100 }}
              animate={{ height: 120, opacity: 1, y: 40 }}
              transition={{ duration: 0.8 }}
              x="70"
              y="40"
              width="60"
              height="120"
              rx="10"
              fill={primaryColor}
            />
            <motion.rect
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              x="80"
              y="50"
              width="40"
              height="80"
              rx="5"
              fill="white"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              cx="100"
              cy="145"
              r="8"
              fill={secondaryColor}
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
              d="M90 70H110M90 85H110M90 100H100"
              stroke={secondaryColor}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        )
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              cx="100"
              cy="100"
              r="60"
              fill={primaryColor}
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              d="M70 100H130M100 70V130"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        )
    }
  }

  return <div className="flex items-center justify-center">{renderLogo()}</div>
}
