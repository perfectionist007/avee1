"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

// Color themes for each slide
const colorThemes = [
  {
    primary: "from-purple-600 via-pink-500 to-blue-500",
    secondary: "from-purple-700 via-pink-600 to-blue-600",
  },
  {
    primary: "from-emerald-500 via-teal-500 to-cyan-500",
    secondary: "from-emerald-600 via-teal-600 to-cyan-600",
  },
  {
    primary: "from-amber-500 via-orange-500 to-rose-500",
    secondary: "from-amber-600 via-orange-600 to-rose-600",
  },
]

const slides = [
  {
    id: 1,
    heading: "Software Development",
    subheading: "Transforming ideas into exceptional digital experiences that inspire and engage.",
    image: "/placeholder/slider1.png?height=600&width=800",
  },
  {
    id: 2,
    heading: "Digital Marketing",
    subheading: "Building seamless interfaces that connect people with technology in meaningful ways.",
    image: "/placeholder/slider2.png?height=600&width=800",
  },
  {
    id: 3,
    heading: "App Development",
    subheading: "Crafting beautiful, functional solutions that stand out in today's digital landscape.",
    image: "/placeholder/slider3.png?height=600&width=800",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Color Background */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Main gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${colorThemes[currentIndex].primary}`}>
            {/* Animated flowing texture elements */}
            <AnimatedGradientTexture colorTheme={colorThemes[currentIndex]} />
          </div>
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center h-full">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 text-white text-center md:text-left mb-8 md:mb-0"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {slides[currentIndex].heading}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl opacity-90 max-w-md mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {slides[currentIndex].subheading}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8"
              >
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Image Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 flex justify-center items-center"
            >
              <div className="relative w-full max-w-md overflow-hidden">
                <motion.img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].heading}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 ring-1 ring-white/10" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Component for animated gradient texture
function AnimatedGradientTexture({ colorTheme }) {
  return (
    <>
      {/* Multiple animated gradient blobs that create a dynamic texture effect */}
      <motion.div
        className={`absolute h-[200%] w-[200%] -top-1/2 -left-1/2 bg-gradient-to-r ${colorTheme.secondary} opacity-40 rounded-full blur-3xl`}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className={`absolute h-[150%] w-[150%] -bottom-1/4 -right-1/4 bg-gradient-to-l ${colorTheme.primary} opacity-30 rounded-full blur-3xl`}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className={`absolute h-[100%] w-[100%] top-1/4 left-1/4 bg-gradient-to-tr ${colorTheme.secondary} opacity-20 rounded-full blur-3xl`}
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      {/* Horizontal flowing animation */}
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </>
  )
}
