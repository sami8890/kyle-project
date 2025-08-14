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
// export interface PricingTier {
//   name: string
//   price: string
//   description?: string
//   recommended: boolean
//   features: {
//     name: string
//     included: boolean
//     note?: string
//   }[]
//   primaryButton: {
//     text: string
//     href: string
//   }
// }

// export interface PricingSectionData {
//   sectionTitle: string
//   sectionSubtitle: string
//   badgeText?: string
//   tiers: PricingTier[]  
//   guarantee?: {
//     title: string
//     description: string
//   }
// }

// // Add to existing interfaces
// export interface FrameworkStep {
//   icon: string;
//   title: string;
// }

// export interface FrameworkPillar {
//   icon: string;
//   title: string;
//   description: string;
//   keyBenefits: string[];
// }

// export interface FrameworkSectionData {
//   sectionHeader: {
//     badgeText: string;
//     title: string;
//     highlightedText: string;
//     subtitle: string;
//   };
//   frameworkSteps: FrameworkStep[];
//   corePillars: FrameworkPillar[];
// }

// // Add new query
// export const FRAMEWORK_SECTION_QUERY = `*[_type == "frameworkSection"][0] {
//   sectionHeader {
//     badgeText,
//     title,
//     highlightedText,
//     subtitle
//   },
//   frameworkSteps[] {
//     icon,
//     title
//   },
//   corePillars[] {
//     icon,
//     title,
//     description,
//     keyBenefits
//   }
// }`;

// export async function getFrameworkSectionData(): Promise<FrameworkSectionData | null> {
//   try {
//     return await sanityClient.fetch(FRAMEWORK_SECTION_QUERY);
//   } catch (error) {
//     console.error('Error fetching framework section data:', error);
//     return null;
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
//           callback(update.result as unknown as HeroData)
//         }
//       },
//       error: (err) => {
//         console.error('Subscription error:', err)
//       }
//     })
//   return () => subscription.unsubscribe()
// }

// // ✅ PRICING SECTION
// export const PRICING_QUERY = `*[_type == "pricingSection"][0]{
//   sectionTitle,
//   sectionSubtitle,
//   badgeText,
//   tiers,
//   guarantee
// }`

// export async function getPricingData(): Promise<PricingSectionData | null> {
//   try {
//     return await sanityClient.fetch(PRICING_QUERY)
//   } catch (error) {
//     console.error('Error fetching pricing data:', error)
//     return null
//   }
// }




// src/sanity/lib/sanity.ts
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

export interface PricingTier {
  name: string
  price: string
  description?: string
  recommended: boolean
  features: {
    name: string
    included: boolean
    note?: string
  }[]
  primaryButton: {
    text: string
    href: string
  }
}

export interface PricingSectionData {
  sectionTitle: string
  sectionSubtitle: string
  badgeText?: string
  tiers: PricingTier[]
  guarantee?: {
    title: string
    description: string
  }
}

// Add to existing interfaces
export interface FrameworkStep {
  icon: string;
  title: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export interface FrameworkSectionData {
  header: {
    badge: string;
    mainHeading: string;
    highlightedText: string;
    subheading: string;
  };
  steps: FrameworkStep[];
  features: Feature[];
}

// ✅ Sanity client configuration
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03',
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
          callback(update.result as unknown as HeroData)
        }
      },
      error: (err) => {
        console.error('Subscription error:', err)
      }
    })
  return () => subscription.unsubscribe()
}

// ✅ PRICING SECTION
export const PRICING_QUERY = `*[_type == "pricingSection"][0]{
  sectionTitle,
  sectionSubtitle,
  badgeText,
  tiers,
  guarantee
}`

export async function getPricingData(): Promise<PricingSectionData | null> {
  try {
    return await sanityClient.fetch(PRICING_QUERY)
  } catch (error) {
    console.error('Error fetching pricing data:', error)
    return null
  }
}

// ✅ FRAMEWORK SECTION 
export const FRAMEWORK_SECTION_QUERY = `*[_type == "frameworkSection"][0] {
  header {
    badge,
    mainHeading,
    highlightedText,
    subheading
  },
  steps[] {
    icon,
    title
  },
  features[] {
    icon,
    title,
    description,
    points
  }
}`

export async function getFrameworkSectionData(): Promise<FrameworkSectionData | null> {
  try {
    return await sanityClient.fetch(FRAMEWORK_SECTION_QUERY)
  } catch (error) {
    console.error('Error fetching framework section data:', error)
    return null
  }
}
