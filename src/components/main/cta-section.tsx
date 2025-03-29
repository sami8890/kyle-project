"use client"

import type React from "react"

import { Calendar, Mail, Phone, ArrowRight } from "lucide-react"

export default function CTASection() {
    const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: "smooth",
            })
        }
    }

    return (
        <section className="py-24 bg-gradient-to-b from-[#080808] to-black">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 shadow-xl">
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">Ready to Attract Premium Clients?</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Book a free Growth Blueprint Session to discover how our specialized SEO strategy can help your software
                                development agency scale predictably.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="bg-black/50 p-6 rounded-lg border border-gray-800 mb-6">
                                    <h3 className="text-xl font-bold text-white mb-4">Wha&apos;t Youll Get:</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Custom growth strategy tailored to your agency",
                                            "Competitor analysis and opportunity assessment",
                                            "Technical SEO audit of your current website",
                                            "Content gap analysis and keyword recommendations",
                                            "Clear roadmap for implementation",
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="text-[#00B9D6] mr-3">•</div>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#calendar"
                                        className="flex items-center justify-center gap-2 bg-[#00B9D6] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#00B9D6]/90 transition-colors"
                                        onClick={(e) => handleCTAClick(e, "#calendar")}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        <span>Book Your Free Session</span>
                                    </a>
                                    <a
                                        href="#results"
                                        className="flex items-center justify-center gap-2 border border-[#00B9D6] text-[#00B9D6] px-6 py-3 rounded-lg font-medium hover:bg-[#00B9D6]/10 transition-colors"
                                        onClick={(e) => handleCTAClick(e, "#results")}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                        <span>View Case Studies</span>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-black/30 p-6 rounded-lg border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-4">Contact Us Directly</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-gray-400 mb-1 text-sm">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00B9D6]"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-1 text-sm">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00B9D6]"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-1 text-sm">Message</label>
                                        <textarea
                                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00B9D6] h-24"
                                            placeholder="Tell us about your agency..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#00B9D6] text-black px-4 py-3 rounded-lg font-medium hover:bg-[#00B9D6]/90 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </form>

                                <div className="mt-6 pt-6 border-t border-gray-800">
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Mail className="text-[#00B9D6] w-5 h-5 mr-3" />
                                            <a href="mailto:info@example.com" className="text-gray-300 hover:text-white">
                                                info@example.com
                                            </a>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="text-[#00B9D6] w-5 h-5 mr-3" />
                                            <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                                                (123) 456-7890
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

