import { type SchemaTypeDefinition } from 'sanity'
// import herosection from './herosection'
// import pricingSection from './pricingSection'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [herosection , pricingSection],
// }


// 

import heroSection from './herosection';
import pricingSection from './pricingSection';
import navbar from './navbar';
import framework from './framework';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
  heroSection,
  pricingSection,
  navbar,
  framework

  ],
}