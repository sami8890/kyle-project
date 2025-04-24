"use client"

import { useEffect } from "react"
import { CheckCircle, Code, Users, Zap, X } from "lucide-react"
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    // Function to open Calendly
    const openCalendly = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: "https://calendly.com/contntr/call",
            })
        }
    }

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-[#080808] to-[#0c0c0c] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4 backdrop-blur-sm">
                        Our Advantage
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Why We&apos;re <span className="text-[#00B9D6]">Different</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                        Specialized expertise for software development agencies that generic SEO services can&apos;t match
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
                    {/* Generic SEO Agencies */}
                    <motion.div
                        className="bg-[#0a0a0a] p-8 rounded-2xl border border-red-500/20 shadow-lg relative group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute -top-3 -right-3 bg-red-500/10 p-2 rounded-full border border-red-500/20">
                            <X className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Most SEO agencies don&apos;t understand the software development space
                        </h3>
                        <p className="text-gray-300 mb-8">
                            Generic SEO agencies lack the technical knowledge to create content that resonates with your audience.
                            They focus on vanity metrics instead of qualified leads that convert into clients.
                        </p>

                        <motion.div
                            className="space-y-6 mb-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    title: "Generic Content",
                                    description:
                                        "Surface-level articles that fail to demonstrate expertise or address the real concerns of software clients.",
                                },
                                {
                                    title: "Vanity Metrics",
                                    description:
                                        "Focus on traffic numbers without consideration for lead quality or conversion potential.",
                                },
                                {
                                    title: "One-Size-Fits-All Approach",
                                    description: "The same strategies used for e-commerce, local businesses, and every other industry.",
                                },
                            ].map((item, index) => (
                                <motion.div key={index} className="flex items-start" variants={itemVariants}>
                                    <div className="mr-4 p-2.5 bg-red-500/10 rounded-full border border-red-500/20">
                                        <X className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Our Approach */}
                    <motion.div
                        className="bg-[#0a0a0a] p-8 rounded-2xl border border-[#00B9D6]/20 shadow-lg relative group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute -top-3 -right-3 bg-[#00B9D6]/10 p-2 rounded-full border border-[#00B9D6]/20">
                            <CheckCircle className="w-6 h-6 text-[#00B9D6]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Our <span className="text-[#00B9D6]">DevAuthority™</span> approach is built specifically for software
                            agencies
                        </h3>
                        <p className="text-gray-300 mb-8">
                            We combine technical expertise with strategic content creation to position you as the authority in your
                            niche and attract high-value clients.
                        </p>

                        <motion.div
                            className="space-y-6 mb-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: <Code className="w-5 h-5 text-[#00B9D6]" />,
                                    title: "Technical Content Expertise",
                                    description:
                                        "In-depth articles that demonstrate your expertise and address the specific challenges of your target clients.",
                                },
                                {
                                    icon: <Users className="w-5 h-5 text-[#00B9D6]" />,
                                    title: "Client-Focused Strategy",
                                    description:
                                        "Content and keywords targeted to attract decision-makers and qualified leads, not just traffic.",
                                },
                                {
                                    icon: <Zap className="w-5 h-5 text-[#00B9D6]" />,
                                    title: "Industry-Specific Methodology",
                                    description: "A proven framework developed specifically for software development agencies.",
                                },
                            ].map((item, index) => (
                                <motion.div key={index} className="flex items-start group" variants={itemVariants}>
                                    <div className="mr-4 p-2.5 bg-[#00B9D6]/10 rounded-full border border-[#00B9D6]/20 transition-all duration-300 group-hover:bg-[#00B9D6]/20">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Key Differentiators */}
                <motion.div
                    className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto shadow-xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Background decorative elements */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00B9D6]/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00B9D6]/5 rounded-full blur-3xl"></div>

                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Our Unique <span className="text-[#00B9D6]">Value Proposition</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Deep understanding of software development industry",
                            "Technical content that demonstrates expertise",
                            "Focus on high-intent keywords that attract decision-makers",
                            "Performance guarantee with measurable results",
                            "Specialized link building in the tech space",
                            "Conversion-focused content strategy",
                            "Transparent reporting and ROI tracking",
                            "Industry-specific case studies and proven results",
                        ].map((point, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ x: 5 }}
                            >
                                <CheckCircle className="text-[#00B9D6] w-5 h-5 mr-3 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{point}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <motion.button
                            className="px-8 py-3 bg-[#00B9D6] hover:bg-[#00a5be] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-[#00B9D6]/20 hover:-translate-y-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={openCalendly}
                        >
                            Schedule a Strategy Call
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
