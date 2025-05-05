"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Database, LineChart, Target, Code, Layers, Zap, CheckCircle } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

const pillars = [
  {
    icon: Database,
    title: "Technical SEO & Site Optimization",
    description:
      "We optimize your site structure, speed, and indexing to improve user experience and conversion rates.",
    points: [
      "Site structure optimization",
      "Performance enhancement",
      "Crawlability improvements",
      "User experience refinement",
    ],
    color: "#00B9D6",
  },
  {
    icon: LineChart,
    title: "High-Authority Content",
    description: "We create technical, well-researched content that positions you as an industry leader.",
    points: [
      "Expert-level technical content",
      "Thought leadership positioning",
      "18+ hours research per article",
      "Conversion-optimized structure",
    ],
    color: "#00B9D6",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "We align SEO with your sales process to bring in high-quality leads that convert.",
    points: [
      "Sales-aligned SEO strategy",
      "Buyer journey mapping",
      "High-intent keyword targeting",
      "Conversion path optimization",
    ],
    color: "#00B9D6",
  },
]

interface Pillar {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  points: string[]
  color: string
}

const FrameworkPillar = ({ pillar, index, isInView }: { pillar: Pillar; index: number; isInView: boolean }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00B9D6]/30 transition-all duration-500 group"
      whileHover={{
        y: -10,
        boxShadow: `0 10px 30px -10px ${pillar.color}30`,
        transition: { duration: 0.3 },
      }}
    >
      <div className="p-6 md:p-8">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#00B9D6]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#00B9D6]/20 transition-all duration-300 relative">
          <pillar.icon className="text-[#00B9D6] w-6 h-6 md:w-8 md:h-8 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B9D6]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#00B9D6] transition-colors duration-300">
          {pillar.title}
        </h3>

        <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">{pillar.description}</p>

        <ul className="space-y-2 md:space-y-3">
          {pillar.points.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={
                isInView
                  ? {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3 + 0.1 * i + 0.2 * index, duration: 0.4 },
                  }
                  : { opacity: 0, x: -10 }
              }
            >
              <CheckCircle className="text-[#00B9D6] w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm md:text-base">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function FrameworkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-16 md:py-24 bg-[#080808] relative overflow-hidden" ref={ref} id="framework">
      {/* Background Elements - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,185,214,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(0,185,214,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Simplified */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-[#00B9D6]">DevAuthority™</span> Framework
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology to help software agencies attract premium clients and scale predictably
          </p>
        </motion.div>

        {/* Framework Diagram - Simplified */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-12 md:mb-16 py-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {[
              { icon: Code, label: "Technical Excellence" },
              { icon: Layers, label: "Content Authority" },
              { icon: Zap, label: "Strategic Positioning" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-[#00B9D6]/5 rounded-xl p-6 hover:bg-[#00B9D6]/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
                    }
                    : { opacity: 0, y: 30 }
                }
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#00B9D6]/10 rounded-full flex items-center justify-center mb-4 hover:bg-[#00B9D6]/20 transition-all duration-300">
                  <item.icon className="text-[#00B9D6] w-8 h-8" />
                </div>
                <div className="text-white font-semibold text-center text-lg">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pillars - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <FrameworkPillar key={index} pillar={pillar} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
