"use client"
import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { Database, Globe, Layout, Layers, Smartphone, Cloud, Server, Shield } from "lucide-react"


export default function VfxAnimation() {
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
      {/* Abstract animated Lottie background */}
      <AbstractBackground />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          VFX Animation
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center flex-wrap gap-2 text-black text-bold">
            We Develop in <AnimatedFrameworks />
          </div>
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

function AbstractBackground() {
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    const numShapes = 120
    const generatedShapes = Array.from({ length: numShapes }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.35,
      size: Math.random() * 40 + 20,
      color: Math.random() > 0.5 ? "#F47F20" : "#424143",
      type: ["circle", "triangle", "hex"][Math.floor(Math.random() * 3)],
      delay: Math.random() * 5,
      direction: Math.random() > 0.5 ? 1 : -1,
      baseOpacity: 0.05 + Math.random() * 0.1,
    }))
    setShapes(generatedShapes)
  }, [])

  return (
    <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
      {shapes.map((shape) => {
        const duration = 20 + Math.random() * 10
        const moveY = shape.direction * (10 + Math.random() * 20)

        switch (shape.type) {
          case "circle":
            return (
              <motion.circle
                key={shape.id}
                cx={shape.x}
                cy={shape.y}
                r={shape.size / 2}
                fill={shape.color}
                fillOpacity={shape.baseOpacity}
                initial={{ y: 0 }}
                animate={{ y: [0, moveY, 0] }}
                transition={{
                  duration,
                  delay: shape.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )
          case "triangle":
            const triPoints = `${shape.size},0 0,${shape.size} ${shape.size * 2},${shape.size}`
            return (
              <motion.polygon
                key={shape.id}
                points={triPoints}
                fill={shape.color}
                fillOpacity={shape.baseOpacity}
                transform={`translate(${shape.x}, ${shape.y}) scale(0.4)`}
                initial={{ y: 0 }}
                animate={{ y: [0, moveY, 0] }}
                transition={{
                  duration,
                  delay: shape.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )
          case "hex":
            const s = shape.size / 2
            const h = s * Math.sqrt(3)
            const hexPoints = [
              [s, 0],
              [2 * s, h / 2],
              [2 * s, (3 * h) / 2],
              [s, 2 * h],
              [0, (3 * h) / 2],
              [0, h / 2],
            ]
              .map(([px, py]) => `${px},${py}`)
              .join(" ")
            return (
              <motion.polygon
                key={shape.id}
                points={hexPoints}
                fill={shape.color}
                fillOpacity={shape.baseOpacity}
                transform={`translate(${shape.x}, ${shape.y}) scale(0.3)`}
                initial={{ y: 0 }}
                animate={{ y: [0, moveY, 0] }}
                transition={{
                  duration,
                  delay: shape.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )
          default:
            return null
        }
      })}
    </svg>
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



