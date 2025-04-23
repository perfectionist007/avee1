"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import WaveBackground from "@/components/wave-background"
import { Users, Star, Award, Lightbulb, Heart, Briefcase, Globe, Rocket, Target, Clock, TrendingUp } from "lucide-react"


export default function Missionvision() {
  return (
    <>
      {/* Hero Section with Wave Background */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <WaveBackground />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Mission and Vision</h1>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValuesSection />
    </>
  )
}

function CoreValuesSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const coreValues = [
    {
      icon: <Star size={40} />,
      title: "Integrity",
      description: "Enabling people to be habituated to technology to optimize their work",
      color: "from-[#F47F20] to-[#F47F20]",
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation",
      description: "Empowering talented IT experts in the global IT industry",
      color: "from-[#F47F20] to-[#424143]",
    },
    {
      icon: <Users size={40} />,
      title: "Collaboration",
      description: "Providing IT solutions with tech awareness among the mass people",
      color: "from-[#424143] to-[#F47F20]",
    },
    {
      icon: <Award size={40} />,
      title: "Excellence",
      description: "Finding out new work opportunities for Bangladesh Youth in the IT sector",
      color: "from-[#424143] to-[#424143]",
    },
  ]

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <motion.div initial="hidden" animate={controls} variants={headerVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mx-auto">
          AVEENIR is an Information Technology company that was established with the goal of contributing to the ICT sector in Bangladesh through the provision of digitalization and automation services. The company's journey began in 2012 as BLUECORE SOFT, later rebranded as TEZZERACT in 2015, and then finally, in 2016, launched the first web-based lifestyle magazine in English under the brand identity of AVEENIR. The company came to operate under the AVEENIR brand officially in 2018.
          <br/><br/>
          Starting a business comes with its own set of challenges and obstacles. However, the journey of overcoming these challenges has made the entrepreneurs behind AVEENIR more self-reliant and equipped them with valuable skills and experience that could not have been gained through theoretical study alone. <br/><br/>
          AVEENIR began with a small team of innovative developers, designers, and IT professionals. Over time, this team has grown in both size and skill, and has established itself as a reputable and respected player in the international IT services market. The company has worked with clients from a variety of countries, including the United Kingdom, Germany, Australia, New Zealand, South Africa, Kenya, India, Pakistan, Turkey, Oman, and the United Arab Emirates.<br/><br/><br/>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 mt-6">Vision</h2>
          <p className="text-xl text-gray-600 mx-auto">
          Empowering own resources through better utilization in ICT sectors to lead the global market and emerging tech world with productivity and sustainability.
          <br/><br/>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Objective</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
            >
              <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-[#F47F20] to-[#424143] rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={headerVariants} className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">How Our Values Drive Us</h3>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                    <Star size={18} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Client Relationships</h4>
                    <p className="text-gray-600">
                    Enabling people to be habituated to technology to optimize their work
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                    <Star size={18} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Team Culture</h4>
                    <p className="text-gray-600">
                    Empowering talented IT experts in the global IT industry
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                    <Star size={18} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Decision Making</h4>
                    <p className="text-gray-600">
                    Providing IT solutions with tech awareness among the mass people
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                    <Star size={18} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Community Impact</h4>
                    <p className="text-gray-600">
                    Providing IT solutions with tech awareness among the mass people
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
