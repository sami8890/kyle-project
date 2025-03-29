import { Search, FileText, BarChart2, ExternalLink, TrendingUp, Link2, CheckCircle } from "lucide-react"

const steps = [
    {
        icon: Search,
        number: 1,
        title: "Keyword Research",
        description:
            "Find the search terms that attract premium clients, focusing on high-intent keywords with commercial value.",
        timeline: "Weeks 1-2",
        clientInvolvement: "Initial strategy meeting and target audience discussion",
    },
    {
        icon: FileText,
        number: 2,
        title: "Intent Mapping & Content Strategy",
        description: "Align content with how software buyers think and make purchasing decisions throughout their journey.",
        timeline: "Weeks 2-3",
        clientInvolvement: "Review and approval of content strategy",
    },
    {
        icon: BarChart2,
        number: 3,
        title: "Expert-Level Content Creation",
        description: "Articles, guides, and resources that convert visitors into leads by demonstrating your expertise.",
        timeline: "Weeks 3-6",
        clientInvolvement: "Subject matter expert interviews and content review",
    },
    {
        icon: ExternalLink,
        number: 4,
        title: "SEO Execution & Optimization",
        description: "Publishing, interlinking, and refining based on data to maximize visibility and engagement.",
        timeline: "Weeks 6-8",
        clientInvolvement: "Content publishing approval and technical implementation",
    },
    {
        icon: TrendingUp,
        number: 5,
        title: "Performance Tracking & Iteration",
        description: "Bi-weekly reports and continuous improvements based on performance metrics and industry changes.",
        timeline: "Ongoing",
        clientInvolvement: "Bi-weekly performance review meetings",
    },
    {
        icon: Link2,
        number: 6,
        title: "Backlink Strategy",
        description:
            "Authority-building links that drive rankings higher and establish your brand as a trusted industry resource.",
        timeline: "Weeks 8+",
        clientInvolvement: "Approval of outreach strategies and partnership opportunities",
    },
]

export default function ProcessSection() {
    return (
        <section id="process" className="bg-[#080808] py-24">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
                        Our Methodology
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">How It Works – Our SEO Process</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        A systematic approach designed to deliver consistent results for software development agencies
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto mb-16 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#00B9D6]/20 transform -translate-x-1/2 hidden md:block"></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 md:mb-0 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%] md:pr-12" : "md:mr-auto md:ml-[50%] md:pl-12"}`}
                        >
                            <div className="md:w-[calc(100%-24px)] bg-[#111] rounded-xl p-6 border border-gray-800 hover:border-[#00B9D6]/30 transition-all duration-300">
                                <div className="absolute left-1/2 top-6 w-8 h-8 bg-[#00B9D6]/20 rounded-full items-center justify-center transform -translate-x-1/2 hidden md:flex">
                                    <div className="w-4 h-4 bg-[#00B9D6] rounded-full"></div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 md:mr-6">
                                        <div className="w-12 h-12 bg-[#00B9D6]/10 rounded-lg flex items-center justify-center">
                                            <step.icon className="text-[#00B9D6] w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <div className="w-6 h-6 rounded-full bg-[#00B9D6]/10 flex items-center justify-center mr-3 text-[#00B9D6] font-bold text-sm">
                                                {step.number}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-400 mb-4">{step.description}</p>
                                        <div className="flex flex-wrap gap-4">
                                            <div className="bg-[#00B9D6]/10 px-3 py-1 rounded text-[#00B9D6] text-sm">{step.timeline}</div>
                                            <div className="flex items-center text-gray-300 text-sm">
                                                <CheckCircle className="w-4 h-4 mr-1 text-[#00B9D6]" />
                                                <span>Client: {step.clientInvolvement}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-[#00B9D6]/20 to-transparent p-8 rounded-xl border border-[#00B9D6]/20 max-w-4xl mx-auto text-center">
                    <p className="text-xl text-white leading-relaxed">
                        Every step is designed for compounding growth—bringing in the right clients, not just more traffic.
                    </p>
                </div>
            </div>
        </section>
    )
}

