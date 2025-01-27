"use client";
import React from "react";
import { ArrowUpRight, Rocket, Code, BarChart, Workflow } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CapabilitiesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const capabilities = [
    {
      label: "Custom Strategy",
      highlight: "Tailored",
      icon: Rocket,
      description:
        "Personalized growth plans aligned with your unique business goals and market position",
    },
    {
      label: "Modern Tech Stack",
      highlight: "Advanced",
      icon: Code,
      description:
        "Leveraging cutting-edge tools and AI to maximize your digital presence",
    },
    {
      label: "Data-Driven",
      highlight: "Smart",
      icon: BarChart,
      description:
        "Real-time analytics and insights to guide strategic decisions",
    },
    {
      label: "Agile Process",
      highlight: "Flexible",
      icon: Workflow,
      description: "Adaptable methodology that grows with your business needs",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-black min-h-screen flex items-center py-24">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Our Approach
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-white"
            >
              Future-Proof Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Digital Growth
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg text-gray-400"
            >
              We bring enterprise-level strategies and tools to emerging
              businesses, helping you build a strong foundation for sustainable
              growth.
            </motion.p>
          </div>

          {/* Capabilities Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {capabilities.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="group relative p-8 rounded-lg bg-gradient-to-b from-gray-900 to-gray-900/50 
                         border border-gray-800 hover:border-cyan-800 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <item.icon className="w-8 h-8 text-cyan-500" />
                  <ArrowUpRight
                    className="w-5 h-5 text-gray-600 group-hover:text-cyan-500 
                                         group-hover:translate-x-1 group-hover:-translate-y-1 
                                         transition-all duration-200"
                  />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-1">
                  {item.highlight}
                </h3>
                <p className="text-lg font-semibold text-gray-300 mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
