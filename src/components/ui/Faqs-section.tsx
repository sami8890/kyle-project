"use client";
import React, { useState, useMemo } from "react";
import { ChevronDown, Sparkles, Search, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "basics", label: "SEO Basics" },
    { id: "technical", label: "Technical" },
    { id: "pricing", label: "Pricing" },
    { id: "results", label: "Results & Reporting" },
  ];

  const faqs = [
    {
      question: "How quickly can I expect to see SEO results?",
      answer:
        "While every website is different, our clients typically see initial ranking improvements within 4-6 weeks. Significant results and stable rankings usually develop within 3-6 months of implementing our optimization strategies. We provide detailed monthly reports to track your progress.",
      category: "results",
    },
    {
      question: "What makes your AI-powered SEO different?",
      answer:
        "Our platform combines advanced machine learning with traditional SEO best practices. It analyzes millions of data points to identify high-converting keywords, predict ranking potential, and automatically adapt your strategy based on real-time search engine updates.",
      category: "basics",
    },
    {
      question: "Do you offer custom SEO strategies?",
      answer:
        "Absolutely. We develop personalized SEO strategies based on your industry, competition, and business goals. Our AI analyzes your unique market position and creates a tailored approach that maximizes your organic search potential.",
      category: "basics",
    },
   
   
    {
      question: "Can you help with local SEO?",
      answer:
        "Yes! We specialize in both local and global SEO. Our tools optimize your Google Business Profile, manage local citations, and target location-specific keywords to improve your visibility in local search results.",
      category: "basics",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "We track multiple KPIs including keyword rankings, organic traffic growth, conversion rates, and ROI. Our real-time dashboard provides transparent insights into your campaign&apos;s performance, with detailed monthly reports and actionable recommendations.",
      category: "results",
    },
   
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="relative bg-black min-h-screen flex items-center py-24">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-sm 
                        text-cyan-300 bg-cyan-950 border border-cyan-800/50 mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to know  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 mx-2">
          About    Us
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Get answers to common questions about our AI-powered SEO solutions
            and how we can help improve your search rankings.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 pl-12 pr-4 
                         text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 
                         focus:ring-cyan-500 transition-colors duration-200"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                           ${
                             activeCategory === category.id
                               ? "bg-cyan-500 text-black"
                               : "bg-gray-900 text-gray-400 hover:bg-gray-800"
                           }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-lg bg-gradient-to-b from-gray-900 to-gray-900/50 
                         border border-gray-800 hover:border-cyan-800 transition-all duration-200"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-500 transition-transform duration-200
                            ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out
                           ${
                             openIndex === index
                               ? "max-h-96 opacity-100"
                               : "max-h-0 opacity-0"
                           }`}
              >
                <p className="px-6 pb-4 text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions card */}
        <div
          className="mt-12 p-8 rounded-lg bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 
                       border border-cyan-800/50 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Can&apos;t find what you&apos;re looking for? Our team is here to
            help.
          </p>
          <button
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 
                       text-black font-medium rounded-lg transition-colors duration-200 group"
            onClick={() =>
              window.open(
                "https://www.cal.com/contntr/call",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Contact Support
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
