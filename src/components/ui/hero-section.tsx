"use client";
import React from "react";
import { Linkedin, Calendar } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [isHovered, setIsHovered] = React.useState<number | null>(null);

  return (
    <div className="relative bg-black min-h-screen flex items-center pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900/50" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left column - Main content */}
          <div className="flex-1 space-y-12">
            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              WE ARE THE BEST
              <br />
              <span className="text-cyan-400">IN THE BLOG GAME</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-400 max-w-xl">
              As a C-level executive, your focus is on steering your business
              toward growth, not getting bogged down in content creation
              details.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 
                         text-black font-medium rounded-lg transition-colors duration-200
                         flex items-center justify-center gap-2 group"
                onClick={() =>
                  window.open(
                    "https://www.cal.com/contntr/call",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Book a Meeting
                <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            <Link
                href="https://www.linkedin.com/in/lknianga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 
                         text-white font-medium rounded-lg transition-colors duration-200
                         flex items-center justify-center gap-2 border border-white/10"
              >
                Chat on LinkedIn
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right column - Service Process Steps */}
          <div className="flex-1 space-y-8">
            {[
              {
                number: "1",
                title: "Hop on a Quick Chat or Call",
                description:
                  "Prefer a quick chat? Reach out directly through our founder's LinkedIn for a fast and personalized conversation. Need something more formal? You can easily book a call at a time that works for you.",
              },
              {
                number: "2",
                title: "Receive a Bespoke Recommendation",
                description:
                  "After understanding your goals, we'll craft a tailored package designed to deliver results without wasting resources.",
              },
              {
                number: "3",
                title: "We Create. You Lead.",
                description:
                  "While you focus on driving your business, we craft high-impact, SEO-optimized content that grows your brand effortlessly.",
              },
              {
                number: "4",
                title: "Your Vision Realized in Just 8 Hours",
                description:
                  "With less than 8 hours of your involvement, we'll set everything in motion. In under 2 weeks, your tailored content strategy will be live, working to elevate your brand.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex gap-4 p-4 rounded-lg transition-all duration-200
                           ${isHovered === index ? "bg-white/5" : ""}`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-black font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
