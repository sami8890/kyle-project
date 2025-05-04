"use client";

import { useState } from "react";
import {
  Check,
  X,
  Shield,
  Calendar,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const pricingTiers = [
  {
    name: "Fiverr & Low-Cost SEO",
    price: "$300-500",
    description: "Generic, templated approach with minimal results",
    features: [
      { name: "Technical SEO", included: false },
      { name: "Content Creation", included: true, note: "Low quality" },
      { name: "Backlink Building", included: true, note: "Low quality" },
      { name: "Industry Expertise", included: false },
      { name: "Performance Guarantee", included: false },
      { name: "Dedicated Strategist", included: false },
    ],
    recommended: false,
    buttonText: "Not Recommended",
    buttonClass:
      "bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300",
  },
  {
    name: "Traditional Agencies",
    price: "$3,000-5,000",
    description: "Comprehensive but expensive with generic approach",
    features: [
      { name: "Technical SEO", included: true },
      { name: "Content Creation", included: true },
      { name: "Backlink Building", included: true },
      { name: "Industry Expertise", included: false },
      { name: "Performance Guarantee", included: false },
      { name: "Dedicated Strategist", included: true },
    ],
    recommended: false,
    buttonText: "Compare Options",
    buttonClass:
      "bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300",
  },
  {
    name: "Our Premium SEO",
    price: "Starting at $1,500",
    description: "Specialized for software development agencies",
    features: [
      { name: "Technical SEO", included: true, note: "Advanced" },
      { name: "Content Creation", included: true, note: "Expert-level" },
      { name: "Backlink Building", included: true, note: "High authority" },
      { name: "Industry Expertise", included: true },
      { name: "Performance Guarantee", included: true, note: "30% in 90 days" },
      { name: "Dedicated Strategist", included: true },
    ],
    recommended: true,
    primaryButton: {
      text: "Book Your Free Blueprint",
      href: "http://www.cal.com/contntr",
      icon: Calendar,
    },
    secondaryButton: {
      text: "View Success Stories",
      href: "#case-studies",
      icon: ExternalLink,
    },
  },
];

export default function PricingSection() {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
            Investment & Returns
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Pricing & ROI</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Affordable premium SEO specifically designed for software
            development agencies
          </p>
        </div>

        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-[#111] rounded-xl overflow-hidden border ${
                tier.recommended ? "border-[#00B9D6]" : "border-gray-800"
              } relative transition-all duration-300 hover:shadow-lg ${
                tier.recommended
                  ? "hover:shadow-[#00B9D6]/10"
                  : "hover:shadow-gray-800/10"
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#00B9D6] to-[#00D6C3]"></div>
              )}
              <div className="p-8">
                {tier.recommended && (
                  <div className="inline-block px-3 py-1 bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium rounded-full mb-4">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {tier.price}
                </div>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      {feature.included ? (
                        <div
                          className={`rounded-full p-0.5 ${tier.recommended ? "bg-[#00B9D6]/20" : "bg-green-500/20"}`}
                        >
                          <Check
                            className={`w-4 h-4 mr-3 ${tier.recommended ? "text-[#00B9D6]" : "text-green-500"}`}
                          />
                        </div>
                      ) : (
                        <div className="rounded-full p-0.5 bg-red-500/20">
                          <X className="w-4 h-4 mr-3 text-red-500" />
                        </div>
                      )}
                      <div>
                        <span className="text-gray-300">{feature.name}</span>
                        {feature.note && (
                          <span
                            className={`text-xs ml-2 ${tier.recommended ? "text-[#00B9D6]" : "text-gray-500"}`}
                          >
                            ({feature.note})
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                {!tier.recommended ? (
                  <a
                    href="#"
                    className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center ${tier.buttonClass}`}
                  >
                    {tier.buttonText}
                  </a>
                ) : (
                  <div className="space-y-3">
                    {/* Primary Button - Enhanced with animation and gradient */}
                    <a
                      href={tier.primaryButton?.href || "#"}
                      className="group w-full py-3.5 px-4 rounded-lg font-medium flex items-center justify-center relative overflow-hidden"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setIsHoveredPrimary(true)}
                      onMouseLeave={() => setIsHoveredPrimary(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00B9D6] to-[#00D6C3] transition-transform duration-300 ease-in-out transform"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00D6C3] to-[#00B9D6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="relative flex items-center text-black font-semibold">
                        {tier.primaryButton && (
                          <tier.primaryButton.icon
                            className={`w-5 h-5 mr-2 transition-all duration-300 ${isHoveredPrimary ? "scale-110" : ""}`}
                          />
                        )}
                        {tier.primaryButton?.text}
                        <ArrowRight
                          className={`ml-2 w-5 h-5 transition-all duration-300 ${isHoveredPrimary ? "translate-x-1" : ""}`}
                        />
                      </span>
                    </a>

                    {/* Secondary Button - Elegant transparent design */}
                  
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Guarantee - Enhanced with subtle animation */}
        <div className="bg-gradient-to-r from-[#00B9D6]/20 to-[#00B9D6]/5 p-8 rounded-xl border border-[#00B9D6]/20 max-w-4xl mx-auto flex items-center hover:shadow-lg hover:shadow-[#00B9D6]/10 transition-all duration-300">
          <div className="mr-6 hidden md:block">
            <div className="w-16 h-16 bg-[#00B9D6]/10 rounded-full flex items-center justify-center group hover:bg-[#00B9D6]/20 transition-all duration-300">
              <Shield className="text-[#00B9D6] w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              30% Growth Guarantee
            </h3>
            <p className="text-xl text-gray-300">
              If you don&apos;t see at least 30% growth in organic traffic
              within 90 days, we&apos;ll continue working at no additional cost
              until you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
