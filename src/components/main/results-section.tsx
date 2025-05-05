"use client"

import { TrendingUp, Users, DollarSign, Award, BarChart, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ResultsSection() {
    const [activeCase, setActiveCase] = useState(0)

    const caseStudies = [
        {
            category: "LUXURY BRAND",
            title: "21 Million Impressions",
            image: "/luxury.jpg",
            metrics: [
                { icon: Search, value: "21M+", label: "Impressions" },
                { icon: Users, value: "600%", label: "Traffic Growth" },
                { icon: Award, value: "#1", label: "Authority Position" },
            ],
            description:
                "From invisible online to generating 21 million organic search impressions and becoming a top authority in their niche.",
        },
        {
            category: "FOOD BUSINESS",
            title: "Doubled Sales in 90 Days",
            image: "/food.jpg",
            metrics: [
                { icon: DollarSign, value: "132%", label: "Sales Increase" },
                { icon: TrendingUp, value: "90", label: "Days" },
                { icon: BarChart, value: "3X", label: "ROI" },
            ],
            description:
                "Sales doubled (132%) in just 90 days by becoming a go-to resource in their niche, building consistent, high-value customer flow.",
        },
        {
            category: "SOFTWARE AGENCY",
            title: "Scaling a Clutch-Recognized Agency",
            image: "/agency.jpg",
            metrics: [
                { icon: TrendingUp, value: "250%", label: "Keyword Growth" },
                { icon: Users, value: "189%", label: "Lead Increase" },
                { icon: Award, value: "Top 5%", label: "Clutch Ranking" },
            ],
            description:
                "Achieved Clutch recognition with 250% keyword growth, 189% increase in qualified leads, and secured a top 5% position in their category.",
        },
    ]

    return (
        <section id="results" className="py-16 sm:py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
                        Success Stories
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Results That <span className="text-[#00B9D6]">Speak</span> For Themselves
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Real-world examples of growth and impact for our clients</p>
                </div>

                {/* Case Study Selector */}
                <div className="flex justify-center mb-8 space-x-2 sm:space-x-4">
                    {caseStudies.map((study, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCase(index)}
                            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${activeCase === index
                                    ? "bg-[#00B9D6] text-black"
                                    : "bg-[#00B9D6]/10 text-[#00B9D6] hover:bg-[#00B9D6]/20"
                                }`}
                        >
                            {study.category}
                        </button>
                    ))}
                </div>

                {/* Active Case Study */}
                <div className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 shadow-xl max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-64 sm:h-80 md:h-full min-h-[320px] overflow-hidden">
                            <Image
                                src={caseStudies[activeCase].image || "/placeholder.svg"}
                                alt={caseStudies[activeCase].title}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute top-6 left-6 z-20">
                                <div className="inline-block px-3 py-1 bg-[#00B9D6]/20 text-[#00B9D6] text-xs font-medium rounded-full backdrop-blur-sm">
                                    {caseStudies[activeCase].category}
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                            <div className="inline-block px-3 py-1 bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium rounded-full mb-4">
                                CASE STUDY
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">{caseStudies[activeCase].title}</h3>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {caseStudies[activeCase].metrics.map((metric, i) => (
                                    <div key={i} className="text-center">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00B9D6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <metric.icon className="text-[#00B9D6] w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div className="text-xl sm:text-2xl font-bold text-white mb-1">{metric.value}</div>
                                        <div className="text-xs text-gray-400">{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-300">{caseStudies[activeCase].description}</p>
                        </div>
                    </div>
                </div>

                {/* Case Study Navigation - Mobile Friendly */}
                <div className="flex justify-center mt-6 space-x-2">
                    {caseStudies.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCase(index)}
                            className={`w-3 h-3 rounded-full transition-all ${activeCase === index ? "bg-[#00B9D6]" : "bg-gray-600 hover:bg-gray-500"
                                }`}
                            aria-label={`View case study ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
