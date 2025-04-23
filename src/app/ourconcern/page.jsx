"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import WaveBackground from "@/components/wave-background"
import { Users, Star, Award, Lightbulb, Heart, Briefcase, Globe, Rocket, Target, Clock, TrendingUp } from "lucide-react"


export default function Ourconcern() {
  return (
    <>
      {/* Hero Section with Wave Background */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <WaveBackground />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Our Concern</h1>
        </div>
      </section>

      {/* Who We Are Section */}

    </>
  )
}

