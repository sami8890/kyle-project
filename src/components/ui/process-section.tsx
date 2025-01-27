"use client"

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, PieChart, Target, Rocket } from "lucide-react";

const ProcessSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: Search,
      title: "Research & Analysis",
      description:
        "We dive deep into your industry, competitors, and target audience to identify growth opportunities.",
      tag: "Step 01",
    },
    {
      icon: PieChart,
      title: "Strategy Development",
      description:
        "Create a customized growth strategy based on data-driven insights and market analysis.",
      tag: "Step 02",
    },
    {
      icon: Target,
      title: "Implementation",
      description:
        "Execute the strategy with our proven frameworks and cutting-edge tools.",
      tag: "Step 03",
    },
    {
      icon: Rocket,
      title: "Growth & Optimization",
      description:
        "Continuously monitor, adjust, and optimize for maximum performance.",
      tag: "Step 04",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative bg-black py-24 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black" />
        {/* Animated gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-sm 
                             text-cyan-300 bg-cyan-950 border border-cyan-800/50"
              >
                <span className="w-1 h-1 rounded-full bg-cyan-400 mr-2" />
                Our Process
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-white"
            >
              How We Drive Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Digital Success
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg text-gray-400"
            >
              Our systematic approach ensures consistent results and sustainable
              growth for your business in the digital landscape.
            </motion.p>
          </div>

          {/* Process Steps */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Connecting Lines */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 left-full w-full h-px bg-gradient-to-r from-cyan-500/50 to-transparent z-0" />
                )}

                {/* Card */}
                <div
                  className="relative z-10 p-8 rounded-lg bg-gradient-to-b from-gray-900 to-gray-900/50 
                              border border-gray-800 hover:border-cyan-800 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-800/50 
                                  flex items-center justify-center"
                    >
                      <step.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 
                         text-black font-medium rounded-lg transition-colors duration-200 group"
              onClick={() =>
                window.open(
                  "https://www.cal.com/contntr/call",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Start Your Journey
              <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessSection;