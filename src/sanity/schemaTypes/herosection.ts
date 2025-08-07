// src/sanity/schemaTypes/herosection.ts

export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Enter a short phrase that appears above the main headline (e.g., "Premium SEO")',
      validation: (Rule: any) => Rule.required(),
      initialValue: 'Premium SEO for Software Agencies',  // Default value
    },
    {
      name: 'headline',
      title: 'Main Headline',
      type: 'object',
      description: 'Enter the main headline text for your Hero Section',
      fields: [
        {
          name: 'part1',
          title: 'First Part of the Headline',
          type: 'string',
          description: 'First part of the headline, without any highlights',
          validation: (Rule: any) => Rule.required(),
          initialValue: 'Attract Premium Clients.',  // Default value
        },
        {
          name: 'highlighted',
          title: 'Highlighted Text',
          type: 'string',
          description: 'Text that should be highlighted in blue (e.g., "Scale Predictably")',
          validation: (Rule: any) => Rule.required(),
          initialValue: 'Scale Predictably',  // Default value
        }
      ]
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Main Text',
          type: 'text',
          description: 'Enter the full subheadline text here',
          validation: (Rule: any) => Rule.required(),
          initialValue: 'Growing a software development agency isn\'t just about getting more leads—it\'s about becoming the obvious choice for high-value clients.',
        },
        {
          name: 'highlighted1',
          title: 'First Highlighted Phrase',
          type: 'string',
          description: 'Phrase to highlight in blue (must exist in main text)',
          initialValue: 'getting more leads',
        },
        {
          name: 'highlighted2',
          title: 'Second Highlighted Phrase',
          type: 'string',
          description: 'Second phrase to highlight in blue (must exist in main text)',
          initialValue: 'obvious choice',
        }
      ]
    },
    {
      name: 'features',
      title: 'Feature List',
      type: 'array',
      description: 'List of features with icons (Maximum 5)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Feature Text',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Zap (Lightning)', value: 'zap' },
                  { title: 'Star', value: 'star' },
                  { title: 'Target', value: 'target' },
                  { title: 'Line Chart', value: 'lineChart' },
                  { title: 'Arrow Up Right', value: 'arrowUpRight' },
                  { title: 'Chevron Right', value: 'chevronRight' }
                ]
              },
              validation: (Rule: any) => Rule.required(),
            }
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'icon'
            },
            prepare({ title, subtitle }: any) {
              return {
                title,
                subtitle: `Icon: ${subtitle}`,
              }
            }
          }
        }
      ],
      validation: (Rule: any) => Rule.min(1).max(5),
      initialValue: [
        { text: 'Technical SEO & Site Optimization', icon: 'zap' },
        { text: 'Research-Backed, High-Authority Content', icon: 'star' },
        { text: 'Industry Positioning & Lead Generation', icon: 'target' }
      ]
    },
    {
      name: 'ctaButtons',
      title: 'Call-to-Action Buttons',
      type: 'object',
      fields: [
        {
          name: 'primary',
          title: 'Primary Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
              initialValue: 'Get Your Free Growth Blueprint',
            },
            {
              name: 'link',
              title: 'Link/Anchor (e.g., #calendar)',
              type: 'string',
              description: 'Use # for anchor links or full URLs',
              validation: (Rule: any) => Rule.required(),
              initialValue: '#calendar',
            }
          ]
        },
        {
          name: 'secondary',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
              initialValue: 'Learn Our Approach',
            },
            {
              name: 'link',
              title: 'Link/Anchor (e.g., #framework)',
              type: 'string',
              description: 'Use # for anchor links or full URLs',
              validation: (Rule: any) => Rule.required(),
              initialValue: '#framework',
            }
          ]
        }
      ]
    },
    {
      name: 'dashboard',
      title: 'Dashboard Configuration',
      type: 'object',
      description: 'Settings for the dashboard visualization',
      fields: [
        {
          name: 'title',
          title: 'Dashboard Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
          initialValue: 'SEO Dashboard',
        },
        {
          name: 'subtitle',
          title: 'Dashboard Subtitle',
          type: 'string',
          initialValue: 'Real-time metrics',
        },
        {
          name: 'metrics',
          title: 'Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Metric Label',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'value',
                  title: 'Metric Value',
                  type: 'string',
                  description: 'e.g., 3.4x, 97%, $50K',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'change',
                  title: 'Percentage Change',
                  type: 'string',
                  description: 'e.g., +34%, -5%',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                }
              ]
            }
          ],
          validation: (Rule: any) => Rule.min(1).max(4),
          initialValue: [
            {
              label: 'Organic Traffic',
              value: '3.4x',
              change: '+34%',
              description: 'vs. previous period',
            },
            {
              label: 'Client Retention',
              value: '97%',
              change: '+12%',
              description: 'industry leading',
            }
          ]
        },
        {
          name: 'floatingBadge',
          title: 'Floating Badge Text',
          type: 'string',
          description: 'Text for the floating badge on the dashboard',
          initialValue: '30% Growth Guarantee',
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      description: 'Optional SEO settings for the hero section',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule: any) => Rule.max(60),
          initialValue: 'Hero Section Meta Title',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule: any) => Rule.max(160),
          initialValue: 'Description for SEO purposes.',
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'headline.part1',
      subtitle: 'badge',
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Hero Section',
        subtitle: subtitle || 'No badge set',
      };
    }
  }
}
