"use client";
import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Video,
  Calendar,
  Clock,
  Star,
  Users,
  Play,
  Pause,
} from "lucide-react";

const CTAVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-black min-h-[600px] flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Main Content */}
          <div className="flex-1 space-y-8">
            <div
              className="inline-flex items-center rounded-full px-3 py-1 text-sm 
                          text-cyan-300 bg-cyan-950 border border-cyan-800/50"
            >
              <Video className="w-4 h-4 mr-2" />
              Free Strategy Session
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Transform Your SEO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Strategy Today
              </span>
            </h2>

            <p className="text-lg text-gray-400 max-w-xl">
              Book a free 45-minute video consultation with our SEO experts.
              We&apos;ll analyze your current performance and create a custom
              strategy to boost your rankings.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {[
                {
                  icon: Star,
                  title: "Expert Analysis",
                  description: "Get insights from top SEO specialists",
                },
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  description: "Book a time that works for you",
                },
                {
                  icon: Clock,
                  title: "35-Min Session",
                  description: "Focused, actionable strategy discussion",
                },
                {
                  icon: Users,
                  title: "Personalized Plan",
                  description: "Custom roadmap for your business",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="mt-8 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 
                         text-black font-medium rounded-lg transition-colors 
                         duration-200 flex items-center justify-center group"
              onClick={() =>
                window.open(
                  "https://www.cal.com/contntr/call",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Book Your Free Strategy Session
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Video Call Preview */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-lg blur opacity-25" />

              <div className="relative p-8 bg-gray-900 border border-gray-800 rounded-lg">
                {/* Video Preview Placeholder */}
                <div className="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden relative">
                  <video
                    ref={videoRef}
                    src="/kyle.mp4"
                    className="object-cover w-full h-full"
                    onClick={togglePlay}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    onClick={togglePlay}
                    className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                </div>

                {/* Session Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-medium">
                      Session Includes:
                    </div>
                    <div className="text-cyan-500">45 Minutes</div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Website Performance Analysis",
                      "Competitor Research Review",
                      "Custom Strategy Development",
                      "Implementation Roadmap",
                      "Q&A Session",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                  Limited spots available each week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAVideoSection;
