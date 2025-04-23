"use client"

import { useRef, useState, useEffect, useContext } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeContext } from '@/components/ThemeProvider';
import TechLogo from "./tech-logo"


// Sample client data
const clients = [
  {
    id: 1,
    name: "Cloud Computing Solutions",
    description:
      "Scalable cloud infrastructure designed for enterprise needs with 99.9% uptime guarantee and 24/7 support.",
    image: "/placeholder/dash1.png",
    category: "Services",
  },
  {
    id: 2,
    name: "AI-Powered Analytics",
    description:
      "Transform your data into actionable insights with our machine learning algorithms that adapt to your business needs.",
    logoType: "ai",
    logoColors: {
      primary: "#8B5CF6", // violet-500
      secondary: "#C4B5FD", // violet-300
    },
    category: "Software",
  },
  {
    id: 3,
    name: "Secure Network Architecture",
    description:
      "Enterprise-grade security solutions that protect your data with advanced threat detection and prevention systems.",
    logoType: "security",
    logoColors: {
      primary: "#10B981", // emerald-500
      secondary: "#6EE7B7", // emerald-300
    },
    category: "Infrastructure",
  },
  {
    id: 4,
    name: "Digital Transformation Consulting",
    description:
      "Strategic guidance to help your business leverage technology for growth, efficiency, and competitive advantage.",
    logoType: "consulting",
    logoColors: {
      primary: "#F59E0B", // amber-500
      secondary: "#FCD34D", // amber-300
    },
    category: "Services",
  },
  {
    id: 5,
    name: "IoT Platform",
    description:
      "Connect and manage thousands of devices with our comprehensive Internet of Things platform built for scale.",
    logoType: "iot",
    logoColors: {
      primary: "#EC4899", // pink-500
      secondary: "#F9A8D4", // pink-300
    },
    category: "Clients",
  },
  {
    id: 6,
    name: "Mobile App Development",
    description:
      "Custom mobile applications designed for exceptional user experience across all platforms and devices.",
    logoType: "mobile",
    logoColors: {
      primary: "#EF4444", // red-500
      secondary: "#FCA5A5", // red-300
    },
    category: "Development",
  },
]

export default function ClientSlider() {
  const [activeClient, setActiveClient] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef(null)
  const controls = useAnimation()
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  // Scroll to active client
  useEffect(() => {
    if (!sliderRef.current) return

    const scrollAmount = activeClient * (320 + 16) // card width + gap
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })
  }, [activeClient])

  const handleNext = () => {
    setActiveClient((prev) => (prev + 1) % clients.length)
  }

  const handlePrev = () => {
    setActiveClient((prev) => (prev - 1 + clients.length) % clients.length)
  }

  const handleClientClick = (index) => {
    setActiveClient(index)
  }

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">OUR CLIENTS</h2>

        <div className="relative">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={sliderRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  className={cn(
                    "flex-shrink-0 w-80 snap-center cursor-pointer",
                    activeClient === index ? "ring-2 ring-offset-2 ring-primary" : "",
                  )}
                  initial={{ opacity: 0.6, scale: 0.9 }}
                  animate={{
                    opacity: activeClient === index ? 1 : 0.7,
                    scale: activeClient === index ? 1 : 0.95,
                    y: activeClient === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleClientClick(index)}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <motion.img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className={`absolute top-2 right-2 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} text-xs font-bold px-2 py-1 rounded`}>
                        {client.category}
                      </div>
                    </div>
                    {/* <div className="relative h-48 w-full overflow-hidden flex items-center justify-center p-6 bg-gray-50">
                      <motion.div
                        className="w-full h-full flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <TechLogo
                          type={client.logoType}
                          primaryColor={client.logoColors.primary}
                          secondaryColor={client.logoColors.secondary}
                          size={160}
                        />
                      </motion.div>
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                        {client.category}
                      </div>
                    </div> */}
                    <div className="p-4">
                      <h3 className={`text-black text-lg font-semibold mb-1 truncate`}>{client.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg p-2 rounded-full -ml-3"
              aria-label="Previous client"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg p-2 rounded-full -mr-3"
              aria-label="Next client"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* client Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClientClick(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  activeClient === index ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Go to client ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* client Description */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeClient}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.h3
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {clients[activeClient].name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {clients[activeClient].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <button className={ `${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} mt-4 px-6 py-2 rounded-full font-medium transition-colors`}>
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
