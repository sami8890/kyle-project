import React, { useState, useEffect, useRef } from 'react'
import { Database, LineChart, Target, Code, Layers, Zap, CheckCircle } from 'lucide-react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { getFrameworkSectionData, FrameworkSectionData } from '@/sanity/lib/sanity'

interface Pillar {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  points: string[]
  color: string
}

interface Step {
  icon: React.ComponentType<{ className?: string }>
  label: string
}

const FrameworkPillar = ({ pillar, index, isInView }: { pillar: Pillar; index: number; isInView: boolean }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="bg-gradient-to-b from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00B9D6]/30 transition-all duration-500 group"
      whileHover={{
        y: -10,
        boxShadow: `0 10px 30px -10px ${pillar.color}30`,
        transition: { duration: 0.3 },
      }}
    >
      <div className="p-6 md:p-8">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#00B9D6]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#00B9D6]/20 transition-all duration-300 relative">
          <pillar.icon className="text-[#00B9D6] w-6 h-6 md:w-8 md:h-8 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B9D6]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#00B9D6] transition-colors duration-300">
          {pillar.title}
        </h3>

        <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">{pillar.description}</p>

        <ul className="space-y-2 md:space-y-3">
          {pillar.points.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={
                isInView
                  ? {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3 + 0.1 * i + 0.2 * index, duration: 0.4 },
                  }
                  : { opacity: 0, x: -10 }
              }
            >
              <CheckCircle className="text-[#00B9D6] w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm md:text-base">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function FrameworkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const [data, setData] = useState<FrameworkSectionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Database,
    LineChart,
    Target,
    Code,
    Layers,
    Zap,
    CheckCircle
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const frameworkData = await getFrameworkSectionData()
         console.log('Fetched Framework Data:', frameworkData) // Debug log
        if (!frameworkData) {
          throw new Error('No data returned from Sanity')
        }

        console.log('Sanity Data:', frameworkData) // Debug log

        // Validate and transform data
        const validatedData = {
          ...frameworkData,
          header: {
            badge: frameworkData.header?.badge || 'Our Approach',
            mainHeading: frameworkData.header?.mainHeading || '',
            highlightedText: frameworkData.header?.highlightedText || '',
            subheading: frameworkData.header?.subheading || ''
          },
          steps: frameworkData.steps?.map(step => ({
            icon: step?.icon || 'Code',
            title: step?.title || 'Untitled Step'
          })) || [],
          features: frameworkData.features?.map(feature => ({
            icon: feature?.icon || 'Database',
            title: feature?.title || 'Untitled Feature',
            description: feature?.description || '',
            points: feature?.points || []
          })) || []
        }

        setData(validatedData)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-[#080808]">
        <div className="container mx-auto px-6 text-center text-gray-500">
          Loading framework section...
        </div>
      </section>
    )
  }

  if (error || !data) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center text-red-500">
          {error || 'Failed to load framework data'}
        </div>
      </section>
    )
  }

  const steps: Step[] = data.steps.map(step => ({
    icon: iconMap[step.icon] || Code,
    label: step.title
  }))

  const pillars: Pillar[] = data.features.map(feature => ({
    icon: iconMap[feature.icon] || Database,
    title: feature.title,
    description: feature.description,
    points: feature.points,
    color: "#00B9D6"
  }))

  return (
    <section className="py-16 md:py-24 bg-[#080808] relative overflow-hidden" ref={ref} id="framework">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,185,214,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(0,185,214,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mb-12 md:mb-16">
       
          <div className="inline-block px-4 py-1 bg-[#00B9D6]/10 border border-[#00B9D6]/20 rounded-full text-[#00B9D6] text-sm font-medium mb-4">
            {data.header.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {data.header.mainHeading.includes(data.header.highlightedText) ? (
              <span dangerouslySetInnerHTML={{
                __html: data.header.mainHeading.replace(
                  data.header.highlightedText,
                  `<span class="text-[#00B9D6]">${data.header.highlightedText}</span>`
                )
              }} />
            ) : (
              <>
                {data.header.mainHeading}
                <span className="text-[#00B9D6]"> {data.header.highlightedText}</span>
              </>
            )}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {data.header.subheading}
          </p>
       

        <motion.div
          className="relative max-w-4xl mx-auto mb-12 md:mb-16 py-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-[#00B9D6]/5 rounded-xl p-6 hover:bg-[#00B9D6]/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
                      }
                    : { opacity: 0, y: 30 }
                }
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#00B9D6]/10 rounded-full flex items-center justify-center mb-4 hover:bg-[#00B9D6]/20 transition-all duration-300">
                  <step.icon className="text-[#00B9D6] w-8 h-8" />
                </div>
                <div className="text-white font-semibold text-center text-lg">{step.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <FrameworkPillar key={index} pillar={pillar} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}