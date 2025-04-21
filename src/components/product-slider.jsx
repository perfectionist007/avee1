"use client"

import { useRef, useState, useEffect, useContext } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeContext } from '@/components/ThemeProvider';


// Sample product data
const products = [
  {
    id: 1,
    name: "ERP Hospital Management",
    description:
      "Scalable cloud infrastructure designed for enterprise needs with 99.9% uptime guarantee and 24/7 support.",
    image: "/placeholder/dash1.png",
    category: "Services",
  },
  {
    id: 2,
    name: "ERP School Management",
    description:
      "Transform your data into actionable insights with our machine learning algorithms that adapt to your business needs.",
    image: "/placeholder/dash2.jpg",
    category: "Software",
  },
  {
    id: 3,
    name: "E-Book Management",
    description:
      "Enterprise-grade security solutions that protect your data with advanced threat detection and prevention systems.",
    image: "/placeholder/dash3.png",
    category: "Infrastructure",
  },
  {
    id: 4,
    name: "Browser based ERP Prison Management",
    description:
      "Strategic guidance to help your business leverage technology for growth, efficiency, and competitive advantage.",
    image: "/placeholder/dash4.jpg",
    category: "Services",
  },
  {
    id: 5,
    name: "Mobile App for Prison Management",
    description:
      "Connect and manage thousands of devices with our comprehensive Internet of Things platform built for scale.",
    image: "/placeholder/dash5.png",
    category: "Products",
  },
  {
    id: 6,
    name: "Ride Sharing Application",
    description:
      "Custom mobile applications designed for exceptional user experience across all platforms and devices.",
    image: "/placeholder/dash6.jpg",
    category: "Development",
  },
]

export default function ProductSlider() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef(null)
  const controls = useAnimation()
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  // Scroll to active product
  useEffect(() => {
    if (!sliderRef.current) return

    const scrollAmount = activeProduct * (320 + 16) // card width + gap
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })
  }, [activeProduct])

  const handleNext = () => {
    setActiveProduct((prev) => (prev + 1) % products.length)
  }

  const handlePrev = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleProductClick = (index) => {
    setActiveProduct(index)
  }

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} container mx-auto py-16`}>
      <div className="mx-auto px-4 sm:px-6">
        <h2 className="text-6xl font-bold text-center mb-8">OUR PRODUCTS</h2>

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
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={cn(
                    "flex-shrink-0 w-80 snap-center cursor-pointer",
                    activeProduct === index ? "ring-2 ring-offset-2 ring-primary" : "",
                  )}
                  initial={{ opacity: 0.6, scale: 0.9 }}
                  animate={{
                    opacity: activeProduct === index ? 1 : 0.7,
                    scale: activeProduct === index ? 1 : 0.95,
                    y: activeProduct === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProductClick(index)}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className={`absolute top-2 right-2 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} text-xs font-bold px-2 py-1 rounded`}>
                        {product.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`text-black text-2xl font-semibold mb-1 truncate`}>{product.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg p-2 rounded-full -ml-3"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg p-2 rounded-full -mr-3"
              aria-label="Next product"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Product Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => handleProductClick(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  activeProduct === index ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.h3
                className="text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {products[activeProduct].name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {products[activeProduct].description}
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
