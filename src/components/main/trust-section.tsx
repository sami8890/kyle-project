import { Shield } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        quote:
            "Their SEO strategy transformed our online presence. We've seen a 300% increase in qualified leads within just 4 months.",
        author: "Sarah Johnson",
        position: "CEO, DevStack Solutions",
        image: "/placeholder.svg?height=60&width=60",
    },
    {
        quote:
            "Unlike other agencies, they actually understand software development and create content that resonates with our target clients.",
        author: "Michael Chen",
        position: "Marketing Director, CodeCraft",
        image: "/placeholder.svg?height=60&width=60",
    },
    {
        quote: "The ROI has been incredible. For every $1 we spend, we're seeing $7 in new business revenue.",
        author: "David Rodriguez",
        position: "Founder, AppLaunch",
        image: "/placeholder.svg?height=60&width=60",
    },
]

const stats = [
    { value: "1200%", label: "Increase in Search Impressions" },
    { value: "600%", label: "Organic Traffic Growth" },
    { value: "43%", label: "Conversion Rate Improvement" },
    { value: "90+", label: "Software Clients Served" },
]

export default function TrustSection() {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-black to-[#050505]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
                        Proven Results
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Why Software Agencies Trust Us</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        We deliver measurable results that help software development agencies attract premium clients and scale
                        predictably
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl p-6 text-center border border-gray-800 hover:border-[#00B9D6]/30 transition-all duration-300"
                        >
                            <div className="text-4xl font-bold text-[#00B9D6] mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Performance Guarantee */}
                <div className="bg-gradient-to-r from-[#00B9D6]/20 to-[#00B9D6]/5 p-8 rounded-xl border border-[#00B9D6]/20 max-w-4xl mx-auto mb-16 flex items-center">
                    <div className="mr-6 hidden md:block">
                        <div className="w-16 h-16 bg-[#00B9D6]/10 rounded-full flex items-center justify-center">
                            <Shield className="text-[#00B9D6] w-8 h-8" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Performance Guarantee</h3>
                        <p className="text-xl text-gray-300">
                            If you don&apos;t see <span className="text-[#00B9D6] font-bold">30% growth in 90 days</span>, we keep working
                            at no cost.
                        </p>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[#111] rounded-xl p-8 border border-gray-800 relative">
                            <div className="absolute -top-3 -left-3 text-[#00B9D6] text-5xl"></div>
                            <div className="pt-4">
                                <p className="text-gray-300 mb-6 relative z-10">&quot;{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        height={60}
                                        width={60}  
                                    />
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.author}</div>
                                        <div className="text-sm text-gray-400">{testimonial.position}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

