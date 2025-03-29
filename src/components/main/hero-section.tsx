"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { ChevronRight, ArrowUpRight, LineChart, Target, Star, Zap, MousePointer } from "lucide-react"
import gsap from "gsap"
import { motion } from "framer-motion"

const SEOVisualization = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-[linear-gradient(rgba(0,185,214,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,185,214,0.1)_1px,transparent_1px)]"
            style={{ backgroundSize: "40px 40px" }}
          ></div>
        </div>

        {/* Animated circles */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#00B9D6]/5 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-[#00B9D6]/5 animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>

        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-20 h-20 animate-float">
          <div className="w-full h-full bg-[#00B9D6]/10 rounded-lg rotate-12 backdrop-blur-sm border border-[#00B9D6]/20"></div>
        </div>
        <div className="absolute bottom-20 left-10 w-16 h-16 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-full h-full bg-[#00B9D6]/10 rounded-lg -rotate-12 backdrop-blur-sm border border-[#00B9D6]/20"></div>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm">
        <motion.div
          className="bg-gradient-to-br from-[#111]/80 to-[#151515]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[#00B9D6]/10 rounded-full flex items-center justify-center">
                <LineChart className="text-[#00B9D6] w-8 h-8" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white text-center mb-4">SEO Growth Dashboard</h3>

            <div className="space-y-6">
              {/* Growth metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#00B9D6] mb-1">97%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Client Retention</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#00B9D6] mb-1">3.4x</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Traffic Growth</div>
                </div>
              </div>

              {/* Growth chart */}
              <div className="h-32 relative">
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M0,80 L10,75 L20,70 L30,65 L40,55 L50,45 L60,35 L70,25 L80,20 L90,15 L100,10"
                      fill="none"
                      stroke="#00B9D6"
                      strokeWidth="3"
                    />
                    <path
                      d="M0,80 L10,75 L20,70 L30,65 L40,55 L50,45 L60,35 L70,25 L80,20 L90,15 L100,10 L100,100 L0,100 Z"
                      fill="url(#gradient)"
                      fillOpacity="0.2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00B9D6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#00B9D6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          className="absolute -top-4 -right-4 bg-gradient-to-br from-[#00B9D6] to-[#0099B6] text-black font-bold text-sm px-3 py-1 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          Premium SEO
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 bg-black text-[#00B9D6] font-bold text-sm px-3 py-1 rounded-full border border-[#00B9D6]/30 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
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

    // Headline animation
    tl.from(headlineRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    })
      .from(
        subheadlineRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
        },
        "-=0.5",
      )
      .from(
        featuresRef.current?.children ? Array.from(featuresRef.current.children) : [],
        {
          opacity: 0,
          x: -30,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.3",
      )
      .from(
        ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.4",
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
    <div id="home" className="relative bg-black text-white min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 30% 50%, rgba(0,185,214,0.08) 0%, rgba(0,0,0,1) 70%)`,
        }}
      />

      {/* Particle effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00B9D6]/30 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00B9D6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00B9D6]/5 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          {/* Headline */}
          <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Attract Premium Clients.
            <br />
            <span className="text-[#00B9D6] relative">
              Scale Predictably.
              <svg
                className="absolute -bottom-2 left-0 w-full"
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
          <p ref={subheadlineRef} className="text-xl text-gray-300 leading-relaxed">
            Growing a software development agency isn&apos;t just about{" "}
            <span className="text-[#00B9D6] font-semibold">getting more leads</span>—it&apos;s about becoming the{" "}
            <span className="text-[#00B9D6] font-semibold">obvious choice</span> for high-value clients.
          </p>

          {/* Features */}
          <div ref={featuresRef} className="space-y-4">
            {[
              { text: "Technical SEO & Site Optimization", icon: Zap },
              { text: "Research-Backed, High-Authority Content", icon: Star },
              { text: "Industry Positioning & Lead Generation", icon: Target },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-lg group p-2 -mx-2 rounded-lg hover:bg-[#00B9D6]/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#00B9D6]/10 flex items-center justify-center group-hover:bg-[#00B9D6]/20 transition-all duration-300">
                  <feature.icon className="text-[#00B9D6]" size={20} />
                </div>
                <span className="group-hover:text-[#00B9D6] transition-colors">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={(e) => handleCTAClick(e, "#calendar")}
              className="bg-[#00B9D6] text-black px-8 py-4 rounded-md 
              font-semibold text-lg hover:bg-[#00B9D6]/90 transition-all 
              flex items-center group relative overflow-hidden shadow-lg shadow-[#00B9D6]/20"
            >
              <span className="relative z-10">Get Started</span>
              <ChevronRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button
              onClick={(e) => handleCTAClick(e, "#framework")}
              className="border border-[#00B9D6] text-[#00B9D6] px-8 py-4 
              rounded-md font-semibold text-lg hover:bg-[#00B9D6]/10 
              transition-all flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <ArrowUpRight
                className="ml-2 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                size={20}
              />
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-[#00B9D6]/20">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-gray-700 to-gray-800 
                    hover:scale-110 transition-transform relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[#00B9D6]/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
              <div>
               
              </div>
            </div>
          </div>

          {/* Mouse scroll indicator */}
          <div className="hidden md:flex items-center justify-center absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-14 border-2 border-[#00B9D6]/30 rounded-full flex items-center justify-center">
              <MousePointer className="w-4 h-4 text-[#00B9D6]/50" />
            </div>
          </div>
        </div>

        {/* Right Side - Technical Visualization */}
        <div className="relative h-auto md:h-[600px] flex items-center justify-center">
          <SEOVisualization />
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div>
      <HeroSection />
    </div>
  )
}

