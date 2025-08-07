//src/sanity/schemaTypes/pricingSection.ts
export default {
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Main Heading',
      type: 'string',
      description: 'Big title shown at the top of the pricing section',
      initialValue: 'Pricing & ROI',
    },
    {
      name: 'sectionSubtitle',
      title: 'Subtitle (under heading)',
      type: 'text',
      description: 'Short description shown under the main heading',
      initialValue: 'Affordable premium SEO for software development agencies',
    },
    {
      name: 'badgeText',
      title: 'Small Badge Text',
      type: 'string',
      description: 'Small text shown above the title, like a label',
      initialValue: 'Investment & Returns',
    },
    {
      name: 'tiers',
      title: 'Pricing Plans',
      type: 'array',
      description: 'Add your pricing plans here',
      of: [
        {
          type: 'object',
          title: 'Plan',
          fields: [
            { name: 'name', title: 'Plan Name', type: 'string', description: 'Like Basic, Pro, Premium' },
            { name: 'price', title: 'Price', type: 'string', description: 'Example: $99/month' },
            { name: 'description', title: 'Plan Description', type: 'text', description: 'Short description about the plan' },
            {
              name: 'recommended',
              title: 'Highlight This Plan?',
              type: 'boolean',
              description: 'Enable if this is the best or recommended plan',
              initialValue: false
            },
            {
              name: 'features',
              title: 'What’s Included?',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Feature',
                  fields: [
                    { name: 'name', title: 'Feature Name', type: 'string', description: 'e.g. 24/7 Support' },
                    { name: 'included', title: 'Is this included?', type: 'boolean', initialValue: false },
                    { name: 'note', title: 'Extra Notes (Optional)', type: 'string' }
                  ]
                }
              ]
            },
            {
              name: 'primaryButton',
              title: 'Main Button (e.g. Buy Now)',
              type: 'object',
              fields: [
                { name: 'text', title: 'Button Text', type: 'string', description: 'e.g. Buy Now' },
                { name: 'href', title: 'Button Link', type: 'string', description: 'e.g. /checkout' }
              ]
            },
            {
              name: 'secondaryButton',
              title: 'Secondary Button (Optional)',
              type: 'object',
              fields: [
                { name: 'text', title: 'Button Text', type: 'string' },
                { name: 'href', title: 'Button Link', type: 'string' }
              ]
            },
            {
              name: 'buttonText',
              title: 'Static Button (Non-highlighted plans)',
              type: 'string',
              description: 'This button will be shown if plan is not recommended',
            },
            {
              name: 'buttonClass',
              title: 'Button Style (for developers)',
              type: 'string',
              description: 'Optional: Custom style class name (can leave empty)',
            },
          ]
        }
      ]
    },
    {
      name: 'guarantee',
      title: 'Guarantee Box',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Guarantee Title',
          type: 'string',
          description: 'e.g. 30% Growth Guarantee',
          initialValue: '30% Growth Guarantee',
        },
        {
          name: 'description',
          title: 'Guarantee Description',
          type: 'text',
          description: 'Explain the guarantee or offer here',
        },
      ]
    }
  ]
}
