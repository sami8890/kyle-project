"use client";

import { useRef, useEffect } from "react";
import { Play, ChevronRight, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
        "-=0.5"
      )
      .from(
        videoRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
        },
        "-=0.3"
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4"
      );
  }, []);

  const handleVideoPlayClick = () => {
    // This would typically trigger your video play functionality
    // For demo purposes, we'll just log to console
    console.log("Video play triggered");

    // If you have a video element with a ref, you could start playback:
    // videoElementRef.current.play();
  };

  return (
    <div
      id="video-showcase"
      ref={sectionRef}
      className="relative bg-black text-white py-16 md:py-24 overflow-hidden"
    >
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

          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
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

          <p
            ref={textRef}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
          >
            See how our data-driven approach helps software development agencies
            <span className="text-[#00B9D6] font-semibold">
              {" "}
              attract premium clients
            </span>{" "}
            and
            <span className="text-[#00B9D6] font-semibold">
              {" "}
              scale predictably
            </span>{" "}
            month after month.
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
            {/* Replace src with your actual video source */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* This is a placeholder for your video - replace with your actual video element */}
              <div className="absolute inset-0 bg-black/50">
                {/* Video thumbnail image would go here */}
                <div
                  className="h-full w-full bg-[linear-gradient(rgba(0,185,214,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,185,214,0.05)_1px,transparent_1px)]"
                  style={{ backgroundSize: "20px 20px" }}
                ></div>
              </div>

              {/* Play button overlay */}
              <button
                onClick={handleVideoPlayClick}
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-[#00B9D6] text-black 
                hover:bg-white transition-all duration-300 group-hover:scale-110 z-10"
              >
                <Play className="ml-1" size={24} fill="currentColor" />
              </button>
            </div>
          </motion.div>

          {/* Video caption badge */}
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-[#00B9D6] font-bold text-sm px-4 py-2 rounded-full border border-[#00B9D6]/40 shadow-lg shadow-[#00B9D6]/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            3:42 minute watch
          </motion.div>
        </div>

        {/* Call to action */}
        <div ref={ctaRef} className="mt-12 sm:mt-16 text-center">
          <button
            className="inline-flex items-center bg-[#00B9D6] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md 
            font-semibold text-base sm:text-lg hover:bg-[#00B9D6]/90 transition-all 
            group relative overflow-hidden shadow-lg shadow-[#00B9D6]/20"
          >
            <PlayCircle size={20} className="mr-2" />
            <span className="relative z-10">Schedule Demo Call</span>
            <ChevronRight
              className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform"
              size={18}
            />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

          <p className="text-gray-400 text-sm mt-4">
            See how we can tailor our approach to your business
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
