import { createClient, SanityClient } from '@sanity/client'
import type { ListenOptions } from '@sanity/client'

// ========== TYPES ==========
export interface HeroHeadline {
  part1: string
  highlighted: string
}

export interface HeroSubheadline {
  text: string
  highlighted1?: string
  highlighted2?: string
}

export interface HeroFeature {
  text: string
  icon: string
}

export interface CTAButton {
  text: string
  link: string
}

export interface DashboardMetric {
  label: string
  value: string
  change: string
  description: string
}

export interface HeroDashboard {
  title: string
  subtitle: string
  metrics: DashboardMetric[]
  floatingBadge?: string
}

export interface HeroSEO {
  metaTitle?: string
  metaDescription?: string
}

export interface HeroData {
  badge: string
  headline: HeroHeadline
  subheadline: HeroSubheadline
  features: HeroFeature[]
  ctaButtons: {
    primary: CTAButton
    secondary: CTAButton
  }
  dashboard: HeroDashboard
  seo?: HeroSEO
}

export interface PricingFeature {
  name: string
  included: boolean
  note?: string
}

export interface PricingButton {
  text: string
  href: string
}

export interface PricingTier {
  name: string
  price: string
  description?: string
  recommended: boolean
  features: PricingFeature[]
  primaryButton: PricingButton
}

export interface PricingGuarantee {
  title: string
  description: string
}

export interface PricingSectionData {
  sectionTitle: string
  sectionSubtitle: string
  badgeText?: string
  tiers: PricingTier[]
  guarantee?: PricingGuarantee
}

export interface FrameworkStep {
  icon: string
  title: string
}

export interface FrameworkFeature {
  icon: string
  title: string
  description: string
  points: string[]
}

export interface FrameworkHeader {
  badge: string
  mainHeading: string
  highlightedText: string
  subheading: string
}

export interface FrameworkSectionData {
  header: FrameworkHeader
  steps: FrameworkStep[]
  features: FrameworkFeature[]
}

export interface CTASectionData {
  badge: string
  heading: string
  highlightedText: string
  description: string
  benefitsTitle: string
  benefits: string[]
  buttonText: string
  calendarLink: string
  popupTitle: string
  popupDescription: string
}

export interface CaseStudyMetric {
  icon: string
  value: string
  label: string
}
export interface CaseStudy {
  category: string
  title: string
  image: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  metrics: CaseStudyMetric[]
  description: string
}


export interface ResultsSectionData {
  badge: string
  heading: string
  highlightedText: string
  subheading: string
  caseStudies: CaseStudy[]
}



// ========== CLIENT CONFIG ==========
export const sanityClient: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
  // perspective: 'published',
  stega: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
})

// ========== QUERIES ==========
const fetchOptions: ListenOptions = {
  visibility: 'query',
  includeResult: true,
  includePreviousRevision: false
}

export const HERO_SECTION_QUERY = `*[_type == "heroSection"][0]{
  badge,
  headline,
  subheadline,
  features,
  ctaButtons,
  dashboard,
  seo
}`

export const PRICING_QUERY = `*[_type == "pricingSection"][0]{
  sectionTitle,
  sectionSubtitle,
  badgeText,
  tiers,
  guarantee
}`

export const FRAMEWORK_SECTION_QUERY = `*[_type == "frameworkSection"][0]{
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
//  CTA section query
export const CTA_SECTION_QUERY = `*[_type == "ctaSection"][0]{
  badge,
  heading,
  highlightedText,
  description,
  benefitsTitle,
  benefits,
  buttonText,
  calendarLink,
  popupTitle,
  popupDescription
}`







export const RESULTS_SECTION_QUERY = `*[_type == "resultsSection"][0]{
  badge,
  heading,
  highlightedText,
  subheading,
  caseStudies[] {
    category,
    title,
    image,
    metrics[] {
      icon,
      value,
      label
    },
    description
  }
}`

// Add fetch function
export async function getResultsSectionData(): Promise<ResultsSectionData | null> {
  try {
    const data = await sanityClient.fetch<ResultsSectionData>(RESULTS_SECTION_QUERY)
    if (!data) {
      console.warn('No results section data found')
      return null
    }
    return data
  } catch (error) {
    console.error('Error fetching results section data:', error)
    return null
  }
}



// ========== FETCH FUNCTIONS ==========
export async function getHeroData(): Promise<HeroData | null> {
  try {
    const data = await sanityClient.fetch<HeroData>(HERO_SECTION_QUERY)
    if (!data) {
      console.warn('No hero section data found')
      return null
    }
    return data
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return null
  }
}

export async function getPricingData(): Promise<PricingSectionData | null> {
  try {
    const data = await sanityClient.fetch<PricingSectionData>(PRICING_QUERY)
    if (!data) {
      console.warn('No pricing section data found')
      return null
    }
    return data
  } catch (error) {
    console.error('Error fetching pricing data:', error)
    return null
  }
}

export async function getFrameworkSectionData(): Promise<FrameworkSectionData | null> {
  try {
    const data = await sanityClient.fetch<{
      header?: FrameworkHeader
      steps?: FrameworkStep[]
      features?: FrameworkFeature[]
    }>(FRAMEWORK_SECTION_QUERY)

    if (!data) {
      console.warn('No framework section data found')
      return null
    }

    return {
      header: {
        badge: data.header?.badge || 'Our Approach',
        mainHeading: data.header?.mainHeading || 'The DevAuthority™ Framework',
        highlightedText: data.header?.highlightedText || 'DevAuthority™',
        subheading: data.header?.subheading || 'A proven methodology...'
      },
      steps: data.steps?.map(step => ({
        icon: step?.icon || 'Code',
        title: step?.title || 'Untitled Step'
      })) ?? [],
      features: data.features?.map(feature => ({
        icon: feature?.icon || 'Database',
        title: feature?.title || 'Untitled Feature',
        description: feature?.description || 'Description missing',
        points: feature?.points || ['Point 1', 'Point 2']
      })) ?? []
    }
  } catch (error) {
    console.error('Error fetching framework section:', error)
    return null
  }
}


export async function getCTASectionData(): Promise<CTASectionData | null> {
  try {
    const data = await sanityClient.fetch<CTASectionData>(CTA_SECTION_QUERY)
    if (!data) {
      console.warn('No CTA section data found')
      return null
    }
    return data
  } catch (error) {
    console.error('Error fetching CTA section data:', error)
    return null
  }
}


// ========== SUBSCRIPTIONS ==========
export function subscribeToHeroUpdates(callback: (data: HeroData) => void): () => void {
  const subscription = sanityClient
    .listen<HeroData>(HERO_SECTION_QUERY, fetchOptions)
    .subscribe({
      next: (update) => {
        if (update.result) {
          callback(update.result)
        }
      },
      error: (err) => console.error('Hero subscription error:', err)
    })
  return () => subscription.unsubscribe()
}

export function subscribeToFrameworkUpdates(callback: (data: FrameworkSectionData) => void): () => void {
  const subscription = sanityClient
    .listen<FrameworkSectionData>(FRAMEWORK_SECTION_QUERY, fetchOptions)
    .subscribe({
      next: (update) => {
        if (update.result) {
          callback(update.result)
        }
      },
      error: (err) => console.error('Framework subscription error:', err)
    })
  return () => subscription.unsubscribe()
}




