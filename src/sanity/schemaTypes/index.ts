// schemas/index.ts
import { SchemaTypeDefinition } from 'sanity'
import pricingSection from './pricingSection'
import navbar from './navbar'
import frameworkSection from './framework'
import herosection from './herosection'
import ctasection from './ctasection'
import resultsSection from './resultsSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    herosection,
    pricingSection,
    navbar,
    frameworkSection,
    ctasection, 
    resultsSection
  ],
}