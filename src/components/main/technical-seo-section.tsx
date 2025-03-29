import { Zap, Server, Code, Gauge, Search, FileJson } from "lucide-react"

const technicalAreas = [
    {
        icon: Gauge,
        title: "Site Speed Optimization",
        description: "We optimize core web vitals and page load times to improve user experience and search rankings.",
        improvements: ["40% faster page loads", "Improved LCP and CLS metrics", "Mobile optimization"],
    },
    {
        icon: Server,
        title: "Crawlability & Indexing",
        description: "We ensure search engines can efficiently crawl and index your content for maximum visibility.",
        improvements: ["Optimized robots.txt", "XML sitemap enhancement", "Crawl budget optimization"],
    },
    {
        icon: Code,
        title: "Technical Debt Cleanup",
        description: "We identify and fix technical issues that impact performance and user experience.",
        improvements: ["404 error resolution", "Redirect chain elimination", "Duplicate content fixes"],
    },
    {
        icon: FileJson,
        title: "Schema Implementation",
        description: "We implement structured data to enhance search visibility and click-through rates.",
        improvements: ["Rich snippets in SERPs", "Enhanced visibility", "Improved CTR"],
    },
    {
        icon: Search,
        title: "Site Architecture",
        description: "We optimize your site structure for both users and search engines.",
        improvements: ["Logical content hierarchy", "Improved internal linking", "Enhanced user navigation"],
    },
    {
        icon: Zap,
        title: "Performance Monitoring",
        description: "We continuously monitor technical performance and make data-driven improvements.",
        improvements: ["Real-time issue detection", "Proactive optimization", "Competitive benchmarking"],
    },
]

export default function TechnicalSEOSection() {
    return (
        <section id="technical-seo" className="py-24 bg-[#080808]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
                        Technical Excellence
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Technical SEO Focus</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        Building a solid foundation for sustainable growth through technical optimization
                    </p>
                </div>

                {/* Before/After Example */}
                <div className="max-w-4xl mx-auto mb-16 bg-[#111] rounded-xl overflow-hidden border border-gray-800">
                    <div className="p-6 border-b border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-2">Before & After: Real Results</h3>
                        <p className="text-gray-400">See how our technical optimizations transform performance metrics</p>
                    </div>
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800">
                        <div className="p-6">
                            <div className="text-lg font-semibold text-gray-400 mb-4">Before Optimization</div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-400">Page Speed</span>
                                        <span className="text-red-400">4.2s</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-400">Mobile Usability</span>
                                        <span className="text-red-400">Poor</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-400">Crawl Efficiency</span>
                                        <span className="text-yellow-400">Medium</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-lg font-semibold text-[#00B9D6] mb-4">After Optimization</div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-400">Page Speed</span>
                                        <span className="text-green-400">1.2s</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-400">Mobile Usability</span>
                                        <span className="text-green-400">Excellent</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-400">Crawl Efficiency</span>
                                        <span className="text-green-400">High</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Areas */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technicalAreas.map((area, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00B9D6]/30 transition-all duration-300 group"
                        >
                            <div className="p-6">
                                <div className="w-12 h-12 bg-[#00B9D6]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00B9D6]/20 transition-all duration-300">
                                    <area.icon className="text-[#00B9D6] w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                                <p className="text-gray-400 mb-4">{area.description}</p>
                                <div className="space-y-2">
                                    {area.improvements.map((improvement, i) => (
                                        <div key={i} className="flex items-center">
                                            <div className="w-2 h-2 bg-[#00B9D6] rounded-full mr-2"></div>
                                            <span className="text-gray-300 text-sm">{improvement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

