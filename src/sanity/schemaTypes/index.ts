import { type SchemaTypeDefinition } from 'sanity'
import herosection from './herosection'
import pricingSection from './pricingSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [herosection , pricingSection],
}
