"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCog,
  Bed,
  PillIcon,
  Package,
  DollarSign,
  UserPlus,
  BarChart3,
  FlaskRoundIcon as Flask,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HospitalManagement() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HospitalManagementSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Medical-themed wavey background */}
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
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Medical cross symbols scattered in the background */}
          <g opacity="0.2">
            <path d="M200,200 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="#0284c7" />
            <path d="M700,300 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="#0284c7" />
            <path d="M300,600 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="#0284c7" />
            <path d="M800,500 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 z" fill="#0284c7" />
          </g>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Comprehensive Hospital Management ERP Solution
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Streamline your hospital operations with our integrated ERP system designed specifically for healthcare
                institutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img
                  alt="Hospital Management Dashboard"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-2xl border border-blue-100 dark:border-blue-800"
                  src="/placeholder/dash2.jpg?height=550&width=800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

function HospitalManagementSection() {
  const modules = [
    {
      id: 1,
      title: "Patient Management & Medical Records (EMR/EHR)",
      description:
        "Comprehensive patient data management with electronic medical records for improved care coordination.",
      icon: Users,
    },
    {
      id: 2,
      title: "Doctor and Physician Management",
      description:
        "Streamline doctor scheduling, appointments, and performance tracking for optimal resource allocation.",
      icon: UserCog,
    },
    {
      id: 3,
      title: "Nursing and Ward Management",
      description:
        "Efficient bed allocation, patient assignment, and nursing workflow management tools.",
      icon: Bed,
    },
    {
      id: 4,
      title: "Pharmacy Management",
      description:
        "Integrated pharmacy system for inventory control, prescription management, and billing.",
      icon: PillIcon,
    },
    {
      id: 5,
      title: "Inventory and Supply Chain Management",
      description:
        "Track medical supplies, equipment, and manage vendors with automated reordering capabilities.",
      icon: Package,
    },
    {
      id: 6,
      title: "Billing & Financial Management",
      description:
        "Comprehensive billing, insurance claims processing, and financial reporting tools.",
      icon: DollarSign,
    },
    {
      id: 7,
      title: "Human Resource Management (HRM & Payroll)",
      description:
        "Complete staff management with attendance tracking, payroll processing, and performance evaluation.",
      icon: UserPlus,
    },
    {
      id: 8,
      title: "Reporting & Business Intelligence Dashboards",
      description:
        "Data-driven insights with customizable dashboards and comprehensive reporting tools.",
      icon: BarChart3,
    },
    {
      id: 9,
      title: "Laboratory Information System (LIS) Module",
      description:
        "Manage lab tests, results, and reporting with full integration to patient records.",
      icon: Flask,
    },
    {
      id: 10,
      title: "Laboratory Information Management System (LIMS) Module",
      description:
        "Advanced laboratory workflow management with sample tracking and quality control.",
      icon: Microscope,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  function ModuleCard({ module }) {
    const Icon = module.icon;

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{
          scale: 1.03,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        <Card className="h-full overflow-hidden border-blue-100 dark:border-blue-800 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600">
          <CardHeader>
            <motion.div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4"
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              {module.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              {module.description}
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            >
              Comprehensive ERP Modules
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Our hospital management system offers a complete suite of integrated modules to streamline every aspect of healthcare
              operations.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16"
        >
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}