'use client'

import { useEffect, useState } from 'react'
import { getPricingData, PricingSectionData, PricingTier } from '@/sanity/lib/sanity'

export default function PricingSection() {
  const [data, setData] = useState<PricingSectionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const pricingData = await getPricingData()
        setData(pricingData)
      } catch (err) {
        setError('Failed to load pricing data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-300 text-lg">Loading pricing...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-red-400 text-lg">{error}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!data || !data.tiers || data.tiers.length === 0) {
    return (
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No pricing data available</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="pricing" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          {data.badgeText && (
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              <span className="text-sm font-medium uppercase tracking-widest text-indigo-400">
                {data.badgeText}
              </span>
            </div>
          )}
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
            {data.sectionTitle}
          </h2>
          
          {data.sectionSubtitle && (
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {data.sectionSubtitle}
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-16">
          {data.tiers.map((tier: PricingTier, index: number) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                tier.recommended 
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/25 border-2 border-indigo-400/50' 
                  : 'bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-gray-700 hover:bg-gray-900/70'
              }`}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                
                {/* Price */}
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold">{tier.price}</span>
                </div>
                
                {tier.description && (
                  <p className={`text-base leading-relaxed ${
                    tier.recommended ? 'text-indigo-100' : 'text-gray-400'
                  }`}>
                    {tier.description}
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4 text-left">
                  {tier.features.map((feature, idx: number) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 transition-colors ${
                        feature.included 
                          ? tier.recommended ? 'text-white' : 'text-gray-200'
                          : 'text-gray-500 opacity-60'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        feature.included 
                          ? tier.recommended 
                            ? 'bg-white/20 text-white' 
                            : 'bg-indigo-500/20 text-indigo-400'
                          : 'bg-gray-600/20'
                      }`}>
                        {feature.included ? (
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className={feature.included ? '' : 'line-through'}>
                        <span className="text-base">{feature.name}</span>
                        {feature.note && (
                          <span className={`block text-sm mt-1 ${
                            tier.recommended ? 'text-indigo-200' : 'text-gray-500'
                          }`}>
                            {feature.note}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                {tier.recommended && tier.primaryButton ? (
                  <a
                    href={tier.primaryButton.href}
                    className={`block w-full px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg ${
                      tier.buttonClass || ''
                    }`}
                  >
                    {tier.primaryButton.text}
                  </a>
                ) : tier.secondaryButton ? (
                  <a
                    href={tier.secondaryButton.href}
                    className={`block w-full px-8 py-4 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 transition-all duration-200 border border-gray-700 hover:border-indigo-500 ${
                      tier.buttonClass || ''
                    }`}
                  >
                    {tier.secondaryButton.text}
                  </a>
                ) : tier.buttonText ? (
                  <button
                    className={`w-full px-8 py-4 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 transition-all duration-200 border border-gray-700 hover:border-indigo-500 ${
                      tier.buttonClass || ''
                    }`}
                  >
                    {tier.buttonText}
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        {data.guarantee && (
          <div className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-white">{data.guarantee.title}</h4>
            <p className="text-gray-400 leading-relaxed">{data.guarantee.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}