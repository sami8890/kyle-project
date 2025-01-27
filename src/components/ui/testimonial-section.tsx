"use client";

import React, { useState, useEffect, useCallback, KeyboardEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote, Pause, Play } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/api/placeholder/48/48",
    quote:
      "The SEO strategies implemented by this team have significantly boosted our online presence. Our organic traffic has more than doubled!",
  },
  {
    name: "Michael Chen",
    role: "E-commerce Manager",
    company: "FashionHub",
    image: "/api/placeholder/48/48",
    quote:
      "We've seen a remarkable increase in our conversion rates since working with this SEO expert. Their insights have been invaluable to our growth.",
  },
  {
    name: "Emily Rodriguez",
    role: "Content Strategist",
    company: "BlogMaster",
    image: "/api/placeholder/48/48",
    quote:
      "The depth of knowledge and personalized approach to SEO has transformed our content strategy. We're now ranking for keywords we never thought possible.",
  },
  {
    name: "David Smith",
    role: "CEO",
    company: "StartupX",
    image: "/api/placeholder/48/48",
    quote:
      "Their SEO expertise has been a game-changer for our startup. We've seen exponential growth in our online visibility and customer acquisition.",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(newIndex);
        setTimeout(() => setIsAnimating(false), 300);
      }
    },
    [isAnimating]
  );

  const nextTestimonial = useCallback(() => {
    setDirection("right");
    const nextIndex = (currentIndex + 1) % testimonials.length;
    changeSlide(nextIndex);
  }, [changeSlide, currentIndex]);

  const prevTestimonial = useCallback(() => {
    setDirection("left");
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeSlide(prevIndex);
  }, [changeSlide, currentIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        prevTestimonial();
      } else if (e.key === "ArrowRight") {
        nextTestimonial();
      } else if (e.key === "Space") {
        setIsPaused((prev) => !prev);
      }
    },
    [prevTestimonial, nextTestimonial]
  );

  useEffect(() => {
    if (!isPaused && !isHovered) {
      const timer = setInterval(nextTestimonial, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, isHovered, nextTestimonial]);

  const slideClasses = `
    transition-all duration-300 transform
    ${
      isAnimating
        ? direction === "right"
          ? "-translate-x-4 opacity-0"
          : "translate-x-4 opacity-0"
        : "translate-x-0 opacity-100"
    }
  `;

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    changeSlide(index);
  };

  return (
    <section
      className="py-12 md:py-20 bg-gray-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Testimonials carousel"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          What Our Clients Say
        </h2>

        <div className="relative" tabIndex={0} onKeyDown={handleKeyDown}>
          <div className={slideClasses}>
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-4 md:p-8">
                <Quote className="w-8 h-8 md:w-12 md:h-12 text-cyan-500 mb-4" />
                <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 md:h-12 md:w-12 mr-4">
                    <AvatarImage
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>
                      {testimonials[currentIndex].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentIndex].role},{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-4">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 text-cyan-500" />
            </button>

            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 text-cyan-500" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-6 md:mt-8 gap-4">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                  index === currentIndex
                    ? "bg-cyan-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-3 py-1"
            aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
          >
            {isPaused ? (
              <Play className="w-4 h-4" />
            ) : (
              <Pause className="w-4 h-4" />
            )}
            <span className="hidden md:inline">
              {isPaused ? "Resume" : "Pause"} Autoplay
            </span>
          </button>
        </div>

        <div className="sr-only" aria-live="polite">
          Currently showing testimonial from {testimonials[currentIndex].name}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
