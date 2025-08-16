"use client"

import { TrendingUp, Users, DollarSign, Award, BarChart, Search } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { getResultsSectionData, ResultsSectionData, CaseStudy, CaseStudyMetric } from "@/sanity/lib/sanity"
import imageUrlBuilder from "@sanity/image-url"

const iconMap = {
  TrendingUp,
  Users,
  DollarSign,
  Award,
  BarChart,
  Search
}

export default function ResultsSection() {
  const [activeCase, setActiveCase] = useState(0)
  const [data, setData] = useState<ResultsSectionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultsData = await getResultsSectionData()
        setData(resultsData)
      } catch (error) {
        console.error("Error fetching results data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section id="results" className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-500">
          Loading results section...
        </div>
      </section>
    )
  }

  if (!data) {
    return (
      <section id="results" className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-[#00B9D6]/10 border border-[#00B9D6]/30 rounded-full text-[#00B9D6] text-sm font-medium mb-6 tracking-wide">
              Results
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
              <span className="block">
                Results That{" "}
                <span className="text-[#00B9D6] font-bold whitespace-nowrap">
                  Speak
                </span>{" "}
                For
              </span>
              <span className="block">Themselves</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              See how we&apos;ve helped software agencies achieve remarkable growth through strategic SEO.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 shadow-xl max-w-5xl mx-auto p-8 text-center">
            <p className="text-gray-400">Results data will be displayed here once configured in Sanity CMS.</p>
          </div>
        </div>
      </section>
    )
  }

  // Create image URL builder
  const builder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
  })

  return (
    <section id="results" className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#00B9D6]/10 border border-[#00B9D6]/30 rounded-full text-[#00B9D6] text-sm font-medium mb-6 tracking-wide">
            {data.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            <span className="block">
              Results That{" "}
              <span className="text-[#00B9D6] font-bold whitespace-nowrap">
                {data.highlightedText}
              </span>{" "}
              For
            </span>
            <span className="block">Themselves</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {data.subheading}
          </p>
        </div>

        {/* Active Case Study */}
        <div className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 shadow-xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 sm:h-80 md:h-full min-h-[320px] overflow-hidden">
              {data.caseStudies[activeCase]?.image && (
                <Image
                  src={builder.image(data.caseStudies[activeCase].image).url()}
                  alt={data.caseStudies[activeCase].title}
                  fill
                  className="object-contain"
                />
              )}
              <div className="absolute top-6 left-6 z-20">
                <div className="inline-block px-3 py-1 bg-[#00B9D6]/20 text-[#00B9D6] text-xs font-medium rounded-full backdrop-blur-sm">
                  {data.caseStudies[activeCase].category}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-[#00B9D6]/10 text-[#00B9D6] text-xs font-medium rounded-full mb-4">
                CASE STUDY
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                {data.caseStudies[activeCase].title}
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {data.caseStudies[activeCase].metrics.map((metric: CaseStudyMetric, i: number) => {
                  const IconComponent = iconMap[metric.icon as keyof typeof iconMap] || Search
                  return (
                    <div key={i} className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00B9D6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="text-[#00B9D6] w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  )
                })}
              </div>

              <p className="text-gray-300">{data.caseStudies[activeCase].description}</p>
            </div>
          </div>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {data.caseStudies.map((_: CaseStudy, index: number) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeCase === index ? "bg-[#00B9D6]" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`View case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
