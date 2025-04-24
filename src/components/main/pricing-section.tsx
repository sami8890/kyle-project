"use client"

import { useEffect } from "react"
import { Check, X, Shield } from "lucide-react"

// Define the type for window.Cal (assuming you have the right methods from Cal.com)
declare global {
    interface Window {
        Cal?: {
            init: (config: { origin: string }) => void;
            showModal: (config: { calLink: string, layout: string }) => void;
        }
    }
}

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
        buttonClass: "bg-gray-700 text-white hover:bg-gray-600",
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
        buttonClass: "bg-gray-700 text-white hover:bg-gray-600",
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
        buttonText: "Book Your Free Growth Blueprint Session Now →",
        buttonClass: "bg-[#00B9D6] text-black hover:bg-[#00B9D6]/90",
    },
]

export default function PricingSection() {
    useEffect(() => {
        // Initialize Cal.com
        const script = document.createElement("script")
        script.src = "https://app.cal.com/embed/embed.js"
        script.async = true
        script.onload = () => {
            if (window.Cal) {
                window.Cal.init({
                    origin: "https://cal.com",
                })
            }
        }
        document.head.appendChild(script)

        return () => {
            // Clean up script if component unmounts
            if (document.head.contains(script)) {
                document.head.removeChild(script)
            }
        }
    }, [])

    // Function to open Cal.com popup when "Get Started" is clicked
    const openCalendar = () => {
        if (window.Cal) {
            window.Cal.showModal({
                calLink: "contntr/call",
                layout: "month_view",
            })
        } else {
            // Fallback to direct link if Cal.com is not loaded
            window.open("https://cal.com/contntr/call", "_blank")
        }
    }

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
                        Affordable premium SEO specifically designed for software development agencies
                    </p>
                </div>

                {/* Pricing Comparison */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`bg-[#111] rounded-xl overflow-hidden border ${tier.recommended ? "border-[#00B9D6]" : "border-gray-800"} relative`}
                        >
                            {tier.recommended && <div className="absolute top-0 inset-x-0 h-1 bg-[#00B9D6]"></div>}
                            <div className="p-8">
                                {tier.recommended && (
                                    <div className="inline-block px-3 py-1 bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium rounded-full mb-4">
                                        RECOMMENDED
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                <div className="text-3xl font-bold text-white mb-2">{tier.price}</div>
                                <p className="text-gray-400 mb-6">{tier.description}</p>

                                <div className="space-y-4 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <div key={i} className="flex items-start">
                                            {feature.included ? (
                                                <Check
                                                    className={`w-5 h-5 mr-3 mt-0.5 ${tier.recommended ? "text-[#00B9D6]" : "text-green-500"}`}
                                                />
                                            ) : (
                                                <X className="w-5 h-5 mr-3 mt-0.5 text-red-500" />
                                            )}
                                            <div>
                                                <span className="text-gray-300">{feature.name}</span>
                                                {feature.note && (
                                                    <span className={`text-xs ml-2 ${tier.recommended ? "text-[#00B9D6]" : "text-gray-500"}`} >
                                                        ({feature.note})
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className={`w-full py-3 px-4 rounded-lg font-medium ${tier.buttonClass}`}
                                    onClick={tier.recommended ? openCalendar : undefined}
                                >
                                    {tier.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ROI Guarantee */}
                <div className="bg-gradient-to-r from-[#00B9D6]/20 to-[#00B9D6]/5 p-8 rounded-xl border border-[#00B9D6]/20 max-w-4xl mx-auto flex items-center">
                    <div className="mr-6 hidden md:block">
                        <div className="w-16 h-16 bg-[#00B9D6]/10 rounded-full flex items-center justify-center">
                            <Shield className="text-[#00B9D6] w-8 h-8" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">30% Growth Guarantee</h3>
                        <p className="text-xl text-gray-300">
                            If you don&apos;t see at least 30% growth in organic traffic within 90 days, we&apos;ll continue working
                            at no additional cost until you do.
                        </p>
                    </div>
                </div>

                {/* Hidden div for inline embed if needed */}
                <div style={{ width: "100%", height: "0", overflow: "hidden" }} id="my-cal-inline"></div>
            </div>
        </section>
    )
}
