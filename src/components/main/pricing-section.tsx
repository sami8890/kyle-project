'use client'

import { client } from '@/sanity/lib/client'
import { useEffect, useState } from 'react'

interface Feature {
  name: string
  included: boolean
  note?: string
}

interface Button {
  text: string
  href: string
}

interface Tier {
  name: string
  price: string
  description: string
  features: Feature[]
  recommended: boolean
  primaryButton?: Button
  secondaryButton?: Button
  buttonText?: string
  buttonClass?: string
}

interface PricingSectionData {
  sectionTitle: string
  sectionSubtitle: string
  badgeText?: string
  tiers: Tier[]
  guarantee?: {
    title: string
    description: string
  }
}

export default function PricingSection() {
  const [data, setData] = useState<PricingSectionData | null>(null)

  useEffect(() => {
    client.fetch(
      `*[_type == "pricingSection"][0]{
        sectionTitle,
        sectionSubtitle,
        badgeText,
        tiers[]{
          name,
          price,
          description,
          recommended,
          features[]{
            name,
            included,
            note
          },
          primaryButton {
            text,
            href
          },
          secondaryButton {
            text,
            href
          },
          buttonText,
          buttonClass
        },
        guarantee {
          title,
          description
        }
      }`
    ).then(setData)
  }, [])

  if (!data || !data.tiers) {
    return (
      <section className="py-20 text-center text-white bg-gray-900">
        <p>Loading pricing...</p>
      </section>
    )
  }

  return (
    <section id="pricing" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {data.badgeText && (
          <p className="mb-2 text-sm uppercase tracking-widest text-indigo-400">
            {data.badgeText}
          </p>
        )}
        <h2 className="text-4xl font-bold mb-4">{data.sectionTitle}</h2>
        <p className="mb-12 text-gray-400">{data.sectionSubtitle}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {data.tiers.map((tier, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6 transition-transform hover:scale-105 ${
                tier.recommended ? 'bg-indigo-500 text-white shadow-lg' : 'bg-gray-800'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold mb-2">{tier.price}</p>
              <p className="mb-4 text-sm text-gray-300">{tier.description}</p>

              <ul className="mb-6 text-left space-y-2">
                {tier.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2 ${
                      feature.included ? 'text-white' : 'text-gray-500 line-through'
                    }`}
                  >
                    <span>•</span>
                    <span>{feature.name}</span>
                    {feature.note && (
                      <span className="text-xs text-gray-400 ml-1">({feature.note})</span>
                    )}
                  </li>
                ))}
              </ul>

              {tier.recommended && tier.primaryButton ? (
                <a
                  href={tier.primaryButton.href}
                  className={`inline-block px-6 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 ${
                    tier.buttonClass || ''
                  }`}
                >
                  {tier.primaryButton.text}
                </a>
              ) : tier.secondaryButton ? (
                <a
                  href={tier.secondaryButton.href}
                  className={`inline-block px-6 py-2 bg-gray-700 text-white font-bold rounded hover:bg-gray-600 ${
                    tier.buttonClass || ''
                  }`}
                >
                  {tier.secondaryButton.text}
                </a>
              ) : (
                <button
                  className={`px-6 py-2 bg-gray-600 text-white rounded ${tier.buttonClass || ''}`}
                >
                  {tier.buttonText || 'Learn More'}
                </button>
              )}
            </div>
          ))}
        </div>

        {data.guarantee && (
          <div className="mt-16 text-center max-w-xl mx-auto">
            <h4 className="text-lg font-semibold mb-2">{data.guarantee.title}</h4>
            <p className="text-gray-400">{data.guarantee.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}
