"use client"

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void
        }
    }
}

import { useEffect } from "react"
import { CheckCircle, X } from "lucide-react"
import { motion } from "framer-motion"

export default function DifferenceSection() {
    // Initialize Calendly
    useEffect(() => {
        // Add Calendly script if not already added
        if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
            const script = document.createElement("script")
            script.src = "https://assets.calendly.com/assets/external/widget.js"
            script.async = true
            document.head.appendChild(script)
        }

        return () => {
            // No cleanup needed as other components might use Calendly
        }
    }, [])

    // Function to open Calendly
    const openCalendly = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: "https://calendly.com/contntr/call",
            })
        }
    }

    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-[#080808] to-[#0c0c0c] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4 backdrop-blur-sm">
                        Our Advantage
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Why We&apos;re <span className="text-[#00B9D6]">Different</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Specialized expertise for software development agencies that generic SEO services can&apos;t match
                    </p>
                </motion.div>

                {/* Main Content - Simplified Comparison */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-stretch mb-12 md:mb-16">
                    {/* Generic SEO Agencies */}
                    <motion.div
                        className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-red-500/20 shadow-lg relative h-full"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute -top-3 -right-3 bg-red-500/10 p-2 rounded-full border border-red-500/20">
                            <X className="w-5 h-5 text-red-500" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Generic SEO Agencies</h3>

                        <ul className="space-y-4">
                            {[
                                "Surface-level content that fails to demonstrate expertise",
                                "Focus on traffic numbers without consideration for lead quality",
                                "Same strategies used for every industry",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Our Approach */}
                    <motion.div
                        className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-[#00B9D6]/20 shadow-lg relative h-full"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute -top-3 -right-3 bg-[#00B9D6]/10 p-2 rounded-full border border-[#00B9D6]/20">
                            <CheckCircle className="w-5 h-5 text-[#00B9D6]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Our <span className="text-[#00B9D6]">DevAuthority™</span> Approach
                        </h3>

                        <ul className="space-y-4">
                            {[
                                "In-depth technical content that demonstrates expertise",
                                "Targeted strategy to attract decision-makers and qualified leads",
                                "Proven framework developed specifically for software agencies",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-[#00B9D6] mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Key Differentiators - Simplified */}
                <motion.div
                    className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-gray-800 max-w-4xl mx-auto shadow-xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Background decorative elements */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00B9D6]/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00B9D6]/5 rounded-full blur-3xl"></div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                        Our Unique <span className="text-[#00B9D6]">Value Proposition</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Deep understanding of software development",
                            "Technical content that demonstrates expertise",
                            "Focus on high-intent keywords",
                            "Performance guarantee with measurable results",
                            "Specialized link building in tech",
                            "Conversion-focused content strategy",
                            "Transparent reporting and ROI tracking",
                            "Industry-specific case studies",
                        ].map((point, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                            >
                                <CheckCircle className="text-[#00B9D6] w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{point}</span>
                            </motion.div>
                        ))}
                    </div>

                 
                </motion.div>
            </div>
        </section>
    )
}
