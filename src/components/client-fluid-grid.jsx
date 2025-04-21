"use client"

import { useState, useRef, useContext } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ThemeContext } from '@/components/ThemeProvider';


// Grid items data with logo image paths
const gridItems = [
  {
    id: 1,
    title: "Cloud Computing",
    logoPath: "/img/clients/c1.png",
    color: "#3B82F6", // blue-500
  },
  {
    id: 2,
    title: "AI Solutions",
    logoPath: "/img/clients/c2.png",
    color: "#8B5CF6", // violet-500
  },
  {
    id: 3,
    title: "Cyber Security",
    logoPath: "/img/clients/c3.png",
    color: "#10B981", // emerald-500
  },
  {
    id: 4,
    title: "IT Consulting",
    logoPath: "/img/clients/c4.png",
    color: "#F59E0B", // amber-500
  },
  {
    id: 5,
    title: "IoT Platforms",
    logoPath: "/img/clients/c5.png",
    color: "#EC4899", // pink-500
  },
  {
    id: 6,
    title: "App Development",
    logoPath: "/img/clients/c6.png",
    color: "#EF4444", // red-500
  },
  {
    id: 7,
    title: "Data Analytics",
    logoPath: "/img/clients/c7.png",
    color: "#6366F1", // indigo-500
  },
  {
    id: 8,
    title: "Network Solutions",
    logoPath: "/img/clients/c8.png",
    color: "#14B8A6", // teal-500
  },
  {
    id: 9,
    title: "Cloud Storage",
    logoPath: "/img/clients/c9.png",
    color: "#0EA5E9", // sky-500
  },
  {
    id: 10,
    title: "DevOps Services",
    logoPath: "/img/clients/c10.png",
    color: "#D946EF", // fuchsia-500
  },
  {
    id: 11,
    title: "Machine Learning",
    logoPath: "/img/clients/c11.png",
    color: "#8B5CF6", // violet-500
  },
  {
    id: 12,
    title: "Blockchain Tech",
    logoPath: "/img/clients/c12.png",
    color: "#06B6D4", // cyan-500
  },
  {
    id: 13,
    title: "UI/UX Design",
    logoPath: "/img/clients/c13.png",
    color: "#F97316", // orange-500
  },
  {
    id: 14,
    title: "API Integration",
    logoPath: "/img/clients/c14.png",
    color: "#84CC16", // lime-500
  },
  {
    id: 15,
    title: "Managed Services",
    logoPath: "/img/clients/c15.png",
    color: "#4F46E5", // indigo-600
  },
  {
    id: 16,
    title: "Tech Support",
    logoPath: "/img/clients/c16.jpg",
    color: "#0891B2", // cyan-600
  },
]

export default function ClientFluidGrid() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);  

  const [hoveredItem, setHoveredItem] = useState(null)
  const [prevHoveredItem, setPrevHoveredItem] = useState(null)
  const gridRef = useRef(null)

  // Mouse position values for fluid animation
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smoother animation
  const springConfig = { damping: 25, stiffness: 300 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Update mouse position for fluid animation
  const handleMouseMove = (e) => {
    if (!gridRef.current) return

    const rect = gridRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set(x)
    mouseY.set(y)
  }

  // Handle hover state changes
  const handleMouseEnter = (id) => {
    setPrevHoveredItem(hoveredItem)
    setHoveredItem(id)
  }

  const handleMouseLeave = () => {
    setPrevHoveredItem(hoveredItem)
    setHoveredItem(null)
  }

  // Get grid item position for animation
  const getItemPosition = (id) => {
    if (!gridRef.current) return { x: 0, y: 0, width: 0, height: 0 }

    const element = document.getElementById(`grid-item-${id}`)
    if (!element) return { x: 0, y: 0, width: 0, height: 0 }

    const rect = element.getBoundingClientRect()
    const gridRect = gridRef.current.getBoundingClientRect()

    return {
      x: rect.left - gridRect.left,
      y: rect.top - gridRect.top,
      width: rect.width,
      height: rect.height,
    }
  }

  return (
    <div className={`${isDarkMode ? 'text-white' : 'text-black'} container mx-auto py-16`}>
      <div className="mx-auto px-4 sm:px-6">
        <h2 className="text-6xl font-bold text-center mb-8">OUR CLIENTS</h2>

    <div ref={gridRef} className="relative w-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Fluid background overlay */}
      <AnimatePresence>
        {hoveredItem !== null && (
          <motion.div
            key={`overlay-${hoveredItem}`}
            initial={
              prevHoveredItem !== null
                ? {
                    ...getItemPosition(prevHoveredItem),
                    opacity: 0.8,
                    borderRadius: "0.75rem",
                  }
                : {
                    ...getItemPosition(hoveredItem),
                    opacity: 0,
                    borderRadius: "0.75rem",
                  }
            }
            animate={{
              ...getItemPosition(hoveredItem),
              opacity: 0.9,
              borderRadius: "0.75rem",
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
            style={{
              backgroundColor: gridItems[hoveredItem - 1].color,
              position: "absolute",
              zIndex: 1,
            }}
            className="shadow-lg"
          />
        )}
      </AnimatePresence>

      {/* Fluid cursor follower */}
      <motion.div
        className="pointer-events-none absolute z-0 h-24 w-24 rounded-full opacity-30 blur-xl"
        style={{
          background: hoveredItem !== null ? gridItems[hoveredItem - 1].color : "#3B82F6",
          x: useTransform(springX, (x) => x - 48),
          y: useTransform(springY, (y) => y - 48),
          opacity: hoveredItem !== null ? 0.5 : 0,
        }}
      />

      {/* Grid layout */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {gridItems.map((item) => (
    <div
      key={item.id}
      id={`grid-item-${item.id}`}
      className={cn(
        "relative z-10 bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center transition-transform duration-200 min-h-[180px]",
        hoveredItem === item.id ? "transform scale-[1.02]" : "",
      )}
      onMouseEnter={() => handleMouseEnter(item.id)}
    >
      <div className="relative z-10 flex-grow w-full flex items-center justify-center">
        <div className="relative w-full h-32 overflow-hidden rounded-md">
          <Image
            src={item.logoPath || "/placeholder.svg"}
            alt={item.title}
            fill // <-- fill the container
            className={cn(
              "object-contain transition-all duration-200",
              hoveredItem === item.id ? "brightness-[1.15]" : "",
            )}
          />
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
    </div>
  )
}
