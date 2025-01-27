"use client";
import React, { useEffect, useRef } from "react";
import { Linkedin, Calendar } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  const [isHovered, setIsHovered] = React.useState<number | null>(null);

  // Refs for animation targets
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initial animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Headline animation with text split
    const headlineText = headlineRef.current?.textContent?.split(" ") || [];
    gsap.set(headlineRef.current, { overflow: "hidden" });

    tl.from(headlineText, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)"
    })
      .from(subheadlineRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, "-=0.4")
      .from(ctaRef.current?.children ? Array.from(ctaRef.current.children) : [], {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.2
      }, "-=0.4");

    // Animate steps with scroll trigger
    stepsItemsRef.current.forEach((step, index) => {
      gsap.from(step, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: step,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.2
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Hover animation for steps
  const handleStepHover = (index: number) => {
    setIsHovered(index);
    gsap.to(stepsItemsRef.current[index], {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleStepLeave = (index: number) => {
    setIsHovered(null);
    gsap.to(stepsItemsRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div className="relative bg-black min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900/50" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 space-y-12">
            <h1 ref={headlineRef} className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              WE ARE THE BEST
              <br />
              <span className="text-cyan-400">IN THE BLOG GAME</span>
            </h1>

            <p ref={subheadlineRef} className="text-lg text-gray-400 max-w-xl">
              As a C-level executive, your focus is on steering your business
              toward growth, not getting bogged down in content creation
              details.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 items-center">
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

          <div ref={stepsRef} className="flex-1 space-y-8">
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
                ref={el => {
                  stepsItemsRef.current[index] = el!;
                }}
                className={`flex gap-4 p-4 rounded-lg transition-all duration-200
                           ${isHovered === index ? "bg-white/5" : ""}`}
                onMouseEnter={() => handleStepHover(index)}
                onMouseLeave={() => handleStepLeave(index)}
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