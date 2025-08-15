import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'frameworkSection',
  title: 'Our Approach Section',
  type: 'document',
  description: 'Customize the "Our Approach" section that explains your business framework',
  fields: [
    // Section Header
    defineField({
      name: 'header',
      title: 'Top Section Content',
      type: 'object',
      description: 'Content at the top of the section',
      fields: [
        defineField({
          name: 'badge',
          title: 'Blue Tag Text',
          type: 'string',
          description: 'Text in the blue badge at the top (e.g., "Our Approach")',
          initialValue: 'Our Approach',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'mainHeading',
          title: 'Main Title',
          type: 'string',
          description: 'The big heading for this section',
          initialValue: 'The DevAuthority™ Framework',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'highlightedText',
          title: 'Blue Text in Title',
          type: 'string',
          description: 'The part of the title that appears in blue',
          initialValue: 'DevAuthority™',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'subheading',
          title: 'Description',
          type: 'text',
          description: 'Short text below the main title',
          initialValue: 'A proven methodology to help software agencies attract premium clients and scale predictably',
          validation: (Rule) => Rule.required()
        })
      ],
      validation: (Rule) => Rule.required()
    }),
    
    // Middle Section with Three Steps
    defineField({
      name: 'steps',
      title: 'Middle Three Boxes',
      type: 'array',
      description: 'The three boxes with icons in the middle',
      validation: (Rule) => Rule.length(3).error('Please add exactly 3 items'),
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Choose an icon for this box',
              options: {
                list: [
                  {title: 'Code Icon', value: 'Code'},
                  {title: 'Layers Icon', value: 'Layers'},
                  {title: 'Lightning Icon', value: 'Zap'},
                  {title: 'Database Icon', value: 'Database'},
                  {title: 'Chart Icon', value: 'LineChart'},
                  {title: 'Target Icon', value: 'Target'}
                ],
                layout: 'dropdown'
              },
              initialValue: 'Code',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'title',
              title: 'Box Title',
              type: 'string',
              description: 'Title text for this box',
              initialValue: 'Technical Excellence',
              validation: (Rule) => Rule.required()
            })
          ]
        })
      ],
      initialValue: [
        {icon: 'Code', title: 'Technical Excellence'},
        {icon: 'Layers', title: 'Content Authority'},
        {icon: 'Zap', title: 'Strategic Positioning'}
      ]
    }),
    
    // Bottom Section with Three Features
    defineField({
      name: 'features',
      title: 'Bottom Three Feature Boxes',
      type: 'array',
      description: 'The three feature boxes at the bottom',
      validation: (Rule) => Rule.length(3).error('Please add exactly 3 features'),
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Choose an icon for this feature',
              options: {
                list: [
                  {title: 'Database Icon', value: 'Database'},
                  {title: 'Chart Icon', value: 'LineChart'},
                  {title: 'Target Icon', value: 'Target'},
                  {title: 'Code Icon', value: 'Code'},
                  {title: 'Layers Icon', value: 'Layers'},
                  {title: 'Lightning Icon', value: 'Zap'}
                ],
                layout: 'dropdown'
              },
              initialValue: 'Database',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              description: 'Title for this feature box',
              initialValue: 'Technical SEO & Site Optimization',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              description: 'Short explanation of this feature',
              initialValue: 'We optimize your site structure, speed, and indexing to improve user experience and conversion rates.',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'points',
              title: 'Bullet Points',
              type: 'array',
              description: 'List of key benefits (3-5 items)',
              of: [defineArrayMember({ type: 'string' })],
              validation: (Rule) => Rule.min(3).max(5),
              initialValue: [
                'Site structure optimization',
                'Performance enhancement',
                'Crawlability improvements',
                'User experience refinement'
              ]
            })
          ]
        })
      ],
      initialValue: [
        {
          icon: 'Database',
          title: 'Technical SEO & Site Optimization',
          description: 'We optimize your site structure, speed, and indexing to improve user experience and conversion rates.',
          points: [
            'Site structure optimization',
            'Performance enhancement',
            'Crawlability improvements',
            'User experience refinement'
          ]
        },
        {
          icon: 'LineChart',
          title: 'High-Authority Content',
          description: 'We create technical, well-researched content that positions you as an industry leader.',
          points: [
            'Expert-level technical content',
            'Thought leadership positioning',
            '18+ hours research per article',
            'Conversion-optimized structure'
          ]
        },
        {
          icon: 'Target',
          title: 'Lead Generation',
          description: 'We align SEO with your sales process to bring in high-quality leads that convert.',
          points: [
            'Sales-aligned SEO strategy',
            'Buyer journey mapping',
            'High-intent keyword targeting',
            'Conversion path optimization'
          ]
        }
      ]
    })
  ],
  
  preview: {
    select: {
      title: 'header.mainHeading',
      subtitle: 'header.subheading',
      badge: 'header.badge'
    },
    prepare(selection) {
      const { title, subtitle, badge } = selection
      return {
        title: title || 'Our Approach Section',
        subtitle: `${badge} • ${subtitle?.slice(0, 50)}...`,
        media: () => '📐'
      }
    }
  }
})