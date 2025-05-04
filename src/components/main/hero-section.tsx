"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { ChevronRight, ArrowUpRight, LineChart, Target, Star, Zap } from "lucide-react"
import gsap from "gsap"
import { motion } from "framer-motion"

const SEOVisualization = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
    

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[320px] sm:max-w-md">
        <motion.div
          className="bg-gradient-to-br from-[#111]/90 to-[#151515]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#00B9D6]/20 shadow-[0_0_25px_rgba(0,185,214,0.15)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 sm:p-8">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#00B9D6]/15 rounded-full flex items-center justify-center mr-3">
                  <LineChart className="text-[#00B9D6] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">SEO Dashboard</h3>
                  <p className="text-xs text-gray-400">Real-time metrics</p>
                </div>
              </div>
              <div className="bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium px-2 py-1 rounded-md">LIVE</div>
            </div>

            {/* Growth metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-400">Organic Traffic</div>
                  <div className="text-xs text-green-400 flex items-center">
                    +34%
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="ml-1">
                      <path
                        d="M18 15l-6-6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">3.4x</div>
                <div className="text-xs text-gray-400">vs. previous period</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-400">Client Retention</div>
                  <div className="text-xs text-green-400 flex items-center">
                    +12%
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="ml-1">
                      <path
                        d="M18 15l-6-6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">97%</div>
                <div className="text-xs text-gray-400">industry leading</div>
              </div>
            </div>

            {/* Growth chart */}
            <div className="h-32 relative mb-4">
              <div className="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#333" strokeWidth="0.5" strokeDasharray="2" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#333" strokeWidth="0.5" strokeDasharray="2" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="#333" strokeWidth="0.5" strokeDasharray="2" />

                  {/* Chart line */}
                  <path
                    d="M0,80 L10,75 L20,70 L30,65 L40,55 L50,45 L60,35 L70,25 L80,20 L90,15 L100,10"
                    fill="none"
                    stroke="#00B9D6"
                    strokeWidth="2"
                  />

                  {/* Gradient fill */}
                  <path
                    d="M0,80 L10,75 L20,70 L30,65 L40,55 L50,45 L60,35 L70,25 L80,20 L90,15 L100,10 L100,100 L0,100 Z"
                    fill="url(#gradient)"
                    fillOpacity="0.3"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00B9D6" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#00B9D6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Time period selector */}
            <div className="flex items-center justify-between text-xs">
              <div className="text-gray-400">Jan</div>
              <div className="text-gray-400">Mar</div>
              <div className="text-gray-400">May</div>
              <div className="text-gray-400">Jul</div>
              <div className="text-gray-400">Sep</div>
              <div className="text-gray-400">Nov</div>
            </div>
          </div>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          className="absolute -top-3 -right-3 bg-gradient-to-r from-[#00B9D6] to-[#00D6C3] text-black font-bold text-xs px-3 py-1 rounded-full shadow-lg shadow-[#00B9D6]/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          30% Growth Guarantee
        </motion.div>
      </div>
    </div>
  )
}

const HeroSection = () => {
  const headlineRef = useRef(null)
  const subheadlineRef = useRef(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Staggered animation sequence
    tl.from(headlineRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
      .from(
        subheadlineRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.3",
      )
      .from(
        featuresRef.current?.children ? Array.from(featuresRef.current.children) : [],
        {
          opacity: 0,
          y: 15,
          duration: 0.4,
          stagger: 0.1,
        },
        "-=0.2",
      )
      .from(
        ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
        {
          opacity: 0,
          y: 15,
          duration: 0.4,
          stagger: 0.1,
        },
        "-=0.2",
      )
  }, [])

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  return (
    <div id="home" className="relative bg-black text-white overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(0,185,214,0.08) 0%, rgba(0,0,0,1) 70%)`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-[#00B9D6]/10 text-[#00B9D6] text-sm font-medium">
              Premium SEO for Software Agencies
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Attract Premium Clients.{" "}
              <span className="text-[#00B9D6] relative">
                Scale Predictably.
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C32.3333 2.16667 143.4 -1.3 299 9.5"
                    stroke="#00B9D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p ref={subheadlineRef} className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Growing a software development agency isnapos;t just about{" "}
              <span className="text-[#00B9D6] font-medium">getting more leads</span>—it&apos;s about becoming the{" "}
              <span className="text-[#00B9D6] font-medium">obvious choice</span> for high-value clients.
            </p>

            {/* Features */}
            <div ref={featuresRef} className="space-y-4 pt-2">
              {[
                { text: "Technical SEO & Site Optimization", icon: Zap },
                { text: "Research-Backed, High-Authority Content", icon: Star },
                { text: "Industry Positioning & Lead Generation", icon: Target },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-base group p-2 -mx-2 rounded-lg hover:bg-[#00B9D6]/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#00B9D6]/10 flex items-center justify-center group-hover:bg-[#00B9D6]/15 transition-all duration-300">
                    <feature.icon className="text-[#00B9D6]" size={18} />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={(e) => handleCTAClick(e, "#calendar")}
                className="bg-gradient-to-r from-[#00B9D6] to-[#00D6C3] text-black px-6 py-3 rounded-md 
                font-semibold text-base hover:shadow-lg hover:shadow-[#00B9D6]/20 transition-all 
                flex items-center justify-center sm:justify-start group"
              >
                <span>Get Your Free Growth Blueprint</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button
                onClick={(e) => handleCTAClick(e, "#framework")}
                className="border border-[#00B9D6]/30 text-[#00B9D6] px-6 py-3 
                rounded-md font-medium text-base hover:bg-[#00B9D6]/5 
                transition-all flex items-center justify-center sm:justify-start group"
              >
                <span>Learn Our Approach</span>
                <ArrowUpRight
                  className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={18}
                />
              </button>
            </div>
          </div>

          {/* Right Side - Dashboard Visualization */}
          <div className="relative h-[400px] sm:h-[450px] flex items-center justify-center">
            <SEOVisualization />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
