"use client"

import { useState } from "react"
import WaveBackground from "@/components/wave-background"
import Image from "next/image"
import { motion } from "framer-motion"


export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Ontor Azan",
      role: "CEO & Founder",
      image: "/team/ceo.png?height=400&width=400",
    },
    {
      id: 2,
      name: "Person 1",
      role: "CTO",
      image: "/team/1.png?height=400&width=400",
    },
    {
      id: 3,
      name: "Person 2",
      role: "Design Director",
      image: "/team/2.png?height=400&width=400",
    },
    {
      id: 4,
      name: "Person 3",
      role: "Marketing Lead",
      image: "/team/3.png?height=400&width=400",
    },
    {
      id: 5,
      name: "Person 4",
      role: "Product Manager",
      image: "/team/4.png?height=400&width=400",
    },
    {
      id: 6,
      name: "Person 5",
      role: "Lead Developer",
      image: "/team/5.png?height=400&width=400",
    },
    {
      id: 7,
      name: "Person 6",
      role: "UX Researcher",
      image: "/team/4.png?height=400&width=400",
    },
    {
      id: 8,
      name: "Person 7",
      role: "Backend Engineer",
      image: "/team/3.png?height=400&width=400",
    },
    {
      id: 9,
      name: "Person 8",
      role: "Content Strategist",
      image: "/team/2.png?height=400&width=400",
    },
    {
      id: 10,
      name: "Person 9",
      role: "Financial Advisor",
      image: "/team/1.png?height=400&width=400",
    },
  ]

  return (
    <>
    {/* Hero Section with Wave Background */}
          <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
            <WaveBackground />
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Our Team</h1>
            </div>
          </section>
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals who make our company thrive with their expertise and dedication.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 px-4">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
    </>
  )
}

function TeamMemberCard({ member }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center justify-center mx-auto px-2 sm:px-4 h-[250px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: member.id * 0.1 }}
        className="relative mb-4 overflow-hidden rounded-full"
        style={{ width: "180px", height: "180px" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full z-10"
          animate={{
            backgroundColor: isHovered ? "rgba(99, 102, 241, 0.3)" : "rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.2 }}
        />

        <motion.div
          className="w-full h-full relative"
          animate={{
            rotate: isHovered ? 5 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className={`object-cover transition-all duration-300 ${isHovered ? "" : "grayscale"}`}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center w-full"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </motion.div>
    </div>
  )
}