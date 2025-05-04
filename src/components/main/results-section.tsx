"use client"

import { TrendingUp, Users, DollarSign, Award, BarChart, Search } from "lucide-react"
import Image from "next/image"

export default function ResultsSection() {
    return (
        <section id="results" className="py-16 sm:py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
                        Success Stories
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Results –{" "}
                        <span className="text-[#00B9D6] relative">
                            Real Growth
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
                        </span>
                        , Real Impact
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        Real-world examples of how our approach delivers exceptional results for our clients
                    </p>
                </div>

                {/* Case Studies */}
                <div className="space-y-16">
                    {/* Case Study 1: Luxury Brand */}
                    <div className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-64 sm:h-80 md:h-full min-h-[320px] overflow-hidden">
                                <div className="absolute  bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                                <Image
                                    src="/luxury.jpg"
                                    alt="Luxury Brand Case Study"
                                    fill
                                    className="object-contain"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="inline-block px-3 py-1 bg-[#00B9D6]/20 text-[#00B9D6] text-xs font-medium rounded-full backdrop-blur-sm">
                                        LUXURY BRAND
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                                <div className="inline-block px-3 py-1 bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium rounded-full mb-4">
                                    CASE STUDY
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    21 Million Impressions – Luxury Brand
                                </h3>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {[{ icon: Search, value: "21M+", label: "Impressions" }, { icon: Users, value: "600%", label: "Traffic Growth" }, { icon: Award, value: "#1", label: "Authority Position" }].map((metric, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00B9D6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <metric.icon className="text-[#00B9D6] w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>
                                            <div className="text-xl sm:text-2xl font-bold text-white mb-1">{metric.value}</div>
                                            <div className="text-xs text-gray-400">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-300 text-sm sm:text-base">
                                    A high-end goods company went from being invisible online to generating 21 million organic search
                                    impressions. Our targeted SEO and content strategy positioned them as a top authority in their niche.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 2: Food Business */}
                    <div className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Content Side */}
                            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                                <div className="inline-block px-3 py-1 bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium rounded-full mb-4">
                                    CASE STUDY
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Doubled Sales in 90 Days – Food Business
                                </h3>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {[{ icon: DollarSign, value: "132%", label: "Sales Increase" }, { icon: TrendingUp, value: "90", label: "Days" }, { icon: BarChart, value: "3X", label: "ROI" }].map((metric, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00B9D6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <metric.icon className="text-[#00B9D6] w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>
                                            <div className="text-xl sm:text-2xl font-bold text-white mb-1">{metric.value}</div>
                                            <div className="text-xs text-gray-400">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-300 text-sm sm:text-base">
                                    A fast-growing food brand leveraged our SEO-driven content strategy and saw sales double (132%) in
                                    just 90 days. By becoming a go-to resource in their niche, they built consistent, high-value customer
                                    flow—proving that the right SEO system fuels real business growth.
                                </p>
                            </div>

                            {/* Image Side */}
                            <div className="relative h-80 md:h-full min-h-[320px] order-1 md:order-2">
                                <div className="absolute  bg-black/30 z-10"></div>
                                <Image
                                    src="/food.jpg"
                                    alt="Food Business Growth"
                                    fill
                                    className="object-contain"
                                />
                                <div className="absolute top-6 right-6 z-20">
                                    <div className="inline-block px-3 py-1 bg-[#00B9D6]/20 text-[#00B9D6] text-xs font-medium rounded-full backdrop-blur-sm">
                                        FOOD BUSINESS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 3: Software Agency */}
                    <div className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-64 sm:h-80 md:h-full min-h-[320px] overflow-hidden">
                                <div className="absolute  bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                                <Image
                                    src="/agency.jpg"
                                    alt="Software Agency Case Study"
                                    fill
                                    className="object-contain"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="inline-block px-3 py-1 bg-[#00B9D6]/20 text-[#00B9D6] text-xs font-medium rounded-full backdrop-blur-sm">
                                        SOFTWARE AGENCY
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                                <div className="inline-block px-3 py-1 bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium rounded-full mb-4">
                                    CASE STUDY
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Scaling a Clutch-Recognized Software Agency
                                </h3>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {[{ icon: TrendingUp, value: "250%", label: "Keyword Growth" }, { icon: Users, value: "189%", label: "Lead Increase" }, { icon: Award, value: "Top 5%", label: "Clutch Ranking" }].map((metric, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00B9D6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <metric.icon className="text-[#00B9D6] w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>
                                            <div className="text-xl sm:text-2xl font-bold text-white mb-1">{metric.value}</div>
                                            <div className="text-xs text-gray-400">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-300 text-sm sm:text-base">
                                    We helped a software development agency achieve Clutch recognition through strategic SEO and content
                                    marketing. Their keyword rankings grew by 250%, qualified leads increased by 189%, and they secured a
                                    position in the top 5% of Clutch-ranked agencies in their category.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

             
            </div>
        </section>
    )
}
