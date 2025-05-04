"use client"

import { useRef, useEffect, useState } from "react"
import { Play, ChevronRight, PlayCircle,} from "lucide-react"
import gsap from "gsap"
import { motion } from "framer-motion"
import Image from "next/image"

const VideoSection = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const videoRef = useRef(null)
  const ctaRef = useRef(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  // YouTube video ID
  const youtubeVideoId = "W3zno51ROXk"

  // YouTube thumbnail URL (high quality)
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animation sequence
    tl.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
      .from(
        textRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.5",
      )
      .from(
        videoRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
        },
        "-=0.3",
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4",
      )
  }, [])

  const handleVideoPlayClick = () => {
    setVideoPlaying(true)
  }

  return (
    <div id="video-showcase" ref={sectionRef} className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      {/* Background elements - matching hero section */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 70% 50%, rgba(0,185,214,0.15) 0%, rgba(0,0,0,1) 70%)`,
        }}
      />

      {/* Particle effect - matching hero section */}
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00B9D6]/40 animate-float"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes - matching hero section */}
      <div className="absolute top-40 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-[#00B9D6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-80 sm:h-80 bg-[#00B9D6]/10 rounded-full blur-3xl"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00B9D6]/10 text-[#00B9D6] text-sm font-medium mb-4">
            Watch How It Works
          </div>

          <h2 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="text-[#00B9D6] relative">
              SEO Process
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
            </span>{" "}
            In Action
          </h2>

          <p ref={textRef} className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            See how our data-driven approach helps software development agencies
            <span className="text-[#00B9D6] font-semibold"> attract premium clients</span> and
            <span className="text-[#00B9D6] font-semibold"> scale predictably</span> month after month.
          </p>
        </div>

        {/* Video container */}
        <div ref={videoRef} className="max-w-4xl mx-auto relative group">
          <motion.div
            className="aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#111]/90 to-[#151515]/90 backdrop-blur-md border border-[#00B9D6]/20 shadow-[0_0_35px_rgba(0,185,214,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* YouTube Video Integration */}
            <div className="relative w-full h-full">
              {!videoPlaying ? (
                // Custom thumbnail with play button overlay
                <div className="relative w-full h-full">
                  {/* Thumbnail with overlay */}
                  <div className="absolute inset-0 bg-black/30 z-10"></div>

                  {/* Thumbnail image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={thumbnailUrl || "/placeholder.svg"}
                      alt="SEO Process Video Thumbnail"
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Grid overlay for design */}
                    <div
                      className="absolute inset-0 bg-[linear-gradient(rgba(0,185,214,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,185,214,0.05)_1px,transparent_1px)] z-20"
                      style={{ backgroundSize: "20px 20px" }}
                    ></div>
                  </div>

                  {/* Play button */}
                  <button
                    onClick={handleVideoPlayClick}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-[#00B9D6] text-black hover:bg-white transition-all duration-300 group-hover:scale-110 z-30 shadow-lg shadow-[#00B9D6]/30"
                    aria-label="Play video"
                  >
                    <div className="absolute inset-0 rounded-full bg-[#00B9D6] animate-ping opacity-30"></div>
                    <Play className="ml-1" size={28} fill="currentColor" />
                  </button>

                  {/* YouTube branding */}
                  <div className="absolute bottom-4 right-4 z-30 flex items-center space-x-2 bg-black/60 px-3 py-1.5 rounded-lg">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600 fill-current">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff" />
                    </svg>
                    <span className="text-white text-xs font-medium">YouTube</span>
                  </div>
                </div>
              ) : (
                // Embedded YouTube iframe when play is clicked
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="SEO Process Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              )}
            </div>
          </motion.div>

          {/* Video duration badge */}
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-[#00B9D6] font-bold text-sm px-4 py-2 rounded-full border border-[#00B9D6]/40 shadow-lg shadow-[#00B9D6]/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <span className="flex items-center">
              <PlayCircle size={14} className="mr-1.5" />
            </span>
          </motion.div>
        </div>

        {/* Call to action */}
        <div ref={ctaRef} className="mt-16 sm:mt-20 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Primary CTA */}
            <a
              href="http://www.cal.com/contntr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#00B9D6] to-[#00D6C3] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md 
              font-semibold text-base sm:text-lg transition-all 
              group relative overflow-hidden shadow-lg shadow-[#00B9D6]/20 hover:shadow-[#00B9D6]/30"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <PlayCircle size={20} className="mr-2 relative z-10" />
              <span className="relative z-10">Schedule Demo Call</span>
              <ChevronRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
            </a>

           
          </div>

          <p className="text-gray-400 text-sm mt-4">See how we can tailor our approach to your business</p>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
