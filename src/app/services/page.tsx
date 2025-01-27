"use client";

import React, { useState } from "react";
import { Pen, Search, LayoutGrid, ChevronRight } from "lucide-react";

interface Service {
  icon: React.ComponentType;
  title: string;
  mainText: string;
  details: string[];
  color: string;
  metrics: string[];
}

const ServiceCard = ({
  service,
  isHovered,
  onHover,
  onLeave,
}: {
  service: Service;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative p-8 rounded-2xl bg-gradient-to-b 
                 ${
                   isHovered
                     ? "from-gray-900 to-gray-900"
                     : "from-gray-900/50 to-gray-900/30"
                 }
                 backdrop-blur-xl border border-gray-800 
                 hover:border-gray-700 transition-all duration-500
                 ${isHovered ? "lg:scale-105 z-10" : "lg:scale-100"}`}
    >
      {/* Service Icon */}
      <div
        className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-r ${service.color} 
                      transform transition-all duration-500 group-hover:scale-110`}
      >
        {React.createElement(service.icon as React.ElementType, {
          className: "w-6 h-6 text-white",
        })}
      </div>

      <h3 className="text-2xl font-semibold text-white mb-4">
        {service.title}
      </h3>

      <p className="text-gray-400 mb-6">{service.mainText}</p>

      {/* Service Details */}
      <ul className="space-y-3 mb-8">
        {service.details.map((detail, idx) => (
          <li key={idx} className="flex items-center text-gray-500">
            <ChevronRight className="w-4 h-4 mr-2 text-gray-600" />
            {detail}
          </li>
        ))}
      </ul>

      {/* Metrics */}
      <div className="flex flex-wrap gap-3">
        {service.metrics.map((metric, idx) => (
          <span
            key={idx}
            className="text-sm px-3 py-1 rounded-full 
                         bg-gray-800/50 text-gray-400 border border-gray-700"
          >
            {metric}
          </span>
        ))}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Pen,
      title: "Content Writing",
      mainText: "Professional content creation that engages and converts",
      details: [
        "SEO-optimized Blog Posts",
        "Website Copy & Landing Pages",
        "Product Descriptions",
        "Email Marketing Content",
      ],
      color: "from-pink-600 to-rose-400",
      metrics: ["2x Engagement Rate", "40% More Conversions"],
    },
    {
      icon: LayoutGrid,
      title: "Content Management",
      mainText: "Strategic content planning and organization",
      details: [
        "Content Calendar Planning",
        "Asset Management",
        "Content Updates & Optimization",
        "Performance Tracking",
      ],
      color: "from-purple-600 to-violet-400",
      metrics: ["98% On-time Delivery", "Organized Content"],
    },
    {
      icon: Search,
      title: "SEO Strategy",
      mainText: "Data-driven SEO to boost your online visibility",
      details: [
        "Keyword Research & Analysis",
        "On-page Optimization",
        "Content Gap Analysis",
        "Ranking Improvement",
      ],
      color: "from-blue-600 to-cyan-400",
      metrics: ["Top 3 Rankings", "3x Traffic Growth"],
    },
  ];

  return (
    <section className="relative min-h-screen bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
                         bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                         border border-cyan-500/20 mb-6"
          >
            <span
              className="bg-gradient-to-r from-cyan-400 to-blue-400 
                           bg-clip-text text-transparent font-medium"
            >
              Content & SEO Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
              className="bg-gradient-to-r from-white to-gray-400 
                           bg-clip-text text-transparent"
            >
              Elevate Your Content Strategy
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive content and SEO solutions to drive organic growth and
            engagement
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isHovered={hoveredService === index}
              onHover={() => setHoveredService(index)}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            className="group relative inline-flex items-center gap-2 px-8 py-4 
                           text-white font-medium rounded-xl overflow-hidden
                           bg-gradient-to-r from-cyan-500 to-blue-500 
                           hover:from-cyan-400 hover:to-blue-400
                           transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.cal.com/contntr/call",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <span className="relative z-10">Get Started Today</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
