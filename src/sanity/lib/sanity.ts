// //src/sanity/lib/sanity.ts
// import { createClient } from '@sanity/client'

// // ✅ Types for Sanity data

// export interface HeroData {
//   badge: string
//   headline: {
//     part1: string
//     highlighted: string
//   }
//   subheadline: {
//     text: string
//     highlighted1?: string
//     highlighted2?: string
//   }
//   features: {
//     text: string
//     icon: string
//   }[]
//   ctaButtons: {
//     primary: {
//       text: string
//       link: string
//     }
//     secondary: {
//       text: string
//       link: string
//     }
//   }
//   dashboard: {
//     title: string
//     subtitle: string
//     metrics: {
//       label: string
//       value: string
//       change: string
//       description: string
//     }[]
//     floatingBadge?: string
//   }
//   seo?: {
//     metaTitle?: string
//     metaDescription?: string
//   }
// }

// export interface PricingSectionData {
//   sectionTitle: string
//   sectionSubtitle: string
//   badgeText: string
//   tiers: {
//     name: string
//     price: string
//     description: string
//     recommended: boolean
//     features: {
//       name: string
//       included: boolean
//       note?: string
//     }[]
//     primaryButton?: {
//       text: string
//       href: string
//     }
//     secondaryButton?: {
//       text: string
//       href: string
//     }
//     buttonText?: string
//     buttonClass?: string
//   }[]
//   guarantee: {
//     title: string
//     description: string
//   }
// }

// // ✅ Sanity client configuration

// export const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   useCdn: process.env.NODE_ENV === 'production',
//   apiVersion: '2023-05-03',
//   token: process.env.SANITY_API_TOKEN,
// })

// // ✅ HERO SECTION

// export const HERO_SECTION_QUERY = `*[_type == "heroSection"][0]{
//   badge,
//   headline,
//   subheadline,
//   features,
//   ctaButtons,
//   dashboard,
//   seo
// }`

// export async function getHeroData(): Promise<HeroData | null> {
//   try {
//     const data = await sanityClient.fetch(HERO_SECTION_QUERY)
//     return data
//   } catch (error) {
//     console.error('Error fetching hero data from Sanity:', error)
//     return null
//   }
// }

// export function subscribeToHeroData(callback: (data: HeroData) => void): () => void {
//   const subscription = sanityClient
//     .listen(HERO_SECTION_QUERY)
//     .subscribe({
//       next: (update) => {
//         if (update.result) {
//           callback(update.result)
//         }
//       },
//       error: (err) => {
//         console.error('Subscription error:', err)
//       }
//     })

//   return () => subscription.unsubscribe()
// }

// // ✅ PRICING SECTION

// export const PRICING_SECTION_QUERY = `*[_type == "pricingSection"][0]`

// export async function getPricingData(): Promise<PricingSectionData | null> {
//   try {
//     const data = await sanityClient.fetch(PRICING_SECTION_QUERY)
//     return data
//   } catch (error) {
//     console.error('Error fetching pricing data from Sanity:', error)
//     return null
//   }
// }

//src/sanity/lib/sanity.ts
import { createClient } from '@sanity/client'

// ✅ Types for Sanity data
export interface HeroData {
  badge: string
  headline: {
    part1: string
    highlighted: string
  }
  subheadline: {
    text: string
    highlighted1?: string
    highlighted2?: string
  }
  features: {
    text: string
    icon: string
  }[]
  ctaButtons: {
    primary: {
      text: string
      link: string
    }
    secondary: {
      text: string
      link: string
    }
  }
  dashboard: {
    title: string
    subtitle: string
    metrics: {
      label: string
      value: string
      change: string
      description: string
    }[]
    floatingBadge?: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface PricingSectionData {
  sectionTitle: string
  sectionSubtitle: string
  badgeText: string
  tiers: {
    name: string
    price: string
    description: string
    recommended: boolean
    features: {
      name: string
      included: boolean
      note?: string
    }[]
    primaryButton?: {
      text: string
      href: string
    }
    secondaryButton?: {
      text: string
      href: string
    }
    buttonText?: string
    buttonClass?: string
  }[]
  guarantee: {
    title: string
    description: string
  }
}

// ✅ Sanity client configuration
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03',
  // The token should only be used on the server-side for security.
  // It will be undefined on the client, which is fine if you're only fetching public data.
  token: process.env.SANITY_API_TOKEN,
})

// ✅ HERO SECTION
export const HERO_SECTION_QUERY = `*[_type == "heroSection"][0]{
  badge,
  headline,
  subheadline,
  features,
  ctaButtons,
  dashboard,
  seo
}`

export async function getHeroData(): Promise<HeroData | null> {
  try {
    const data = await sanityClient.fetch(HERO_SECTION_QUERY)
    return data
  } catch (error) {
    console.error('Error fetching hero data from Sanity:', error)
    return null
  }
}

export function subscribeToHeroData(callback: (data: HeroData) => void): () => void {
  const subscription = sanityClient
    .listen(HERO_SECTION_QUERY)
    .subscribe({
      next: (update) => {
        if (update.result) {
          callback(update.result)
        }
      },
      error: (err) => {
        console.error('Subscription error:', err)
      }
    })
  return () => subscription.unsubscribe()
}

// ✅ PRICING SECTION
export const PRICING_SECTION_QUERY = `*[_type == "pricingSection"][0]{
  badgeText,
  sectionTitle,
  sectionSubtitle,
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
    primaryButton{
      text,
      href
    },
    secondaryButton{
      text,
      href
    },
    buttonText,
    buttonClass
  },
  guarantee{
    title,
    description
  }
}`

export async function getPricingData(): Promise<PricingSectionData | null> {
  try {
    const data = await sanityClient.fetch(PRICING_SECTION_QUERY)
    return data
  } catch (error) {
    console.error('Error fetching pricing data from Sanity:', error)
    return null
  }
}
