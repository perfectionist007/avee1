"use client";

import { useState } from "react"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function JailManagement() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <JailManagementSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Wavey background in amber/slate colors */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,1000 C150,800 350,900 500,750 C650,600 750,800 1000,650 L1000,0 L0,0 Z"
            fill="url(#gradient)"
          ></path>
          <path
            d="M0,1000 C250,850 300,900 500,800 C700,700 750,900 1000,750 L1000,100 L0,100 Z"
            fill="url(#gradient2)"
            opacity="0.7"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>

          {/* Security symbols scattered in the background */}
          <g opacity="0.2">
            <path d="M200,200 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="#92400e" />
            <path d="M700,300 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="#92400e" />
            <path d="M300,600 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="#92400e" />
            <path d="M800,500 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="#92400e" />
          </g>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Jail Management ERP Solution
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Streamline correctional facility operations with our integrated ERP system designed specifically for
                secure environments.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="px-8 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img
                  alt="Jail Management Dashboard"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-2xl border border-amber-100 dark:border-amber-800"
                  src="/placeholder/product1.jpg?height=550&width=800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      

  );
}

function JailManagementSection() {

  const jailModules = [
    {
      id: 1,
      title: "Inmate Management Module",
      description: "Comprehensive inmate tracking, profiles, and history management system.",
      icon: `<path d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>`,
      emoji: "🔐",
    },
    {
      id: 2,
      title: "Case & Legal Management",
      description: "Track court dates, legal documents, and case progression for each inmate.",
      icon: `<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>`,
      emoji: "📋",
    },
    {
      id: 3,
      title: "Visitor Management",
      description: "Schedule and monitor visits, maintain approved visitor lists, and record visit details.",
      icon: `<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>`,
      emoji: "🧑‍🤝‍🧑",
    },
    {
      id: 4,
      title: "Inventory & Asset Management",
      description: "Track facility equipment, supplies, and maintenance schedules.",
      icon: `<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2V9h-2V7h4v10zm6 0h-2v-4h-2V7h4v10z"/>`,
      emoji: "🧾",
    },
    {
      id: 5,
      title: "Mess and Ration Management",
      description: "Manage food services, dietary requirements, and meal planning for inmates.",
      icon: `<path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>`,
      emoji: "🍽",
    },
    {
      id: 6,
      title: "Health & Medical Management",
      description: "Track inmate health records, medications, and schedule medical appointments.",
      icon: `<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.5 7.5v-3h-3v3h-3v3h3v3h3v-3h3v-3h-3z"/>`,
      emoji: "🏥",
    },
    {
      id: 7,
      title: "Work & Rehabilitation Program Management",
      description: "Manage rehabilitation programs, work assignments, and skill development initiatives.",
      icon: `<path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>`,
      emoji: "🛠",
    },
    {
      id: 8,
      title: "Reporting & Analytics",
      description: "Generate comprehensive reports and analytics for facility management and compliance.",
      icon: `<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>`,
      emoji: "📊",
    },
    {
      id: 9,
      title: "Gate Pass & Movement Tracking",
      description: "Monitor and control inmate movement within the facility and for external appointments.",
      icon: `<path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>`,
      emoji: "📦",
    },
    {
      id: 10,
      title: "Integration Module",
      description: "Connect with police/court systems and government databases for seamless information exchange.",
      icon: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`,
      emoji: "🌐",
    },
  ]
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }
  
  

return (
  <section className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-lg bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300 mb-2"
          >
            Comprehensive Solution
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
          >
            Jail Management ERP Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Our comprehensive solution offers integrated modules to streamline every aspect of correctional facility
            operations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8"
        >
          {jailModules.map((module) => (
            <ModuleTile key={module.id} module={module} />
          ))}
        </motion.div>
      </div>
    </section>
);

function ModuleTile({ module }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="flex flex-col items-center p-6 h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-md">
        <div className="relative w-16 h-16 mb-4">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-4xl">{module.emoji}</span>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 text-amber-500"
              initial={{ rotate: 0 }}
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              dangerouslySetInnerHTML={{ __html: module.icon }}
            />
          </motion.div>
        </div>

        <h3 className="text-lg font-medium text-center mb-2">{module.title}</h3>
        <p className="text-sm text-muted-foreground text-center">{module.description}</p>

        <motion.div
          className="mt-4 w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-0.5 bg-gradient-to-r from-amber-500 to-amber-300"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}
}
