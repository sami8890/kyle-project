import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'resultsSection',
  title: 'Results Section',
  type: 'document',
  description: 'Case studies and success metrics',
  fields: [
    defineField({
      name: 'badge',
      title: 'Top Badge Text',
      type: 'string',
      initialValue: 'Success Stories',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      initialValue: 'Results That Speak For Themselves',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      initialValue: 'Speak',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Real-world examples of growth and impact for our clients',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'metrics',
              title: 'Metrics',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'icon',
                      title: 'Icon',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Trending Up', value: 'TrendingUp' },
                          { title: 'Users', value: 'Users' },
                          { title: 'Dollar Sign', value: 'DollarSign' },
                          { title: 'Award', value: 'Award' },
                          { title: 'Bar Chart', value: 'BarChart' },
                          { title: 'Search', value: 'Search' }
                        ]
                      },
                      validation: Rule => Rule.required()
                    }),
                    defineField({
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }),
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: Rule => Rule.required()
                    })
                  ]
                })
              ],
              validation: Rule => Rule.length(3)
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            })
          ]
        })
      ],
      validation: Rule => Rule.min(2).max(5)
    })
  ],
  preview: {
    select: {
      title: 'heading',
      caseCount: 'caseStudies.length'
    },
    prepare({ title, caseCount }) {
      return {
        title: 'Results Section',
        subtitle: `${title} (${caseCount} case studies)`
      }
    }
  }
})