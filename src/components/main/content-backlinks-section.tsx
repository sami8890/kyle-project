import { FileText, Link2, CheckCircle } from "lucide-react"

export default function ContentBacklinksSection() {
    return (
        <section id="content-strategy" className="py-16 bg-black">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
                        Our Expertise
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Deep-Dive on Content & Backlinks</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        The two pillars that drive sustainable growth and establish your authority
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Research-Backed Content */}
                    <div className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl p-6 border border-gray-800 hover:border-[#00B9D6]/30 transition-all duration-300">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#00B9D6]/10 rounded-lg flex items-center justify-center mr-4">
                                <FileText className="text-[#00B9D6] w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Research-Backed Content</h3>
                        </div>

                        <p className="text-gray-300 mb-4">
                            We create deep, technical content that positions you as the authority in your niche, with 18+ hours of
                            research per article.
                        </p>

                        <div className="grid grid-cols-2 gap-2">
                            {["Technical Guides", "Case Studies", "Industry Analysis", "Comparison Articles"].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="text-[#00B9D6] w-4 h-4 mr-2 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Authority-Building Backlinks */}
                    <div
                        id="link-building"
                        className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl p-6 border border-gray-800 hover:border-[#00B9D6]/30 transition-all duration-300"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#00B9D6]/10 rounded-lg flex items-center justify-center mr-4">
                                <Link2 className="text-[#00B9D6] w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Authority-Building Backlinks</h3>
                        </div>

                        <p className="text-gray-300 mb-4">
                            Our white-hat backlink strategy focuses on quality over quantity, building genuine authority that
                            translates to higher rankings.
                        </p>

                        <div className="grid grid-cols-2 gap-2">
                            {["Editorial Links", "Guest Posts", "Resource Pages", "Industry Directories"].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="text-[#00B9D6] w-4 h-4 mr-2 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

