import { TrendingUp, Users, DollarSign } from "lucide-react"

const caseStudies = [
    {
        client: "Enterprise SaaS Platform",
        metrics: [
            { icon: TrendingUp, value: "21M+", label: "Search Impressions" },
            { icon: Users, value: "600%", label: "Organic Traffic Growth" },
            { icon: DollarSign, value: "43%", label: "Conversion Rate Increase" },
        ],
        description:
            "Implemented comprehensive technical SEO and content strategy, resulting in a 600% increase in organic traffic and 43% higher conversion rates within 6 months.",
    },
    {
        client: "Custom Software Development Agency",
        metrics: [
            { icon: TrendingUp, value: "250%", label: "Keyword Rankings" },
            { icon: Users, value: "189%", label: "Qualified Lead Growth" },
            { icon: DollarSign, value: "2X", label: "Sales in 90 Days" },
        ],
        description:
            "Created industry-focused content strategy targeting enterprise clients, doubling sales within 90 days and establishing the client as an industry thought leader.",
    },
]

export default function ResultsSection() {
    return (
        <section id="results" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
                        Success Stories
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Results & Case Studies</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        Real-world examples of how our approach delivers exceptional results for software development agencies
                    </p>
                </div>

                {/* Case Studies */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00B9D6]/30 transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="inline-block px-3 py-1 bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium rounded-full mb-4">
                                    CASE STUDY
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6">{study.client}</h3>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-12 h-12 bg-[#00B9D6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <metric.icon className="text-[#00B9D6] w-6 h-6" />
                                            </div>
                                            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                                            <div className="text-xs text-gray-400">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-300">{study.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results Graph */}
                <div className="bg-[#111] rounded-xl overflow-hidden border border-gray-800 max-w-4xl mx-auto">
                    <div className="p-6 border-b border-gray-800">
                        <h3 className="text-xl font-bold text-white">Growth Trajectory</h3>
                        <p className="text-gray-400">Average performance across our software development clients</p>
                    </div>
                    <div className="p-8">
                        <div className="h-64 relative">
                            {/* X and Y axis */}
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-700"></div>
                            <div className="absolute bottom-0 left-0 h-full w-px bg-gray-700"></div>

                            {/* Graph lines */}
                            <div className="absolute bottom-0 left-0 w-full h-full">
                                {/* Traffic line */}
                                <div className="absolute bottom-0 left-0 w-full h-full">
                                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path
                                            d="M0,100 L10,90 L20,85 L30,75 L40,65 L50,50 L60,35 L70,25 L80,15 L90,10 L100,5"
                                            fill="none"
                                            stroke="#00B9D6"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M0,100 L10,90 L20,85 L30,75 L40,65 L50,50 L60,35 L70,25 L80,15 L90,10 L100,5 L100,100 Z"
                                            fill="url(#gradient)"
                                            fillOpacity="0.2"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#00B9D6" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#00B9D6" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Conversion line */}
                                <div className="absolute bottom-0 left-0 w-full h-full">
                                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path
                                            d="M0,100 L10,95 L20,90 L30,85 L40,80 L50,70 L60,60 L70,50 L80,45 L90,40 L100,30"
                                            fill="none"
                                            stroke="#FFA500"
                                            strokeWidth="2"
                                            strokeDasharray="4 2"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Labels */}
                            <div className="absolute bottom-4 left-0 w-full flex justify-between text-xs text-gray-500">
                                <span>Month 1</span>
                                <span>Month 3</span>
                                <span>Month 6</span>
                                <span>Month 9</span>
                                <span>Month 12</span>
                            </div>
                        </div>

                        <div className="flex justify-center mt-4 space-x-8">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-[#00B9D6] rounded-full mr-2"></div>
                                <span className="text-sm text-gray-300">Organic Traffic</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-[#FFA500] rounded-full mr-2"></div>
                                <span className="text-sm text-gray-300">Conversion Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

