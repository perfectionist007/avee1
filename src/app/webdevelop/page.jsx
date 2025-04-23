"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { Database, Globe, Layout, Layers, Smartphone, Cloud, Server, Shield } from "lucide-react"

export default function WebDevelop() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TechnologiesSection />
    </main>
  )
}

function HeroSection() {
  return (
    <div className="relative h-[35vh] flex items-center justify-center overflow-hidden text-white">
      {/* Animated geometric background */}
      <GeometricBackground />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Development
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="flex items-center justify-center flex-wrap gap-2 text-black text-bold">
            We Develop in <AnimatedFrameworks />
          </p>
        </motion.div>
      </div>

      {/* Gradient overlay at the bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  )
}

function AnimatedFrameworks() {
  const frameworks = ["React", "Angular", "Vue"]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % frameworks.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative inline-block w-[100px] h-[40px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={frameworks[currentIndex]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 right-0 text-[#F47F20] font-bold"
        >
          {frameworks[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function GeometricBackground() {
  // Generate random triangles
  const triangles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50, // Between 50 and 150
    rotation: Math.random() * 360,
    duration: Math.random() * 20 + 20, // Between 20 and 40 seconds
    delay: Math.random() * -20,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {triangles.map((triangle) => (
        <motion.div
          key={triangle.id}
          className="absolute opacity-10"
          style={{
            left: `${triangle.x}%`,
            top: `${triangle.y}%`,
            width: 0,
            height: 0,
            borderLeft: `${triangle.size / 2}px solid transparent`,
            borderRight: `${triangle.size / 2}px solid transparent`,
            borderBottom: `${triangle.size}px solid`,
            rotate: `${triangle.rotation}deg`,
          }}
          animate={{
            borderBottomColor: ["#424143", "#F47F20", "#424143"],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [`${triangle.rotation}deg`, `${triangle.rotation + 180}deg`, `${triangle.rotation + 360}deg`],
          }}
          transition={{
            duration: triangle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: triangle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

function TechnologiesSection() {
  const technologies = [
    {
      name: "Web Development",
      description:
        "Modern, responsive websites and web applications using React, Next.js, and other cutting-edge frameworks.",
      icon: <Globe className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      icon: <Smartphone className="w-12 h-12" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "Backend Development",
      description: "Scalable and secure backend services using Node.js, Python, and other server-side technologies.",
      icon: <Server className="w-12 h-12" />,
      color: "from-purple-500 to-violet-400",
    },
    {
      name: "Database Solutions",
      description:
        "Efficient data storage and retrieval with SQL and NoSQL databases including PostgreSQL, MongoDB, and Firebase.",
      icon: <Database className="w-12 h-12" />,
      color: "from-orange-500 to-amber-400",
    },
    {
      name: "Cloud Services",
      description: "Deployment and hosting on AWS, Google Cloud, and Azure with CI/CD pipelines for seamless updates.",
      icon: <Cloud className="w-12 h-12" />,
      color: "from-sky-500 to-blue-400",
    },
    {
      name: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with user experience in mind using Figma and Adobe Creative Suite.",
      icon: <Layout className="w-12 h-12" />,
      color: "from-pink-500 to-rose-400",
    },
    {
      name: "Security",
      description: "Implementation of best security practices to protect your application and user data.",
      icon: <Shield className="w-12 h-12" />,
      color: "from-red-500 to-rose-400",
    },
    {
      name: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration with third-party services and applications.",
      icon: <Layers className="w-12 h-12" />,
      color: "from-indigo-500 to-purple-400",
    },
  ]

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnologyCard({ tech, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
          },
        },
      }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className={`p-6 flex flex-col items-center text-center`}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
          className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${tech.color} text-white`}
        >
          {tech.icon}
        </motion.div>

        <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
        <p className="text-gray-600">{tech.description}</p>
      </div>
    </motion.div>
  )
}
