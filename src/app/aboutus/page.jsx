"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import WaveBackground from "@/components/wave-background"
import { Users, Star, Award, Lightbulb, Heart, Briefcase, Globe, Rocket, Target, Clock, TrendingUp } from "lucide-react"


export default function AboutUs() {
  return (
    <>
      {/* Hero Section with Wave Background */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <WaveBackground />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">About Us</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAreSection />
    </>
  )
}



function WhoWeAreSection() {
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const teamCards = [
    {
      icon: <Users size={64} />,
      title: "Pragmatic Approach",
      description: (<>Many teams attempt to deliver a project in a single iteration. Pressured by a constantly evolving market, they build too fast - taking on 'technical debt', which creates future problems. 
      <br/><br/> At Aveenir, we adopt a pragmatic approach, building in stages to ensure efficient and debt-free delivery.</>),
    },
    {
      icon: <Lightbulb size={64} />,
      title: "Proactive Mindset",
      description: (<>It is common for technical teams to get stressed with issues that arise in day-to-day operations. <br/><br/> Our software methodology and governance takes a proactive approach by identifying potential problems and proposing workable fixes before they escalate.</>),
    },
    {
      icon: <Heart size={64} />,
      title: "Transparent Partnership",
      description: (<>Whether an enterprise client or a new startup, we treat every project as our own, to symbolize a win-win scenario for us both. <br/><br/> We work very hard to elevate ourselves from a service provider, to a software development partner by placing collaboration at the heart of everything we do.</>),
    },
    ,
    {
      icon: <Clock size={64} />,
      title: "Bespoke Innovation",
      description: (<>Our years of experience with a diverse pool of clients have enabled us to master a multitude of on-demand tech stacks. <br/><br/> In this technology-driven age, we constantly search and enhance our skills to catalyze your business’s digital transformation using the latest technologies and innovative thought.</>) ,
    },
  ]

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <motion.div initial="hidden" animate={controls} variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-4xl sm:text-sm md:text-2xl lg:text-3xl text-gray-600 mx-auto">
            We are a team of passionate innovators dedicated to creating solutions that make a difference. Our diverse
            backgrounds and expertise allow us to approach problems from unique perspectives.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8"
        >
          {teamCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F47F20] to-[#424143] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="text-[#F47F20] mb-6">{card.icon}</div>
              <h3 className="text-4xl sm:text-sm md:text-2xl lg:text-3xl font-bold mb-4">{card.title}</h3>
              <p className="text-4xl sm:text-sm md:text-2xl lg:text-3xl text-gray">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-5xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center mb-10 lg:mb-20 md:mb-10 sm:mb-5">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start mb-10 lg:mb-20 md:mb-10 sm:mb-5">
                <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                  <Globe size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-4xl sm:text-sm md:text-2xl lg:text-3xl font-semibold text-lg">Global Perspective</h4>
                  <p className="text-4xl sm:text-sm md:text-2xl lg:text-3xl text-gray">
                    We bring international experience and cultural awareness to every project.
                  </p>
                </div>
              </li>
              <li className="flex items-start mb-10 lg:mb-20 md:mb-10 sm:mb-5">
                <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                  <Target size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-4xl sm:text-sm md:text-2xl lg:text-3xl font-semibold text-lg">Client-Focused</h4>
                  <p className="text-4xl sm:text-sm md:text-2xl lg:text-3xl text-gray">
                    Your goals become our goals, and we measure success by your satisfaction.
                  </p>
                </div>
              </li>
              <li className="flex items-start mb-10 lg:mb-20 md:mb-10 sm:mb-5">
                <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                  <Target size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-4xl sm:text-sm md:text-2xl lg:text-3xl font-semibold text-lg">Approach</h4>
                  <p className="text-4xl sm:text-sm md:text-2xl lg:text-3xl text-gray">
                    Your goals become our goals, and we measure success by your satisfaction.
                  </p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start mb-10 lg:mb-20 md:mb-10 sm:mb-5">
                <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                  <Rocket size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-4xl sm:text-sm md:text-2xl lg:text-3xl font-semibold text-lg">Forward-Thinking</h4>
                  <p className="text-4xl sm:text-sm md:text-2xl lg:text-3xl text-gray">
                    We anticipate future trends and build solutions that stand the test of time.
                  </p>
                </div>
              </li>
              <li className="flex items-start mb-10 lg:mb-20 md:mb-10 sm:mb-5">
                <div className="bg-[#F47F20] rounded-full p-1 mr-4 mt-1">
                  <Users size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-4xl sm:text-sm md:text-2xl lg:text-3xl font-semibold text-lg">Collaborative</h4>
                  <p className="text-4xl sm:text-sm md:text-2xl lg:text-3xl text-gray">
                    We believe the best results come from true partnership with our clients.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
